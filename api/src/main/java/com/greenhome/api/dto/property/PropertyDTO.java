package com.greenhome.api.dto.property;

import com.greenhome.api.enums.PropertyStatusEnum;
import com.greenhome.api.enums.PropertyTypeEnum;
import lombok.Data;

@Data
public class PropertyDTO {
    private long id;
    private String name;
    private String tag;
    private String address;
    private double latitude;
    private double longitude;
    private String description;
    private PropertyTypeEnum type;
    private PropertyStatusEnum status;
    private short landingProgress;
    private short foundationProgress;
    private short structureProgress;
    private short masonryProgress;
    private short eletricProgress;
    private short hydraulicProgress;
    private short finishingProgress;
    private boolean gym;
    private boolean entranceHall;
    private boolean splitACWaiting;
    private boolean centralGas;
    private boolean intercom;
    private boolean eletronicGate;
    private boolean elevator;
    private boolean bicycleStand;
    private boolean partyHall;
    private boolean playground;
}
