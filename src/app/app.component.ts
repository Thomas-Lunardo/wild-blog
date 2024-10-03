import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from "./forms/contact-form/contact-form.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HomePageComponent, RouterOutlet, ContactFormComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
 
  title: string = 'Bienvenue sur le Wild Blog de Thomas !';

}
