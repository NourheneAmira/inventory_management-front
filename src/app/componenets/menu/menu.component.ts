import { Component, OnInit } from '@angular/core';
import { Menu } from './menu';
import {Router} from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public menuProperties: Array<Menu> = [
    {
    id: '1',
    titre: 'Tableau de bord',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        url: ''
      },
      {
        id: '12',
        titre: 'Statistiques',
        url: 'statistiques'
      }
    ]
  },
    {
      id: '2',
      titre: 'Articles',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Articles',
          url: 'articles'
        },
        {
          id: '22',
          titre: 'Mouvements du stock',
          url: 'mvtstk'
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
     
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
        
          url: 'clients'
        },
        {
          id: '32',
          titre: 'Commandes clients',
         
          url: 'commandesclient'
        }
      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
     
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
              url: 'fournisseurs'
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          
          url: 'commandesfournisseur'
        }
      ]
    },
    {
      id: '5',
      titre: 'Parametrages',
   
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
        
          url: 'categories'
        },
        {
          id: '52',
          titre: 'Utilisateurs',
      
          url: 'utilisateurs'
        }
      ]
    }
  ];
  private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) { }
  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }
}
