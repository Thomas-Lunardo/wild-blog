import { CommonModule } from '@angular/common';
import { Comment } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})
export class ArticleComponent {

  @Input() article!: Article;
}
