import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor() { 
  }

  ngOnInit(): void {
    alert("ngOnInit Called");
    console.log("triggered ngOnInit")
  }

  ngDoCheck() {
    console.log("triggered ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("triggered ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("triggered ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("triggered ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("triggered ngAfterViewChecked");
  }

  ngOnDestroy() {
    alert("ngDestroy Called");
    console.log("triggered ngOnDestroy");
  }
}
