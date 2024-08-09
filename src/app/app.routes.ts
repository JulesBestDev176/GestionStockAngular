import { Routes } from '@angular/router';
import {PageLoginComponent} from "../pages/page-login/page-login.component";
import {PageDashboardComponent} from "../pages/page-dashboard/page-dashboard.component";
import {PageStatistiquesComponent} from "../pages/page-statistiques/page-statistiques.component";
import {PageSignupComponent} from "../pages/page-signup/page-signup.component";
import {PageArticleComponent} from "../pages/articles/page-article/page-article.component";
import {NouvelArticleComponent} from "../pages/articles/nouvel-article/nouvel-article.component";
import {PageMvtstkComponent} from "../pages/page-mvtstk/page-mvtstk.component";
import {PageClientComponent} from "../pages/client/page-client/page-client.component";
import {PageFournisseurComponent} from "../pages/fournisseurs/page-fournisseur/page-fournisseur.component";

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
      },
      {
        path: 'nouvelarticles',
        component: NouvelArticleComponent
      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent
      },
      {
        path: 'clients',
        component: PageClientComponent
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent
      }
    ]
  }
];
