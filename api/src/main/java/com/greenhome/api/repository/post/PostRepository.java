package com.greenhome.api.repository.post;

import com.greenhome.api.model.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    @Query("SELECT p FROM Post p ORDER BY p.createdDate DESC")
    List<Post> findAllByOrderByCreatedDateDesc();
}
