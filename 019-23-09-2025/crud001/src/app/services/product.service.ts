import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../interfaces/product';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = '/api/v1.0/products';
  constructor(private http: HttpClient) { }


  private handleRequest<T>(obs: Observable<T>, successMsg?: string): Observable<T> {
    return obs.pipe(
      tap(() => {
      }),
      catchError(() => {
        return of() as Observable<T>;
      })
    );
  }


  getProducts(): Observable<Product[]> {
    return this.handleRequest(this.http.get<Product[]>(this.apiUrl));
  }

  getProduct(id: string): Observable<Product> {
    return this.handleRequest(this.http.get<Product>(`${this.apiUrl}/show/${id}`));
  }

  addProduct(productData: FormData): Observable<Product> {
    return this.handleRequest(
      this.http.post<Product>(`${this.apiUrl}/store`, productData),
      'Product created successfully!'
    );
  }

  updateProduct(id: string, product: FormData): Observable<Product> {
    return this.handleRequest(
      this.http.put<Product>(`${this.apiUrl}/update`, product),
      'product updated successfully!'
    );
  }

  deleteProduct(id: string): Observable<void> {
    return this.handleRequest(this.http.delete<void>(`${this.apiUrl}/destroy/${id}`), 'product deleted successfully!');
  }

}
