import { Component } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { CommonModule } from '@angular/common';

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
  imports: [ArticleComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  
  title: string = 'Bienvenue sur le Wild Blog de Thomas !';
  
  articles: Article[] = [
    { 
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: true, 
      comment: '', 
      likes: 120 
    },
    { 
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: false, 
      comment: '', 
      likes: 75 
    },
    { 
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: true, 
      comment: '', 
      likes: 200 
    },
    { 
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: true, 
      comment: '', 
      likes: 140 
    },
    { 
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: true, 
      comment: '', 
      likes: 80 
    },
    { 
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: true, 
      comment: '', 
      likes: 200 
    }
  ];
}
