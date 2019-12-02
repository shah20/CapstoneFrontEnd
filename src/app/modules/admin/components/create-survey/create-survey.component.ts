import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { AddQuestionComponent } from '../add-question/add-question.component';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  // dialog: MatDialogRef<AddQuestionComponent>;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  addQuestion() {
    const dialog = this.dialog.open(AddQuestionComponent, {
      height: '400px',
      width: '600px',
    });

    dialog.afterClosed().subscribe((result: any) => {
      console.log(result);
    });
  }

}
