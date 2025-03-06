package com.greenhome.api.service.apartment;

import com.greenhome.api.dto.apartment.ApartmentDTO;
import com.greenhome.api.dto.apartment.SaveApartmentRequest;
import com.greenhome.api.exception.NotFoundException;
import com.greenhome.api.model.apartment.Apartment;
import com.greenhome.api.model.building.Building;
import com.greenhome.api.model.property.Property;
import com.greenhome.api.repository.apartment.ApartmentRepository;
import com.greenhome.api.repository.property.PropertyRepository;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Comparator;
import java.util.List;

@Transactional
@Service
public class ApartmentServiceTransactionalImpl implements ApartmentService {

    private final ApartmentRepository apartmentRepository;
    private final PropertyRepository propertyRepository;
    private final ModelMapper modelMapper;
    
    public ApartmentServiceTransactionalImpl(ApartmentRepository apartmentRepository, PropertyRepository propertyRepository, ModelMapper modelMapper) {
        this.apartmentRepository = apartmentRepository;
        this.propertyRepository = propertyRepository;
        this.modelMapper = modelMapper;
    }
    
    @Override
    public List<ApartmentDTO> findAllByPropertyId(long propertyId) {
        List<Apartment> allByPropertyId = apartmentRepository.findAllByPropertyId(propertyId);
        return allByPropertyId.stream()
                .sorted(Comparator.comparing(Apartment::getName))
                .map(apartment -> modelMapper.map(apartment, ApartmentDTO.class))
                .toList();
    }

    @Override
    public void create(SaveApartmentRequest saveApartmentRequest) {
        Property property = propertyRepository.findById(saveApartmentRequest.propertyId()).orElseThrow(() -> new NotFoundException("Empreendimento não encontrado"));
        Apartment apartment = modelMapper.map(saveApartmentRequest, Apartment.class);
        apartment.setProperty((Building) property);
        apartmentRepository.save(apartment);
    }

    @Override
    public void update(long id, SaveApartmentRequest saveApartmentRequest) {
        Property property = propertyRepository.findById(saveApartmentRequest.propertyId()).orElseThrow(() -> new NotFoundException("Empreendimento não encontrado"));
        Apartment apartment =  apartmentRepository.findById(id).orElseThrow(() -> new NotFoundException("Apartamento não encontrado"));
        modelMapper.map(saveApartmentRequest, apartment);
        apartment.setProperty((Building) property);
        apartmentRepository.save(apartment);
    }

    @Override
    public void delete(long apartmentId) {
        apartmentRepository.deleteById(apartmentId);
    }
}
