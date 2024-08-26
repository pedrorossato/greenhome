package com.greenhome.api.controller.post;

import com.greenhome.api.dto.post.PostDTO;
import com.greenhome.api.dto.post.SavePostRequest;
import com.greenhome.api.service.post.PostService;
import jakarta.validation.Valid;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/post")
public class PostController {
    private final PostService postService;
    
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @Cacheable(value = "post")
    @GetMapping()
    public List<PostDTO> findAll() {
        return postService.findAll();
    }

    @Cacheable(value = "post")
    @GetMapping("/paged")
    public List<PostDTO> findPaged(Pageable pageable) {
        return postService.findPaged(pageable);
    }

    @Cacheable(value = "post")
    @GetMapping("{id}")
    public PostDTO findById(@PathVariable long id) {
        return postService.findById(id);
    }

    @CacheEvict(value = "post", allEntries = true)
    @PostMapping
    public void create(@ModelAttribute SavePostRequest postRequest) {
        postService.create(postRequest);
    }

    @CachePut(value = "post")
    @PutMapping("{id}")
    public void update(@PathVariable long id, @ModelAttribute @Valid SavePostRequest postRequest) {
        postService.update(id, postRequest);
    }

    @CacheEvict(value = "post", allEntries = true)
    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {
        postService.delete(id);
    }
}
