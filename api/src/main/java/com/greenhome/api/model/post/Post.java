package com.greenhome.api.model.post;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "post")
public class Post {

    @Id
    private long id;

    private String title;
    
    private String content;
    
    private Date createdDate;
}
