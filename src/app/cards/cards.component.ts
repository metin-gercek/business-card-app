import { CardsService } from './../services/cards.service';
import { CardModelComponent } from './card-model/card-model.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cards } from '../models/cards';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public cardsService: CardsService
  ) { }

  ngOnInit(): void {
    this.cardsService.getCards();
  }

  openAddCardModal(): void {
    const dialog = this.dialog.open(CardModelComponent, {
      width: '400px',
    });


  }

}
