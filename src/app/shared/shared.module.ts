import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { RightSidebarComponent } from './sidebar/right-sidebar/right-sidebar.component';
import { LeftSidebarComponent } from './sidebar/left-sidebar/left-sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent,
    RightSidebarComponent,
    LeftSidebarComponent,
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent,
    RightSidebarComponent,
    LeftSidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
