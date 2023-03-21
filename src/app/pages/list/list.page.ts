import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios!: Observable<any>;

  // Aqui voy a importar el viewchild para poder colocarle a todo el ionlist la funcion de cuando toque alguna opcion se cierre de inmediato
  @ViewChild(IonList) ionList!: IonList
  

  // Aqui que es donde voy a llamar los servicios o metodos que cree en el servicio de dataservices
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Aqui estoy realizando que al entrar en la pagina se carguen los registros de la peticion
    this.usuarios = this.dataService.getUsuarios();
  }

  favorito(user: any) {
    console.log('favorito', user);
    // ya habiendo importado el ViewChild puedo indicarle que cuando use esta opcion se cierre el sliding
    this.ionList.closeSlidingItems()
  }
  
  share(user: any) {
    console.log('share', user);
    this.ionList.closeSlidingItems()
  }
  
  delete(user: any) {
    console.log('delete',user.name)  
    this.ionList.closeSlidingItems()
  }

}
