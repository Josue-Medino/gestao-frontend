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
    const dialogRef = this.dialog.open(DialogClientComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.getClients();
        alert("Alou")
      }
    });
  }


  ngOnInit(){

   this.getClients();

  }

 //TABLE
 displayedColumns: string[] = ['id', 'name', 'adress', 'phone'];
 dataSource = new MatTableDataSource<any>();

 @ViewChild(MatPaginator)
  paginator!: MatPaginator;

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
 }


}


