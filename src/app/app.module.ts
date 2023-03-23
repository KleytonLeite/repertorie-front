import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { AngularFlexLayoutComponent } from './angular-flex-layout/angular-flex-layout.component';
import { HomeComponent } from './home/home.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { RepertorieComponent } from './pages/repertorie/repertorie.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AngularFlexLayoutComponent,
    HomeComponent,
    PageErrorComponent,
    FooterComponent,
    NavigationComponent,
    RepertorieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
