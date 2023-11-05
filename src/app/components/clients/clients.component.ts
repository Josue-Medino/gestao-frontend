import { Component } from '@angular/core';
import { EMPTY, catchError } from 'rxjs';
import { ClientesInterface } from 'src/app/interfaces/clientes-interface';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  title: string = "Clientes";
  action:string = "Add"

  constructor(private clientService:ClientService){}

  newclient:ClientesInterface = {
    nome: "Samuel Medino",
    endereco: "R dos cabacos",
    telefone: "82 9 8877 7788"
  };

  addClients() {
    this.clientService.addClient(this.newclient).subscribe(
      success => console.log('Success'),
      error => console.error('error', error),
      () => console.log('Request Completed')
    )
  }

  getClients(){
    this.clientService.getClient()

    .pipe(
      catchError( error =>{
        console.log("Error with Request!")
        return EMPTY;
      })
    )

    .subscribe(
      clients => {
        console.log(clients);
    });
  }
}
