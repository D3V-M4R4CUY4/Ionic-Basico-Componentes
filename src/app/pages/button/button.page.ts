import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
  // variable si es favorito o no
  favorito: boolean = false;

  onClick() {
    this.favorito = !this.favorito;
  }

  constructor() {}

  ngOnInit() {}
}
