import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.html',
  styleUrl: './student.css'
})
export class Student {

  name: string = "Anish";
  age: number = 21;
  course: string = "AIML";

  showMessage() {
    alert("Student data displayed successfully");
  }
}