import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  publisher: string = '';

  // Me creo un observable por que se le aplicara un pipe perzonalizado
  superHeroes!: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    // Consumo la data de los superheores
    this.superHeroes = this.dataService.getSuperHeroes();
  }

  segmentChanged(event: any) {
    this.publisher = event.detail.value;
  }
}
