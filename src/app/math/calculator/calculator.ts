import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: false,
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
  num1: number | null = null;
  num2: number | null = null;

  get total(): number {
    return Number(this.num1 || 0) + Number(this.num2 || 0);
  }
}
