import { NgModule } from "@angular/core";

import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatNavList } from "@angular/material/list";



@NgModule({
  exports: [

    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,

    MatSidenavModule,
    MatListModule,
    MatMenuModule,
  ]
})
export class AngularMaterialModule {}
