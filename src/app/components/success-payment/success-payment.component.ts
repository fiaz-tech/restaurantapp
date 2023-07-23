import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-success-payment',
  templateUrl: './success-payment.component.html',
  styleUrls: ['./success-payment.component.css']
})
export class SuccessPaymentComponent implements OnInit {
  constructor(private router: Router, private product_service: ProductsService
  ) {}

  ngOnInit(): void {}

  goBackToHome() {
    this.product_service.clearProducts();
    this.router.navigate(['/home']);
  }

}
