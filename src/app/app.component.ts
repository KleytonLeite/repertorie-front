import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color: String = 'colorViolet';
  title = 'repertorie-front';
  data: any;

  troca() {
    this.data = document.querySelector('body > app-root > mat-toolbar');
    if (this.data.value == 'colorViolet') {
      this.color = 'colorGreen';
    } else {
      this.color = 'colorViolet';
    }
    this.data!.value = this.color;

    console.log(this.data);
    //this.color = 'colorGreen';
  }
}
