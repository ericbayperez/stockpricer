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
    this.showStockGraph = true;
    this.getNews();
    this.showNewsStories = true;
  }

  buildChart(){
    let stockPrices = this.stockInfo["Time Series (Daily)"];
    let days = Object.keys(stockPrices).map(function(key){
      return key;
    });
    let prices = Object.keys(stockPrices).map(function(key){
      return stockPrices[key]['2. high'];
    });
    this.chart = new Chart('canvas',{
      type: 'line',
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{type: 'time'}]
        }
      },
      data: {
        labels: days, 
        datasets: [{
          label: "Daily High",
          backgroundColor: '#50BE76',
          data: prices
        }]
      }
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
      () => this.buildChart()
    );
  }

}
