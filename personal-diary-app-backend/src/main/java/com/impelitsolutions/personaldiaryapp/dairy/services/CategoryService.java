package com.impelitsolutions.personaldiaryapp.dairy.services;

import com.impelitsolutions.personaldiaryapp.common.exceptions.ResourceNotFoundException;
import com.impelitsolutions.personaldiaryapp.dairy.model.domain.Category;
import com.impelitsolutions.personaldiaryapp.dairy.model.repositories.CategoryRepository;
import com.impelitsolutions.personaldiaryapp.dairy.web.dto.request.CategoryRequest;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public ResponseEntity<?> save(CategoryRequest categoryRequest) {
        String uuid = UUID.randomUUID().toString();
        Category category = new Category();
        BeanUtils.copyProperties(categoryRequest, category);
        category.setId(uuid);
        return new ResponseEntity(categoryRepository.save(category), HttpStatus.OK);
    }

    public ResponseEntity<?> updateCategory(String uuid, CategoryRequest categoryRequest) {
        Optional<Category> categoryOptional = categoryRepository.findById(uuid);
        if (!categoryOptional.isPresent()) {
            throw new ResourceNotFoundException("Daily note not found");
        }
        Category category = categoryOptional.get();
        BeanUtils.copyProperties(categoryRequest, category);
        return new ResponseEntity(categoryRepository.save(category), HttpStatus.OK);
    }

    public void deleteCategoryByUuid(String uuid) {
       categoryRepository.deleteById(uuid);
    }

    public ResponseEntity<?> getCategories() {
        return new ResponseEntity(categoryRepository.findAll(), HttpStatus.OK);
    }
}
