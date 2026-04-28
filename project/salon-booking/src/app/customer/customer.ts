import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer.html',
  styleUrl: './customer.css'
})
export class CustomerComponent {
  services = [
    { id: 1, name: 'Haircut & Styling', price: 500 },
    { id: 2, name: 'Coloring & Highlights', price: 1200 },
    { id: 3, name: 'Manicure & Pedicure', price: 600 },
    { id: 4, name: 'Facial Treatment', price: 800 },
    { id: 5, name: 'Premium Massage', price: 1000 }
  ];

  booking = {
    name: '',
    phone: '',
    serviceId: '',
    date: '',
    time: ''
  };

  submitBooking() {
    if(!this.booking.name || !this.booking.serviceId || !this.booking.date) {
      alert('Please fill out all required fields.');
      return;
    }
    
    // Get existing bookings from local storage or create new array
    const stored = localStorage.getItem('salon_bookings');
    const bookings = stored ? JSON.parse(stored) : [];
    
    const serviceName = this.services.find(s => s.id === Number(this.booking.serviceId))?.name;
    
    bookings.push({
      ...this.booking,
      serviceName,
      status: 'Pending',
      id: Date.now()
    });
    
    localStorage.setItem('salon_bookings', JSON.stringify(bookings));
    
    alert('Appointment booked successfully!');
    this.booking = { name: '', phone: '', serviceId: '', date: '', time: '' };
  }
}
