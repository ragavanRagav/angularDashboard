import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http: HttpClient) { }
  // Function for making api request
  apiCall(){
    return this.http.get('https://corona.lmao.ninja/v2/continents?yesterday=true&sort');
  }

}
