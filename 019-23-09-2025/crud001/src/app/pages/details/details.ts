import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css'
})
export class Details {
  product: Product | null = null;

  constructor(private route: ActivatedRoute, private router: Router, public productService: ProductService) { }

  ngOnInit() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe({
      next: (data: any) => (this.product = data[0])
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
