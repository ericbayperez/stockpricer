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
  private newsApiTopUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) { }

  getTopNews(){
    let params = new HttpParams()
      .set('apiKey', this.newsApiKey)
      .set('country', 'us');
    return this.http.get(this.newsApiTopUrl, {params});
  }
}
