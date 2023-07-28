package com.greenhome.api.config;
import com.greenhome.api.dto.getintouch.PostGetInTouchRequestDTO;
import com.greenhome.api.model.getintouch.GetInTouch;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMappingConfiguration {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        
        return modelMapper;
    }
    
}
