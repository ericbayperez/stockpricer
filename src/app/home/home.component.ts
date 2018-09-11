import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { StocksService } from '../stocks.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private newsService : NewsService,
    private stockService : StocksService
  ) { }

  public topNews;
  public stockInfo;
  public showGuide;
  public showNewsStories;
  public showStockGraph;
  public searchSymbol;
  public chart;
  public chartData;

  ngOnInit() {
    this.showGuide = true;
    this.showNewsStories = false;
    this.showStockGraph = false;
  }

  onSearch(){
    this.showGuide = false;
    this.getStock();
    // this.createChartData();
    // this.buildChart();
    this.getNews();
    this.showNewsStories = true;
  }

  createChartData(){
    //FORMAT DATA TO GO INTO CHART
  }

  buildChart(){
    this.chart = new Chart('canvas',{
      type: 'line',
      options: {
        scales: {
          xAxes: [{
            type: 'time'
          }]
        }
      },
      data: this.chartData
    });
  }

  getNews(){
    this.newsService.getNews(this.searchSymbol).subscribe(
      data => { this.topNews = data },
      err => console.error(err),
      () => this.topNews = this.topNews.articles
    );
  }

  getStock(){
    this.stockService.getStock(this.searchSymbol).subscribe(
      data => { this.stockInfo = data },
      err => console.error(err),
      () => console.log(this.stockInfo)
    );
  }

}
