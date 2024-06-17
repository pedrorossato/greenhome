package com.greenhome.api.enums;

public enum PropertyDocumentTypeEnum implements BaseEnum {
    COVER("Cover"),
    GALLERY("Gallery"),
    FLOOR_PLAN("Floor Plan"),
    VIDEO("Video");
    
    private final String description;
    
    PropertyDocumentTypeEnum(String description) {
        this.description = description;
    }

    @Override
    public String getDescription() {
        return description;
    }
}
