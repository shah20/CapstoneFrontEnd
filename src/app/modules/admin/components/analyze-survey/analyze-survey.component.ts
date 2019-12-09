import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service/admin.service';
import { UtilityService } from 'src/app/services/utility-service/utility-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AnalyzeSurveyModalComponent } from '../analyze-survey-modal/analyze-survey-modal.component';
import { ChartModalComponent } from '../chart-modal/chart-modal.component';

@Component({
  selector: 'app-analyze-survey',
  templateUrl: './analyze-survey.component.html',
  styleUrls: ['./analyze-survey.component.css']
})
export class AnalyzeSurveyComponent implements OnInit {

  surveys = [];

  constructor(
    private adminService: AdminService,
    private dialog: MatDialog,
    private utilityService: UtilityService) { }

  ngOnInit() {
    this.getSurveys();
  }

  analyzeSurvey(survey) {
    const dialog = this.dialog.open(AnalyzeSurveyModalComponent, {
      height: '600px',
      width: '800px',
      data: survey
    });

    dialog.afterClosed().subscribe((result: any) => {
      if (result) {
      }
    });
  }

  getSurveys() {
    this.adminService.getSurveysForAnalysis().subscribe((resp: any) => {
      this.surveys = resp.resultObject;
    });
  }

  showGraph() {
    const dialog = this.dialog.open(ChartModalComponent, {
      height: '600px',
      width: '800px'
    });

    dialog.afterClosed().subscribe((result: any) => {
      if (result) {
      }
    });
  }

}
