import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddAutoComponent } from './pages/autos/add-auto/add-auto.component';

export const routes: Routes = [
    {path: 'autos', component: DashboardComponent},
    {path: 'autos/create', component: AddAutoComponent}
];
