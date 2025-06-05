import { Component, OnInit } from '@angular/core';
import Card from 'src/models/Card';
import { CardService } from 'src/services/tarjetas.services';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
    selector: 'app-lista-tarjetas',
    templateUrl: './lista-tarjetas.component.html',
    styleUrls: ['./lista-tarjetas.component.css'],
    standalone: true,
    imports: [CommonModule,ReactiveFormsModule,RouterModule]
})

export class ListaTarjetasComponent implements OnInit 
{
  form: FormGroup;
  listTarjetas:any[]=[];
  tarjeta: Card = {} as Card;
  constructor(
        private fb: FormBuilder,
        private router: RouterModule,
        private _cardService : CardService)
    {
        this.form = this.fb.group({
        cardNumber: ['',Validators.required],
        cardHolder: ['',Validators.required],
        expirationDate: ['',Validators.required],
        cvv: ['',Validators.required,Validators.minLength(3), Validators.maxLength(3)],
      });
    }

  ngOnInit(): void {
    this.ObtenerTarjetas();
  }

  ObtenerTarjetas(){
    this._cardService.getCards().subscribe(data => {
        this.listTarjetas=data;
        console.log(data);
    }, error=>{
        console.log(error); 
    })
  }

}
