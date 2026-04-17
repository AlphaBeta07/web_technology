import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentData {
  studentList:any[] = [
    {name:"Anish",age:21,course:"AIML"},
    {name:"Abhay",age:21,course:"AIML"},
    {name:"Shravani",age:20,course:"AIML"}
  ]
  getStudentList()
  {
    return this.studentList
  }
}
