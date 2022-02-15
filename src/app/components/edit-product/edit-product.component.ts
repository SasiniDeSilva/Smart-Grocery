import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
@Input() productId :string;
@Output() cancelEditView :EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  cancel(){
     this.cancelEditView.emit();
  }

}
