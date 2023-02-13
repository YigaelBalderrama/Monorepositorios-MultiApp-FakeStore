import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';
import { Product, loginClass } from '@fake-store/utlity';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  algo!: loginClass;
  private userSubject$ = new BehaviorSubject<loginClass>(this.algo);
  user$ = this.userSubject$.asObservable();
  constructor(private http: HttpClient) {
    const user = localStorage.getItem('user');
    if (user) {
      this.userSubject$.next(JSON.parse(user));
    }
  }

  public searchProducts(url: string) {
    return this.http.get<Product>(`${environment.baseUrl}${url}`);
  }
  public loginApp(url: string, UserCredentials: loginClass) {
    return this.http
      .post<loginClass>(`${environment.baseUrl}${url}`, UserCredentials)
      .pipe(
        tap((loginuser: loginClass) => {
          this.userSubject$.next(loginuser);
          localStorage.setItem('token', JSON.stringify(loginuser));
        })
      );
  }
}
