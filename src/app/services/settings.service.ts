import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linkTheme: Element | null = document.querySelector('#theme');

  checkTheme() {
    const urlDefault = './assets/css/colors/purple-dark.css';
    const urlByUser = localStorage.getItem('theme');
    const url = urlByUser || urlDefault;

    this.linkTheme?.setAttribute('href', url);
  }

  sanitizeUrlString(url : string) {
    url = url.replace(/\s/g, '');
    return url.replace(/\u200B/g, '');
  }

  changeTheme(theme: string) {
    let url : string = this.sanitizeUrlString(`./assets/css/colors/${theme}.css`);
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const links : NodeListOf<Element> = document.querySelectorAll('.selector');

    links?.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = this.sanitizeUrlString(`./assets/css/colors/${btnTheme}.css`);
      const currentThemeUrl = this.linkTheme?.getAttribute('href');

      if (btnThemeUrl === currentThemeUrl) {
        elem.classList.add('working');
      }
    });
  }

  constructor() {
    console.log('Settings service init');

    this.checkTheme();
   }
}
