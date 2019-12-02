import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { LaunchSurveyComponent } from './components/launch-survey/launch-survey.component';
import { AnalyzeSurveyComponent } from './components/analyze-survey/analyze-survey.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';


@NgModule({
  declarations: [AdminLandingComponent, CreateSurveyComponent, LaunchSurveyComponent, AnalyzeSurveyComponent, AddQuestionComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule
  ],
  entryComponents: [
    AddQuestionComponent
  ]
})
export class AdminModule { }
