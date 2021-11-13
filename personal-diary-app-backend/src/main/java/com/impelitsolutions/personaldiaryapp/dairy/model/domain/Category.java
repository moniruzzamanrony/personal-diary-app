package com.impelitsolutions.personaldiaryapp.dairy.model.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Category extends BaseEntity{

    @Id
    private String id;
    private String categoryName;
    private String description;
}
