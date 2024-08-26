package com.greenhome.api.service.property;

import com.greenhome.api.dto.property.SavePropertyRequest;
import com.greenhome.api.dto.property.PropertyDTO;
import com.greenhome.api.dto.property.PropertySummaryDTO;

import java.util.List;

public interface PropertyService {
    long count();
    
    List<PropertyDTO> findAll();
    
    PropertyDTO findById(long id);

    String findNameByTag(String propertyId);
    
    PropertyDTO findByTag(String tag);
    
    List<PropertySummaryDTO> findAllSummary();
    
    void create(SavePropertyRequest savePropertyRequest);

    void update(long id, SavePropertyRequest putPropertyRequest);
    
    void delete(long id);

}
