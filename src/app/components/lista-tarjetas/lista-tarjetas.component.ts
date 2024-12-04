import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/services/tarjetas.services';

@Component({
    selector: 'app-lista-tarjetas',
    templateUrl: './lista-tarjetas.component.html',
    styleUrls: ['./lista-tarjetas.component.css'],
    standalone: true,
    imports: [CommonModule]
})
export class ListaTarjetasComponent implements OnInit {
  listTarjetas:any[]=[];
  constructor(private _cardService : CardService, 
    private router: Router) { }

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
