import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   progreso: number = 20;
   progreso1: number = 25;
   progreso2: number = 95;

   get getProgreso1() {
    return `${ this.progreso1 }%`;
  }

  get getProgreso2() {
    return `${ this.progreso2 }%`;
  }


   get getPorcentaje() {
    return `${this.progreso}%`;
   }
   
   constructor() { }

  ngOnInit(): void {
  }
}
