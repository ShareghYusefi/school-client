import { Component } from '@angular/core';

// Component decorator is used to define associated metadata
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css',
})
export class App {
  protected title = 'School Application';
}
