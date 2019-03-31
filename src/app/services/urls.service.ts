import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlsService {

  ROOT_URL = 'https://jsonplaceholder.typicode.com';

  constructor() { }

  getApiUrls(param: any = 1) {
    return {
      posts: '' + this.ROOT_URL + '/posts',
      post: '' + this.ROOT_URL + '/posts/' + param +'',
      weather: 'https://api.openweathermap.org/data/2.5/weather?id=587084&units=metric&appid=4cfef4321c27c347dbda1885b179773d'
    };
  }
}
