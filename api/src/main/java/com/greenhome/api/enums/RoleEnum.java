package com.greenhome.api.enums;

public enum RoleEnum implements BaseEnum {
    USER("ROLE_USER"), 
    ADMIN("ROLE_ADMIN");
    
    private final String description;

    RoleEnum(String description) {
        this.description = description;
    }

    @Override
    public String getDescription() {
        return description;
    }
}
