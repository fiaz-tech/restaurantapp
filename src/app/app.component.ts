import { Component, OnInit, Inject, HostListener } from '@angular/core';

import { DOCUMENT } from '@angular/common'
import { NgwWowService } from 'ngx-wow';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  scrolled: boolean = false
  windowScrolled: boolean


  constructor(private wowService: NgwWowService, @Inject(DOCUMENT) private document: Document) {
    this.wowService.init();
  }

  //constructor(@Inject(DOCUMENT) private document: Document) {}

  @HostListener('window: scroll', ['$event'])onScroll(){
    if(window.scrollY > 300){
      this.scrolled = true;
    }else{
      this.scrolled = false;
    }
  }

ngOnInit() {
  window.scroll(0,0);
}

}
