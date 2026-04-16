import { Component, signal } from '@angular/core';
import { Home } from '../home/home';
import { AddStudent } from '../add-student/add-student';
import { AddStudentList } from '../add-student-list/add-student-list';
import { StudentList } from '../student-list/student-list';

@Component({
  selector: 'app-root',
  imports: [Home, AddStudent, AddStudentList,StudentList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-project-1');
}
