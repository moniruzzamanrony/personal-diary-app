package com.impelitsolutions.personaldiaryapp.auth.model.repositories;


import com.impelitsolutions.personaldiaryapp.auth.model.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, String> {

    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);
}
