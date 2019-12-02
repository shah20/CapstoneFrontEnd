import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { LaunchSurveyComponent } from './components/launch-survey/launch-survey.component';
import { AnalyzeSurveyComponent } from './components/analyze-survey/analyze-survey.component';


const routes: Routes = [
  { path: '', component: AdminLandingComponent,
    children: [
      { path: 'createSurvey', component: CreateSurveyComponent },
      { path: 'launchSurvey', component: LaunchSurveyComponent },
      { path: 'analyzeSurvey', component: AnalyzeSurveyComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
