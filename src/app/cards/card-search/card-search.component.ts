import { Cards } from './../../models/cards';
import { CardsService } from './../../services/cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent {

  constructor(
    private cardsService: CardsService
  ) { }



  search(searchText: string): void {
    searchText = searchText.toLowerCase();
    this.cardsService.filteredCard = this.cardsService.cards.filter((card: Cards) => {
      return card.title.toLowerCase().indexOf(searchText) > -1 || (card.name && card.name.toLowerCase().indexOf(searchText) > -1) || (card.phone && card.phone.toLowerCase().indexOf(searchText) > -1) || (card.address && card.address.toLowerCase().indexOf(searchText) > -1) ;
    })
  }

}
