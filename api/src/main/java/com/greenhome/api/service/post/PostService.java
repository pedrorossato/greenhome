package com.greenhome.api.service.post;

import com.greenhome.api.dto.post.PostDTO;
import com.greenhome.api.dto.post.PostPostRequest;

import java.util.List;

public interface PostService {
    List<PostDTO> findAllOrderedByCreatedDesc();

    void save(PostPostRequest postRequest);

    void delete(long id);
}
