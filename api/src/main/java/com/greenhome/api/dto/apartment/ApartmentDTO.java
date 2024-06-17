package com.greenhome.api.dto.apartment;

import lombok.Data;

@Data
public class ApartmentDTO {
    private long id;
    private String name;
    private long propertyId;
    private double area;
    private short bedroomCount;
    private short bathroomCount;
    private boolean hasGarage;
    private boolean hasServiceArea;
    private boolean hasBalcony;
    private boolean hasBarbecueGrill;
    private boolean hasCloset;
}
