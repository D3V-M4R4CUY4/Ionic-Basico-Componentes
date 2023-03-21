import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Carlos';

  // Aqui es donde voy a recoger los datos del formulario
  usuario = {
    email: '',
    pass:''
  }
  

  constructor() { }

  ngOnInit() {
  }

// Aqui capturo los datos del formulario
  onSubmit(formulario:NgForm) {
    console.log('submit')
    console.log(this.usuario)
    console.log(formulario)
  }


}
