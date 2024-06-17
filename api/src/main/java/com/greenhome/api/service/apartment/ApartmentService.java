package com.greenhome.api.service.apartment;

import com.greenhome.api.dto.apartment.ApartmentDTO;
import com.greenhome.api.dto.apartment.PostApartmentRequest;

import java.util.List;

public interface ApartmentService {

    List<ApartmentDTO> findAllByPropertyId(long propertyId);

    void save(PostApartmentRequest postApartmentRequest);

    void delete(long apartmentId);
}
