package com.impelitsolutions.personaldiaryapp.auth.web.dto.request;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class SignUpForm {

    private String name;

    private String email;

    private String password;
}
