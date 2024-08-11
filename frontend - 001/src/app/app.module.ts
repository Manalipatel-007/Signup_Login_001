// // app.module.ts
// import { HttpClientModule } from '@angular/common/http';

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module'; 

// import { AppComponent } from './app.component';
// import { SignupLoginComponent } from './signup-login/signup-login.component';
// import { DashboardComponent } from './dashboard/dashboard.component'; 

// @NgModule({
//   declarations: [
//     AppComponent,
//     SignupLoginComponent,
//     DashboardComponent 
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     AppRoutingModule ,             // Use AppRoutingModul
//     HttpClientModule        // Add HttpClienModule 
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component'; 

@NgModule({
  declarations: [
    AppComponent,
    SignupLoginComponent,  // Include your component here
    DashboardComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,  // Add HttpClientModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
