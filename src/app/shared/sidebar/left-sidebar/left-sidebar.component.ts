import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../../services/sidebar.service';


@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent implements OnInit{
  menuItems: any[];

  constructor ( private sidebarService: SidebarService ) {
    this.menuItems = sidebarService.menu;
    console.log({'this.menuItems': this.menuItems});
  }

  ngOnInit(): void {
  }
}
