package com.greenhome.api.controller.property;

import com.greenhome.api.dto.property.SavePropertyRequest;
import com.greenhome.api.dto.property.PropertyDTO;
import com.greenhome.api.dto.property.PropertySummaryDTO;
import com.greenhome.api.service.property.PropertyService;
import jakarta.validation.Valid;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/property")
public class PropertyController {
    private final PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @Cacheable(value = "property")
    @GetMapping
    public List<PropertyDTO> findAll() {
        return propertyService.findAll();
    }

    @GetMapping("/count")
    public long count() {
        return propertyService.count();
    }
    
    @GetMapping("/summary")
    public List<PropertySummaryDTO> findAllSummary() {
        return propertyService.findAllSummary();
    }
    
    @Cacheable(value = "property")
    @GetMapping("{tag}")
    public PropertyDTO findByTag(@PathVariable String tag) {
        return propertyService.findByTag(tag);
    }
    
    @CacheEvict(value = "property", allEntries = true)
    @PostMapping
    public void create(@RequestBody @Valid SavePropertyRequest savePropertyRequest) {
        propertyService.create(savePropertyRequest);
    }

    @CacheEvict(value = "property", allEntries = true)
    @PutMapping("{id}")
    public void update(@PathVariable long id, @RequestBody @Valid SavePropertyRequest putPropertyRequest) {
        propertyService.update(id, putPropertyRequest);
    }

    @CacheEvict(value = "property", allEntries = true)
    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {
        propertyService.delete(id);
    }
}
