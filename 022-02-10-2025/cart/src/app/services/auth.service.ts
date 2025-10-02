import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/v1.0/signin';
  private tokenKey = 'access_token';

  isLoggedIn = signal<boolean>(false);

  constructor(private http: HttpClient) {
    this.isLoggedIn.set(!!this.getToken());
  }

  login(credentials: { userName: string; password: string }): Observable<any> {
    const body = new HttpParams()
      .set('userName', credentials.userName)
      .set('password', credentials.password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<{ token: string }>(this.apiUrl, body.toString(), { headers }).pipe(
        tap((res) => {
          localStorage.setItem(this.tokenKey, res.token);
          this.isLoggedIn.set(true);
        })
      );
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.isLoggedIn.set(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
