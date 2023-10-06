import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() sideNavClose = new EventEmitter();
  rol: any;
  active: boolean = false;
  recargarHeader: number = 0;

  

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.rol = this.GetRole();
    this.loginService.triggerRefresh.subscribe(() => {
      this.reloadPage();
    });
  }

  actualizarHeader() {
    this.recargarHeader = this.recargarHeader ? 0 : 1;
  }

  GetRole() {
    const item = window.localStorage.getItem('rol');
    return item;
  }

  Logout(){
    this.loginService.triggerRefresh.emit(this.rol);
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('rol');
    this.router.navigate(['/login']);
    console.log('Hola');
    
    //this.loginService.triggerRefresh.emit(this.rol);
    
  }

  public onSideNavClose = () => {
    this.sideNavClose.emit();
  }

  buscarProducto(termino: string) {
    if( termino.length < 1 ) {
    return;
  } 

  this.router.navigate(['/buscar', termino]);
}

setActive(): void{
  this.active = !this.active;
}

homeLogin(){
  if(this.rol === null){
    this.router.navigate(['/login']);
  } else {
    this.router.navigate(['/home']);
  }
}

reloadPage() {
 setTimeout(() => {
    location.reload();
 }, 100);
}
 
}
