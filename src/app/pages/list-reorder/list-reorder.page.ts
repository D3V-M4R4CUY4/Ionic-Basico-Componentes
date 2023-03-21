import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  disabled:boolean=true
  

  // Aqui creamos un arrelgo con personajes
  personajes: string[] = [
    'Aquaman',
    'Batman',
    'Superman',
    'Flash',
    'Wonder Woman',
  ];

  constructor() {}

  ngOnInit() {}

  doReorder(event:any) {
    console.log(event)

    // para cambiar un elemento de posicion hacemos lo siguiente

    // Sacar el elemento movido
    const itemcambiado = this.personajes.splice(event.detail.from, 1)[0]
    // Dejo caer el elemento en la posicion que desee
    this.personajes.splice(event.detail.to,0,itemcambiado)


    event.detail.complete()

    console.log(this.personajes)
  }

}
