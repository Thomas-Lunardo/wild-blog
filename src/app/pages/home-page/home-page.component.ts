import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ArticleListComponent } from '../../components/article-list/article-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, ArticleListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {

  messageFromArticle: string = '';

  handleNotification(message: string) {
    this.messageFromArticle = message;
  }
}
