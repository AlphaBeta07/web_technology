import { Component } from '@angular/core';
import { BookingComponent } from './booking/booking';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookingComponent],   // 👈 IMPORTANT
  templateUrl: './app.html'
})
export class AppComponent {}