import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsApiKey = 'd509c5c262424c3fae66e253655fcd68';
  private newsApiTopUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(
    private http: HttpClient
  ) { }
}
