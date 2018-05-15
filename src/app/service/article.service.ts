import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Article } from '../model/article';
import * as CONST from '../constants';

@Injectable()
export class ArticleService {

  private article_url: string = CONST.REST_HOST + '/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.article_url + '?page=2&size=50');
  }

  getArticle(id): Observable<Article> {
    return this.http.get<Article>(this.article_url + '/' + id);
  }

  addArticle(article): Observable<Article>  {
    return this.http.post<Article>(this.article_url, article);
  }

  updateArticle(article): Observable<Article> {
    return this.http.put<Article>(this.article_url, article);
  }

  deleteArticle(id): Observable<any> {
    return this.http.delete(this.article_url + '/' + id);
  }
}
