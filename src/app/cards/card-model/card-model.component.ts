import { CardsService } from './../../services/cards.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.scss']
})
export class CardModelComponent implements OnInit {

  cardForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private cardsService: CardsService,
    private dialogRef: MatDialogRef<CardModelComponent>
  ) { }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      name: ['',  Validators.maxLength(50)],
      title: ['',  [Validators.required, Validators.maxLength(255)]],
      phone: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['',  [Validators.email, Validators.maxLength(50)]],
      address: ['',  Validators.maxLength(255)],

    })
  }

  addCard():void {
    //console.log(this.cardForm.value);
    this.cardsService.addCard(this.cardForm.value)
    .subscribe((res:any) => {
      console.log(res);
      this._snackBar.open('Business Card added succesfully!', '', {duration: 4000});
      this.dialogRef.close(true);
    })
  }


}
