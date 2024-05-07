package com.minet.userservice.serviceimpl;

import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Optional;

import static com.minet.userservice.constants.Constant.*;


@Service
@Slf4j
@RequiredArgsConstructor
public class EmailService {
    private final JavaMailSender javaMailSender;


    private final Logger logger;

    private final UserRepository userRepository;

    private String otp;


    public String sendEmail(String email) {
        String result = null;
        try {

            Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));

            if(user.isEmpty()){
                throw new UserNotFoundException("User not found for email "+email);
            }

            javaMailSender.send(constructResetTokenEmail(email));
            User existingUser = user.get();
            existingUser.setOtp(otp);
            userRepository.save(existingUser);
            result = SENT_EMAIL;
        }
        catch (Exception e){
            logger.info(EMAIL_SENT_ERROR, e);
            result = EMAIL_SENT_ERROR;
        }
        return result;
    }

    private SimpleMailMessage constructResetTokenEmail(
             String email) {
        otp = generateOtp();
        String url =  otp+"\n\n"+MESSAGE_CONTENT_WARNING;
        return constructEmail(RESET_EMAIL_BODY + " \r\n" + url, email);
    }

    private String generateOtp(){
        SecureRandom randomizer = new SecureRandom();
        StringBuilder builder = new StringBuilder();
        for(int i = 0; i < 8; i++) {
            builder.append(randomizer.nextInt(10));
        }
        return builder.toString();
    }

    private SimpleMailMessage constructEmail(String body,
                                             String email) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(email);
        simpleMailMessage.setSubject(com.minet.userservice.constants.Constant.FORGOT_PASSWORD_SUBJECT);
        simpleMailMessage.setText(body);

        return simpleMailMessage;
    }
}