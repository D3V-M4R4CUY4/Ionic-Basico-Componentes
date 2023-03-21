import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

// De esta manera recogemos los datos que pasamos del componente padre
  @Input() nombre!:string
  @Input() pais!:string

  constructor(private modalctrl:ModalController) { }

  ngOnInit() {
  }

  salirsinargs() {
  this.modalctrl.dismiss()
}
  
  
  salirconargs() {
    this.modalctrl.dismiss({
      nombre: 'Felipe',
      pais:'Peru'
  })
}

}
