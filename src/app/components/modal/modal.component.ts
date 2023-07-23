import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() product!: any;
  @ViewChild('closeModal') private closeModal!: ElementRef;

  constructor(private service: ProductsService, private router: Router) {}

  ngOnInit(): void {}

  public hideModal() {
    this.closeModal.nativeElement.click();
  }




}
