import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EMPTY, catchError } from 'rxjs';
import { ClientesInterface } from 'src/app/interfaces/clientes-interface';
import { ClientService } from 'src/app/services/client.service';
import { DialogClientComponent } from '../dialog-client/dialog-client.component';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

  title: string = "Clientes";
  action:string = "Add"

  constructor(
    private clientService:ClientService,
    public dialog: MatDialog,
    ){}


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

  removeClient(clientDell:string){

    this.clientService.getClient()
    .pipe(
      catchError( error =>{
        console.log("Error with Request!")
        return EMPTY;
      })
    )

    .subscribe(
      clients => {
        const clientToDelete = clients.find((client) => client.nome === clientDell);

        if(clientToDelete){
          this.clientService.removeClient(clientToDelete.id).subscribe(
            success => console.log('Success'),
            error => console.error('error', error),
            () => console.log('DELETE  Completed')
          )
        }
      });


  }


  openDialog() {
   this.dialog.open(DialogClientComponent);
  }
}


