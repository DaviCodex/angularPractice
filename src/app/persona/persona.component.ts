import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  
  
  nombre: string ='Pepito';
  apellido: string ='Perez';
  
  edad: number =29;
  //private edad: number =29;
  /*getEdad():number {
    return this.edad;
  }*/
}
