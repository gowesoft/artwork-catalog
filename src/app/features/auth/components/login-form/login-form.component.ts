import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

import { AuthService } from '../../../../core/services/auth.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: error => {
          console.log("Login failed", error);
        }
      });
    } else {
      this.handleValidationErrors();
    }
  }

  handleValidationErrors(): void {
    const errors = [];
    if (this.loginForm.get('username')?.errors?.['required']) {
      errors.push({severity:'error', summary:'', detail:'Username is required.'});
    }
    if (this.loginForm.get('username')?.errors?.['minlength']) {
      errors.push({severity:'error', summary:'', detail:'Username must be at least 5 characters long.'});
    }
    if (this.loginForm.get('password')?.errors?.['required']) {
      errors.push({severity:'error', summary:'', detail:'Password is required.'});
    }
    if (this.loginForm.get('password')?.errors?.['minlength']) {
      errors.push({severity:'error', summary:'', detail:'Password must be at least 8 characters long.'});
    }
    this.messageService.clear();
    this.messageService.addAll(errors);
  }

}
