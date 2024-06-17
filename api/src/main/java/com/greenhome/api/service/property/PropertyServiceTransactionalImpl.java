package com.greenhome.api.service.property;

import com.amazonaws.services.s3.AmazonS3;
import com.greenhome.api.dto.property.PostPropertyRequest;
import com.greenhome.api.dto.property.PropertyDTO;
import com.greenhome.api.dto.property.PropertySummary;
import com.greenhome.api.dto.property.PutPropertyRequest;
import com.greenhome.api.enums.PropertyTypeEnum;
import com.greenhome.api.exception.NotFoundException;
import com.greenhome.api.model.property.Property;
import com.greenhome.api.model.building.Building;
import com.greenhome.api.repository.property.PropertyRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class PropertyServiceTransactionalImpl implements PropertyService {
    private final PropertyRepository propertyRepository;
    private final ModelMapper modelMapper;
    private final AmazonS3 amazonS3;
    private final String propertyDocumentBucket;
    

    public PropertyServiceTransactionalImpl(PropertyRepository propertyRepository,
                                            ModelMapper modelMapper,
                                            AmazonS3 amazonS3,
                                            @Qualifier("propertyDocumentBucket") String propertyDocumentBucket) {
        this.propertyRepository = propertyRepository;
        this.modelMapper = modelMapper;
        this.amazonS3 = amazonS3;
        this.propertyDocumentBucket = propertyDocumentBucket;
    }

    @Override
    public List<PropertyDTO> findAll() {
        List<Property> properties = propertyRepository.findAll();
        return properties.stream().map(property -> modelMapper.map(property, PropertyDTO.class)).toList();
    }

    @Override
    public PropertyDTO findById(long id) {
        Property property = propertyRepository.findById(id).orElseThrow(() -> new NotFoundException("Empreendimento não encontrado."));
        return modelMapper.map(property, PropertyDTO.class);
    }

    @Override
    public String findNameByTag(String tag) {
        return propertyRepository.findNameByTag(tag).orElseThrow(() -> new NotFoundException("Empreendimento não encontrado."));
    }

    @Override
    public PropertyDTO findByTag(String tag) {
        Property property = propertyRepository.findByTag(tag).orElseThrow(() -> new NotFoundException("Empreendimento não encontrado."));
        return modelMapper.map(property, PropertyDTO.class);
    }

    @Override
    public List<PropertySummary> findAllSummary() {
        List<PropertySummary> properties = propertyRepository.findAllSummary();
        properties.forEach(propertySummary -> propertySummary.setCoverDocumentUrl(amazonS3.getUrl(propertyDocumentBucket, propertySummary.getDocumentUUID().toString()).toString()));
        return properties;
    }

    @Override
    public void save(PostPropertyRequest postPropertyRequest) {
        Property property = mapToProperty(postPropertyRequest);
        property.setTag(postPropertyRequest.name().toLowerCase().trim().replace(" ", "-"));
        propertyRepository.save(property);
    }

    private Property mapToProperty(PostPropertyRequest postPropertyRequest) {
        Property property;
        if (PropertyTypeEnum.BUILDING.equals(postPropertyRequest.type())) {
            property = modelMapper.map(postPropertyRequest, Building.class);
        } else {
            property = modelMapper.map(postPropertyRequest, Property.class);
        }
        return property;
    }

    @Override
    public void update(long id, PutPropertyRequest putPropertyRequest) {
        Property property = propertyRepository.findById(id).orElseThrow(() -> new NotFoundException("Empreendimento não encontrado."));
        modelMapper.map(putPropertyRequest, property);
        property.setTag(putPropertyRequest.name().toLowerCase().trim().replace(" ", "-"));
        propertyRepository.save(property);
    }

    @Override
    public void delete(long id) {
        propertyRepository.deleteById(id);
    }

}
