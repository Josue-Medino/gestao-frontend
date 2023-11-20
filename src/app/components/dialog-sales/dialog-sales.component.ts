import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map, startWith } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dialog-sales',
  templateUrl: './dialog-sales.component.html',
  styleUrls: ['./dialog-sales.component.scss']
})
export class DialogSalesComponent implements OnInit{
  dataSale!:FormGroup;


  //autocomplete
  products: string[] = [];
  control = new FormControl();
  filProducts!: Observable<string[]>;

  constructor(
    private clientService:ClientService,
    public dialog: MatDialog,
    private menuService:MenuService
  ){}

  ngOnInit(){
    this.dataSale = new FormGroup ({
      client: new FormControl(null),

      qtd: new FormControl(null, Validators.required),
      productChoose: this.control,
      money: new FormControl(null, Validators.required),

      //adicionais: new FormControl({descrição: "Entrega", valor: 3})
    });


    //Filter to Autocomplete
    this.filProducts = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.getProducts();

  }

  getProducts(){
    this.menuService.getMenu().subscribe(menu => {
      this.products = menu.map(item => item.nome);
    });
  }

  onSubmit(){
    console.log(this.dataSale);

    return;
    this.dialog.closeAll();
  }

  private _filter(value:string):string[]{
    const formatValue = value.toLocaleLowerCase();

    return this.products.filter(product => product.toLocaleLowerCase().indexOf(formatValue) === 0 );
  }



  get qtd(){return this.dataSale.get('qtd');}
  get productChoose(){return this.dataSale.get('productChoose');}
  get money(){return this.dataSale.get('money');}


}
