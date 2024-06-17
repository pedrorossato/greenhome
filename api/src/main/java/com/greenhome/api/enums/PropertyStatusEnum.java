package com.greenhome.api.enums;

public enum PropertyStatusEnum implements BaseEnum {
    CONSTRUCTION("Construction"),
    FINISHED("Finished");
    
    private final String description;

    PropertyStatusEnum(String description) {
        this.description = description;
    }

    @Override
    public String getDescription() {
        return description;
    }
}
