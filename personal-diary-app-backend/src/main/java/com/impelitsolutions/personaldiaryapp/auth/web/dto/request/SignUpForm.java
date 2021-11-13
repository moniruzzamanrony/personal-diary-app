package com.impelitsolutions.personaldiaryapp.auth.web.dto.request;


import com.impelitsolutions.personaldiaryapp.auth.model.domain.RoleName;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Setter
@Getter
public class SignUpForm {

    private String userId;

    private String username;

    private Set<RoleName> role;

    private String password;

    private String applicationName;

}
