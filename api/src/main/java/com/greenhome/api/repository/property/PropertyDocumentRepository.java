package com.greenhome.api.repository.property;

import com.greenhome.api.enums.PropertyDocumentTypeEnum;
import com.greenhome.api.model.property.document.PropertyDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PropertyDocumentRepository extends JpaRepository<PropertyDocument, Long> {
    @Query("SELECT pd FROM PropertyDocument pd WHERE pd.property.id = :propertyId AND pd.type = :type")
    List<PropertyDocument> findAllPropertyDocument(long propertyId, PropertyDocumentTypeEnum type);

    @Query("SELECT pd FROM PropertyDocument pd WHERE pd.property.id = :propertyId")
    List<PropertyDocument> findAllPropertyDocument(long propertyId);
    
}
