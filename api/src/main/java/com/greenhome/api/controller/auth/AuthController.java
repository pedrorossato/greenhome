package com.greenhome.api.controller.auth;

import com.greenhome.api.dto.authentication.*;
import com.greenhome.api.service.auth.AuthService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1/auth")
public class AuthController {
    
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    
    @PostMapping(value = "/register")
    public AuthenticationResponse register(
            @ModelAttribute RegisterRequest registerRequest
    ) {
        return authService.register(registerRequest);
    }

    @PostMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestBody AuthenticationRequest authenticationRequest
    ) {
        return authService.authenticate(authenticationRequest);
    }
}
