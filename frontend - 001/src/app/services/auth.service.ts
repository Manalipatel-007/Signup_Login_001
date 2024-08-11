import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  
  // Method to sign up user
 
  signUp(userData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/signup`, {userData});
  }

  sendOtp(email: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/sendOtp`, { email });
  }
  

// Example of adding headers in Angular service




  verifyOtp(otp: string, email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verifyOtp`, { otp, email });
  }
}
  function take(arg0: number): import("rxjs").OperatorFunction<Object, unknown> {
    throw new Error('Function not implemented.');
  }

  function retry(arg0: number): import("rxjs").OperatorFunction<unknown, unknown> {
    throw new Error('Function not implemented.');
  }

  function sendOtp(email: any, string: any): ((error: any) => void) | null | undefined {
    throw new Error('Function not implemented.');
  }

  function verifyOtp(otp: any, string: any, email: any, string1: any): any {
    throw new Error('Function not implemented.');
  }

