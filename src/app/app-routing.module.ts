import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RepertorieComponent } from './pages/repertorie/repertorie.component';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'repertorie', component: RepertorieComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
