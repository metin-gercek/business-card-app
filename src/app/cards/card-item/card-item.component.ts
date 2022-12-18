import { CardModelComponent } from './../card-model/card-model.component';
import { MatDialog } from '@angular/material/dialog';
import { Cards } from './../../models/cards';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() cardItems!: Cards;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openUpdateCardModal(card: Cards): void {
    this.dialog.open(CardModelComponent, {
      width: '400px',
      data: card
    })
  }

}
