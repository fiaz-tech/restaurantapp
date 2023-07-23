import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any[] = [];

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get('assets/data.json');
  }

  getProduct(){
    return this.products
  }

  saveCart(){
    localStorage.setItem('cart-items', JSON.stringify(this.products));
  }

  addToCart(addedProduct: any){
    this.products.push(addedProduct);
    this.saveCart();
  }

  loadCart(){
    this.products = JSON.parse(localStorage.getItem('cart-items') as any) || [];
  }

  productInCart(product: any){
    return this.products.findIndex((x: any) => x._id === product._id) > -1;
  }

  removeProduct(product: any){
    const index = this.products.findIndex((x: any) => x._id === product._id)
    if(index > -1){
      this.products.splice(index, 1);
      this.saveCart()
    }
  }

  clearProducts(){
    localStorage.clear()
  }


}
