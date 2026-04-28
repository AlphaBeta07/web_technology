import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './salon.html',
  styleUrl: './salon.css'
})
export class SalonComponent implements OnInit {
  bookings: any[] = [];

  ngOnInit() {
    this.loadBookings();
  }

  loadBookings() {
    const stored = localStorage.getItem('salon_bookings');
    if (stored) {
      this.bookings = JSON.parse(stored);
    }
  }

  updateStatus(id: number, status: string) {
    const index = this.bookings.findIndex(b => b.id === id);
    if (index !== -1) {
      this.bookings[index].status = status;
      localStorage.setItem('salon_bookings', JSON.stringify(this.bookings));
    }
  }

  deleteBooking(id: number) {
    if(confirm('Are you sure you want to remove this booking?')) {
      this.bookings = this.bookings.filter(b => b.id !== id);
      localStorage.setItem('salon_bookings', JSON.stringify(this.bookings));
    }
  }

  getPendingCount() {
    return this.bookings.filter(b => b.status === 'Pending').length;
  }
}
