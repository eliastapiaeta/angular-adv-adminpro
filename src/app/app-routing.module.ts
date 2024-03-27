import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { TableResponsiveComponent } from './pages/table-responsive/table-responsive.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  { path: '', 
  component: PagesComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'grafical', component: Grafica1Component },
    { path: 'table-responsive', component: TableResponsiveComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  ]
},

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
