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
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    numbers.forEach(item => {
      console.log('item-value: ', item);
    });
  }

  public onArrayReverse(): void {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    console.log(numbers.reverse());
  }

}
