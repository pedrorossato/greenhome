package com.greenhome.api.dto.user;

import lombok.Data;

@Data
public class UserDTO {
    public long id;
    public String name;
    public String email;
    public String[] roles;
    private String token;
    public String image;
}
