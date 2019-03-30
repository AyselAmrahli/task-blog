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
    };
  }
}
