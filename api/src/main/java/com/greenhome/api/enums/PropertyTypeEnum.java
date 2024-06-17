package com.greenhome.api.enums;

public enum PropertyTypeEnum implements BaseEnum {
    BUILDING("Building"),
    HOUSE("House"),
    OFFICE("Office"),
    LAND("Land"),
    ;

    private final String description;
    
    PropertyTypeEnum(String description) {
        this.description = description;
    }

    @Override
    public String getDescription() {
        return description;
    }
}
