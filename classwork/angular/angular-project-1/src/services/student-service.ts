import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students = [
    {name: 'Anish', age: 21},
    {name: 'Abhay', age: 21},
    {name: 'Tejas', age: 21},
  ];
 getStudents(){
  return this.students;
 }
}
