package com.greenhome.api.service.getintouch;

import com.greenhome.api.dto.getintouch.PostGetInTouchRequest;
import com.greenhome.api.exception.BadRequestException;
import com.greenhome.api.model.getintouch.GetInTouch;
import com.greenhome.api.repository.getintouch.GetInTouchRepository;
import com.greenhome.api.util.RegexUtils;
import org.apache.commons.lang3.StringUtils;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class GetInTouchServiceTransactionalImpl implements GetInTouchService {
    
    private final GetInTouchRepository getInTouchRepository;
    private final ModelMapper modelMapper;

    public GetInTouchServiceTransactionalImpl(GetInTouchRepository getInTouchRepository, ModelMapper modelMapper) {
        this.getInTouchRepository = getInTouchRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public void save(PostGetInTouchRequest postGetInTouchRequest) {
        GetInTouch getInTouch = modelMapper.map(postGetInTouchRequest, GetInTouch.class);
        
        if(StringUtils.isBlank(getInTouch.getEmail()) || !RegexUtils.emailIsValid(getInTouch.getEmail()))
            throw new BadRequestException("Email não é válido.");
        if (StringUtils.isBlank(getInTouch.getName()))
            throw new BadRequestException("Nome não preenchido.");
        if (StringUtils.isBlank(getInTouch.getMessage()))
            throw new BadRequestException("Mensagem não preenchida.");
        if(getInTouch.getMessage().length() > 500)
            throw new BadRequestException("Mensagem não pode ter mais de 500 caracteres.");
        
        getInTouchRepository.save(getInTouch);
    }
}
