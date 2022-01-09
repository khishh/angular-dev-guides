import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.router.snapshot.paramMap;
    const productId: Number = Number(params.get('productId'));
    this.product = products.find((product) => product.id === productId);
  }
}
