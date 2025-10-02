import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../interfaces/cart-item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  products: Product[] = [];
  loading: Boolean = false;

  constructor(private productService: ProductService, private cart: CartService) { }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      }
    });
  }

  addToCart(product: Product) {
    const newCartItem: CartItem = {
      id: product._id,
      name: product.productName,
      price: product.price,
      quantity: 1,
    };

    this.cart.addItem(newCartItem);
  }
}
