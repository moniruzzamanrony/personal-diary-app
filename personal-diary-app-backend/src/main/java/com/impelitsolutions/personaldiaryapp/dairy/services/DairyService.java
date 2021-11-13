package com.impelitsolutions.personaldiaryapp.dairy.services;

import com.impelitsolutions.personaldiaryapp.common.exceptions.ResourceNotFoundException;
import com.impelitsolutions.personaldiaryapp.dairy.model.domain.Category;
import com.impelitsolutions.personaldiaryapp.dairy.model.domain.Daily;
import com.impelitsolutions.personaldiaryapp.dairy.model.repositories.CategoryRepository;
import com.impelitsolutions.personaldiaryapp.dairy.model.repositories.DailyRepository;
import com.impelitsolutions.personaldiaryapp.dairy.web.dto.request.DairyRequest;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class DairyService {

    private final DailyRepository dailyRepository;
    private final CategoryRepository categoryRepository;

    public ResponseEntity<?> save(DairyRequest dairyRequest) {
        String uuid = UUID.randomUUID().toString();
        Daily daily = new Daily();
        BeanUtils.copyProperties(dairyRequest, daily);
        daily.setId(uuid);
        daily.setDateTime(LocalDateTime.now());
        Optional<Category> categoryOptional = categoryRepository.findById(dairyRequest.getCategoryId());
        if (!categoryOptional.isPresent()) {
            throw new ResourceNotFoundException("Category not found");
        }
        daily.setCategory(categoryOptional.get());
        return new ResponseEntity(dailyRepository.save(daily), HttpStatus.OK);
    }

    public ResponseEntity<?> updateDairy(String uuid, DairyRequest dairyRequest) {
        Optional<Daily> dailyOptional = dailyRepository.findById(uuid);
        if (!dailyOptional.isPresent()) {
            throw new ResourceNotFoundException("Daily note not found");
        }
        Daily daily = dailyOptional.get();
        BeanUtils.copyProperties(dairyRequest, daily);
        Optional<Category> categoryOptional = categoryRepository.findById(dairyRequest.getCategoryId());
        if (!categoryOptional.isPresent()) {
            throw new ResourceNotFoundException("Category not found");
        }
        daily.setCategory(categoryOptional.get());
        daily.setDateTime(LocalDateTime.now());

        return new ResponseEntity(dailyRepository.save(daily), HttpStatus.OK);
    }

    public void deleteDairy(String uuid) {
       dailyRepository.deleteById(uuid);
    }

    public ResponseEntity<?> getDairies() {
        return new ResponseEntity(dailyRepository.findAll(), HttpStatus.OK);
    }

    public ResponseEntity<?> getDairyByUuid(String uuid) {
        Optional<Daily> dailyOptional = dailyRepository.findById(uuid);
        if (!dailyOptional.isPresent()) {
            throw new ResourceNotFoundException("Daily note not found");
        }
        return new ResponseEntity(dailyRepository.save(dailyOptional.get()), HttpStatus.OK);
    }
}
