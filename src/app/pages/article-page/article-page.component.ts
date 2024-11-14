import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article.model';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})

export class ArticlePageComponent {

  private route: ActivatedRoute = inject(ActivatedRoute);
  private apiService = inject(ApiService);
  articleId!: number;
  private articleSubscription!: Subscription;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });

    this.articleSubscription = this.apiService.getArticleById(this.articleId).subscribe((data) => {
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
}
