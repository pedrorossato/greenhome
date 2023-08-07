package com.greenhome.api.dto.authentication;

import com.greenhome.api.dto.user.UserResponseDTO;
import lombok.Data;

@Data
public class AuthenticationResponse {
    private UserResponseDTO user;
    private String token;
}
