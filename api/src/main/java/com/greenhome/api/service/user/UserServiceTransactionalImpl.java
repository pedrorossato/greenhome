package com.greenhome.api.service.user;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.S3Object;
import com.greenhome.api.exception.NotFoundException;
import com.greenhome.api.model.user.User;
import com.greenhome.api.repository.user.UserRepository;
import com.greenhome.api.util.FileUtils;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class UserServiceTransactionalImpl implements UserService {

    public static final String USER_NOT_FOUND_MESSAGE = "Usuário não encontrado.";
    
    private final UserRepository userRepository;
    
    private final AmazonS3 amazonS3;
    
    private final String userPhotoBucket;

    public UserServiceTransactionalImpl(
            UserRepository userRepository,
            AmazonS3 amazonS3,
            @Qualifier("userPhotoBucket") String userPhotoBucket
    ) {
        this.userRepository = userRepository;
        this.amazonS3 = amazonS3;
        this.userPhotoBucket = userPhotoBucket;
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new NotFoundException(USER_NOT_FOUND_MESSAGE));
    }

    @Override
    public String findPhotoUrlByUserId(long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException(USER_NOT_FOUND_MESSAGE));
        return amazonS3.getUrl(userPhotoBucket, user.getPhotoUUID().toString()).toString();
    }

    @Override
    public UserDetails loadUserByUsername(String username)  {
        return userRepository.findByEmail(username).orElseThrow(() -> new NotFoundException(USER_NOT_FOUND_MESSAGE));
    }
}
