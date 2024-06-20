import { Component } from "@angular/core";

@Component({
    selector:'app-personas',
    templateUrl:'./personas.component.html',
    styleUrls:['./personas.component.css']

})


export class PersonasComponent{
    deshabilitar = false;
    msj ='No se ha agregado ninguna persona'
    addPerson(){
        return this.msj='Persona Agregada'
    }
}
