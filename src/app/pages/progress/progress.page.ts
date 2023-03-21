import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  porcentaje: number = 0.1;

  rangeChange(event:any) {
    this.porcentaje= event.detail.value /100
  }

}
