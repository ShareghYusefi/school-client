import { Component } from '@angular/core';
import { Courses } from '../../services/courses';

@Component({
  selector: 'course',
  standalone: false,
  templateUrl: './course.html',
  styleUrl: './course.css',
})
export class Course {
  title: string = 'List of Courses';
  courses: string[] = [];
  booleanVariable = true;

  // Dependency Injection
  // When this component is created, angular finds and injects an instance of the Courses Service class and stores it into serviceVariable within constructor function.
  constructor(serviceVariable: Courses) {
    // We can use the serviceVariable to call getCourses function from Courses Service
    this.courses = serviceVariable.getCourses();
  }
}
