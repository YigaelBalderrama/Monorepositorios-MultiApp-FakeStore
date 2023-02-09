import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';
import { Product } from '@fake-store/utlity'

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  public searchProducts(url: string) {
    return this.http.get<Product>(`${environment.baseUrl}${url}`);
  }
}