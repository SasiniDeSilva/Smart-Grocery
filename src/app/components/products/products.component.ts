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

public products = [{
  'productId' : "001",
  'productName' : "White Basmathi Rice",
  'createdDate': "2020.01.29",
  'quantity': "100",
  'unitPrice': "400",
  'productDescription':"White Basmathi Rice imported from pakistan. High quality rice with extra fragnance. Organically grown."
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
  'productId' : "003",
  'productName' : "Flour",
  'createdDate': "2020.01.29",
  'quantity': "50",
  'unitPrice': "190",
  'productDescription':"uper FIne Whole grain general Purpose flour"
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
