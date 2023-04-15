import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Auth } from '../models/auth.model';
import { Token } from '@angular/compiler';
import { Checkout } from "../models/checkout";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:3000";

  constructor(
    public http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/auth/login`, { email, password });
  }

  products(token: string) {
    return this.http.get(`${this.apiUrl}/products`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
  }

  checkout(check: any, token: string) {
    return this.http.post(`${this.apiUrl}/checkout`, check,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  }
}
