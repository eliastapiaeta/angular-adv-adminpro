import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { TableResponsiveComponent } from './table-responsive/table-responsive.component';
import { BasicFormComponent } from './inputs/basic-form.component';
import { FormValidationComponent } from './inputs/form-validation.component';
import { FormInputsComponent } from './inputs/form-inputs.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'grafical', component: Grafica1Component },
            // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    },
    {
        path: 'ui',
        component: PagesComponent,
        children: [
            { path: '', component: TableResponsiveComponent },
            { path: '', component: TableResponsiveComponent },
            { path: 'progressbar', component: ProgressComponent },
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
    {
        path: 'form',
        component: PagesComponent,
        children: [
            { path: 'form-basic', component: BasicFormComponent },
            { path: 'form-validation', component: FormValidationComponent },
            { path: 'form-inputs', component: FormInputsComponent },
            { path: '', redirectTo: 'form/form-basic', pathMatch: 'full' },
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

