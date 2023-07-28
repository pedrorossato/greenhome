package com.greenhome.api.controller.user;
import com.greenhome.api.dto.user.PostUserRequestDTO;
import com.greenhome.api.model.user.User;
import com.greenhome.api.service.user.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("api/v1/users")
public class UsersController {
    
    private final UserService userService;
    private final ModelMapper modelMapper;
    
    public UsersController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @PostMapping
    public void postUser(PostUserRequestDTO postUserRequestDTO) {
        User user = modelMapper.map(postUserRequestDTO, User.class);
        userService.save(user);
    }
}
