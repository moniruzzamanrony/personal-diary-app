package com.impelitsolutions.personaldiaryapp.dairy.model.repositories;

import com.impelitsolutions.personaldiaryapp.dairy.model.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, String> {
}
