

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component'; // Import your components
// import { SignupLoginComponent } from './signup-login/signup-login.component'; 

// const routes: Routes = [
//   { path: 'dashboard', component: DashboardComponent },
//   { path: '', component: SignupLoginComponent }, // Default route
//   // Add other routes here if necessary
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupLoginComponent } from './signup-login/signup-login.component';

const routes: Routes = [
  { path: '', component: SignupLoginComponent },
  { path: 'dashboard', component: DashboardComponent }, // Add this if you have a dashboard component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
