import { Component } from "@angular/core";

@Component({
    selector:'app-personas',
    templateUrl:'./personas.component.html',
    styleUrls:['./personas.component.css']

})


export class PersonasComponent{
    deshabilitar = false;
    msj='';
    titulo='Estudiante';
    mostrar=false;

    addPerson(){
        this.mostrar=true;
        return this.msj='Persona Agregada'
    }
    /*
    Event binding 
    modificarTitulo(event: Event ){
        this.titulo=(<HTMLInputElement>event.target).value
    }
    */
}
