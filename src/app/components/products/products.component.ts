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
  public isRowSelcted : boolean;
  public rowIndex :number;

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

public products = [{
  'productId' : "001",
  'productName' : "White Basmathi Rice",
  'createdDate': "2020.01.29",
  'quantity': "100",
  'unitPrice': "400",
  'productDescription':"White Basmathi Rice imported from pakistan"
},
{ 
'productId' : "002",
'productName' : "Sugar",
'createdDate': "2020.01.29",
'quantity': "1200",
'unitPrice': "200",
'productDescription':"White sugar manufactured by Palwatte Factory"
},

{ 
  'productId' : "002",
  'productName' : "Sugar",
  'createdDate': "2020.01.29",
  'quantity': "1200",
  'unitPrice': "200",
  'productDescription':"White sugar manufactured by Palwatte Factory"
},{
  'productId' : "004",
  'productName' : "Dhal",
  'createdDate': "2020.01.29",
  'quantity': "10",
  'unitPrice': "200",
  'productDescription':"Imported mysoor dhal from India"
}

]

public selectProduct(selectedRow){
this.isRowSelcted =true;
this.rowIndex = selectedRow;
}
}
