import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

/**
 * This class responsible to data integration rest
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'https://newsapi.org/v2';
  apiKey = '';

  totalPosts = null;
  pages: any;

  constructor(private http: HttpClient) { }

  //this method responsible to get news
  getTopNews(cat){
    return this.http.get(
      `${this.url}/top-headlines?category=${cat}&country=us&apiKey=${
        this.apiKey
      }`
    ).pipe(map(res => res['articles']));
  }
  //this method responsible to get sources
  getSportSources() {
    return this.http
      .get(
        `${this.url}/sources?category=sports&language=en&apiKey=${this.apiKey}`
      )
      .pipe(map(res => res['sources']));
  }

  //this method repsonsible get random user
  getRandomUser() {
    return this.http
    .get(
      `https://randomuser.me/api?results=20`
    )
    .pipe(map(res => res['results']));
  }
}
