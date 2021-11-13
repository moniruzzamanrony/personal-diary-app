package com.impelitsolutions.personaldiaryapp.dairy.web.controller;

import com.impelitsolutions.personaldiaryapp.common.annotations.RestApi;
import com.impelitsolutions.personaldiaryapp.common.constants.AccessApiConstant;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;

@RestApi
@AllArgsConstructor
@RequestMapping(AccessApiConstant.PRIVATE)
public class DairyController {
}
