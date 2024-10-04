import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() notifyHomePage: EventEmitter<string> = new EventEmitter<string>();

  sendNotification() {
    this.notifyHomePage.emit(`L\'article "${this.article.title}" vient d\'être liké.`);
  }
}
