package com.greenhome.api.service.auth;

import com.greenhome.api.dto.authentication.AuthenticationRequest;
import com.greenhome.api.dto.authentication.RegisterRequest;
import com.greenhome.api.dto.authentication.TokenValidationResponse;
import com.greenhome.api.dto.user.UserResponseDTO;
import com.greenhome.api.model.user.User;
import com.greenhome.api.enums.RoleEnum;
import com.greenhome.api.dto.authentication.AuthenticationResponse;
import com.greenhome.api.service.jwt.JwtService;
import com.greenhome.api.service.user.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {
    private final UserService userService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    
    private final ModelMapper modelMapper;
    public AuthServiceImpl(
            UserService userService,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            JwtService jwtService,
            UserDetailsService userDetailsService, ModelMapper modelMapper) {
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.userDetailsService = userDetailsService;
        this.modelMapper = modelMapper;
    }

    @Override
    public AuthenticationResponse register(RegisterRequest registerRequest) {
        User user = new User();
        user.setName(registerRequest.name());
        user.setEmail(registerRequest.email());
        user.setPassword(passwordEncoder.encode(registerRequest.password()));
        user.setRole(RoleEnum.USER);
        userService.save(user);
        AuthenticationResponse authenticationResponse = new AuthenticationResponse();
        authenticationResponse.setToken(jwtService.generateToken(user));
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
        authenticationResponse.setUser(modelMapper.map(user, UserResponseDTO.class));
        authenticationResponse.setToken(jwtService.generateToken(user));
        return authenticationResponse;
    }

    @Override
    public TokenValidationResponse validate(String token) {String userEmail = jwtService.extractUserEmail(token);
        User user = userService.findByEmail(userEmail);
        boolean tokenValid = jwtService.isTokenValid(token, user);
        if(!tokenValid)
            return new TokenValidationResponse(false, null);
        return new TokenValidationResponse(true, user);
    }
}