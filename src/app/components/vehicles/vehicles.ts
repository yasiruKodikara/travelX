import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicles.html',
  styleUrls: ['./vehicles.css'],
})
export class Vehicles {
  vehicles = [
    {
      id: 1,
      name: 'Land Cruiser',
      price: '$79/day',
      image: 'https://images.unsplash.com/photo-1609708536965-59ee526918cb?auto=format&fit=crop&w=500&q=60',
      description: 'Powerful 4x4 for off-road adventures',
      specs: ['7-seater', 'AC', 'GPS']
    },
    {
      id: 2,
      name: 'Safari Jeep',
      price: '$59/day',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c3febda46?auto=format&fit=crop&w=500&q=60',
      description: 'Classic jeep for safari experiences',
      specs: ['5-seater', 'Open-top', 'Sturdy']
    },
    {
      id: 3,
      name: 'Toyota Fortuner',
      price: '$89/day',
      image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?auto=format&fit=crop&w=500&q=60',
      description: 'Spacious SUV for family trips',
      specs: ['7-seater', 'Leather seats', 'Premium']
    },
    {
      id: 4,
      name: 'Mahindra XUV',
      price: '$49/day',
      image: 'https://images.unsplash.com/photo-1606110832868-bac9b3c0c901?auto=format&fit=crop&w=500&q=60',
      description: 'Budget-friendly SUV with comfort',
      specs: ['5-seater', 'AC', 'Compact']
    },
    {
      id: 5,
      name: 'Toyota Innova',
      price: '$69/day',
      image: 'https://images.unsplash.com/photo-1612353657095-d16662ec4437?auto=format&fit=crop&w=500&q=60',
      description: 'Comfortable vehicle for long drives',
      specs: ['8-seater', 'AUX cable', 'Reliable']
    },
    {
      id: 6,
      name: 'Hyundai Creta',
      price: '$54/day',
      image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=500&q=60',
      description: 'Modern SUV with latest features',
      specs: ['5-seater', 'Touchscreen', 'Stylish']
    },
    {
      id: 7,
      name: 'Thar Jeep',
      price: '$64/day',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c3febda46?auto=format&fit=crop&w=500&q=60',
      description: 'Legendary off-roader',
      specs: ['4-seater', 'Manual', 'Rugged']
    },
    {
      id: 8,
      name: 'Mercedes Sprinter',
      price: '$99/day',
      image: 'https://images.unsplash.com/photo-1581274455760-a1ea1f68ff39?auto=format&fit=crop&w=500&q=60',
      description: 'Luxury van for group travel',
      specs: ['12-seater', 'Premium', 'Spacious']
    }
  ];

  bookNow(vehicle: any) {
    console.log('Booking vehicle:', vehicle.name);
    alert(`Booked: ${vehicle.name}`);
  }

  shopMore(vehicle: any) {
    console.log('Shop more details:', vehicle.name);
    alert(`Details for: ${vehicle.name}`);
  }
}
