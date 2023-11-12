import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  readonly url : string;

  constructor(private httpClient:HttpClient) {
    this.url = "http://localhost:3000/menu"
  }

  getMenu(){
    return this.httpClient.get<any[]>(this.url);
  }

}
