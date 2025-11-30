import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-safari',
  imports: [CommonModule],
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

  bookNow(safari: any) {
    console.log('Booking safari:', safari.name);
    alert(`Booked: ${safari.name}`);
  }

  shopMore(safari: any) {
    console.log('Shop more details:', safari.name);
    alert(`Details for: ${safari.name}`);
  }
}
