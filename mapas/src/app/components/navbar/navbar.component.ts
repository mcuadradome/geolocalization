import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Mapa',
        routerLink: '/map'
      },
      {
        label: 'Triangulacion',
        routerLink: '/triangulation'
      },
      {
        label: 'Parking',
        routerLink: '/parking'
      },
    ];
  }
}
