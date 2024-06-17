package com.greenhome.api.repository.apartment;

import com.greenhome.api.dto.apartment.ApartmentDTO;
import com.greenhome.api.model.apartment.Apartment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ApartmentRepository extends JpaRepository<Apartment, Long> {
    List<Apartment> findAllByPropertyId(long propertyId);
}
