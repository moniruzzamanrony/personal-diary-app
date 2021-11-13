package com.impelitsolutions.personaldiaryapp.auth.web.dto.request;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class LoginForm {

    private String username;

    private String password;

}
