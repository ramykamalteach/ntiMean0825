import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update implements OnInit {
  product: Product = {
    _id: '',
    productName: '',
    weight: 0,
    photo: '',
    __v: 0,
    userId: '68c2c64c2ef72cf059cc8b5e',
  };

  selectedFile: File | null = null;
  previewUrl: string | null = null;
  productId: string = '';
  isLoading: boolean = false;

  constructor(
    public productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id') || '';

    if (this.productId) {
      this.loadProduct();
    } else {
      this.router.navigate(['/']);
    }
  }

  loadProduct() {
    this.isLoading = true;

    this.productService.getProduct(this.productId).subscribe({
      next: (data: any) => {
        const product = data[0];

        if (product) {
          this.product = {
            _id: product._id || '',
            productName: product.productName || '',
            weight: product.weight || 0,
            photo: product.photo || '',
            __v: product.__v || 0,
            userId: product.userId || '68c2c64c2ef72cf059cc8b5e'
          };

          if (this.product.photo) {
            this.previewUrl = this.product.photo.startsWith('http')
              ? this.product.photo
              : `http://localhost:3001/img/uploades/${this.product.photo}`;
          }
        }
        this.isLoading = false;
      },
      error: (error) => {        
        this.isLoading = false;
        this.router.navigate(['/']);
      }
    });
  }

  update() {
    const formData = new FormData();

    // Add _id as id in backend
    if (this.product._id) {
      formData.append('id', this.product._id);
    } else {
      
      return;
    }

    formData.append('productName', this.product.productName);
    formData.append('weight', this.product.weight.toString());
    formData.append('userId', this.product.userId);
    
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile);
    }
    
    this.productService.updateProduct(formData).subscribe({
      next: (response) => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        
      }
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.previewUrl = URL.createObjectURL(this.selectedFile);
    }
  }

  goBack() {
    history.back();
  }
}