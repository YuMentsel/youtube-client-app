import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { ENV } from '../../constants/enums';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const searchRequest = request.clone({
      url: `${ENV.BASE_URL}${request.url}`,
      setParams: { key: ENV.API_KEY },
    });

    return next.handle(searchRequest).pipe(
      catchError((err) => {
        const error = err.statusText;
        return throwError(() => error);
      }),
    );
  }
}
