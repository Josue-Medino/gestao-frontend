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
    this.url = "http://localhost:3000/clients"
  }

  getClient(){
    return this.httpClient.get<any[]>(this.url);
  }

  addClient( client:any){
    return this.httpClient.post(this.url, client).pipe(take(1));
  }

  removeClient(id:number){
    return this.httpClient.delete(`${this.url}/${id}`);
  }

  updateClient(){

  }
}
