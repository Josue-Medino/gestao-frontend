import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';


const routes: Routes = [
  { path:'**', component: OverviewComponent},
  { path:'Overview', component:OverviewComponent},
  { path:'home', component: HomeComponent},

];

export const AppRoutes = RouterModule.forRoot(routes);
