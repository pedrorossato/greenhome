package com.greenhome.api.config;
import com.greenhome.api.enums.BaseEnum;
import org.modelmapper.*;
import org.modelmapper.record.RecordModule;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMappingConfiguration {

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.registerModule(new RecordModule());
        modelMapper.addConverter(new BaseEnumToStringConverter());
        return modelMapper;
    }

    public static class BaseEnumToStringConverter extends AbstractConverter<BaseEnum, String> {
        @Override
        protected String convert(BaseEnum source) {
            return source.getDescription();
        }
    }
}
