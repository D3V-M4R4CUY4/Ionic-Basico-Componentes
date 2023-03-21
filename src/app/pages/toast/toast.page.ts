import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  handlerMessage = '';
  roleMessage = '';

  // Inyectamos el servicio del toast
  constructor(private toastCtrl: ToastController) {}

  ngOnInit() {}

  async onClick(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      message: 'Hola Mundito',
      duration: 800,
      position: position,
    });
    await toast.present();
  }

  async onClickwithoptions() {
    const toastoptions = await this.toastCtrl.create({
      message: 'Ejemplo con opciones',
      duration: 1200,
      buttons: [
        {
          text: 'Mas informacion',
          role: 'info',
          handler: () => {
            this.handlerMessage = 'Mas informacion clickeado!';
            console.log(this.handlerMessage);
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Cancelar clickeado!';
            console.log(this.handlerMessage);
          },
        },
      ],
    });
    await toastoptions.present();

    const { role } = await toastoptions.onDidDismiss();
    this.roleMessage = `Cancelado con rol: ${role}`;
  }
}
