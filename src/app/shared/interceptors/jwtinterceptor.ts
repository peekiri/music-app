import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        
        if(localStorage.getItem('validUser') === 'true') {
            request = request.clone({
                setHeaders: {
                    Authorization: localStorage.getItem('authHeader')
                }
            });
        }

        return next.handle(request);
    }

}