import { Routes } from '@angular/router';
import {PageLoginComponent} from "../pages/page-login/page-login.component";
import {PageDashboardComponent} from "../pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "../pages/page-statistiques/page-statistiques.component";
import {PageSignupComponent} from "../pages/page-signup/page-signup.component";
import {PageArticleComponent} from "../pages/page-article/page-article.component";

export const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'signup',
    component: PageSignupComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent
      },
      {
        path: 'articles',
        component: PageArticleComponent
      }
    ]
  }
];
