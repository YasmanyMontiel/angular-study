import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-for-each',
  templateUrl: 'for-each.component.html',
  styleUrls: ['for-each.component.scss']
})

export class ForEachComponent implements OnInit {

  ngOnInit(): void {
    console.log('ngOnInit: ForEachComponent');
  }

  public onArrayIterator(): void {
    console.log('Recorriendo el arreglo con  forEach()');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    numbers.forEach(item => {
      console.log('item-value: ', item);
    });
  }

  public onArrayReverse(): void {
    console.log('Recorriendo inverso del arreglo con  reverse()');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const reverse = numbers.reverse();
    reverse.forEach(item => {
      console.log('item-value: ', item);
    });
  }

  public onArrayReverse1(): void {
    console.log('Recorriendo inverso del arreglo con  for()');
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    for (let i = numbers.length - 1; i >= 0; i--) {
      console.log('item-value: ', numbers[i]);
    }
  }
}
