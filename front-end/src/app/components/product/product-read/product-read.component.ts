import { Component, Inject, Injectable, Injector, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];
  
  constructor(
    private productService: ProductService
  ) {
   }

  ngOnInit(): void {
    this.productService.read().subscribe(
      resp => {
        this.products = resp;

        console.log(this.products);
      }
    );
  }

}
