import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private newsService : NewsService) { }

  public topNews;

  ngOnInit() {
    this.getTopNews();
  }

  getTopNews(){
    this.newsService.getTopNews().subscribe(
      data => { this.topNews = data },
      err => console.error(err),
      () => this.topNews = this.topNews.articles
    );
  }

}
