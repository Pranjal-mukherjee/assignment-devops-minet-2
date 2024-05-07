package com.minet.userservice.constants;

import jakarta.validation.constraints.Pattern;

public class Constant{
    private Constant(){
        super();
    }

    public static final String SENT_EMAIL = "Email Sent Successfully";
    public static final String FORGOT_PASSWORD_SUBJECT = "Reset Minet Password";

    public static final String RESET_EMAIL_BODY = "Dear User, Your one time password to reset your account password is ";
    public static final String MESSAGE_CONTENT_WARNING = "Please do not share it with anyone.";
    public static final String EMAIL_SENT_ERROR = "Something went wrong while sending otp";

    public static final String PASSWORD_ERROR = "Password must be at least 8 characters long, containing at least one capital letter, one digit, and one special character (@#$%^&+=)";

    public static final String PASSWORD_REGEX = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";
}
