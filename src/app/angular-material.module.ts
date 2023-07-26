import { NgModule } from "@angular/core";
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  exports: [

    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatMenuModule,
  ]
})
export class AngularMaterialModule {}
