import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  products: Product[] = [];

  constructor(public productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts().subscribe((data) => (this.products = data));
  }

  createProduct() {
    this.router.navigate(['/create']);
  }
  showDetails(id: string) {
    this.router.navigate(['/details', id]);
  }

  updateProduct(id: string) {
    this.router.navigate(['/update', id]);
  }

  deleteProduct(id: string) {
  if (confirm('Are you sure you want to delete this product?')) {
    this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  }
}

}
