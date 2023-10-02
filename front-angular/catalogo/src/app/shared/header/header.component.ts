import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  rol: any;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.rol = this.GetRole();
    console.log(this.rol);
   
  }

  GetRole() {
    const item = window.localStorage.getItem('rol');
    return item;
  }

  Logout(){
    console.log(this.rol);
    
    this.loginService.triggerRefresh.emit(this.rol);
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('rol');
    this.router.navigate(['/login']);
    console.log('Hola');
    
    //this.loginService.triggerRefresh.emit(this.rol);
    
  }
 
}
