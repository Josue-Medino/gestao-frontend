import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutes } from './app.routing';
import { OverviewComponent } from './components/overview/overview.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Imports from Angular Material*/
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { ClientsComponent } from './components/clients/clients.component';
import { SalesComponent } from './components/sales/sales.component';
import { DataComponent } from './components/data/data.component';

const ANGULAR_MATERIAL = [
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatButtonModule
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    SidebarComponent,
    ClientsComponent,
    SalesComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    ...ANGULAR_MATERIAL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
