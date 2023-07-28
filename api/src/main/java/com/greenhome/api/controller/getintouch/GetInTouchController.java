package com.greenhome.api.controller.getintouch;

import com.greenhome.api.dto.getintouch.PostGetInTouchRequestDTO;
import com.greenhome.api.model.getintouch.GetInTouch;
import com.greenhome.api.service.email.EmailService;
import com.greenhome.api.service.getintouch.GetInTouchService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/get-in-touch")
public class GetInTouchController {
    private final GetInTouchService getInTouchService;
    private final EmailService emailService;
    private final ModelMapper modelMapper;
    private static final String subject = "Novo contato realizado pelo site.";
    
    public GetInTouchController(GetInTouchService getInTouchService, EmailService emailService, ModelMapper modelMapper) {
        this.getInTouchService = getInTouchService;
        this.emailService = emailService;
        this.modelMapper = modelMapper;
    }
    
    @PostMapping
    public void getInTouch(@RequestBody PostGetInTouchRequestDTO postGetInTouchRequestDTO) {
        GetInTouch getInTouch = modelMapper.map(postGetInTouchRequestDTO, GetInTouch.class);
        getInTouchService.save(getInTouch);
        StringBuilder content = buildEmailContent(postGetInTouchRequestDTO);
        emailService.sendEmail(subject, content.toString());
    }

    private static StringBuilder buildEmailContent(PostGetInTouchRequestDTO postGetInTouchRequestDTO) {
        StringBuilder content = new StringBuilder();
        content.append("Nome: ").append(postGetInTouchRequestDTO.getName()).append("\n");
        content.append("Email: ").append(postGetInTouchRequestDTO.getEmail()).append("\n");
        content.append("Mensagem: ").append(postGetInTouchRequestDTO.getMessage()).append("\n");
        return content;
    }
}
