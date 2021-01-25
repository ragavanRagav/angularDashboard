import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }
  // Function for making api request
  apiCall(){
    return this.http.get<any[]>('https://cors-anywhere.herokuapp.com/https://nestdashboard.herokuapp.com/');
  }

}
