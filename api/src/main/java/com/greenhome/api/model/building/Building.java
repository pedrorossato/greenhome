package com.greenhome.api.model.building;

import com.greenhome.api.model.apartment.Apartment;
import com.greenhome.api.model.property.Property;
import jakarta.persistence.*;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.Date;
import java.util.List;

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
    
    private Date estimatedReleaseDate;

    @OneToMany(mappedBy = "property", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Apartment> apartments;
}
