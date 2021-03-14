import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderData } from '../../components/tamplate/header/header-data.model';
import { HeaderService } from '../../components/tamplate/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    this.headerService.headerData = new HeaderData('Cadastro de Produtos', 'storefront', '/products');
   }

  ngOnInit(): void {
  }

  navigateToProductCreate() {
    this.router.navigate(['products/create']);
  }

}
