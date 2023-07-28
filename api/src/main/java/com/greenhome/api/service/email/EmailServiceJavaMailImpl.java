package com.greenhome.api.service.email;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class EmailServiceJavaMailImpl implements EmailService {
    private final JavaMailSender emailSender;
    private final String username;
    public EmailServiceJavaMailImpl(
            JavaMailSender emailSender, 
            @Value("${spring.mail.username}") String username
    ) {
        this.emailSender = emailSender;
        this.username = username;
    }
    
    @Override
    public void sendEmail(String subject, String content) {
        SimpleMailMessage message = new SimpleMailMessage(); 
        message.setTo(username); 
        message.setSubject(subject); 
        message.setText(content);
        emailSender.send(message);
    }
}
