package com.impelitsolutions.personaldiaryapp.common.annotations;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "*")
public @interface RestApi {
}
