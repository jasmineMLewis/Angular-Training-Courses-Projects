import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

//selectors are only required if the component will be nested 
//in another component
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  imageWidth: number = 200;
  imageMargin: number = 2;

  constructor(private route: ActivatedRoute,
                private router: Router,
                private productService: ProductService) { }

  ngOnInit() {
    let param = this.route.snapshot.paramMap.get('id');
    if (param) {
       //add a '+' at the beginning bcuz the parameter 'id' is a string need to convert to a number
      const id = +param;
      this.getProduct(id);
    }
  }

  getProduct(id: number) {
    this.productService.getProuct(id).subscribe({
      next: product => this.product = product
    });
  }

  onBack(): void {
    this. router.navigate(['/products']);
  }
}
