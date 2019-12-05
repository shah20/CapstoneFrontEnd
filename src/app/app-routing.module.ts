import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { TakeSurveyComponent } from './components/take-survey/take-survey.component';


const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'
  },
  {
    path: 'takeSurvey', component: TakeSurveyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
