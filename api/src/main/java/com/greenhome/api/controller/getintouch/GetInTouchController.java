package com.greenhome.api.controller.getintouch;

import com.greenhome.api.dto.getintouch.PostGetInTouchRequest;
import com.greenhome.api.model.getintouch.GetInTouch;
import com.greenhome.api.service.email.EmailService;
import com.greenhome.api.service.getintouch.GetInTouchService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/get-in-touch")
public class GetInTouchController {
    private final GetInTouchService getInTouchService;
    private final EmailService emailService;
    private static final String EMAIL_SUBJECT = "Novo contato realizado pelo site.";
    
    public GetInTouchController(GetInTouchService getInTouchService, EmailService emailService) {
        this.getInTouchService = getInTouchService;
        this.emailService = emailService;
    }
    
    @PostMapping
    public void getInTouch(@RequestBody PostGetInTouchRequest postGetInTouchRequest) {
        getInTouchService.save(postGetInTouchRequest);
        StringBuilder content = emailService.buildEmailContent(
                postGetInTouchRequest.name(), 
                postGetInTouchRequest.email(), 
                postGetInTouchRequest.message()
        );
        emailService.sendEmail(EMAIL_SUBJECT, content.toString());
    }
}
