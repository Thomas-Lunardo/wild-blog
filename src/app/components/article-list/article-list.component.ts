import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../models/article.model';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [AsyncPipe, CommonModule, RouterLink],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent implements OnInit{

    articles$!: Observable<Article[]>;

    private http = inject(HttpClient);

    ngOnInit() {
      this.getAllArticles();
    }

    getAllArticles() {
      this.articles$ = this.http.get<Article[]>('http://localhost:3000/articles');
    }
 }
