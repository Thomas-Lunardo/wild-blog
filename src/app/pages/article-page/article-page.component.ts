import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article.model';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})

export class ArticlePageComponent {

  private route: ActivatedRoute = inject(ActivatedRoute);
  private http = inject(HttpClient);
  articleId!: number;
  private articleSubscription!: Subscription;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });

    this.articleSubscription = this.getArticleById(this.articleId).subscribe((data) => {
      console.log('step 1: récupérer le http client', data);
      this.article = data;
      console.log('step 2: récupérer data dans this article', this.article);
    });
  }

  article!: Article;

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

  ngOnDestroy() {
    this.articleSubscription.unsubscribe();
  }

  getArticleById(id: number) {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
    ;
  }
}
