import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { StocksService } from '../stocks.service';

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
  public showGuide = true;
  public showNewsStories = false;
  public showStockGraph = false;

  ngOnInit() {
    // this.getTopNews();
    // this.getAppleNews();
  }

  getTopNews(){
    this.newsService.getTopNews().subscribe(
      data => { this.topNews = data },
      err => console.error(err),
      () => this.topNews = this.topNews.articles
    );
  }

  getAppleNews(){
    this.stockService.getAppleStock().subscribe(
      data => { this.stockInfo = data },
      err => console.error(err),
      () => console.log(this.stockInfo)
    );
  }

}
