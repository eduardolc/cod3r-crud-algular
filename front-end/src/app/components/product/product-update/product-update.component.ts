import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderData } from '../../tamplate/header/header-data.model';
import { HeaderService } from '../../tamplate/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService
  ) {
    this.headerService.headerData = new HeaderData('Atualizar Produto', 'storefront', 'products/update');
   }

  ngOnInit(): void {
    this.product = new Product();
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(
      product => {
        this.product = product;
      }
    );
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(
      () => {
        this.productService.showMessage('Produto Atualizado com sucesso!');
        this.router.navigate(['/products']);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
