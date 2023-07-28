package com.greenhome.api.util;

public class RegexUtils {
    private static final String EMAIL_REGEX = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
    
    public static boolean emailIsValid(String email) {
        return email.matches(EMAIL_REGEX);
    }
}
