import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-javascript-tips',
  templateUrl: 'javascript-tips.component.html',
  styleUrls: ['javascript-tips.component.scss']
})

export class JavascriptTipsComponent implements OnInit {
  public account: number;
  public nameAnime: string;
  public contryAnime: string;
  public dataNumbers: any [];

  constructor() {
    this.account = 0;
    this.nameAnime = '';
    this.contryAnime = '';
    this.dataNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  }

  ngOnInit(): void {
    console.log('ngOnInit: JavascriptTipsComponent');
  }

  public onGetAccount(account: number): number {
    console.log('onGetAccount:', account);
    console.log('isNumber:', !!+account); // operador de doble negación con signo de adicción delante de la variable
    return account;                       // para validar si es un número y tiene valor
  }

  public shortConditional(): void {
    const conectado = this.isConnect();

    // if (conectado) {       podemos sustituir esta condicional por otra forma mas abreviada
    //   this.loaddata();
    // }

    conectado && this.loaddata();  // condicional corta si conectado es true se llama al método loadData() si es false no se llama
  }

  public isConnect(): boolean {
    return true;
  }

  public loaddata(): void {
    console.log('Loadind data-user');
  }

  setUserAnime(nameAnime, contryAnime): void {
    this.nameAnime = nameAnime || 'Myname-default';
    this.contryAnime = contryAnime || 'MyNick-default';
    console.log(this.nameAnime, this.contryAnime);
    return nameAnime && contryAnime;
  }

  public readDataNumbers(): void {
    this.dataNumbers.forEach(item => {
      console.log('Item:', item);
    });
  }

}
