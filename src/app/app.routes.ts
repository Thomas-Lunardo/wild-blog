import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';

export const routes: Routes = [
    { path: 'article/:id', component: ArticlePageComponent},
    { path: 'contact', component: ContactFormComponent},
    { path: 'signup', component: SignupFormComponent},
    { path: '', component: HomePageComponent},
    { path: '**', component: NotFoundComponent}
];
