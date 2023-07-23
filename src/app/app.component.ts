import { Component, OnInit, OnDestroy, Inject, HostListener } from '@angular/core';

import { DOCUMENT } from '@angular/common'
import { HotObservable } from 'rxjs/internal/testing/HotObservable';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs';
import { filter } from 'rxjs/operators';
import * as $ from 'jquery'



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
