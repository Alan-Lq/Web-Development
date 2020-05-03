import { Component, OnInit } from '@angular/core';
import { products } from '../products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products=products;
  constructor() { }

  ngOnInit(): void {
  }
  share(){
    window.alert('The product has been shared!');
  }

}
