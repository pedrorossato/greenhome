package com.greenhome.api.dto.apartment;

public record SaveApartmentRequest(
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
