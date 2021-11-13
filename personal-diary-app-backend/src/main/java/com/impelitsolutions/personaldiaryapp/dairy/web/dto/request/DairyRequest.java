package com.impelitsolutions.personaldiaryapp.dairy.web.dto.request;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class DairyRequest {

    private String title;
    private String diaryNote;
    private String categoryId;

}
