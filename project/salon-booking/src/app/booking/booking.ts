import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './booking.html'
})
export class BookingComponent {

  booking: Booking = {
    name: '',
    service: '',
    date: '',
    time: ''
  };

  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  addBooking() {
    this.bookingService.addBooking(this.booking);
    this.bookings = this.bookingService.getBookings();

    this.booking = { name: '', service: '', date: '', time: '' };
  }
}