import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddAutoComponent } from './pages/autos/add-auto/add-auto.component';
import { LoginComponent } from './pages/login/login.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { DuenosComponent } from './pages/duenos/duenos.component';
import { authGuard } from './auth.guard';
import { RegisterComponent } from './pages/register/register.component';
import { EditAutoComponent } from './pages/autos/edit-auto/edit-auto.component';
import { DuenosPerfilComponent } from './pages/duenos-perfil/duenos-perfil.component';
import { AutoDetailsComponent } from './pages/auto-details/auto-details.component';

export const routes: Routes = [
    {path: 'ventas', component: VentasComponent},
    {path: 'ventas/:id', component: AutoDetailsComponent},
    {path: 'autos', component: DashboardComponent},
    {path: 'autos/create', component: AddAutoComponent, canActivate: [authGuard]},
    {path: 'autos/edit/:id', component: EditAutoComponent, canActivate: [authGuard]},
    {path: 'vendedores', component: DuenosComponent},
    {path:'vendedores/:id', component: DuenosPerfilComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];
