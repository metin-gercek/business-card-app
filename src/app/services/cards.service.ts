import { Cards } from './../models/cards';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards!: Cards[];
  filteredCard!: Cards[];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) { }

  getCards(): void {
    this.http.get<Cards[]>(this.apiUrl+'/cards')
    .subscribe((res: Cards[]) => {
      this.cards = this.filteredCard = res;
    })
  }
  addCard(card: Cards) : Observable<any> {
    return this.http.post(this.apiUrl+'/cards', card);
  }
  updateCard(card: Cards, cardId: Number) : Observable<any> {
    return this.http.put(this.apiUrl+'/cards/' + cardId, card);
  }

  deleteCard(cardId: number): Observable<any>  {
    return this.http.delete(this.apiUrl+'/cards/' + cardId);
  }
}
