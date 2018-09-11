import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsApiKey = 'd509c5c262424c3fae66e253655fcd68';
  private newsApiTopUrl = 'https://newsapi.org/v2/everything';
  private date = new Date();

  constructor(private http: HttpClient) { }

  getNews(searchSymbol){
    this.date.setDate(this.date.getDate() - 30);
    let params = new HttpParams()
      .set('apiKey', this.newsApiKey)
      .set('q', searchSymbol)
      .set('sortBy', 'popularity')
      .set('from', this.date.toISOString())
      .set('language', 'en');
    return this.http.get(this.newsApiTopUrl, {params});
  }
}
