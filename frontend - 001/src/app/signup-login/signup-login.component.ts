
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';

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

  // for signup
  username: string = '';
  number: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router, private http: HttpClient) {}

      // Function to send OTP
  sendOtp() {
    if (this.email) {
      this.http.post('http://localhost:3000/sendOtp', { email: this.email }, { responseType: 'text' })
        .subscribe(
          (response: string) => {
            this.otpSent = true;
            this.successMessage = response;     // Display success message from server
            this.errorMessage = '';
          },
          (error) => {
            this.errorMessage = 'Error sending OTP. Please try again.';
            this.successMessage = ''; 
          }
        );
    } else {
      this.errorMessage = 'Please enter a valid email address.';
    }
  }
  
  // Function to verify OTP
  verifyOtp() {
    if (this.otp) {
      this.http.post('http://localhost:3000/verifyOtp', { otp: this.otp }, { responseType: 'text' })
        .subscribe(
          (response: string) => {
            if (response === 'OTP verified successfully') {
              this.isVerified = true;
              this.successMessage = response; // Display success message
              this.errorMessage = '';
              this.router.navigate(['/dashboard']); // Redirect to dashboard
            } else {
              this.errorMessage = response; // Handle custom error messages from server
              this.isVerified = false;
              this.successMessage = ''; 
            }
          },
          (error) => {
            this.errorMessage = 'Invalid OTP. Please try again.';
            this.successMessage = ''; 
          }
        );
    } else {
      this.errorMessage = 'Please enter the OTP.';
    }
  }
  
  // Method for signup
  signUp(signUpForm: any) {
    if (this.password === this.confirmPassword) {
      console.log('Signing up:', this.username, this.email, this.number);
    } else {
      this.errorMessage = 'Passwords do not match.';
    }
  }
  
}




