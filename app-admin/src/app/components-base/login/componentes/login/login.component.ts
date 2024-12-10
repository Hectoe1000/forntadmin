import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest } from '../../models/login-request.model';
import { LoginService } from '../../services/login.service';
import { LoginResponse } from '../../models/login-response.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // colocamos variables
formlogin: FormGroup;
loginRequest:LoginRequest=new LoginRequest();


constructor(
  private _formBuilder:FormBuilder,
  private _loginServices:LoginService,
  private _ruteo:Router
){
  this.formlogin = this._formBuilder.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
}






login() {

  console.log(this.formlogin.getRawValue());

  //este login request lo tengo que enviar hacia el servicio web
  this.loginRequest = this.formlogin.getRawValue();

  this._loginServices.login(this.loginRequest).subscribe({
    next: (data: LoginResponse) => {
      console.log(data);
      alert("login correcto ");
      //redirigir al dashboard
      this._ruteo.navigate(['dashboard']);

    
      

    },
    error: (err) => {
      alert('constraseña o usuario incorrecto')
     },
    complete: () => { },
  });
}


}
