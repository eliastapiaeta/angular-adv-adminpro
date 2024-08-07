import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms'

// Modulos
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { TableResponsiveComponent } from './table-responsive/table-responsive.component';

import { PagesComponent } from './pages.component';

import { BasicFormComponent } from './inputs/basic-form.component';
import { FormValidationComponent } from './inputs/form-validation.component';
import { FormInputsComponent } from './inputs/form-inputs.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    TableResponsiveComponent,
    PagesComponent,
    BasicFormComponent,
    FormValidationComponent,
    FormInputsComponent,
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    TableResponsiveComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    ComponentsModule,
    MatIconModule,
  ]
})
export class PagesModule { }
