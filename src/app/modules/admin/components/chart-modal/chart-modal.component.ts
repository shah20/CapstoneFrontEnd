import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { AdminService } from 'src/app/services/admin-service/admin.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart-modal',
  templateUrl: './chart-modal.component.html',
  styleUrls: ['./chart-modal.component.css']
})
export class ChartModalComponent implements OnInit {

  showChartFlag = false;
  chart: Chart;

  @ViewChild('bar-chart', {static: false}) el: ElementRef;

  constructor(
    private adminService: AdminService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    private elementRef: ElementRef
    ) { }

  ngOnInit() {
    this.adminService.getSurveyResponsesForChart().subscribe((resp: any) => {
      console.log('------------------', resp);
      this.setChart(resp.resultObject);
      this.showChartFlag = true;
    });
  }

  setChart(data) {
    const label = [];
    const value = [];
    Object.keys(data).forEach((resp: any) => {
      label.push(resp);
      value.push(data[resp]);
    });
    this.chart = new Chart(document.getElementById('canvas'), {
      type: 'bar',
      data: {
        labels: label,
        datasets: [{
          barPercentage: 0.5,
          borderColor: 'lightBlue',
          backgroundColor: 'lightBlue',
          barThickness: 50,
          hoverBackgroundColor: 'blue',
          data: value
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true,
          }],
          yAxes: [{
            display: true
          }],
        },
        animation: {
          // duration: 5
        }
      }
    });
  }

  exportToCsv() {
    
  }
}
