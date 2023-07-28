package com.greenhome.api.exception;

import lombok.Builder;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Builder
@Data
public class ApiException {
    private final HttpStatus httpStatus;
    private final String message;
}
