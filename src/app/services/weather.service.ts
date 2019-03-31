import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UrlsService } from './urls.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  header = new HttpHeaders(
    {'Content-Type':  'application/json', 'Access-Control-Allow-Origin': '*'}
    );

  constructor(
    private http: HttpClient,
    private urls: UrlsService
  ) { }



  // ***************** get current weather ********************** //
  getCurrentWeather(): Observable<any> {
    return this.http.get<Object>(this.urls.getApiUrls().weather, {
      observe: 'response',
      headers: this.header
    });
  }
}
