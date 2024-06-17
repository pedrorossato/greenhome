package com.greenhome.api.model.property;

import com.greenhome.api.enums.PropertyStatusEnum;
import com.greenhome.api.enums.PropertyTypeEnum;
import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "property")
@Inheritance(strategy = InheritanceType.JOINED)
public class Property {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String name;
    
    private String tag;

    private String address;

    private double latitude;

    private double longitude;
    
    @Column(columnDefinition="text")
    private String description;
    
    private PropertyTypeEnum type;
    
    private PropertyStatusEnum status;
}
