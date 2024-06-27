import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddAutoComponent } from './pages/autos/add-auto/add-auto.component';
import { LoginComponent } from './pages/login/login.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { DuenosComponent } from './pages/duenos/duenos.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    {path: 'ventas', component: VentasComponent},
    {path: 'autos', component: DashboardComponent},
    {path: 'autos/create', component: AddAutoComponent, canActivate: [authGuard]},
    {path: 'vendedores', component: DuenosComponent},
    {path: 'login', component: LoginComponent}
];
