import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading!:HTMLIonLoadingElement

  constructor(private loadingctrl: LoadingController) {}

  ngOnInit() {}

  async mostrarLoading(message:string) {
    this.loading = await this.loadingctrl.create({
      message,
      duration: 2000,
    });

    this.loading.present();
  }
}
