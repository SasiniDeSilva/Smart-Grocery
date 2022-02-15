import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  showAddProduct : boolean;
  showEditProduct : boolean;
  public isLowInventory = true;
  public isRowSelcted: boolean;
  public rowIndex: number;
  public products: Product[];
  isLoading: boolean = false;
  selectedProductId :number;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
      },
      error: ()=> console.log("oops.. somting went wrong..."),
      complete: ()=> this.isLoading = false
    })
  }


  public selectProduct(selectedRow, product :Product) {
    this.isRowSelcted = true;
    this.rowIndex = selectedRow;
    this.selectedProductId =product.id;
  }

  showAddProducts() {
    this.showAddProduct = true;
  }
  
  hideAddProducts(){
    this.showAddProduct =false;
  }
  
  refresh(){
    this.getProducts();
  }

  OpenEditProductView(){
    this.showEditProduct = true;
  }
  
  closeEditView(){
    this.showEditProduct = false;
  }
}
