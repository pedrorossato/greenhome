package com.greenhome.api.controller.property.document;

import com.greenhome.api.dto.property.document.PostPropertyDocumentRequest;
import com.greenhome.api.dto.property.document.PropertyDocumentDTO;
import com.greenhome.api.enums.PropertyDocumentTypeEnum;
import com.greenhome.api.service.property.document.PropertyDocumentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/property/{propertyId}/document")
public class PropertyDocumentController {
    private final PropertyDocumentService propertyDocumentService;
    
    public PropertyDocumentController(PropertyDocumentService propertyDocumentService) {
        this.propertyDocumentService = propertyDocumentService;
    }
    
    @GetMapping
    public List<PropertyDocumentDTO> findAllPropertyDocument(@PathVariable long propertyId) {
        return propertyDocumentService.findAllPropertyDocument(propertyId);
    }
    
    @GetMapping(value = "/urls")
    public List<String> findAllPropertyDocumentUrl(@PathVariable long propertyId, @RequestParam PropertyDocumentTypeEnum type) {
        return propertyDocumentService.findAllPropertyDocumentUrl(propertyId, type);
    }
    
    @PostMapping
    public void save(@ModelAttribute PostPropertyDocumentRequest postPropertyDocumentRequest) {
        propertyDocumentService.save(postPropertyDocumentRequest);
    }
    
    @DeleteMapping("{id}")
    public void delete(@PathVariable long id) {
        propertyDocumentService.delete(id);
    }
}
