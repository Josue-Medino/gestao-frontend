import { ClientesInterface } from 'src/app/interfaces/clientes-interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-client',
  templateUrl: './dialog-client.component.html',
  styleUrls: ['./dialog-client.component.scss']
})
export class DialogClientComponent implements OnInit {
  dataClients!: FormGroup;


  constructor(
    private clientService:ClientService,
    public dialog: MatDialog
  ){}

  ngOnInit(){
    this.dataClients = new FormGroup ({
      name: new FormControl(null, Validators.required),
      adress: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    const newclient:ClientesInterface = {
      nome: this.name?.value,
      endereco:this.adress?.value,
      telefone: this.phone?.value
    };

    if(this.dataClients.status === "INVALID"){
      console.log(this.dataClients);
      return;
    }

    this.clientService.addClient(newclient).subscribe(
      success => console.log('Success'),
      error => console.error('error', error),
      () => console.log('POST Completed')
    )

    this.dialog.closeAll();
  }

  get name() { return this.dataClients.get('name'); }
  get adress() { return this.dataClients.get('adress'); }
  get phone() { return this.dataClients.get('phone'); }

}
