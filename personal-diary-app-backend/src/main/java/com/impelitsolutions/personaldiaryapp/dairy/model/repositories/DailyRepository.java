package com.impelitsolutions.personaldiaryapp.dairy.model.repositories;

import com.impelitsolutions.personaldiaryapp.dairy.model.domain.Daily;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DailyRepository extends JpaRepository<Daily, String> {
}
