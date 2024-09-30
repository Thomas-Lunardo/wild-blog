import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Article {
  id: number,
  title: string;
  author: string;
  content: string;
  image: string;
  isPublished: boolean,
  comment: string,
  likes: number
}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  
  articles: Article[] = [
    { 
      id: 1,
      title: 'Angular 16: Les nouveautés', 
      author: 'Alice', 
      content: 'Les nouveautés d\'Angular 16 incluent...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: true, 
      comment: '', 
      likes: 120 
    },
    { 
      id: 2,
      title: 'Développer une API REST', 
      author: 'Bob', 
      content: 'Développer une API REST nécessite...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: false, 
      comment: '', 
      likes: 75 
    },
    { 
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: true, 
      comment: '', 
      likes: 200 
    },
    { 
      id: 4,
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: true, 
      comment: '', 
      likes: 140 
    },
    { 
      id: 5,
      title: 'Pourquoi TypeScript est essentiel ?', 
      author: 'Charlie', 
      content: 'TypeScript apporte de la robustesse...', 
      image: 'https://via.placeholder.com/150x150',
      isPublished: true, 
      comment: '', 
      likes: 80 
    },
    { 
      id: 6,
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
