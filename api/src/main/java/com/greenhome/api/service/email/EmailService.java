package com.greenhome.api.service.email;

import com.greenhome.api.dto.getintouch.PostGetInTouchRequestDTO;

public interface EmailService {

    void sendEmail(String subject, String content);
}
