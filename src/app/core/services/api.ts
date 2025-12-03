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

  //add room
  addRoom(roomData:any):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.post(`${this.baseUrl}/add-room`, roomData, {headers});
  }

  //delete room
  deleteRoom(roomId:number):Observable<any>{
    const headers = this.tokenHeaders.getHeaders();
    return this.http.delete(`${this.baseUrl}/delete-room/${roomId}`, {headers});
  }
  
  
}
