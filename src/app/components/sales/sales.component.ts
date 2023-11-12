import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogClientComponent } from '../dialog-client/dialog-client.component';
import { DialogSalesComponent } from '../dialog-sales/dialog-sales.component';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent {
  constructor(
    public dialog: MatDialog,
  ) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogSalesComponent);

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
