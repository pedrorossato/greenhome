package com.greenhome.api.dto.property.document;

import com.greenhome.api.enums.PropertyDocumentTypeEnum;
import lombok.Data;

import java.util.UUID;

@Data
public class PropertyDocumentDTO {
    private long id;
    private String url;
    private UUID documentUUID;
    private PropertyDocumentTypeEnum type;
}
