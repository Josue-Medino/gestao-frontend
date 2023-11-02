import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ClientsComponent } from './components/clients/clients.component';
import { DataComponent } from './components/data/data.component';
import { SalesComponent } from './components/sales/sales.component';


const routes: Routes = [

  { path:'home', component: HomeComponent},
  { path:'clients', component: ClientsComponent},
  { path:'data', component: DataComponent},
  { path:'sales', component: SalesComponent},
  { path:'**', component: OverviewComponent},

];

export const AppRoutes = RouterModule.forRoot(routes);
