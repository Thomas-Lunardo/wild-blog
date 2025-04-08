import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { visitorOnlyGuard } from './guards/visitor-only.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { authGuard } from './guards/auth.guard';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { roleGuard } from './guards/role.guard';

export const routes: Routes = [
    { path: 'admin', component: AdminPageComponent, canActivate: [roleGuard('ROLE_ADMIN')]},
    { path: 'article/:id', component: ArticlePageComponent},
    { path: 'contact', component: ContactFormComponent},
    { path: 'login', component: LoginFormComponent, canActivate: [visitorOnlyGuard]},
    { path: 'profile', component: ProfilePageComponent, canActivate: [authGuard]},
    { path: 'signup', component: SignupFormComponent, canActivate: [visitorOnlyGuard]},
    { path: '', component: HomePageComponent},
    { path: '**', component: NotFoundComponent}
];
