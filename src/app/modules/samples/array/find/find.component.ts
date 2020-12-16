import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: 'find.component.html',
  styleUrls: ['find.component.scss']
})

export class FindComponent implements OnInit {

  public computadora: any[] = [];

  constructor() {
    this.computadora = [
      {motherboard: 'ASUS', precio: 560, funcion: 'Gaming'},
      {motherboard: 'ASRock', precio: 480, funcion: 'Office'},
      {motherboard: 'Gigabyte', precio: 600, funcion: 'Grafic'},
      {motherboard: 'MSI', precio: 640, funcion: 'Gaming'},
      {motherboard: 'Intel', precio: 470, funcion: 'Office'},
      {motherboard: 'Biostar', precio: 380, funcion: 'School'},
      {motherboard: 'MSI', precio: 580, funcion: 'Grafic'},
      {motherboard: 'Intel', precio: 680, funcion: 'Gaming'},
    ];
  }

  ngOnInit(): void {
    console.log('ngOnInit: FindComponent');
    console.log('computadora:', this.computadora);
    this.onFindObject();
    this.onComputadoraUpMany();
  }

  onFindObject(): void {
    const object = this.computadora.find(item => {
      // return item.motherboard === 'Biostar';
      return (/Biostar/g).test(item.motherboard); // usando expresión regular global (/Biostar/g) en el texto del arreglo
    });
    console.log('onFindObject:', object);
  }

  onComputadoraUpMany(): void {
    const precios5xUp = this.computadora.map(item => {
      const newPrecios5xUp = item.precio + item.precio * 0.5;
      return {...item, precio: newPrecios5xUp}; // nomenclatura de ... puntos nos permite crear un nuevo objeto del array actual
    });
    console.log('precios5xUp:', precios5xUp);
    console.log('computadora:', this.computadora);
  }
}
