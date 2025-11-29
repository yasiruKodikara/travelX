import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule,NgIf],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  name: string = '';
  email: string = '';
  password: string = '';
  isSubmitted: boolean = false;

  // Submit registration form
  submitRegister() {
    this.isSubmitted = true;
    if (this.isValidName(this.name) && this.isValidEmail(this.email) && this.isValidPassword(this.password)) {
      console.log('Registering user:', { name: this.name, email: this.email });
      // TODO: Call API to register user
      
      alert('Registration successful!');
      this.resetForm();
    }
  }

  // Validation: Name (at least 2 chars)
  isValidName(name: string): boolean {
    return typeof name === 'string' && name.trim().length >= 2;
  }

  // Validation: Email format
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validation: Password (min 6 chars)
  isValidPassword(pw: string): boolean {
    return typeof pw === 'string' && pw.trim().length >= 6;
  }

  // Reset form
  resetForm() {
    this.name = '';
    this.email = '';
    this.password = '';
    this.isSubmitted = false;
  }
}
