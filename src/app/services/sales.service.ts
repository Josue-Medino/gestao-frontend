import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  readonly url : string;

  constructor(private httpClient:HttpClient) {
    this.url = "http://localhost:5000/sales"
  }

 postSale(client: any){
  return this.httpClient.post(this.url, client).pipe(take(1));
}

}
