package com.greenhome.api.service.post;

import com.greenhome.api.dto.post.PostDTO;
import com.greenhome.api.dto.post.PostPostRequest;
import com.greenhome.api.model.post.Post;
import com.greenhome.api.repository.post.PostRepository;
import org.joda.time.DateTime;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Stream;

@Transactional
@Service
public class PostServiceTransactionalImpl implements PostService {
    private final PostRepository postRepository;
    private final ModelMapper modelMapper;
    
    public PostServiceTransactionalImpl(PostRepository postRepository, ModelMapper modelMapper) {
        this.postRepository = postRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<PostDTO> findAllOrderedByCreatedDesc() {
        List<Post> postList = postRepository.findAllByOrderByCreatedDateDesc();
        Stream<PostDTO> postDTOStream = postList.stream().map(post -> modelMapper.map(post, PostDTO.class));
        return postDTOStream.toList();
    }

    @Override
    public void save(PostPostRequest postRequest) {
        Post post = modelMapper.map(postRequest, Post.class);
        post.setCreatedDate(DateTime.now().toDate());
        postRepository.save(post);
    }
    
    @Override
    public void delete(long id) {
        postRepository.deleteById(id);
    }

}
