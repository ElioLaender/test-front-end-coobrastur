import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../core/user/user.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    private userService: UserService
    constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        catchError((objError: HttpErrorResponse) => {
          let errorMsg = '';
          if (objError.error instanceof ErrorEvent) {
            errorMsg = `Error: ${objError.error.message}`;
          }
          else {
            // this is server side error
            if (objError.status == 403 && objError.error.message == 'Access Denied') {
                // Token expired
                this.userService.logout();
                this.router.navigate(['publico/usuario/acesso']);
            }
            errorMsg = `Error Code: ${objError.status},  Message: ${objError.message}`;
          }
          return throwError(objError);
        })
      )
  }
}