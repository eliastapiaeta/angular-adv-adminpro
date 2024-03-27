import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { TableResponsiveComponent } from './table-responsive/table-responsive.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'grafical', component: Grafica1Component },
            // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
    {
        path: 'tables',
        component: PagesComponent,
        children: [
            { path: '', component: TableResponsiveComponent },
            { path: 'table-responsive', component: TableResponsiveComponent },
            // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

