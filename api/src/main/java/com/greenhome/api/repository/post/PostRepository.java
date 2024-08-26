package com.greenhome.api.repository.post;

import com.greenhome.api.model.post.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {

    @Query(value = "SELECT p.* FROM post p ORDER BY p.created_date DESC LIMIT :limit OFFSET :offset", nativeQuery = true)
    List<Post> findPaged(int offset, int limit);
}
