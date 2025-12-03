import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Api } from '../../core/services/api';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-auth',
  imports: [FormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
  providers:[Api]
})
export class Auth {
  phoneNumber: string = '';
  password: string = '';
  isSubmitted: boolean = false;

  constructor(private api:Api, private router: Router){}

  // Submit login with phone and password
  submitLogin() {
    this.isSubmitted = true;
    if (this.isValidPhone(this.phoneNumber) && this.isValidPassword(this.password)) {
      console.log('Logging in with:', this.phoneNumber);
      // TODO: Call API to authenticate
      this.api.login({phone:this.phoneNumber, password:this.password}).subscribe((res:any)=>{
        localStorage.setItem('token', res.token);
          alert(res.message);
          this.router.navigate(['/my-account']);
        }
      );
    }
  }

  // Validation: Phone number (10-15 digits, international)
  isValidPhone(phone: string): boolean {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
  }

  // Validation: Password (min 6 chars)
  isValidPassword(pw: string): boolean {
    return typeof pw === 'string' && pw.trim().length >= 6;
  }
}
