import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface Room {
  id: number;
  room_number: string;
  type: string;
  price_per_night: number;
  capacity: number;
  imageUrl: string;
  status: string;
}

@Component({
  selector: 'app-room-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './room-management.html',
  styleUrls: ['./room-management.css']
})
export class RoomManagementComponent {
  rooms: Room[] = [
    {
      id: 1,
      room_number: '101',
      type: 'Single',
      price_per_night: 80,
      capacity: 1,
      imageUrl: 'https://images.unsplash.com/photo-1631049307038-da31bc36033b?w=400',
      status: 'available'
    },
    {
      id: 2,
      room_number: '102',
      type: 'Double',
      price_per_night: 120,
      capacity: 2,
      imageUrl: 'https://images.unsplash.com/photo-1631049307038-da31bc36033b?w=400',
      status: 'available'
    },
    {
      id: 3,
      room_number: '103',
      type: 'Suite',
      price_per_night: 200,
      capacity: 4,
      imageUrl: 'https://images.unsplash.com/photo-1631049307038-da31bc36033b?w=400',
      status: 'unavailable'
    },
    {
      id: 4,
      room_number: '104',
      type: 'Double',
      price_per_night: 120,
      capacity: 2,
      imageUrl: 'https://images.unsplash.com/photo-1631049307038-da31bc36033b?w=400',
      status: 'available'
    }
  ];

  newRoom: Room = {
    id: 0,
    room_number: '',
    type: 'Single',
    price_per_night: 0,
    capacity: 1,
    imageUrl: '',
    status: 'available'
  };

  editingId: number | null = null;
  isSubmitted: boolean = false;
  showForm: boolean = false;

  addRoom(form: NgForm) {
    this.isSubmitted = true;

    if (form.invalid) {
      return;
    }

    if (this.editingId) {
      const index = this.rooms.findIndex(r => r.id === this.editingId);
      if (index !== -1) {
        this.rooms[index] = { ...this.newRoom, id: this.editingId };
      }
    } else {
      const newId = this.rooms.length > 0 ? Math.max(...this.rooms.map(r => r.id)) + 1 : 1;
      this.rooms.push({ ...this.newRoom, id: newId });
    }

    this.resetForm(form);
  }

  editRoom(room: Room) {
    this.newRoom = { ...room };
    this.editingId = room.id;
    this.showForm = true;
    this.isSubmitted = false;
  }

  deleteRoom(id: number) {
    this.rooms = this.rooms.filter(r => r.id !== id);
  }

  resetForm(form: NgForm) {
    form.reset();
    this.newRoom = {
      id: 0,
      room_number: '',
      type: 'Single',
      price_per_night: 0,
      capacity: 1,
      imageUrl: '',
      status: 'available'
    };
    this.editingId = null;
    this.isSubmitted = false;
    this.showForm = false;
  }

  cancelForm() {
    this.showForm = false;
    this.editingId = null;
    this.isSubmitted = false;
  }
}
