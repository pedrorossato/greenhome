package com.greenhome.api.controller.apartment;

import com.greenhome.api.dto.apartment.ApartmentDTO;
import com.greenhome.api.dto.apartment.SaveApartmentRequest;
import com.greenhome.api.service.apartment.ApartmentService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/property/{propertyId}/apartment")
public class ApartmentController {
    
    private final ApartmentService apartmentService;
    
    public ApartmentController(ApartmentService apartmentService) {
        this.apartmentService = apartmentService;
    }
    
    @GetMapping
    public List<ApartmentDTO> findAllByPropertyId(@PathVariable long propertyId) {
        return apartmentService.findAllByPropertyId(propertyId);
    }
    
    @PostMapping
    public void create(@RequestBody @Valid SaveApartmentRequest saveApartmentRequest) {
        apartmentService.create(saveApartmentRequest);
    }
    
    @PutMapping("{id}")
    public void update(@PathVariable long id, @RequestBody @Valid SaveApartmentRequest saveApartmentRequest) {
        apartmentService.update(id, saveApartmentRequest);
    }
    
    @DeleteMapping("/{apartmentId}")
    public void delete(@PathVariable long apartmentId) {
        apartmentService.delete(apartmentId);
    }
}
