import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateSurveyComponent } from './components/create-survey/create-survey.component';
import { AdminLandingComponent } from './components/admin-landing/admin-landing.component';
import { LaunchSurveyComponent } from './components/launch-survey/launch-survey.component';
import { AnalyzeSurveyComponent } from './components/analyze-survey/analyze-survey.component';
import { AddQuestionComponent } from './components/add-question/add-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SurveyFilterPipe } from 'src/app/pipes/survey-filter/survey-filter.pipe';


@NgModule({
  declarations: [AdminLandingComponent, CreateSurveyComponent, LaunchSurveyComponent, AnalyzeSurveyComponent, AddQuestionComponent,
    SurveyFilterPipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    AddQuestionComponent
  ],
  providers: [
  ]
})
export class AdminModule { }
