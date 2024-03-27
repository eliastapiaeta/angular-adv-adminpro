import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { RightSidebarComponent } from './shared/sidebar/right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './shared/sidebar/left-sidebar/left-sidebar.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { TableResponsiveComponent } from './pages/table-responsive/table-responsive.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,
    DashboardComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    ProgressComponent,
    Grafica1Component,
    TableResponsiveComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
