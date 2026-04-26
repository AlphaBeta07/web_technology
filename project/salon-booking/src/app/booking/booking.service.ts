import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
    providedIn: 'root'
})
export class BookingService {
    bookings: Booking[] = [];

    addBooking(booking: Booking) {
        this.bookings.push(booking);
    }

    getBookings() {
        return this.bookings;
    }
}