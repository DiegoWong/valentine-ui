package com.app.dwong.controllers;

import com.app.dwong.configuration.ClientResources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.provider.token.ResourceServerTokenServices;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by dwong on 3/3/17.
 */
@RestController
public class UserController {

    @RequestMapping("/user")
    @PreAuthorize("#oauth2.hasScope('read')")
    public Principal user(Principal principal) {
        return principal;
    }

}
