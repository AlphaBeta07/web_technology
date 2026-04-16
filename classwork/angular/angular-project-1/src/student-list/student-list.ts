import { Component } from '@angular/core';
import { StudentService } from '../services/student-service';

@Component({
  selector: 'app-student-list',
  imports: [StudentService],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  students: any[] = [];
  constructor(private studentService:StudentService){}
  // lifecycle hook - ngOnInit : this method runs automatically when components loads
  ngOnInit(){
    this.students = this.studentService.getStudents();
    console.log(this.students);
  }
}

function getStudents() {
  throw new Error('Function not implemented.');
}

