import { Component, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, AlertComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule,AlertComponent, ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle]
})
export class LoginComponent {

  private fb = inject(FormBuilder)
  private router = inject(Router)
  public loginForm: FormGroup
  public error = false;

  constructor() {
    this.loginForm = this.fb.group({
      userName: new FormControl(''),
      password: new FormControl(''),
    })

   }

  login(){
    let userName = this.loginForm.value.userName
    let password = this.loginForm.value.password

    if (userName === 'pruebaUsuario' || password === '123456'){
      this.loginForm.reset()
      this.router.navigate(['/dashboard']);
    }else{
      this.error = true
      this.loginForm.reset();
    }

  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

}
