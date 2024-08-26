package com.greenhome.api.service.post;

import com.greenhome.api.dto.post.PostDTO;
import com.greenhome.api.dto.post.SavePostRequest;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface PostService {
    List<PostDTO> findAll();
    
    List<PostDTO> findPaged(Pageable pageable);

    PostDTO findById(long id);
    
    void create(SavePostRequest postRequest);

    void update(long id, SavePostRequest postRequest);
    
    void delete(long id);
}
