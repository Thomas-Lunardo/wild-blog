import { Component } from '@angular/core';

interface NotFound {
  title: string;
  image: string;
}

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {

  notFound: NotFound = {
    title: 'J\'voulais juste un mac morning',
    image: "https://formation-agent-securite.net/wp-content/uploads/2013/03/videur-boite-de-nuit.jpg"
  }
}
