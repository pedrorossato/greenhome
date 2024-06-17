package com.greenhome.api.dto.post;

import lombok.Data;

import java.util.Date;

@Data
public class PostDTO {
    private long id;
    private String title;
    private String content;
    private Date createdDate;
}
