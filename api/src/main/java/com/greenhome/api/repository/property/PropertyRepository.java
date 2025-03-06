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

    @Query("SELECT new com.greenhome.api.dto.property.PropertySummaryDTO(" +
            "p.tag, " +
            "p.name, " +
            "p.status, " +
            "MIN(COALESCE(ap.area, 0)), " +
            "MAX(COALESCE(ap.area, 0)), " +
            "MIN(COALESCE(ap.bedroomCount, 0)), " +
            "MAX(COALESCE(ap.bedroomCount, 0))," +
            "pd.documentUUID," +
            "''" +
            ")" +
            "FROM Property p " +
            "LEFT JOIN PropertyDocument pd ON p.id = pd.property.id " +
            "LEFT JOIN Apartment ap ON p.id = ap.property.id " +
            "WHERE pd IS NULL OR pd.type = 'COVER' " +
            "GROUP BY p.tag, p.name, p.status, pd.documentUUID " +
            "ORDER BY p.status")
    List<PropertySummaryDTO> findAllSummary();

    @Query("SELECT p.name FROM Property p WHERE p.tag = :tag")
    Optional<String> findNameByTag(String tag);
}
