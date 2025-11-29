import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  phoneNumber: string = '';
  password: string = '';
  isSubmitted: boolean = false;

  // Submit login with phone and password
  submitLogin() {
    this.isSubmitted = true;
    if (this.isValidPhone(this.phoneNumber) && this.isValidPassword(this.password)) {
      console.log('Logging in with:', this.phoneNumber);
      // TODO: Call API to authenticate
      alert('Login successful!');
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
