import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})
export class PlaceorderComponent implements OnInit {

  selectedImage: string;
  products: Array<any> = [];
  productData!: any;
  subTotal: any;
  products_cart: Array<any> = [];
  mouseOver: boolean = false;
  showButton: boolean;
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  constructor(private product_service: ProductsService, private router: Router){}

  ngOnInit() {
    this.product_service.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        console.log(this.products)
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {
        console.log("result completed");
      },
    })
  }

  //On mouse over product
  onMouseOver(event: any){
    this.mouseOver = true;

  }

  //display modal
  modalData(product: any){
    this.productData = product;
  }

  //add to cart
  addToCart(product: any){

    console.log(product)
    if(!this.product_service.productInCart(product)){
      product.quantity = 1;
      this.product_service.addToCart(product);
      this.products_cart = [...this.product_service.getProduct()]
      this.subTotal = product.price;
    }
  }

//remove from cart
removeFromCart(product: any){
  this.product_service.removeProduct(product);
  this.products_cart = this.product_service.getProduct();

}

//calculate total price
get total() {
  return this.products_cart?.reduce(
    (sum, product) => ({
      quantity: 1,
      price:sum.price + product.quantity * product.price
    }),
    {quantity: 1, price: 0}
  ).price
}

//checkout
checkOut(){
  localStorage.setItem('cart_total', JSON.stringify(this.total));
  this.router.navigate(['/payment'])
}

}
