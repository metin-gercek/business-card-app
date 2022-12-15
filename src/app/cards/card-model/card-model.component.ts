import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.scss']
})
export class CardModelComponent implements OnInit {

  cardForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.cardForm = this.formBuilder.group({
      name: ['',  Validators.max(50)],
      title: ['',  [Validators.required, Validators.max(255)]],
      phone: ['', [Validators.required, Validators.max(20)]],
      email: ['',  [Validators.email, Validators.max(50)]],
      address: ['',  Validators.max(255)],

    })
  }

  addCard():void {
    console.log(this.cardForm.value);
  }

}
