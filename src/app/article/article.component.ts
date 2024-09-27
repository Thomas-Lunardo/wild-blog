import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Article {
  title: string;
  author: string;
  content: string;
  image: string;
  isPublished: boolean,
  comment: string
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {

  article1: Article = {
    title: 'J\'voulais juste un mac morning',
    author: 'Jean body',
    content: 'Jules Winnfield, incarné par Samuel L. Jackson dans Pulp Fiction, est un tueur à gages charismatique et philosophe, célèbre pour son monologue biblique avant d\'exécuter ses victimes. Avec sa coupe afro et son regard perçant, il impose une présence marquante dans chaque scène. Son duo avec Vincent Vega, joué par John Travolta, mélange humour noir et tension. Mais au-delà de son rôle violent, Jules traverse une profonde transformation spirituelle. À la fin du film, il renonce à la violence après une « intervention divine », symbolisant son désir de rédemption et de changement.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm4WgsTa2pNA6Z8oNr1nL1NlEQUPuKNX1TB40Q-kppjjQcYNKHphwKHbQiA&s",
    isPublished: true,
    comment: ''
  }

  sayMyName(): void {
    alert("Say my name");
  }

  togglePublication(): void {
    this.article1.isPublished = !this.article1.isPublished;
  }
}
