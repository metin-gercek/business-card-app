import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import {MatCardModule} from '@angular/material/card';
import { CardItemComponent } from './card-item/card-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CardModelComponent } from './card-model/card-model.component';


@NgModule({
  declarations: [
    CardsComponent,
    CardItemComponent,
    CardModelComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class CardsModule { }
