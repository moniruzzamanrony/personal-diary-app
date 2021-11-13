package com.impelitsolutions.personaldiaryapp.auth.services;

import com.impelitsolutions.personaldiaryapp.auth.model.domain.Role;
import com.impelitsolutions.personaldiaryapp.auth.model.domain.RoleName;
import com.impelitsolutions.personaldiaryapp.auth.model.domain.User;
import com.impelitsolutions.personaldiaryapp.auth.model.repositories.RoleRepository;
import com.impelitsolutions.personaldiaryapp.auth.model.repositories.UserRepository;
import com.impelitsolutions.personaldiaryapp.auth.configurations.jwt.JwtProvider;
import com.impelitsolutions.personaldiaryapp.auth.configurations.services.UserPrinciple;
import com.impelitsolutions.personaldiaryapp.auth.web.dto.request.LoginForm;
import com.impelitsolutions.personaldiaryapp.auth.web.dto.request.ResetPasswordForm;
import com.impelitsolutions.personaldiaryapp.auth.web.dto.request.SignUpForm;
import com.impelitsolutions.personaldiaryapp.auth.web.dto.response.JwtResponse;
import com.impelitsolutions.personaldiaryapp.auth.web.dto.response.LoggedUserDetailsResponse;
import com.impelitsolutions.personaldiaryapp.common.exceptions.RoleNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SignUpAndSignInService {

    @Autowired
    PasswordEncoder encoder;
    @Autowired
    JwtProvider jwtProvider;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;

    private UserPrinciple userPrinciple;

    public ResponseEntity<String> signUp(SignUpForm signUpRequest) {

        if (userRepository.existsByUsername(signUpRequest.getEmail())) {
            return new ResponseEntity<String>("Fail -> Username is already taken!",
                    HttpStatus.BAD_REQUEST);
        }


        User user = new User();
        Set<RoleName> strRoles = new HashSet<>();
        strRoles.add(RoleName.ROLE_DIARY_USER);
        Set<Role> roles = new HashSet<>();
        strRoles.forEach(role -> {
            switch (role) {
                case ROLE_DIARY_USER:
                    Role adminRole = roleRepository.findByName(RoleName.ROLE_DIARY_USER)
                            .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
                    roles.add(adminRole);

                    break;
                default:
                   throw new RoleNotFoundException("Role not found");
            }
        });

        user.setId(UUID.randomUUID().toString());
        user.setName(signUpRequest.getName());
        user.setUsername(signUpRequest.getEmail());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));

        user.setRoles(roles);
        userRepository.save(user);

        return new ResponseEntity<String>(signUpRequest.getEmail(), HttpStatus.OK);
    }

    public JwtResponse signIn(LoginForm loginRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        return new JwtResponse(jwt);
    }

    public String getRole() {
        return userPrinciple.getUsername();
    }

    public LoggedUserDetailsResponse getLoggedUserDetails(Authentication authentication) {
        Collection<? extends GrantedAuthority> grantedAuthorities = authentication.getAuthorities();
        List<String> userRoleList = new ArrayList<>();
        for (GrantedAuthority grantedAuthority : grantedAuthorities) {
            userRoleList.add(grantedAuthority.getAuthority());
        }
        LoggedUserDetailsResponse loggedUserDetailsResponse = new LoggedUserDetailsResponse();
        loggedUserDetailsResponse.setUserName(authentication.getName());
        loggedUserDetailsResponse.setUserRole(userRoleList);
        loggedUserDetailsResponse.setIsAuthenticated(authentication.isAuthenticated());
        return loggedUserDetailsResponse;
    }

}
