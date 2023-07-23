import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  products: Array<any> = [];
  productsDisplayed:Array<any> = [];
  mealSelected: string;
  mealSectionClicked: string;
  lunchClicked: boolean = false;
  breakfastClicked: boolean = false;
  dinnerClicked: boolean = false;


  constructor(private product_service: ProductsService){}

  ngOnInit() {
    this.product_service.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res;
        this.productsDisplayed = res;
        //console.log(this.products)
      },
      error: (error) => {
        alert(error);
      },
      complete: () => {
        console.log("result completed");
      },
    })
  }

  filterByMeal(mealClicked: any){
    this.productsDisplayed =  this.products.filter(item => item.meal === mealClicked);
    console.log(this.productsDisplayed);
    if(mealClicked === 'breakfast'){
      this.breakfastClicked = true;
    }else{
      this.breakfastClicked = false
    }
    if(mealClicked === 'lunch'){
      this.lunchClicked = true;
    }else{
      this.lunchClicked = false
    }
    if(mealClicked === 'dinner'){
      this.dinnerClicked = true;
    }else{
      this.dinnerClicked = false
    }
  }


}
