import { Component, inject, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article-page.component.html',
  styleUrl: './article-page.component.scss'
})

export class ArticlePageComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  articleId!: number;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.articleId = Number(params.get('id'));
    });
  }

  article: Article = {
    id: 1,
    title: 'J\'voulais juste un mac morning',
    author: 'Jean body',
    content: 'Jules Winnfield, incarné par Samuel L. Jackson dans Pulp Fiction, est un tueur à gages charismatique et philosophe, célèbre pour son monologue biblique avant d\'exécuter ses victimes. Avec sa coupe afro et son regard perçant, il impose une présence marquante dans chaque scène. Son duo avec Vincent Vega, joué par John Travolta, mélange humour noir et tension. Mais au-delà de son rôle violent, Jules traverse une profonde transformation spirituelle. À la fin du film, il renonce à la violence après une « intervention divine », symbolisant son désir de rédemption et de changement.',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTm4WgsTa2pNA6Z8oNr1nL1NlEQUPuKNX1TB40Q-kppjjQcYNKHphwKHbQiA&s",
    isPublished: true,
    comment: '',
    likes: 0
  }

  togglePublication(): void {
    this.article.isPublished = !this.article.isPublished;
  }

}
