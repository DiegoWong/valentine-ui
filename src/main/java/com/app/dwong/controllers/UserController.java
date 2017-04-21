package com.app.dwong.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
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
