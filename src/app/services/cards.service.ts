import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {


  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) { }

  getCards(): Observable<Cards[]> {
    return this.http.get<Cards[]>(this.apiUrl+'/cards');
  }
  addCard(card: Cards) {
    return this.http.post(this.apiUrl+'/cards', card);
  }
}
