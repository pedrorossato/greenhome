package com.greenhome.api.service.auth;

import com.amazonaws.services.s3.AmazonS3;
import com.greenhome.api.dto.authentication.AuthenticationRequest;
import com.greenhome.api.dto.authentication.RegisterRequest;
import com.greenhome.api.dto.user.UserDTO;
import com.greenhome.api.model.user.User;
import com.greenhome.api.enums.RoleEnum;
import com.greenhome.api.dto.authentication.AuthenticationResponse;
import com.greenhome.api.service.jwt.JwtService;
import com.greenhome.api.service.user.UserService;
import com.greenhome.api.util.FileUtils;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@Service
public class AuthServiceImpl implements AuthService {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final AmazonS3 amazonS3;
    private final ModelMapper modelMapper;
    private final Logger log = LoggerFactory.getLogger(AuthServiceImpl.class);
    
    public AuthServiceImpl(
            UserService userService,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            JwtService jwtService, 
            AmazonS3 amazonS3,
            ModelMapper modelMapper
    ) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.amazonS3 = amazonS3;
        this.modelMapper = modelMapper;
    }

    @Override
    public AuthenticationResponse register(RegisterRequest registerRequest) {
        User user = new User();
        user.setName(registerRequest.name());
        user.setEmail(registerRequest.email());
        user.setPassword(passwordEncoder.encode(registerRequest.password()));
        user.setRoleEnum(RoleEnum.USER);
        user.setPhotoUUID(UUID.randomUUID());
        try {
            File file = FileUtils.convertMultiPartToFile(registerRequest.photo());
            amazonS3.putObject("user-photo-bucket-greenhome", user.getPhotoUUID().toString(), file);
            FileUtils.deleteFile(file);
        } catch (IOException e) {
            log.error("Error uploading photo for user {}", user.getEmail());
        }
        userService.save(user);
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        userDTO.setRoles(user.getAuthorities().stream().map(GrantedAuthority::getAuthority).toArray(String[]::new));
        userDTO.setToken(jwtService.generateToken(user));
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setUser(userDTO);
        return authenticationResponse;
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest) {
        User user = userService.findByEmail(authenticationRequest.email());
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authenticationRequest.email(),
                        authenticationRequest.password()
                )
        );
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        userDTO.setRoles(user.getAuthorities().stream().map(GrantedAuthority::getAuthority).toArray(String[]::new));
        userDTO.setToken(jwtService.generateToken(user));
        authenticationResponse.setUser(userDTO);
        return authenticationResponse;
    }
}