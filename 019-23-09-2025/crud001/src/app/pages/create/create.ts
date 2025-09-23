import { ProductService } from './../../services/product.service';
import { Product } from './../../interfaces/product';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './create.html',
  styleUrl: './create.css'
})
export class Create {
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

  constructor(private productService: ProductService, private router: Router) { }

  save() {
    const formData = new FormData();
    formData.append('productName', this.product.productName);
    formData.append('weight', this.product.weight.toString());
    formData.append('userId', this.product.userId);

    if (this.selectedFile) {
      formData.append('photo', this.selectedFile);
    }

    this.productService.addProduct(formData).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: () => {
        this.router.navigate(['/']);
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
