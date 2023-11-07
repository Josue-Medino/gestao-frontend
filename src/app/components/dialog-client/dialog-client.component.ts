import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dialog-client',
  templateUrl: './dialog-client.component.html',
  styleUrls: ['./dialog-client.component.scss']
})
export class DialogClientComponent implements OnInit {
dataClients!: FormGroup;

  ngOnInit(){
    this.dataClients = new FormGroup ({
      name: new FormControl(''),
      adress: new FormControl(''),
      phone: new FormControl('')
    });
  }

  onSubmit(){
    console.log(this.dataClients);
    console.log(this.name?.value);
    console.log(this.adress?.value);
    console.log(this.phone?.value);
  }

  get name() { return this.dataClients.get('name'); }
  get adress() { return this.dataClients.get('adress'); }
  get phone() { return this.dataClients.get('phone'); }

}
