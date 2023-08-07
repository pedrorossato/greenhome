package com.greenhome.api.dto.authentication;

import com.greenhome.api.dto.user.UserResponseDTO;
import com.greenhome.api.model.user.User;

public class TokenValidationResponse {
    public boolean isValid;
    public UserResponseDTO user;

    public TokenValidationResponse(boolean isValid, User user) {
        this.isValid = isValid;
        if(user == null) return;
        this.user = new UserResponseDTO();
        this.user.id = user.getId();
        this.user.name = user.getName();
        this.user.email = user.getEmail();
    }
}
