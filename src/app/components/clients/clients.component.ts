import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EMPTY, catchError } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { DialogClientComponent } from '../dialog-client/dialog-client.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements AfterViewInit, OnInit{

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
        this.dataSource.data = clients;
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

        const clientToDelete = clients.find((client) => client.name === clientDell);

        if(clientToDelete){
          this.clientService.removeClient(clientToDelete.id).subscribe(
            success => console.log('Success'),
            error => console.error('error', error),
            () => {
              console.log('DELETE  Completed')
              this.getClients();
            }
          )
        }
      });


  }

  updateClient(object:any){
    alert("Ação em desenvolvimento...");
    console.log(object);
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogClientComponent);

    dialogRef.afterClosed().subscribe(result => {
      //!!!AQUI ESTÁ ATUALIZANDO TODA VEZ QUE FECHAR, NÃO É O IDEAL
      this.getClients();
    });
  }


  ngOnInit(){

   this.getClients();

  }

 //TABLE
 displayedColumns: string[] = ['id', 'name', 'adress', 'phone', 'actions'];
 dataSource = new MatTableDataSource<any>();

 @ViewChild(MatPaginator)
  paginator!: MatPaginator;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
 }


}


