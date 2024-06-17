package com.greenhome.api.model.building;

import com.greenhome.api.model.property.Property;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
@Table(name = "building")
@EqualsAndHashCode(callSuper = true)
@PrimaryKeyJoinColumn(name = "property_id")
public class Building extends Property {
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
