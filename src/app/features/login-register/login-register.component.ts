import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-login-register',
    templateUrl: './login-register.component.html',
    standalone: true,
    imports: [
        MatCardContent,
        MatFormField,
        MatInput,
        ReactiveFormsModule,
        MatButton,
        MatCardActions,
        MatCardHeader,
        MatCard,
        MatLabel,
        MatCardTitle,
        MatError,
        NgIf,
        FormsModule,
    ],
    styleUrls: ['./login-register.component.scss']
})

export class LoginRegisterComponent {
    loginForm: FormGroup;
    registerForm: FormGroup;
    isLoginMode: boolean = true;

    constructor(private readonly fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', [Validators.required]]
        });
    }

    toggleMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmitLogin() {
        if (this.loginForm.valid) {
            console.log('Login Form Data:', this.loginForm.value);
        }
    }

    onSubmitRegister() {
        if (this.registerForm.valid) {
            console.log('Register Form Data:', this.registerForm.value);
        }
    }
}