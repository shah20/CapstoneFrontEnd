import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin-service/admin.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(
    private router: ActivatedRoute,
    private adminService: AdminService,
    private formbuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.formInitialize();
    this.surveyId = this.router.snapshot.params.survyeId;
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
    console.log('data', data);
  }

  submit() {
    this.showSurvey = true;
  }
}
