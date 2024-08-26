package com.greenhome.api.dto.property;

import com.greenhome.api.enums.PropertyStatusEnum;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class PropertySummaryDTO {
    private String tag;
    private String name;
    private PropertyStatusEnum status;
    private double minArea;
    private double maxArea;
    private int minBedroomCount;
    private int maxBedroomCount;
    private UUID documentUUID;
    private String coverDocumentUrl;
}
