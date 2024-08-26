package com.greenhome.api.service.apartment;

import com.greenhome.api.dto.apartment.ApartmentDTO;
import com.greenhome.api.dto.apartment.SaveApartmentRequest;

import java.util.List;

public interface ApartmentService {

    List<ApartmentDTO> findAllByPropertyId(long propertyId);

    void create(SaveApartmentRequest saveApartmentRequest);

    void update(long id, SaveApartmentRequest saveApartmentRequest);
    
    void delete(long apartmentId);
}
