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
import {NouvelCltFrsComponent} from "../composants/nouvel-clt-frs-utilisateur/nouvel-clt-frs.component";
import {PageCmdCltFrsComponent} from "../pages/page-cmd-clt-frs/page-cmd-clt-frs.component";
import {NouvelleCmdCltFrsComponent} from "../composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component";
import {PageCategoriesComponent} from "../pages/categorie/page-categories/page-categories.component";
import {NouvelleCategorieComponent} from "../pages/categorie/nouvelle-categorie/nouvelle-categorie.component";
import {PageUtilisateurComponent} from "../pages/utilisateur/page-utilisateur/page-utilisateur.component";
import {PageProfilComponent} from "../pages/profil/page-profil/page-profil.component";
import {ChangerMotDePasseComponent} from "../pages/profil/changer-mot-de-passe/changer-mot-de-passe.component";

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
        component: NouvelArticleComponent,
        data: {
          direction: 'article'
        }
      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent
      },
      {
        path: 'nouveaumvt',
        component: PageMvtstkComponent
      },
      {
        path: 'clients',
        component: PageClientComponent
      },
      {
        path: 'nouveauclient',
        component: NouvelCltFrsComponent,
        data: {
          origin: 'client'
        }
      },
      {
        path: 'commandesclients',
        component: PageCmdCltFrsComponent,
        data: {
          origin: 'client'
        }
      },
      {
        path: 'nouvellecommandeclt',
        component: NouvelleCmdCltFrsComponent,
        data: {
          origin: 'client',
          direction: 'commandeclient'
        }
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent
      },
      {
        path: 'nouveaufournisseur',
        component: NouvelCltFrsComponent,
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'nouvellecommandefrs',
        component: NouvelleCmdCltFrsComponent,
        data: {
          origin: 'fournisseur',
          direction: 'commandefrs'
        }
      },
      {
        path: 'commandesfournisseurs',
        component: PageCmdCltFrsComponent,
        data: {
           origin: 'fournisseur'
        }
      },
      {
        path: 'categories',
        component: PageCategoriesComponent
      },
      {
        path: 'nouvellecategorie',
        component: NouvelleCategorieComponent,
        data: {
          direction: 'categorie'
        }
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent
      },
      {
        path: 'nouvelutilisateur',
        component: NouvelCltFrsComponent,
        data: {
          origin: 'utilisateur'
        }
      },
      {
        path: 'profils',
        component: PageProfilComponent
      },
      {
        path: 'changermdp',
        component: ChangerMotDePasseComponent,
        data: {
          direction: 'profil'
        }
      }
    ]
  }
];
