package com.greenhome.api.repository.post;

import com.greenhome.api.model.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
