import { Component } from '@angular/core';

@Component({
  selector: 'custom',
  standalone: false,
  templateUrl: './custom.html',
  styleUrl: './custom.css',
})
export class Custom {
  title = 'Custom Component Title';
  photo = {
    url: 'https://tinyurl.com/358w8dup',
    alt: 'Cat Pouncing',
  };
}
