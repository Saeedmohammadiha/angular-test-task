import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router) {}
  login = {
    name: '',
    password: '',
  };

  onSubmit() {
    // Handle form submission here
    console.log('Form submitted:', this.login);
    this.router.navigate(['/home']);
  }
}
