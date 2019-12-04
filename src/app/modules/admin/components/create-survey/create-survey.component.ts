import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin-service/admin.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  responseType = [
    {label: 'Single Line', value: 'SL'},
    {label: 'Multi Line', value: 'ML'},
    {label: 'Single Select Option', value: 'SSO'},
    {label: 'Multi Select Option', value: 'MSO'},
    {label: 'Date', value: 'DT'},
  ];

  validations = [
    {label: 'Alphabets Only', value: 'AO'},
    {label: 'AlphaNumeric', value: 'AN'},
    {label: 'Number Only', value: 'NT'}
  ];
  questionsFormArray: FormArray;
  surveyForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.questionsFormArray = new FormArray([]);
    this.surveyForm = this.formBuilder.group({
      surveyName: ['', [Validators.required]],
      questions: this.questionsFormArray,
      createdOn: [],
      status: ['DRAFT']
    });
  }

  addQuestion() {
    const dialog = this.dialog.open(AddQuestionComponent, {
      height: '400px',
      width: '600px',
      data: {
        validations: this.validations,
        responseType: this.responseType
      }
    });

    dialog.afterClosed().subscribe((result: any) => {
      if (result) {
        this.questionsFormArray.push(result.data);
      }
    });
  }

  getLabelFromValue(type, value) {
    if (value) {
      if (type === 'responseType') {
        return (this.responseType.find(resp => resp.value === value)).label;
      } else {
        return (this.validations.find(val => val.value === value)).label;
      }
    }
    return '-';
  }

  submitSurvey() {
    this.surveyForm.get('createdOn').setValue(new Date().getTime());
    console.log('survey', this.surveyForm.value);
    const data = JSON.parse(JSON.stringify(this.surveyForm.value));
    data.questions.forEach((question) => {
      question.options = question.options.join(',');
    });
    this.adminService.saveSurvey(data).subscribe((resp: any) => {
      if (resp.result) {
        console.log('saved');
      }
    });
  }

  editQuestion(questionForm, index) {
    const dialog = this.dialog.open(AddQuestionComponent, {
      height: '400px',
      width: '600px',
      data: {
        validations: this.validations,
        responseType: this.responseType,
        form: questionForm.value
      }
    });

    dialog.afterClosed().subscribe((result: any) => {
      if (result) {
        this.questionsFormArray.controls[index].setValue(result.data.value);
        // this.questionsFormArray.push(result.data);
      }
    });
  }

  deleteQuestion(index) {
    this.questionsFormArray.removeAt(index);
  }
}
