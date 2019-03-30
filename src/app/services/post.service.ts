import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { UrlsService } from './urls.service';
import { Post } from '../models/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  header = new HttpHeaders({'Content-Type':  'application/json'});

  constructor(
    private http: HttpClient,
    private urls: UrlsService
  ) { }


  // ***************** get all posts ********************** //
  getPosts(): Observable<any> {
    return this.http.get<Post>(this.urls.getApiUrls().posts, {
      observe: 'response',
      headers: this.header
    });
  }

  // ***************** get spesific posts ********************** //
  getSpesificPost(param): Observable<any> {
    return this.http.get<Post>(this.urls.getApiUrls(param).post, {
      observe: 'response',
      headers: this.header
    });
  }

}
