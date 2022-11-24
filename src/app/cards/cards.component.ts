import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
