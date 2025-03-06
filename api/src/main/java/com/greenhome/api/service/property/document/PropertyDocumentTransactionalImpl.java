package com.greenhome.api.service.property.document;

import com.amazonaws.services.s3.AmazonS3;
import com.greenhome.api.dto.property.document.PostPropertyDocumentRequest;
import com.greenhome.api.dto.property.document.PropertyDocumentDTO;
import com.greenhome.api.enums.PropertyDocumentTypeEnum;
import com.greenhome.api.exception.NotFoundException;
import com.greenhome.api.model.property.Property;
import com.greenhome.api.model.property.document.PropertyDocument;
import com.greenhome.api.repository.property.PropertyDocumentRepository;
import com.greenhome.api.repository.property.PropertyRepository;
import com.greenhome.api.util.FileUtils;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@Transactional
@Service
public class PropertyDocumentTransactionalImpl implements PropertyDocumentService {
    
    
    private final PropertyDocumentRepository propertyDocumentRepository;
    private final PropertyRepository propertyRepository;
    private final ModelMapper modelMapper;
    private final AmazonS3 amazonS3;
    private final String propertyDocumentBucket;
    private final Logger log = LoggerFactory.getLogger(PropertyDocumentTransactionalImpl.class);
    
    public PropertyDocumentTransactionalImpl(
            PropertyDocumentRepository propertyDocumentRepository,
            PropertyRepository propertyRepository,
            ModelMapper modelMapper,
            AmazonS3 amazonS3,
            @Qualifier("propertyDocumentBucket") String propertyDocumentBucket
    ) {
        this.propertyDocumentRepository = propertyDocumentRepository;
        this.propertyRepository = propertyRepository;
        this.modelMapper = modelMapper;
        this.amazonS3 = amazonS3;
        this.propertyDocumentBucket = propertyDocumentBucket;
    }

    @Override
    public List<String> findAllPropertyDocumentUrl(long propertyId, PropertyDocumentTypeEnum type) {
        List<PropertyDocument> propertyDocuments = propertyDocumentRepository.findAllPropertyDocument(propertyId, type);
        return propertyDocuments.stream().map(propertyDocument -> amazonS3.getUrl(propertyDocumentBucket, propertyDocument.getDocumentUUID().toString()).toString()).toList();
    }

    @Override
    public List<PropertyDocumentDTO> findAllPropertyDocument(long propertyId) {
        List<PropertyDocument> propertyDocuments = propertyDocumentRepository.findAllPropertyDocument(propertyId);
        List<PropertyDocumentDTO> propertyDocumentsDTO = propertyDocuments.stream().map(propertyDocument -> modelMapper.map(propertyDocument, PropertyDocumentDTO.class)).toList();
        propertyDocumentsDTO.forEach(propertyDocumentDTO -> propertyDocumentDTO.setUrl(amazonS3.getUrl(propertyDocumentBucket, propertyDocumentDTO.getDocumentUUID().toString()).toString()));
        return propertyDocumentsDTO;
    }

    @Override
    public void create(PostPropertyDocumentRequest postPropertyDocumentRequest) {
        Property property = propertyRepository.findById(postPropertyDocumentRequest.propertyId()).orElseThrow(() -> new NotFoundException("Property not found"));
        PropertyDocument propertyDocument = modelMapper.map(postPropertyDocumentRequest, PropertyDocument.class);
        propertyDocument.setId(0L);
        propertyDocument.setProperty(property);
        propertyDocument.setDocumentUUID(UUID.randomUUID());
        propertyDocumentRepository.save(propertyDocument);
        property.getPropertyDocumentList().add(propertyDocument);
        propertyRepository.save(property);
        try {
            File file = FileUtils.convertMultiPartToFile(postPropertyDocumentRequest.document());
            amazonS3.putObject(propertyDocumentBucket, propertyDocument.getDocumentUUID().toString(), file);
            FileUtils.deleteFile(file);
        } catch (IOException e) {
            log.error("Error uploading document for property {}", propertyDocument.getProperty().getId());
        }
    }

    @Override
    public void delete(long id) {
        PropertyDocument propertyDocument = propertyDocumentRepository.findById(id).orElseThrow(() -> new NotFoundException("Arquivo não encontrado."));
        propertyDocumentRepository.deleteById(id);
        amazonS3.deleteObject("property-document-bucket-greenhome", propertyDocument.getDocumentUUID().toString());
    }
}
