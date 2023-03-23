import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color: String = 'colorViolet';
  colorFooter: String = 'colorFooterViolet';
  colorNavigation: String = 'colorNavigationViolet';
  title = 'repertorie-front';
  toolbar!: any;
  footer!: any;
  navigation!: any;

  favoriteSeason!: string;
  seasons: string[] = ['Violeta', 'Verde', 'Vermelho', 'Branco'];

  changeTheme(value: String) {
    this.toolbar = document.querySelector('body > app-root > mat-toolbar');
    this.footer = document.querySelector('body > app-root > div');
    this.navigation = document.querySelector(
      'body > app-root > div > div > div > button:nth-child(1) > a > div'
    );

    switch (value) {
      case 'Violeta':
        this.color = 'colorViolet';
        this.colorFooter = 'colorFooterViolet';
        this.colorNavigation = 'colorNavigationViolet';
        break;
      case 'Verde':
        this.color = 'colorGreen';
        this.colorFooter = 'colorFooterGreen';
        this.colorNavigation = 'colorNavigationGreen';
        break;
      case 'Vermelho':
        this.color = 'colorRed';
        this.colorFooter = 'colorFooterRed';
        this.colorNavigation = 'colorNavigationRed';
        break;
      case 'Branco':
        this.color = 'colorWhite';
        this.colorFooter = 'colorFooterWhite';
        this.colorNavigation = 'colorNavigationWhite';
        break;
    }
    this.toolbar!.value = this.color;
    this.footer!.value = this.colorFooter;
    this.navigation!.value = this.colorNavigation;
  }
}
