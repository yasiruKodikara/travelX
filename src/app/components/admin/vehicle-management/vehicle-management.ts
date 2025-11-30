import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-vehicle-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vehicle-management.html',
  styleUrls: ['./vehicle-management.css'],
})
export class VehicleManagement {
  vehicles = [
    {
      id: 1,
      model: 'Toyota Land Cruiser',
      type: 'SUV',
      price_per_day: 79,
      imageUrl: 'https://via.placeholder.com/150',
      status: 'available'
    },
    {
      id: 2,
      model: 'Safari Jeep',
      type: 'Jeep',
      price_per_day: 59,
      imageUrl: 'https://via.placeholder.com/150',
      status: 'available'
    }
  ];

  newVehicle: { model: string; type: string; price_per_day: number; imageUrl: string; status: string } = {
    model: '',
    type: 'SUV',
    price_per_day: 0,
    imageUrl: '',
    status: 'available'
  };

  editingId: number | null = null;
  isSubmitted: boolean = false;
  showForm: boolean = false;

  addVehicle(form: NgForm) {
    this.isSubmitted = true;
    if (form.valid) {
      if (this.editingId) {
        // Update vehicle
        const vehicle = this.vehicles.find(v => v.id === this.editingId);
        if (vehicle) {
          Object.assign(vehicle, this.newVehicle);
        }
        this.editingId = null;
      } else {
        // Add new vehicle
        this.vehicles.push({ id: Date.now(), ...this.newVehicle });
      }
      this.resetForm(form);
      this.showForm = false;
    }
  }

  editVehicle(vehicle: any) {
    this.editingId = vehicle.id;
    this.newVehicle = { ...vehicle };
    this.showForm = true;
    this.isSubmitted = false;
  }

  deleteVehicle(id: number) {
    this.vehicles = this.vehicles.filter(v => v.id !== id);
  }

  resetForm(form: NgForm) {
    this.newVehicle = { model: '', type: 'SUV', price_per_day: 0, imageUrl: '', status: 'available' };
    form.resetForm();
    this.isSubmitted = false;
  }

  cancelForm() {
    this.showForm = false;
    this.editingId = null;
  }
}
