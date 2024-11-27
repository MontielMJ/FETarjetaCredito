import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Card from 'src/models/Card';
import { CardService } from 'src/services/tarjetas.services';


@Component({
    selector: 'app-tarjeta-credito',
    templateUrl: './tarjeta-credito.component.html',
    styleUrls: ['./tarjeta-credito.component.css'],
    standalone: false
})

export class TarjetaCreditoComponent implements OnInit {

form:UntypedFormGroup;
constructor(private fb: UntypedFormBuilder,
            private toastr: ToastrService,
            private _cardService : CardService, 
            private router: Router
          ) { 
    this.form=this.fb.group({
      titular:['',Validators.required],
      numeroTarjeta:['',[Validators.required,Validators.maxLength(16), Validators.minLength(16)]],
      fechaExpiracion:['',[Validators.required,Validators.maxLength(5), Validators.minLength(5)]],
      cvv:['',[Validators.required,Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
    
  }
agregarTarjeta(){
  const card:  Card={
       titular: this.form.get('titular')?.value,
        numeroTarjeta: this.form.get('numeroTarjeta')?.value,
        fechaExpiracion: this.form.get('fechaExpiracion')?.value,
        cvv: this.form.get('cvv')?.value,
   }

   this._cardService.createCard(card).subscribe(data => {
      this.toastr.success('La tarjeta ha sido Registrada','TARJETA REGISTRADA')
      this.router.navigate(['/']);
      this.form.reset();
   }, error=>{
      console.log(error);
      this.form.reset();
   })
}

}
