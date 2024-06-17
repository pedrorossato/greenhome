package com.greenhome.api.dto.property.document;

import com.greenhome.api.enums.PropertyDocumentTypeEnum;
import org.springframework.web.multipart.MultipartFile;

public record PostPropertyDocumentRequest(long propertyId, MultipartFile document, PropertyDocumentTypeEnum type) {
}
