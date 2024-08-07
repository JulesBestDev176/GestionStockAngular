import {Component, OnInit} from '@angular/core';
import {Menu} from "./menu";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    NgForOf
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
          url: '',
        },
        {
          id: '22',
          titre: 'Mouvement du stock',
          icon: 'fa-brands fa-stack-overflow',
          url: '',
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
          url: '',
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fa-solid fa-basket-shopping',
          url: '',
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
          url: '',
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'fa-solid fa-truck-fast',
          url: '',
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
          url: '',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fa-solid fa-user-gear',
          url: '',
        }
      ]
    }

  ];

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  navigate(url?: string ) : void {
    this.router.navigate([url]);
  }
}
