import { Component, HostListener,  Output, EventEmitter, OnInit} from '@angular/core';
import { HotObservable } from 'rxjs/internal/testing/HotObservable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  scrollingDown: boolean = false;
  isOpened: boolean = false;

  @Output() public sidenavToggle = new EventEmitter();

  @HostListener('window: scroll', ['$event'])onScroll(){
    if(window.scrollY > 45){
      this.scrollingDown = true;
    }else{
      this.scrollingDown = false;
    }
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();

  }


}
