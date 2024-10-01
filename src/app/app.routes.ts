import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

export const routes: Routes = [
    { path: 'article/:id', component: ArticlePageComponent},
    { path: 'contact', component: ContactFormComponent},
    { path: 'signup', component: SignupFormComponent},
    { path: '', component: HomePageComponent},
    { path: '**', component: NotFoundComponent}
];
