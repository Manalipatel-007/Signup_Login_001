// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:3000'; // Update with your backend URL
    }
    // Method to sign up user
    signUp(userData) {
        return this.http.post(`${this.apiUrl}/signup`, userData);
    }
    sendOtp(email) {
        return this.http.post(`${this.apiUrl}/sendOtp`, { email });
    }
    // Example of adding headers in Angular service
    verifyOtp(otp, email) {
        return this.http.post(`${this.apiUrl}/verifyOtp`, { otp, email });
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map