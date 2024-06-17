package com.greenhome.api.dto.authentication;

import com.greenhome.api.dto.user.UserDTO;
import lombok.Data;

@Data
public class AuthenticationResponse {
    private UserDTO user;
}
