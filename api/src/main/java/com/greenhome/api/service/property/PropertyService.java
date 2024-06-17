package com.greenhome.api.service.property;

import com.greenhome.api.dto.property.PostPropertyRequest;
import com.greenhome.api.dto.property.PropertyDTO;
import com.greenhome.api.dto.property.PropertySummary;
import com.greenhome.api.dto.property.PutPropertyRequest;

import java.util.List;

public interface PropertyService {
    List<PropertyDTO> findAll();
    
    PropertyDTO findById(long id);

    String findNameByTag(String propertyId);
    
    PropertyDTO findByTag(String tag);
    
    List<PropertySummary> findAllSummary();
    
    void save(PostPropertyRequest postPropertyRequest);

    void update(long id, PutPropertyRequest putPropertyRequest);
    
    void delete(long id);

}
