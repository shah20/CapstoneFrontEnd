import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user-service.service';
import { UtilityService } from 'src/app/services/utility-service/utility-service.service';

@Component({
  selector: 'app-take-survey',
  templateUrl: './take-survey.component.html',
  styleUrls: ['./take-survey.component.css']
})
export class TakeSurveyComponent implements OnInit {

  surveyId;
  survey;
  showSurvey = false;
  resultForm: FormGroup;
  userCheckErrorMessage = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
    private formbuilder: FormBuilder,
    private userService: UserService,
    private utilityService: UtilityService,
    private router: Router
    ) { }

  ngOnInit() {
    this.formInitialize();
    this.surveyId = this.activatedRoute.snapshot.params.survyeId;
    this.getSurvey();
  }

  formInitialize() {
    this.resultForm = this.formbuilder.group({
      emailId: ['', [Validators.required]],
      name: ['', [Validators.required]],
      takenOn: ['']
    });
  }

  getSurvey() {
    this.adminService.getSurvey(this.surveyId).subscribe((resp: any) => {
      this.survey = resp.resultObject;
      console.log('survye', this.survey);
    });
  }

  surveyResponse(surveyResponse) {
    this.resultForm.get('takenOn').setValue(new Date().getTime());
    const data = Object.assign({}, this.resultForm.value, surveyResponse);
    this.userService.saveSurveyResponse(data).subscribe((resp: any) => {
      this.router.navigate(['../listSurveys']);
      this.utilityService.openSnackBar('Response saved successfully', 'Ok');
    });
    console.log('data', data);
  }

  submit() {
    this.userService.checkUser(this.resultForm.value).subscribe((resp: any) => {
      if (resp.result) {
        this.showSurvey = true;
        this.userCheckErrorMessage = '';
      } else {
        this.userCheckErrorMessage = 'You can take survey only once';
        console.log('as');
      }
    });
  }
}
