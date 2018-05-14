import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Article } from '../model/article';
import { ArticleService } from '../service/article.service';
import { AlertService } from '../service/alert.service';
import * as CONST from '../constants';


@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {

  articles: Array<Article>;

  constructor(
    private articleService: ArticleService,
    private alertService: AlertService,
    private router: Router) { }

  getAllClients() {
    this.articleService.getArticles()
      .subscribe(data => this.articles = data, error => this.alertService.error(error.error));

    return false;
  }

  goToDetails(article) {
    return false;
  }

  ngOnInit() {
    this.getAllClients();
  }
}
