import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RegisterPayload, LoginDto } from './register-payload';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private url = 'http://localhost:8080/api/auth/';

  constructor(private httpClient:HttpClient) { }

  register(registerPayload: RegisterPayload): Observable<any> {
    return this.httpClient.post(this.url + 'signup', registerPayload);
  }
  login(payload: LoginDto): Observable<any> {
    return this.httpClient.post(this.url + 'login', payload);
  }
  
}
