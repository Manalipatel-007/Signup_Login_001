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
  
      const response = this.authService.signUp(userData)
      response.subscribe(
        (response: any) => {
          // Handle success response
          if(response.success){
            this.successMessage = 'Sign up successful!';
            this.errorMessage = '';
            this.clearSignupFields(); 
          }else{
            this.errorMessage = 'Sign up failed. Please try again.';
            this.successMessage = '';
          }
        });
    } else {
      this.errorMessage = 'Please fill in all the fields.';
      this.successMessage = '';
    }
  }

  sendOtp(loginEmail: string) {    
    try {
      const response = this.authService.sendOtp(loginEmail)
      response.subscribe((response: any) => {
        if (response.success) {
          this.otpSent = true; // Update state to show OTP input field
          this.successMessage = 'OTP sent successfully!';
          this.errorMessage = '';
        } else {
          this.errorMessage = response.message;
          this.successMessage = '';
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  verifyOtp(otp : string, loginEmail : string) {
    try{
    const response = this.authService.verifyOtp(otp, loginEmail)
    response.subscribe((response: any) => {
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
      });
    }catch (err){
      console.log(err);
    }
  }

  private clearSignupFields() {
    this.username = '';
    this.email = '';
    this.number = '';
    this.password = '';
  }
}
