import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-array-slice',
  templateUrl: 'array-slice.component.html',
  styleUrls: ['array-slice.component.scss']
})

export class ArraySliceComponent implements OnInit {
  public dataNumbers: any [];
  public dataNumbersBefore: any [];
  public numSlice: number;

  constructor() {
    this.dataNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  }

  ngOnInit(): void {
    console.log('ngOnInit: ArraySliceComponent');
  }

  public showDataNumbers(numSlice): void {
    console.log(numSlice);
    this.dataNumbersBefore = this.dataNumbers.slice(numSlice);
    console.log(this.dataNumbersBefore);
  }
}
