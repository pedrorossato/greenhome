package com.greenhome.api.dto.property.document;

import com.greenhome.api.enums.PropertyDocumentTypeEnum;

public record PropertyDocumentFilter (long propertyId, PropertyDocumentTypeEnum type) {
} 
