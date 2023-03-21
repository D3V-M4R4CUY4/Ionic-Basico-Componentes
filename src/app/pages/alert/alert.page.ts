import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit() {}
  // Esto es una alerta con un solo boton
  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Esto es una alerta con varios botones los cuales tambien puedo con el handler indicar y saber que accion se tomo
  async buttonsalert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alerta!',
      message: 'Esto es un mensaje de alerta',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
        },
        {
          text: 'OK',
          role: 'confirm',
          // aqui en el handler es lo que me va a permitir llamar a servicios o algun otra funcionalidad que necesite
          handler: () => {
            console.log('Click en Ok!');
          },
        },
      ],
    });

    await alert.present();
  }

  // Esto es una alerta con inputs
  async inputAlert() {
    const alert = await this.alertController.create({
      header: 'Por favor ingresa tu info',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirmar cancelar');
          },
        },
        {
          text: 'Ok',
          handler: (data: any) => {
            console.log(data);
          },
        },
      ],
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre',
        },
        {
          name: 'alias',
          placeholder: 'Alias (max 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'edad',
          type: 'number',
          placeholder: 'Edad',
          min: 1,
          max: 100,
        },
        {
          name: 'acercade',
          type: 'textarea',
          placeholder: 'Acerca de ti',
        },
      ],
    });

    await alert.present();
  }
}
