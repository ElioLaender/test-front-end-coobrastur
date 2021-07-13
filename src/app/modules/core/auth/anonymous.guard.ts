import { UserService } from '../user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root'})
export class AnonymousGuardService implements CanActivate {

    constructor(private userService: UserService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
                      
        if (this.userService.isLogged()) {
           this.router.navigate(['/painel/clientes/lista-de-clientes']);
           return false;
        }
        return true;
    }
}
