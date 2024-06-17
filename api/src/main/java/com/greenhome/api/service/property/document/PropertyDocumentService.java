package com.greenhome.api.service.property.document;

import com.greenhome.api.dto.property.document.PostPropertyDocumentRequest;
import com.greenhome.api.dto.property.document.PropertyDocumentDTO;
import com.greenhome.api.dto.property.document.PropertyDocumentFilter;
import com.greenhome.api.enums.PropertyDocumentTypeEnum;

import java.util.List;

public interface PropertyDocumentService {
    List<String> findAllPropertyDocumentUrl(long propertyId, PropertyDocumentTypeEnum type);

    List<PropertyDocumentDTO> findAllPropertyDocument(long propertyId);
    
    void save(PostPropertyDocumentRequest postPropertyDocumentRequest);

    void delete(long id);

}
