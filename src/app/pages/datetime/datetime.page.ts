import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  fechaNacimiento:Date = new Date()

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event:any ) {
    console.log(event)
    console.log(new Date(event.detail.value))
  }

}
