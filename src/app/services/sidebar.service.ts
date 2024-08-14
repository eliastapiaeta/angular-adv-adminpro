import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Dashboard!',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/'},
        {titulo: 'ProgessBar', url: '/dashboard/progressbar'},
        {titulo: 'Gráficas', url: '/dashboard/grafical'},
      ]
    },
    {
      titulo: 'Forms!',
      icono: 'has-arrow waves-effect waves-dark',
      submenu: [
        {titulo: 'Form', url: '/form'},
        {titulo: 'Form Validation', url: '/form/form-validation'},
        {titulo: 'Basic Forms', url: '/form/form-basic'},
        {titulo: 'Form Imputs', url: '/form/form-inputs'},
      ]
    }
  ]
  constructor() { }
}
