package com.impelitsolutions.personaldiaryapp.auth.web.controller;


import com.impelitsolutions.personaldiaryapp.auth.constants.LoginConstant;
import com.impelitsolutions.personaldiaryapp.auth.services.SignUpAndSignInService;
import com.impelitsolutions.personaldiaryapp.auth.web.dto.request.LoginForm;
import com.impelitsolutions.personaldiaryapp.auth.web.dto.request.SignUpForm;
import com.impelitsolutions.personaldiaryapp.common.constants.AccessApiConstant;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@AllArgsConstructor
@RequestMapping(AccessApiConstant.PUBLIC)
public class AuthController {

    private final SignUpAndSignInService signUpAndSignInService;

    @PostMapping(LoginConstant.LOGIN)
    public ResponseEntity<?> authenticateUser(@RequestBody LoginForm loginRequest) {

        return ResponseEntity.ok(signUpAndSignInService.signIn(loginRequest));
    }

    @PostMapping(LoginConstant.SIGNUP)
    public ResponseEntity<String> registerUser(@RequestBody SignUpForm signUpRequest) {
        return signUpAndSignInService.signUp(signUpRequest);
    }

}
