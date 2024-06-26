import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddAutoComponent } from './pages/autos/add-auto/add-auto.component';
import { LoginComponent } from './core/login/login.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { DuenosComponent } from './pages/duenos/duenos.component';

export const routes: Routes = [
    {path: 'ventas', component: VentasComponent},
    {path: 'autos', component: DashboardComponent},
    {path: 'autos/create', component: AddAutoComponent},
    {path: 'vendedores', component: DuenosComponent},
    {path: 'login', component: LoginComponent}
];
