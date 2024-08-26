package com.greenhome.api.service.post;

import com.greenhome.api.dto.post.PostDTO;
import com.greenhome.api.dto.post.SavePostRequest;
import com.greenhome.api.exception.NotFoundException;
import com.greenhome.api.model.post.Post;
import com.greenhome.api.repository.post.PostRepository;
import org.joda.time.DateTime;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public List<PostDTO> findAll() {
        List<Post> postList = postRepository.findAll();
        Stream<PostDTO> postDTOStream = postList.stream().map(post -> modelMapper.map(post, PostDTO.class));
        return postDTOStream.toList();
    }

    @Override
    public List<PostDTO> findPaged(Pageable pageable) {
        Page<Post> postPage = postRepository.findAll(pageable);
        Stream<PostDTO> postDTOStream = postPage.getContent().stream().map(post -> modelMapper.map(post, PostDTO.class));
        return postDTOStream.toList();
    }

    @Override
    public PostDTO findById(long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new NotFoundException("Post não encontrado."));
        return modelMapper.map(post, PostDTO.class);
    }

    @Override
    public void create(SavePostRequest postRequest) {
        Post post = modelMapper.map(postRequest, Post.class);
        post.setCreatedDate(DateTime.now().toDate());
        postRepository.save(post);
    }

    @Override
    public void update(long id, SavePostRequest postRequest) {
        Post post = postRepository.findById(id).orElseThrow(() -> new NotFoundException("Post não encontrado."));
        modelMapper.map(postRequest, post);
        postRepository.save(post);
    }

    @Override
    public void delete(long id) {
        postRepository.deleteById(id);
    }

}
