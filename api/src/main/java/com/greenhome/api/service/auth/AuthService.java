package com.greenhome.api.service.auth;

import com.greenhome.api.dto.authentication.AuthenticationRequest;
import com.greenhome.api.dto.authentication.AuthenticationResponse;
import com.greenhome.api.dto.authentication.RegisterRequest;
import com.greenhome.api.dto.authentication.TokenValidationResponse;

public interface AuthService {
    AuthenticationResponse register(RegisterRequest registerRequest);

    AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest);

    TokenValidationResponse validate(String token);
}
