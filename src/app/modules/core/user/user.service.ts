import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import jwt_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { UserToken } from './user-token';

@Injectable({ providedIn: 'root'})
export class UserService {

    private userSubject = new BehaviorSubject<UserToken|any>(null);
    private userName: string;
    

    constructor(private tokenService: TokenService,
                private http: HttpClient) {

        if (this.tokenService.hasToken()) {
            this.decodeAndNotify();
        }
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = token;
        this.userName = user;
        this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.userName;
    }

    getFirstAndLastName(name: string) {
    
        let arrayName = name.split(' ');
        if (arrayName.length > 1) {
          return `${arrayName[0]} ${arrayName.pop()}`;
        }
        
        return arrayName[0];
    }
}