import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.css']
})
export class NavDropdownComponent {

  @Output() sidenavClose = new EventEmitter();

  constructor(){}

  ngOnInit() {
  }

  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }


}
