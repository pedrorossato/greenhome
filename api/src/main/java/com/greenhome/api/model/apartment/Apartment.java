package com.greenhome.api.model.apartment;

import com.greenhome.api.model.building.Building;
import com.greenhome.api.model.property.Property;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Data
@Entity
@Table(name = "apartment")
public class Apartment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    private String name;
    
    @JoinColumn(name = "property_id")
    @ManyToOne
    private Building property;
    
    private double area;
    
    private short bedroomCount;
    
    private short bathroomCount;
    
    private boolean hasGarage;
    
    private boolean hasServiceArea;
    
    private boolean hasBalcony;
    
    private boolean hasBarbecueGrill;
    
    private boolean hasCloset;
}
