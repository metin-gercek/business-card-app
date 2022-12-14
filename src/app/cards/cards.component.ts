import { CardModelComponent } from './card-model/card-model.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardItems = {
    name: 'Metin Gercek',
    title: 'Full stacck developer',
    phone: '0469638904',
    email: 'metingercek@gmail.com',
    address: 'Helsinki - Finland'
  }

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openAddCardModal(): void {
    this.dialog.open(CardModelComponent, {
      width: '400px',
    })
  }
}
