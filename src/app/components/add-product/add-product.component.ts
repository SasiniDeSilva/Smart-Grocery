import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/Models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() cancelAddView :EventEmitter<void> = new EventEmitter<void>();
  @Output() productEvent :EventEmitter<Product> = new EventEmitter<Product>();


  productFrom = this.fb.group({
    productName: ['', Validators.required],
    productDescription: ['', Validators.required],
    unitPrice: ['', Validators.required],
    quantity: ['', [Validators.required, Validators.min(50)]],
    expiryDate: ['', Validators.required],
  });

  isDataUploading = false
  
  constructor(private fb : FormBuilder,
    private productService: ProductService) { 
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const values = this.productFrom.value as Product;
    values.createdDate = new Date().toDateString();
    this.isDataUploading = true;
    this.productService.addProduct(values as Product).subscribe((res) => {
      this.isDataUploading = false;
      this.productFrom.reset();
      this.productEvent.emit(res);
    });
  }

  get f() {
    return this.productFrom.controls;
  }

  
  cancel(){
    this.cancelAddView.emit();
 }

}
