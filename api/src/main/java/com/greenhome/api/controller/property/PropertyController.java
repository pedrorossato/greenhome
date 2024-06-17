package com.greenhome.api.controller.property;

import com.greenhome.api.dto.property.PostPropertyRequest;
import com.greenhome.api.dto.property.PropertyDTO;
import com.greenhome.api.dto.property.PropertySummary;
import com.greenhome.api.dto.property.PutPropertyRequest;
import com.greenhome.api.service.property.PropertyService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/property")
public class PropertyController {
    private final PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }
    
    @GetMapping
    public List<PropertyDTO> findAll() {
        return propertyService.findAll();
    }
    
    @GetMapping("/summary")
    public List<PropertySummary> findAllSummary() {
        return propertyService.findAllSummary();
    }
    
    @GetMapping("{tag}")
    public PropertyDTO findByTag(@PathVariable String tag) {
        return propertyService.findByTag(tag);
    }
    
    @PostMapping
    public void save(@RequestBody @Valid PostPropertyRequest postPropertyRequest) {
        propertyService.save(postPropertyRequest);
    }
    
    @PutMapping("{id}")
    public void update(@PathVariable long id, @RequestBody @Valid PutPropertyRequest putPropertyRequest) {
        propertyService.update(id, putPropertyRequest);
    }
    
    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {
        propertyService.delete(id);
    }
}
