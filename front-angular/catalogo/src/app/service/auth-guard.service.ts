import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  rol: any;

  constructor(private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.rol = this.GetRole();
   
    if (this.rol !== 'Administrador') {
      alert("Acceso de negado comuniquese con el Administrador del sistema")
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

  GetRole() {
    const item = window.localStorage.getItem('rol');
    return item;
  }
}

