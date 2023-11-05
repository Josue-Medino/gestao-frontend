import { HttpClient } from '@angular/common/http';
import { ClientesInterface } from './../interfaces/clientes-interface';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  readonly url:string;

  constructor(private httpClient:HttpClient) {
    this.url = "http://localhost:3000/clients/"
  }

  getClient(){

  }

  addClient( client:ClientesInterface){
    return this.httpClient.post(this.url, client).pipe(take(1));
  }

  removeClient(){

  }

  updateClient(){

  }
}
