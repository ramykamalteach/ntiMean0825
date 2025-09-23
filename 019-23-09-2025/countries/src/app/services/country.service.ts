import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  getCountries(lang : String): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/lang/${lang}`);
  }
}
