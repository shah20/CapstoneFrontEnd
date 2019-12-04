import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service/admin.service';

@Component({
  selector: 'app-launch-survey',
  templateUrl: './launch-survey.component.html',
  styleUrls: ['./launch-survey.component.css']
})
export class LaunchSurveyComponent implements OnInit {

  surveyList = [];

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.adminService.getAllDraftSurveys().subscribe((resp: any) => {
      this.surveyList = resp.resultObject;
      console.log('surveys', this.surveyList);
    });
  }

  launchSurvey(survey) {
    this.adminService.launchSurvey({id: survey.id}).subscribe((resp: any) => {
      console.log('launched');
    })
  }

}
