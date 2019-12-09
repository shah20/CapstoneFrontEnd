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

  @ViewChild('bar-chart', {static: false}) el: ElementRef;

  constructor(
    private adminService: AdminService,
    @Inject(MAT_DIALOG_DATA) public dialogData: any
    ) { }

  ngOnInit() {
    this.adminService.getSurveyResponsesForChart().subscribe((resp: any) => {
      console.log('------------------', resp);
      this.createChart();
      this.showChartFlag = true;
    });
  }

  createChart() {
    const chart = new Chart(this.el, {
      type: 'bar',
      data: {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (millions)',
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
  });
  }
}
