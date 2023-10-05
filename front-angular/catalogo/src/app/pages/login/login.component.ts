import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { LoginService } from '../../service/login.service'
import { UserInfo } from '../../models/userinfo.model';
import { UserInfoInterface } from '../../models/userinfo.class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit  {
  checkLoginForm: any;
  userInfo: UserInfo= new UserInfo;
  tiempoDeVidaEnMinutos = 60
  tokenExpiration: any;
  role: any;

  constructor (
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
    
  ) {
    this.checkLoginForm = this.fb.group({
      email: "",
      password: "",

   });
  }
  ngOnInit(): void {
   }
   
  async onSubmit(){
    this.userInfo.Email = this.checkLoginForm.value.usuario;
    this.userInfo.Password = this.checkLoginForm.value.password;

    const data = this.checkLoginForm.value;

    let userInfoInterface: UserInfoInterface = Object.assign({}, this.checkLoginForm.value);

    this.tokenExpiration = this.calcularFechaExpiracion(this.tiempoDeVidaEnMinutos);

    (await this.loginService.LoginUsers(userInfoInterface)).subscribe(
      token => this.getToken(token.token, this.tokenExpiration, token.rol)),
    (error: any) => this.errorMessage(error)
    alert("Login Successful");
    this.checkLoginForm.reset()
    //window.location.reload();
    this.router.navigate(['home']);
    
    this.loginService.triggerRefresh.emit();
      
  }

  getToken(token: string, tokenExpiration: string, rol: string ) { 
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', tokenExpiration);
    localStorage.setItem('rol', rol);
    //window.location.reload();
    //this.router.navigate(['home']);
  }

  calcularFechaExpiracion(tiempoDeVidaEnMinutos: number): Date {
    const fechaActual = new Date();
    const fechaExpiracion = new Date(fechaActual.getTime() + tiempoDeVidaEnMinutos * 60000); // 1 minuto = 60000 milisegundos
    return fechaExpiracion;
  }

  errorMessage(error: any) {
      if (error && error.error) {
      alert(error.error[""]);
    }
  }

  async refresh() {
    console.log('Hola');
    
    await window.location.reload();
  }

 } 



