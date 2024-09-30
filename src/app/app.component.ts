import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "./home-page/home-page.component";
import { ArticlePageComponent } from './article-page/article-page.component';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomePageComponent, RouterOutlet, ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
 
  title: string = 'Bienvenue sur le Wild Blog de Thomas !';

}
