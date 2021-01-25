import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import {  MultiDataSet, Label } from 'ng2-charts';
import { GetApiService } from '../api/get-api.service';

@Component({
  selector: 'app-chart',//selector for chart in app component html
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartData: any=[];
  barData: any = [];
  charLables: any =[];
  doughnutData: any = [];
  constructor(private api: GetApiService){};
  ngOnInit(){
    // Making api call
    this.api.apiCall().subscribe((data)=>{
      console.warn(data);
      this.chartData.push(data);
      data.map((e) => {
        this.barData.push(e.cases);
        this.charLables.push(e.continent);
        this.doughnutData.push(e.deaths);
      });
    })
  }

  
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.charLables;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.barData, label: 'Covid Total Cases' }
  ];


  doughnutChartLabels: Label[] = this.charLables;
  doughnutChartData: MultiDataSet = [
    this.doughnutData
  ];
  doughnutChartType: ChartType = 'doughnut';
}
