// import { Component, signal } from '@angular/core';
// import { Home } from '../home/home';
// import { AddStudent } from '../add-student/add-student';
// import { AddStudentList } from '../add-student-list/add-student-list';
// import { StudentList } from '../student-list/student-list';

// @Component({
//   selector: 'app-root',
//   imports: [Home, AddStudent, AddStudentList,StudentList],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('angular-project-1');
// }
import { Component, signal } from '@angular/core';
import { RouteLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouteLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('student');
}
