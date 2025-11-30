import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

declare const bootstrap: any;

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.css'],
})
export class Rooms {
  rooms = [
    {
      id: 1,
      name: 'Deluxe Room',
      price: '$89/night',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=500&q=60',
      description: 'Spacious room with queen bed and city view',
      amenities: ['WiFi', 'AC', 'TV']
    },
    {
      id: 2,
      name: 'Standard Room',
      price: '$59/night',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=60',
      description: 'Comfortable room perfect for business travelers',
      amenities: ['WiFi', 'AC', 'Desk']
    },
    {
      id: 3,
      name: 'Suite Room',
      price: '$149/night',
      image: 'https://images.unsplash.com/photo-1582719268335-721e3798ae60?auto=format&fit=crop&w=500&q=60',
      description: 'Luxury suite with separate living area',
      amenities: ['WiFi', 'Spa', 'Kitchen']
    },
    {
      id: 4,
      name: 'Budget Room',
      price: '$39/night',
      image: 'https://images.unsplash.com/photo-1574484284002-952386ff8248?auto=format&fit=crop&w=500&q=60',
      description: 'Cozy room with essential amenities',
      amenities: ['WiFi', 'AC', 'Shower']
    },
    {
      id: 5,
      name: 'Twin Room',
      price: '$79/night',
      image: 'https://images.unsplash.com/photo-1591088398332-8c5ecd7b1810?auto=format&fit=crop&w=500&q=60',
      description: 'Twin beds, perfect for friends or colleagues',
      amenities: ['WiFi', 'AC', 'Desk']
    },
    {
      id: 6,
      name: 'Ocean View Room',
      price: '$129/night',
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?auto=format&fit=crop&w=500&q=60',
      description: 'Stunning ocean view with balcony',
      amenities: ['WiFi', 'Balcony', 'Minibar']
    },
    {
      id: 7,
      name: 'Family Room',
      price: '$119/night',
      image: 'https://images.unsplash.com/photo-1598301257097-aa60ebb46840?auto=format&fit=crop&w=500&q=60',
      description: 'Spacious room for families with kids',
      amenities: ['WiFi', 'Kitchen', 'Playarea']
    },
    {
      id: 8,
      name: 'Honeymoon Suite',
      price: '$199/night',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=60',
      description: 'Romantic suite with jacuzzi and rose petals',
      amenities: ['WiFi', 'Jacuzzi', 'Champagne']
    }
  ];

  // Booking state
  selectedRoom: any = null;
  booking: { start_date: string; end_date: string; quantity: number } = { start_date: '', end_date: '', quantity: 1 };
  isBookingSubmitted: boolean = false;

  // Open booking modal (triggered by buttons)
  openBooking(room: any) {
    this.selectedRoom = room;
    this.booking = { start_date: '', end_date: '', quantity: 1 };
    this.isBookingSubmitted = false;
    // modal will be shown via data-bs attributes on the button
  }

  // Submit booking from modal
  submitBooking(form: NgForm) {
    this.isBookingSubmitted = true;
    if (form.valid) {
      console.log('Booking submitted for', this.selectedRoom?.name, this.booking);
      alert(`Booking confirmed for ${this.selectedRoom?.name} (${this.booking.quantity})`);
      // close modal
      const modalEl = document.getElementById('bookingModal');
      if (modalEl) {
        const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modal.hide();
      }
    }
  }

  shopMore(room: any) {
    // reuse modal for shop more (view details + booking)
    this.openBooking(room);
  }
}
