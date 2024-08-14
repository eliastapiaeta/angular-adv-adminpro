import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent implements OnInit {
  constructor( private settingsService : SettingsService ){}

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }
  
  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }
}
