import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleManagement } from './vehicle-management/vehicle-management';
import { RoomManagementComponent } from './room-management/room-management';
import { SafariManagementComponent } from './safari-management/safari-management';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    VehicleManagement,
    RoomManagementComponent,
    SafariManagementComponent
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  activeTab: string = 'vehicles';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
