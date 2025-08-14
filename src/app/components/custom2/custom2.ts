import { Component } from '@angular/core';

@Component({
  selector: 'custom2',
  standalone: false,
  templateUrl: './custom2.html',
  styleUrl: './custom2.css',
})
export class Custom2 {
  date = new Date();
  boxColor = 'blue';
  boxSize = 150;
  email = 'Sharegh@robo.ca';

  changeStyle() {
    // change color randomly
    const colors: string[] = ['blue', 'green', 'red', 'purple', 'orange'];
    // random function returns a number between 0->1
    // floor function rounds down to nearest whole number: 3.632 -> 3
    this.boxColor = colors[Math.floor(Math.random() * colors.length)];

    // change the size randomly
    this.boxSize = Math.floor(Math.random() * 200) + 100;
  }

  onKeyDown(emailValue: any) {
    console.log(emailValue);
  }
}
