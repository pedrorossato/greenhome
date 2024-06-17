package com.greenhome.api.dto.apartment;

public record PostApartmentRequest (
    String name,
    long propertyId,
    double area,
    short bedroomCount,
    short bathroomCount,
    boolean hasGarage,
    boolean hasServiceArea,
    boolean hasBalcony,
    boolean hasBarbecueGrill,
    boolean hasCloset
) {}
