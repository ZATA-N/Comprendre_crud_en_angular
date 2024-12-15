import {Component, OnInit} from '@angular/core';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products!: Array<any>;

  constructor() {
  }
  ngOnInit() {
    this.products=[
      { id:1, name:"computer", price:1000 },
      { id:2, name:"Printer", price:1200 },
      { id:3, name:"Smart phone", price:6500 },
    ];
  }

  handleDeleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);

  }
}
