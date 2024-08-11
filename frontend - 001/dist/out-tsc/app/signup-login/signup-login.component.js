import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SignupLoginComponent = class SignupLoginComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.otp = '';
        this.otpSent = false;
        this.isVerified = false;
        this.errorMessage = '';
        this.successMessage = '';
        this.username = '';
        this.number = '';
        this.password = '';
        this.loginEmail = '';
        this.loginErrorMessage = '';
        this.loginSuccessMessage = '';
    }
    signUp() {
        if (this.username && this.email && this.number && this.password) {
            const userData = {
                username: this.username,
                email: this.email,
                number: this.number,
                password: this.password,
            };
            this.authService.signUp(userData);
            localStorage.setItem('userData', JSON.stringify(userData));
            this.successMessage = 'Sign up successful!';
            this.errorMessage = '';
            // Reset the state
            this.loginErrorMessage = '';
            this.loginSuccessMessage = '';
            this.otpSent = false;
            this.isVerified = false;
            this.clearSignupFields();
        }
        else {
            this.errorMessage = 'Please fill in all the fields.';
            this.successMessage = '';
        }
    }
    // method to send OTP
    sendOtp(loginEmail) {
        if (!loginEmail) {
            this.errorMessage = 'Email is required.';
            return;
        }
        this.authService.sendOtp(loginEmail).subscribe(response => {
            console.log('OTP sent successfully');
            this.successMessage = 'OTP sent successfully.';
        }, error => {
            console.error('Error sending OTP:', error);
            this.errorMessage = error.error.message || 'Failed to send OTP. Please try again.';
        });
    }
    verifyOtp() {
        if (this.otp) {
            this.authService.verifyOtp(this.otp, this.loginEmail).subscribe((response) => {
                if (response.success) {
                    this.isVerified = true;
                    this.loginSuccessMessage = 'Login successful!';
                    this.loginErrorMessage = '';
                    this.otp = '';
                    this.router.navigate(['/dashboard']);
                }
                else {
                    this.loginErrorMessage = 'Invalid OTP. Please try again.';
                }
            }, (error) => {
                this.loginErrorMessage = 'Invalid OTP. Please try again.';
            });
        }
        else {
            this.loginErrorMessage = 'Please enter the OTP.';
        }
    }
    clearSignupFields() {
        this.username = '';
        this.email = '';
        this.number = '';
        this.password = '';
    }
};
SignupLoginComponent = __decorate([
    Component({
        selector: 'app-signup-login',
        templateUrl: './signup-login.component.html',
        styleUrls: ['./signup-login.component.css']
    })
], SignupLoginComponent);
export { SignupLoginComponent };
//# sourceMappingURL=signup-login.component.js.map