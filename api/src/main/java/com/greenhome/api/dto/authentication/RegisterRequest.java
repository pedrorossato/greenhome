package com.greenhome.api.dto.authentication;

import org.springframework.web.multipart.MultipartFile;

public record RegisterRequest (String name, String email, String password, MultipartFile photo) {
}
