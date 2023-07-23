import { Component, OnInit, HostListener } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { OwlOptions } from 'ngx-owl-carousel-o/public_api';




@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],

})
export class LandingComponent implements OnInit {

  selectedImage: string;
  scrolled: boolean = false;
  products: Array<any> = [];
  productsDisplayed:Array<any> = [];
  mealSelected: string;
  mealSectionClicked: string;
  lunchClicked: boolean = false;
  breakfastClicked: boolean = false;
  dinnerClicked: boolean = false;

  //variable that hold a number
  projectCount: number = 0;
  experienceCount: number = 0;

  projectCountStop: any = setInterval(() => {
    this.projectCount++;
    if(this.projectCount == 70){
      clearInterval(this.projectCountStop)
    }
  }, 100)

  experienceCountStop: any = setInterval(() => {
    this.experienceCount++;
    if(this.experienceCount == 20 ){
      clearInterval(this.experienceCountStop)
    }
  }, 100)

  dataArr: ['breakfast', 'lunch', 'dinner']
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

  @HostListener('window: scroll', ['$event'])onScroll(){
    if(window.scrollY > 300){
      this.scrolled = true;
    }else{
      this.scrolled = false;
    }
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

  scrollToTop() {
    window.scroll(0,0);
  }


}
