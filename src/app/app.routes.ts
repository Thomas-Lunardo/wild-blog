import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent},
    { path: 'contact', component: ContactFormComponent},
    { path: 'article/:id', component: ArticlePageComponent},
    { path: '**', component: NotFoundComponent}
];
