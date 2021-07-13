import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Auth } from './auth';
import { UserService } from '../user/user.service';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serverUrl = environment.baseUrl;
  constructor(private http: HttpClient,
              private userService: UserService) { }

  authenticate(email: string, password: string) {
    return this.http
    .post<Auth>(`${this.serverUrl}/login`,
     {email, password},
     {observe: 'response'}
    )
    .pipe(tap(res => {
      const authToken = res.body.token;
      this.userService.setToken(authToken);
    }));
  }
}
