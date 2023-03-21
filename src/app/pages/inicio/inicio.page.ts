import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { DataService } from '../../services/data.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 componente!:Observable<Componente[]>

  // inyecto el controlador del menu
  constructor(private menuctrl: MenuController, private dataService:DataService) {}

  ngOnInit() {
    this.componente=this.dataService.getMenuopciones()
  }

  mostrarMenu() {
    this.menuctrl.open();
  }
}
