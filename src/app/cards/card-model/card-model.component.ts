import { Cards } from './../../models/cards';
import { CardsService } from './../../services/cards.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.scss']
})
export class CardModelComponent implements OnInit {

  cardForm!: FormGroup;
  showLoadingBar: boolean = false;

  constructor(
   @Inject(MAT_DIALOG_DATA) public data: Cards,
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private cardsService: CardsService,
    private dialogRef: MatDialogRef<CardModelComponent>,

  ) { }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      name: [this.data?.name || '',  Validators.maxLength(50)],
      title: [this.data?.title || '',  [Validators.required, Validators.maxLength(255)]],
      phone: [this.data?.phone || '', [Validators.required, Validators.maxLength(20)]],
      email: [this.data?.email || '',  [Validators.email, Validators.maxLength(50)]],
      address: [this.data?.address || '',  Validators.maxLength(255)],

    })
  }

  addCard():void {
    this.showLoadingBar = true
    this.cardsService.addCard(this.cardForm.value)
    .subscribe((res:any) => {
      this._snackBar.open('Business Card added succesfully!', '', {duration: 4000});
      this.cardsService.getCards();
      this.showLoadingBar = false;
      this.dialogRef.close();
    })
  }

  updateCard() : void {
    this.showLoadingBar = true;
    this.cardsService.updateCard(this.cardForm.value, this.data.id)
    .subscribe ((res: any) => {
      this._snackBar.open('Business Card updated succesfully!', '', {duration: 4000});
      this.cardsService.getCards();
      this.showLoadingBar = false;
      this.dialogRef.close();
    })
  }

  deleteCard(): void {
    this.showLoadingBar = true
    this.cardsService.deleteCard(this.data.id)
    .subscribe((res:any)=> {
      this._snackBar.open('Business Card deleted succesfully!', '', {duration: 4000});
      this.cardsService.getCards();
      this.showLoadingBar = false;
      this.dialogRef.close();
    })
  }
}
