import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albunes: any[] = []
  
  textobusqueda: string=''

  constructor(private dataservice:DataService) {}

  ngOnInit() {
    this.dataservice.getAlbums().subscribe(albunes => {
      this.albunes=albunes
    })
  }

  cambioEnBusqueda(event: any) {
    this.textobusqueda=event.detail.value
  }
}
