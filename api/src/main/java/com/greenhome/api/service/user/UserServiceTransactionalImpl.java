package com.greenhome.api.service.user;

import com.greenhome.api.exception.NotFoundException;
import com.greenhome.api.model.user.User;
import com.greenhome.api.repository.user.UserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional
@Service
public class UserServiceTransactionalImpl implements UserService {
    
    private final UserRepository userRepository;

    public UserServiceTransactionalImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElseThrow(() -> new NotFoundException("Usuário não encontrado."));
    }

    @Override
    public UserDetails loadUserByUsername(String username)  {
        return userRepository.findByEmail(username).orElseThrow(() -> new NotFoundException("Usuário não encontrado."));
    }
}
