package com.impelitsolutions.personaldiaryapp.dairy.web.controller;

import com.impelitsolutions.personaldiaryapp.common.constants.AccessApiConstant;
import com.impelitsolutions.personaldiaryapp.dairy.constants.CategoryConstant;
import com.impelitsolutions.personaldiaryapp.dairy.services.CategoryService;
import com.impelitsolutions.personaldiaryapp.dairy.web.dto.request.CategoryRequest;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(AccessApiConstant.PRIVATE + CategoryConstant.CATEGORIES)
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping()
    public ResponseEntity<?> saveNewDairy(@RequestBody CategoryRequest categoryRequest) {
        return ResponseEntity.ok(categoryService.save(categoryRequest));
    }

    @GetMapping()
    public ResponseEntity<?> getCategories() {
        return ResponseEntity.ok(categoryService.getCategories());
    }

    @PutMapping("/{uuid}")
    public ResponseEntity<?> updateCategory(@PathVariable("uuid") String uuid, @RequestBody CategoryRequest categoryRequest) {
        return ResponseEntity.ok(categoryService.updateCategory(uuid, categoryRequest));
    }

    @DeleteMapping("/{uuid}")
    public void deleteCategoryByUuid(@PathVariable("uuid") String uuid) {
        categoryService.deleteCategoryByUuid(uuid);
    }

}

