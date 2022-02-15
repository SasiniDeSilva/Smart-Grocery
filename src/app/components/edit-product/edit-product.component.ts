import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
@Input() productId :string;

  constructor() { }

  ngOnInit(): void {
  }

}
