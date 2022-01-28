import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public firstProductItemName = "White Basmathi Rice" ;
  public storage =10;
  public isLowInventory = true;

  public getPriceofRice(){
    return 350;
  }

  public getStorage(){
    if(this.storage < 50){
    this. isLowInventory =true;
    }
    return this.storage;
  }


// variables related to show how private protected members work in interpolation.
// Please do desired interpolation in html with following variables
//private firstProductItemName = "White Basmathi Rice" ;
//protected firstProductItemName = "White Basmathi Rice" ;
  

 
// variables related to show Invalid templates using Assignment, bitwise, increment and decrement perators (=,+=, -=, |, &, ++, –,!, ?. etc.)
// Please do desired interpolation in html with following variables
// public quantityOfRice : number = 5;
//<td>{{quantityOfRice++}}</td>
//<td>{{quantityOfRice + 1 }}</td>

}
