package com.greenhome.api.model.user;

import com.greenhome.api.enums.RoleEnum;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "\"user\"")
public class User implements UserDetails {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    
    @Setter
    @Getter
    @Column(name = "name")
    private String name;
    
    @Setter
    @Getter
    @Column(name = "email")
    private String email;
    
    @Getter
    @Setter
    @Column(name = "password")
    private String password;
    
    @Getter
    @Setter
    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private RoleEnum roleEnum;

    @Getter
    @Setter
    @Column(name = "photo_uuid")
    private UUID photoUUID;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        switch (this.roleEnum) {
            case USER -> {
                return List.of(new SimpleGrantedAuthority(RoleEnum.USER.getDescription()));
            }
            case ADMIN -> { 
                return List.of(
                        new SimpleGrantedAuthority(RoleEnum.USER.getDescription()),
                        new SimpleGrantedAuthority(RoleEnum.ADMIN.getDescription())
                );
            }
        }
        return List.of();
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public long getId() {
        return this.id;
    }
}