package com.greenhome.api.service.email;

public interface EmailService {

    void sendEmail(String subject, String content);

    StringBuilder buildEmailContent(String name, String email, String message);
}
