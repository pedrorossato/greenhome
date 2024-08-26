package com.greenhome.api.repository.property;

import com.greenhome.api.dto.property.PropertySummaryDTO;
import com.greenhome.api.model.property.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface PropertyRepository extends JpaRepository<Property, Long> {
    
    @Query("SELECT p FROM Property p WHERE p.tag = :tag")
    Optional<Property> findByTag(String tag);

    @Query("SELECT new com.greenhome.api.dto.property.PropertySummaryDTO(p.tag, p.name, p.status, MIN(ap.area), MAX(ap.area), MIN(ap.bedroomCount), MAX(ap.bedroomCount), pd.documentUUID, '')" +
            "FROM Property p " +
            "LEFT JOIN Apartment ap ON p.id = ap.property.id " +
            "JOIN PropertyDocument pd ON p.id = pd.property.id " +
            "WHERE pd.type = 'COVER'" +
            "GROUP BY p.tag, p.name, p.status, pd.documentUUID")
    List<PropertySummaryDTO> findAllSummary();

    @Query("SELECT p.name FROM Property p WHERE p.tag = :tag")
    Optional<String> findNameByTag(String tag);
}
