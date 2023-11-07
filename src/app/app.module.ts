import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

/*Imports from Angular Material*/
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


//Requests
import { HttpClientModule } from '@angular/common/http';

//My Components
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClientsComponent } from './components/clients/clients.component';
import { SalesComponent } from './components/sales/sales.component';
import { DataComponent } from './components/data/data.component';
import { DialogClientComponent } from './components/dialog-client/dialog-client.component';
import { ActionHeaderComponent } from './components/action-header/action-header.component';


const ANGULAR_MATERIAL = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    SidebarComponent,
    ClientsComponent,
    SalesComponent,
    DataComponent,
    ActionHeaderComponent,
    DialogClientComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    ...ANGULAR_MATERIAL,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
