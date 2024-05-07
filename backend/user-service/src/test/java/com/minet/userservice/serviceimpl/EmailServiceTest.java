package com.minet.userservice.serviceimpl;

import com.minet.userservice.entity.User;
import com.minet.userservice.exception.UserNotFoundException;
import com.minet.userservice.repository.UserRepository;
import com.minet.userservice.serviceimpl.EmailService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.slf4j.Logger;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import java.util.Optional;

import static com.minet.userservice.constants.Constant.EMAIL_SENT_ERROR;
import static com.minet.userservice.constants.Constant.SENT_EMAIL;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class EmailServiceTest {

    @Mock
    private Logger logger;

    @Mock
    private UserRepository userRepository;

    @Mock
    private JavaMailSender javaMailSender;

    @InjectMocks
    private EmailService emailService;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void sendEmail_Success() {
        // Arrange
        User existingUser = new User();
        existingUser.setEmail("test@gmail.com");

        when(userRepository.findByEmail("test@gmail.com")).thenReturn(existingUser);

        // Act
        String result = emailService.sendEmail("test@gmail.com");

        // Assert
        assertEquals(SENT_EMAIL, result);
        verify(javaMailSender, times(1)).send(any(SimpleMailMessage.class));
        verify(userRepository, times(1)).save(existingUser);
    }

    @Test
    public void sendEmail_UserNotFound() {
        // Arrange
        when(userRepository.findByEmail("nonexistent@gmail.com")).thenReturn(null);

        // Act and Assert
        String result = emailService.sendEmail("nonexistent@gmail.com");

        assertEquals(EMAIL_SENT_ERROR, result);
        verify(javaMailSender, never()).send(any(SimpleMailMessage.class));
        verify(userRepository, never()).save(any(User.class));
    }

    @Test
    public void sendEmail_Exception() {
        // Arrange
        when(userRepository.findByEmail("error@gmail.com")).thenThrow(new RuntimeException("Some error"));

        // Act and Assert
        String result = emailService.sendEmail("error@gmail.com");

        assertEquals(EMAIL_SENT_ERROR, result);
        verify(javaMailSender, never()).send(any(SimpleMailMessage.class));
        verify(userRepository, never()).save(any(User.class));
    }

    // Add more tests for edge cases, generateOtp, and constructEmail methods.
}
