import { Component } from '@angular/core';

@Component({
  selector: 'app-random-data-table',
  templateUrl: './random-data-table.component.html',
  styleUrls: ['./random-data-table.component.scss']
})
export class RandomDataTableComponent {

  randomData: any[] = [];
  columns: any[] = ['hola', 'hola2', 'hola3'];

  constructor() {
    this.generateRandomData();
  }

  generateRandomData() {
    for (let i = 1; i <= 10; i++) {
      this.randomData.push({
        name: `Person ${i}`,
        email: `person${i}@example.com`,
        age: Math.floor(Math.random() * 50) + 20
      });
    }
  }

}
