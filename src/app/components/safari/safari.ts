import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

declare const bootstrap: any;

@Component({
  selector: 'app-safari',
  standalone: true,
  imports: [CommonModule, NgFor, FormsModule],
  templateUrl: './safari.html',
  styleUrl: './safari.css',
})
export class Safari {
  safaris = [
    {
      id: 1,
      name: 'Premium Safari Tour',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=500&q=60',
      description: '5-day luxury safari experience'
    },
    {
      id: 2,
      name: 'Wildlife Explorer',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=500&q=60',
      description: '3-day guided wildlife tour'
    },
    {
      id: 3,
      name: 'Family Safari Package',
      price: '$279',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=500&q=60',
      description: 'All-inclusive family experience'
    },
    {
      id: 4,
      name: 'Adventure Seekers',
      price: '$189',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=60',
      description: '4-day adrenaline-packed tour'
    },
    {
      id: 5,
      name: 'Sunset Safari',
      price: '$129',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=500&q=60',
      description: 'Evening wildlife observation'
    },
    {
      id: 6,
      name: 'Photography Safari',
      price: '$259',
      image: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=500&q=60',
      description: 'Perfect for wildlife photographers'
    },
    {
      id: 7,
      name: 'Budget Explorer',
      price: '$99',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=500&q=60',
      description: '2-day budget-friendly tour'
    },
    {
      id: 8,
      name: 'Luxury Escapes',
      price: '$349',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=500&q=60',
      description: '7-day all-inclusive luxury'
    }
  ];
  // Booking state
  selectedSafari: any = null;
  booking: { start_date: string; end_date: string; quantity: number } = { start_date: '', end_date: '', quantity: 1 };
  isBookingSubmitted: boolean = false;

  openBooking(safari: any) {
    this.selectedSafari = safari;
    this.booking = { start_date: '', end_date: '', quantity: 1 };
    this.isBookingSubmitted = false;
  }

  submitBooking(form: NgForm) {
    this.isBookingSubmitted = true;
    if (form.valid) {
      console.log('Safari booking confirmed for', this.selectedSafari?.name, this.booking);
      alert(`Booking confirmed for ${this.selectedSafari?.name} (${this.booking.quantity})`);
      const modalEl = document.getElementById('safariBookingModal');
      if (modalEl) {
        const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
        modal.hide();
      }
    }
  }

  shopMore(safari: any) {
    console.log('Shop more details:', safari.name);
    alert(`Details for: ${safari.name}`);
  }

  private parsePrice(value: any): number {
    if (typeof value === 'number') return value;
    if (!value) return 0;
    const match = String(value).match(/[\d,.]+/);
    if (!match) return 0;
    return parseFloat(match[0].replace(/,/g, '')) || 0;
  }

  getBookingDays(): number {
    const { start_date, end_date } = this.booking;
    if (!start_date || !end_date) return 0;
    const start = new Date(start_date);
    const end = new Date(end_date);
    const msPerDay = 1000 * 60 * 60 * 24;
    const diffMs = end.getTime() - start.getTime();
    const days = Math.ceil(diffMs / msPerDay);
    return Math.max(1, days);
  }

  getBookingTotal(): number {
    if (!this.selectedSafari) return 0;
    const days = this.getBookingDays();
    const price = this.parsePrice(this.selectedSafari.price);
    const qty = this.booking.quantity || 1;
    return price * days * qty;
  }
}
