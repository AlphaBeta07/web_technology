import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  fn : string="ASL";
  fname: string = "Anish";
  myRoll:number = 5;
  stduents:string[] = ["Anish", "Abhay", "Tejas"];
  showButton(){
    this.fname = "Landage"
    alert("Button Clicked")
  }
}
