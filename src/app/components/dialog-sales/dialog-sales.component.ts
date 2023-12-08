import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, map, startWith } from 'rxjs';
import { ClientService } from 'src/app/services/client.service';
import { MenuService } from 'src/app/services/menu.service';
import { SalesService } from 'src/app/services/sales.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dialog-sales',
  templateUrl: './dialog-sales.component.html',
  styleUrls: ['./dialog-sales.component.scss'],
})
export class DialogSalesComponent implements OnInit {
  dataSale!: FormGroup;

  //autocomplete
  products: string[] = [];
  control = new FormControl();
  filProducts!: Observable<string[]>;

  //table
  menu: any[] = [];
  money: number = 0.0;

  //Data to request in salesService
  newOrder = {
    client: "",
    order: [] as any[],
    total: 0.0,
  };

  constructor(
    private clientService: ClientService,
    public dialog: MatDialog,
    private menuService: MenuService,
    private salesService:SalesService
  ) {}

  ngOnInit() {
    this.dataSale = new FormGroup({
      client: new FormControl(null),

      qtd: new FormControl(null, Validators.required),
      productChoose: this.control,
      //money: new FormControl(null, Validators.required),

      //adicionais: new FormControl({descrição: "Entrega", valor: 3})
    });

    //Filter to Autocomplete
    this.filProducts = this.control.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    this.getProducts();
    this.getMenu();
  }

  getProducts() {
    this.menuService.getMenu().subscribe((menu) => {
      this.products = menu.map((item) => item.nome);
    });
  }

  onSubmit() {

    this.newOrder.client = this.client?.value;
    console.log( this.newOrder );

    this.salesService.postSale(this.newOrder).subscribe(
      success => console.log('Success'),
      error => console.error('error', error),
      () => console.log('POST Completed')
    );
    return;
    this.dialog.closeAll();
  }

  private _filter(value: string): string[] {
    const formatValue = value.toLocaleLowerCase();

    return this.products.filter(
      (product) => product.toLocaleLowerCase().indexOf(formatValue) === 0
    );
  }

  getMenu() {
    this.menuService.getMenu().subscribe((menu) => (this.menu = menu));
  }

  getMoney() {
    let productObject = this.menu.find(
      (product) =>
        product.nome.toLocaleLowerCase() ==
        this.productChoose?.value.trim().toLocaleLowerCase()
    );

    if (productObject == null) {
      alert('Produto não existente! Preencha corretamente a entrada ... ');
      this.money = 0.1;
      return;
    }

    this.money = productObject.preco;

    this.orderUpdate();
    //console.log(this.newOrder.client)
    //console.log(this.newOrder.order)

    //console.log(this.money);
  }

  get qtd() {
    return this.dataSale.get('qtd');
  }
  get productChoose() {
    return this.dataSale.get('productChoose');
  }
  get client() {
    return this.dataSale.get('client');
  }

  displayedColumns: string[] = ['nome', 'qtd', 'preco', 'subTotal'];
  dataSource = new MatTableDataSource<any>(this.newOrder.order);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }



  orderUpdate(){
    let item = {nome: this.productChoose?.value, preco:this.money, qtd: this.qtd?.value, subTotal: this.money*this.qtd?.value}
    this.newOrder.order.push(item);
    this.newOrder.total += this.money;

    this.dataSource.data = [...this.newOrder.order];
  }


}
