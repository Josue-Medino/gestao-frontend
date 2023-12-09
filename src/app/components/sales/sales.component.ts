import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogClientComponent } from '../dialog-client/dialog-client.component';
import { DialogSalesComponent } from '../dialog-sales/dialog-sales.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SalesService } from 'src/app/services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  dataSales!: any[];
  constructor(
    public dialog: MatDialog,
    private salesService:SalesService,
  ) {}

  ngOnInit(){
    //this.openDialog();
    this.salesService.getSale().subscribe(data => {
      this.dataSales = data;
      console.log(this.dataSales);
      this.dataSource = new MatTableDataSource<any>(this.dataSales);
    })

  }

  openDialog() {
    this.dialog.open(DialogSalesComponent);
  }

  displayedColumns: string[] = ['client', 'order', 'total'];
  dataSource = new MatTableDataSource<any>(this.dataSales);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}