import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  private alphaApiKey = 'S1W3OFDCD4P4A82C';
  private alphaBaseUrl = 'https://www.alphavantage.co/query';

  constructor(private http: HttpClient) { }

  getAppleStock(){
    let params = new HttpParams()
      .set('apikey', this.alphaApiKey)
      .set('symbol', 'AAPL')
      .set('function', 'TIME_SERIES_DAILY');
    return this.http.get(this.alphaBaseUrl, {params});
  }
}
