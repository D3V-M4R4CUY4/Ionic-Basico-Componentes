import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  componente!: Observable<Componente[]>;

  // inyecto el controlador del menu
  constructor(
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.componente = this.dataService.getMenuopciones();
  }
}
