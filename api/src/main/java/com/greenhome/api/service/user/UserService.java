package com.greenhome.api.service.user;

import com.greenhome.api.model.user.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {

    void save(User user);

    User findByEmail(String email);
}
