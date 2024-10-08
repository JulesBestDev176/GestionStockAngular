import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {NgClass, NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  public menuProperties: Array<Menu> = [
    {
      id:"1",
      titre:"Tableau de bord",
      icon:"fa-solid fa-chart-line",
      url:"",
      sousMenus:[
        {
          id:"11",
          titre:"Vue d'ensemble",
          icon:"fa-solid fa-chart-pie",
          url:"",
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'fa-solid fa-chart-column',
          url: 'statistiques',
        }
      ]
    },
    {
      id: '2',
      titre: 'Articles',
      icon: 'fa-solid fa-boxes-stacked',
      url: '',
      sousMenus: [
        {
          id: '21',
          titre: 'Articles',
          icon: 'fa-solid fa-boxes-stacked',
          url: 'articles',
        },
        {
          id: '22',
          titre: 'Mouvement du stock',
          icon: 'fa-brands fa-stack-overflow',
          url: 'mvtstk',
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fa-solid fa-users',
      url: '',
      sousMenus: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fa-solid fa-users',
          url: 'clients',
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fa-solid fa-basket-shopping',
          url: 'commandesclients',
        }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fa-solid fa-truck-fast',
      url: '',
      sousMenus: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'fa-solid fa-users',
          url: 'fournisseurs',
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'fa-solid fa-truck-fast',
          url: 'commandesfournisseurs',
        }
      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
      icon: 'fa-solid fa-gears',
      url: '',
      sousMenus: [
        {
          id: '51',
          titre: 'Categories',
          icon: 'fa-solid fa-screwdriver-wrench',
          url: 'categories',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fa-solid fa-user-gear',
          url: 'utilisateurs',
        }
      ]
    }

  ];
  private lastSelectedMenu : Menu | undefined;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  navigate(menu: Menu ) : void {
    if(this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.router.navigate([menu.url]);
    this.lastSelectedMenu = menu;
  }
}
