package com.greenhome.api.controller.post;

import com.greenhome.api.dto.post.PostDTO;
import com.greenhome.api.dto.post.PostPostRequest;
import com.greenhome.api.service.post.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/post")
public class PostController {
    private final PostService postService;
    
    public PostController(PostService postService) {
        this.postService = postService;
    }
    
    @GetMapping
    public List<PostDTO> findAllOrderedByCreatedDesc() {
        return postService.findAllOrderedByCreatedDesc();
    }
    
    @PostMapping
    public void save(@RequestBody PostPostRequest postRequest) {
        postService.save(postRequest);
    }
    
    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {
        postService.delete(id);
    }
}
