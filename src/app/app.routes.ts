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
import {ApplicationGuardService} from "../services/guard/application-guard.service";

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
    canActivate: [ApplicationGuardService],
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent,
        canActivate: [ApplicationGuardService],
      },
      {
        path: 'articles',
        component: PageArticleComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path: 'nouvelarticles',
        component: NouvelArticleComponent,
        canActivate : [ApplicationGuardService],
        data: {
          direction: 'article'
        }
      },
      {
        path: 'nouvelarticles/:idArticle',
        component: NouvelArticleComponent,
        canActivate : [ApplicationGuardService],
        data: {
          direction: 'article'
        }
      },
      {
        path: 'mvtstk',
        component: PageMvtstkComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path: 'nouveaumvt',
        component: PageMvtstkComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path: 'clients',
        component: PageClientComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path: 'nouveauclient',
        component: NouvelCltFrsComponent,
        canActivate : [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'nouveauclient/:id',
        component: NouvelCltFrsComponent,
        canActivate : [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'commandesclients',
        component: PageCmdCltFrsComponent,
        canActivate : [ApplicationGuardService],
        data: {
          origin: 'client'
        }
      },
      {
        path: 'nouvellecommandeclt',
        component: NouvelleCmdCltFrsComponent,
        canActivate : [ApplicationGuardService],
        data: {
          origin: 'client',
          direction: 'commandeclient'
        }
      },
      {
        path: 'fournisseurs',
        component: PageFournisseurComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path: 'nouveaufournisseur',
        component: NouvelCltFrsComponent,
        canActivate : [ApplicationGuardService],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'nouveaufournisseur/:id',
        component: NouvelCltFrsComponent,
        canActivate : [ApplicationGuardService],
        data: {
          origin: 'fournisseur'
        }
      },
      {
        path: 'nouvellecommandefrs',
        component: NouvelleCmdCltFrsComponent,
        canActivate : [ApplicationGuardService],
        data: {
          origin: 'fournisseur',
          direction: 'commandefrs'
        }
      },
      {
        path: 'commandesfournisseurs',
        canActivate: [ApplicationGuardService],
        component: PageCmdCltFrsComponent,
        data: {
           origin: 'fournisseur'
        }
      },
      {
        path: 'categories',
        component: PageCategoriesComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path: 'nouvellecategorie',
        component: NouvelleCategorieComponent,
        canActivate : [ApplicationGuardService],
        data: {
          direction: 'categorie'
        }
      },
      {
        path: 'nouvellecategorie/:idCategory',
        component: NouvelleCategorieComponent,
        canActivate : [ApplicationGuardService],
        data: {
          direction: 'categorie'
        }
      },
      {
        path: 'utilisateurs',
        component: PageUtilisateurComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path: 'nouvelutilisateur',
        component: NouvelCltFrsComponent,
        canActivate : [ApplicationGuardService],
        data: {
          origin: 'utilisateur'
        }
      },
      {
        path: 'profils',
        component: PageProfilComponent,
        canActivate : [ApplicationGuardService]
      },
      {
        path: 'changermdp',
        component: ChangerMotDePasseComponent,
        canActivate : [ApplicationGuardService],
        data: {
          direction: 'profil'
        }
      }
    ]
  }
];
