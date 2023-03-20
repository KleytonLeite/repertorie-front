import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color: String = 'colorViolet';
  colorFooter: String = 'colorFooterViolet';
  title = 'repertorie-front';
  toolbar: any;
  footer: any;

  changeTheme() {
    this.toolbar = document.querySelector('body > app-root > mat-toolbar');
    this.footer = document.querySelector('body > app-root > app-footer > div');
    switch (this.toolbar.value) {
      case 'colorViolet':
        this.color = 'colorGreen';
        this.colorFooter = 'colorFooterGreen';
        break;
      case 'colorGreen':
        this.color = 'colorRed';
        this.colorFooter = 'colorFooterRed';
        break;
      case 'colorRed':
        this.color = 'colorWhite';
        this.colorFooter = 'colorFooterWhite';
        break;
      case 'colorWhite':
        this.color = 'colorViolet';
        this.colorFooter = 'colorFooterViolet';
        break;
    }
    this.toolbar!.value = this.color;
    this.footer!.value = this.colorFooter;

    // console.log(this.data);
    //this.color = 'colorGreen';
  }
}
