import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent {
  email: string = '';
  otp: string = '';
  otpSent: boolean = false;
  isVerified: boolean = false;
  errorMessage: string = '';
  successMessage: string = '';
  username: string = '';
  number: string = '';
  password: string = '';
  loginEmail: string = '';  
  loginErrorMessage: string = '';  
  loginSuccessMessage: string = '';  

  constructor(private router: Router, private authService: AuthService) {}

  signUp() {
    if (this.username && this.email && this.number && this.password) {
      const userData = {
        username: this.username,
        email: this.email,
        number: this.number,
        password: this.password,
      };
  
      this.authService.signUp(userData).subscribe(
        (response: any) => {
          // Handle success response
          console.log('Sign-up response:', response);
          localStorage.setItem('userData', JSON.stringify(userData));
          this.successMessage = 'Sign up successful!';
          this.errorMessage = '';
          this.clearSignupFields();
        },
        (error: HttpErrorResponse) => {
          console.error('Sign-up error:', error);
          this.errorMessage = 'Sign up failed. Please try again.';
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Please fill in all the fields.';
      this.successMessage = '';
    }
  }

  sendOtp(loginEmail: string) {
    if (loginEmail) {
      this.authService.sendOtp(loginEmail).subscribe(
        (response: any) => {
          if (response.success) {
            this.otpSent = true; // Update state to show OTP input field
            this.successMessage = 'OTP sent successfully!';
            this.errorMessage = '';
          } else {
            this.errorMessage = response.message;
            this.successMessage = '';
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Send OTP error:', error);
          this.errorMessage = 'Failed to send OTP. Please try again.';
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'Please enter your email.';
      this.successMessage = '';
    }
  }

  verifyOtp() {
    if (this.otp && this.loginEmail) {
      this.authService.verifyOtp(this.otp, this.loginEmail).subscribe(
        (response: any) => {
          if (response.success) {
            this.isVerified = true;
            this.loginSuccessMessage = 'Login successful!';
            this.loginErrorMessage = '';
            this.otp = '';
            this.router.navigate(['/dashboard']);
          } else {
            this.loginErrorMessage = 'Invalid OTP. Please try again.';
            this.loginSuccessMessage = '';
          }
        },
        (error: HttpErrorResponse) => {
          console.error('Verify OTP error:', error);
          this.loginErrorMessage = 'Failed to verify OTP. Please try again.';
          this.loginSuccessMessage = '';
        }
      );
    } else {
      this.loginErrorMessage = 'Please enter the OTP.';
      this.loginSuccessMessage = '';
    }
  }

  private clearSignupFields() {
    this.username = '';
    this.email = '';
    this.number = '';
    this.password = '';
  }
}
