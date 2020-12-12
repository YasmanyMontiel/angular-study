import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.scss']
})

export class MapComponent implements OnInit {

  ngOnInit(): void {
    console.log('ngOnInit: MapComponent');
  }

  public onAddElement(): void {
    console.log('Recorriendo el arreglo con  map() y añadiendo 1 a cada item');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // Add 1 a cada elemento del arreglo: numbers
    const oneAdd = numbers.map(num => num + 1);
    console.log('Arreglo original: ', numbers);
    console.log('Arreglo con map(+1)', oneAdd);
  }

  public onPowElements(): void {
    console.log('Recorriendo el arreglo con  map() y aaplicando 2da potencia a cada item');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // aplicando 2da potencia a cada elemento del arreglo: numbers
    const pows = numbers.map(num => Math.pow(num, 2));
    console.log('Arreglo original: ', numbers);
    console.log('Arreglo con map(Math.pow(num, 2))', pows);
  }
}
