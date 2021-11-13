package com.impelitsolutions.personaldiaryapp.dairy.model.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Daily extends BaseEntity{

    @Id
    private String id;
    private String title;
    private String diaryNote;
    private LocalDateTime dateTime;
    @OneToOne(fetch = FetchType.EAGER)
    private Category category;


}
