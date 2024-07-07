import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddAutoComponent } from './pages/autos/add-auto/add-auto.component';
import { LoginComponent } from './pages/login/login.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { DuenosComponent } from './pages/duenos/duenos.component';
import { authGuard } from './auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { EditAutoComponent } from './pages/autos/edit-auto/edit-auto.component';

export const routes: Routes = [
    {path: 'ventas', component: VentasComponent},
    {path: 'autos', component: DashboardComponent},
    {path: 'autos/create', component: AddAutoComponent},
    {path: 'autos/edit/:id', component: EditAutoComponent},
    {path: 'vendedores', component: DuenosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];
