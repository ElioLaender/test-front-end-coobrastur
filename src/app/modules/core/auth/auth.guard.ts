import { UserService } from '../user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if (this.userService.isLogged()) {
            return true;
        }
        this.router.navigate(['publico/usuario/acesso']);
        return false;
    }
}
