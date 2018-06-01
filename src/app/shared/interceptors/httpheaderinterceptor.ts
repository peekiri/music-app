import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        
        request = request.clone({
            setHeaders: {
                "Access-Control-Allow-Origin" :  "*",
                "Access-Control-Allow-Credentials" : "true",
                "Content-Type" :  "application/json"
            }
        });

        return next.handle(request);
    }

}