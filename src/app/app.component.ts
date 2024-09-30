import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "./home-page/home-page.component";
import { ArticlePageComponent } from './article-page/article-page.component';

interface Article {
  title: string;
  author: string;
  content: string;
  image: string;
  isPublished: boolean,
  comment: string,
  likes: number
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticlePageComponent, CommonModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
 
  title: string = 'Bienvenue sur le Wild Blog de Thomas !';

}
