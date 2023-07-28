package com.greenhome.api.dto.getintouch;

import lombok.Data;

@Data
public class PostGetInTouchRequestDTO {
    private String name;
    private String email;
    private String message;
}
