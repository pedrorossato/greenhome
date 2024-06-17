package com.greenhome.api.model.property.document;

import com.greenhome.api.enums.PropertyDocumentTypeEnum;
import com.greenhome.api.model.property.Property;
import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "property_document")
public class PropertyDocument {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @JoinColumn(name = "property_id")
    @ManyToOne
    private Property property;
    
    @Column(name = "document_uuid")
    private UUID documentUUID;
    
    @Enumerated(EnumType.STRING)
    private PropertyDocumentTypeEnum type;
}
