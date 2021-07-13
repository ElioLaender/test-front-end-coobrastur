import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service';
import { LoginMessage } from './login-message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginMessage: LoginMessage = new LoginMessage();
  loginAttemp: boolean = false;
  loadRequest: boolean = false;
  
  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private titleService: Title,
              private router: Router) { }

  
  ngOnInit(): void {

    this.titleService.setTitle('Acesso | COOBRASTUR');
    this.buildForm();
  }

  buildForm() {

    this.loginForm = this.formBuilder.group({
      email: ['',
              [
                Validators.required,
                Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i),
                Validators.maxLength(100)
              ]
            ],
      password: ['', Validators.required]
    });
  }

  login() {

    this.loginAttemp = true;
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;

    if (email === '' || password === '') {
      return;
    }

    this.loadRequest = true;
    this.loginMessage.resetAllStatus();

    this.authService.authenticate(email, password)
    .subscribe(
        (value) => {

          this.loadRequest = false;
          this.router.navigate(['/painel/clientes/lista-de-clientes']);
        },
        (err) => {

          this.loadRequest = false;
          this.loginMessage.resetAllStatus();
          
          switch (err.status) {
            case 400:
              this.loginMessage.setInvalidCredentials(true);
              break;
            default:
              this.loginMessage.setUnexpectedError(true);
          }
        }
    );

  }

}
