import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(private modalctrl: ModalController) {}

  ngOnInit() {}

  async mostrarModal() {
    const modal = await this.modalctrl.create({
      component: ModalInfoPage,
      // Aqui es cuando le voy a mandar argumentos desde del modal a la pagina hijo
      componentProps: {
        nombre: 'Carlos',
        pais:'Colombia'
      }
    });
    await modal.present();


    // Con esto obtengo los datos que se coloquen en el modal asi sea un formulario o lo que sea 
    // const { data } = await modal.onDidDismiss()
    
    // Hay otro metodo que es onWillDismiss() y este lo que hace es que obtiene la data antes de cerrarse el modal 
    const { data } = await modal.onWillDismiss()

    
    console.log(data)
  }
}
