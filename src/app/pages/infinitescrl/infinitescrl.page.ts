import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinitescrl',
  templateUrl: './infinitescrl.page.html',
  styleUrls: ['./infinitescrl.page.scss'],
})
export class InfinitescrlPage implements OnInit {
  // Aqui voy a crear un viewchild para manejar el infinitescroll
  @ViewChild(IonInfiniteScroll)
  infiniteScroll!: IonInfiniteScroll;
 
  data: any[] = Array(20);


  constructor() {}

  ngOnInit() {}

  loadData() {
    setTimeout(() => {
      // agrego una comprobacion para que luego de x cantidad de resultados no se ejecute mas
      if (this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return
      }

      // creo un nuevo arreglo para insertar 20 resultados mas
      const nuevoArr = Array(20);

      // De esta manera agrego 20 resultados mas al arreglo de arriba data
      this.data.push(...nuevoArr);

      this.infiniteScroll.complete();
    }, 700);
  }
}
