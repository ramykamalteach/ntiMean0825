import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-product',
  imports: [],
  templateUrl: './show-product.html',
  styleUrl: './show-product.css'
})
export class ShowProduct {
  productId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id');
    });
  }
}
