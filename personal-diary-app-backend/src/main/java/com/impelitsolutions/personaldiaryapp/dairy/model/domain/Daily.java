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
public class Daily {

    @Id
    private String id;
    private String title;
    private String dailyNote;
    private LocalDateTime dateTime;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Category category;


}
