import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenStorage } from './token-storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api {

  private baseUrl = "http://localhost:3000/api";


  constructor(private http:HttpClient,private tokenHeaders:TokenStorage){}

  

  

  registerUser(userData: {name:string, email:string, password:string, phone:string}):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.post(`${this.baseUrl}/register`, userData, {headers});

  }

  login(loginData: {phone:string, password:string}):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.post(`${this.baseUrl}/login`, loginData, {headers});
  }

  //get rooms
  getRooms():Observable<any>{
    return this.http.get(`${this.baseUrl}/rooms`);
  }

  //get vehicles
  getVehicles():Observable<any>{
    return this.http.get(`${this.baseUrl}/vehicles`);
  }
  //get safari jeeps
  getSafariJeeps():Observable<any>{
    return this.http.get(`${this.baseUrl}/safari-jeeps`);
  }

  //add room
  addRoom(roomData:any):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.post(`${this.baseUrl}/add-room`, roomData, {headers});
  }
  //add vehicle
  addVehicle(vehicleData:any):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.post(`${this.baseUrl}/add-vehicle`, vehicleData, {headers});
  }
  //add safari jeep
  addSafariJeep(safariData:any):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.post(`${this.baseUrl}/add-safari-jeep`, safariData, {headers});
  }

  //delete vehicle
  deleteVehicle(vehicleId:number):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.delete(`${this.baseUrl}/delete-vehicle/${vehicleId}`, {headers});
  }

  //delete safari jeep
  deleteSafariJeep(safariId:number):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.delete(`${this.baseUrl}/delete-safari-jeep/${safariId}`, {headers});
  }

  //delete room
  deleteRoom(roomId:number):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.delete(`${this.baseUrl}/delete-room/${roomId}`, {headers});
  }
  //update room status
  updateRoomStatus(roomId:number, status:string):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.put(`${this.baseUrl}/update-room-status/${roomId}`, {status}, {headers});
  }
  
  //update vehicle status
  updateVehicleStatus(vehicleId:number, status:string):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.put(`${this.baseUrl}/update-vehicle-status/${vehicleId}`, {status}, {headers});
  }

  //update safari status
  updateSafariStatus(safariId:number, status:string):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.put(`${this.baseUrl}/update-safari-jeep-status/${safariId}`, {status}, {headers});
  }

  //roomBooking
  bookRoom(bookingData:any):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.post(`${this.baseUrl}/book-room`, bookingData, {headers});
  }
}
