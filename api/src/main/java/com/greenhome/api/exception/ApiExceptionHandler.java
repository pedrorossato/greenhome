package com.greenhome.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.logging.Level;
import java.util.logging.Logger;

@ControllerAdvice
public class ApiExceptionHandler {
    
    private final Logger logger = Logger.getLogger(ApiExceptionHandler.class.getName());
    
    @ExceptionHandler(BadRequestException.class)
    public ResponseEntity<ApiException> handleBadRequestException(BadRequestException e) {
        ApiException message = ApiException.builder()
                .httpStatus(HttpStatus.BAD_REQUEST)
                .message(e.getMessage())
                .build();
        return new ResponseEntity<>(message, message.getHttpStatus());
    }
    
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ApiException> handleNotFoundException(NotFoundException e) {
        ApiException message = ApiException.builder()
                .httpStatus(HttpStatus.NOT_FOUND)
                .message(e.getMessage())
                .build();
        return new ResponseEntity<>(message, message.getHttpStatus());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiException> handleNotFoundException(Exception e) {
        ApiException message = ApiException.builder()
                .httpStatus(HttpStatus.INTERNAL_SERVER_ERROR)
                .message(null)
                .build();
        logger.log(Level.SEVERE, e.getMessage(), e);
        return new ResponseEntity<>(message, message.getHttpStatus());
    }
}
