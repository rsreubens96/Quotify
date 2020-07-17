import { Component, OnInit } from '@angular/core';
import
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  darkTheme(): void {
    getComputedStyle(document.documentElement)
      .getPropertyValue('darkTheme');
  }

  ngOnInit(): void {
  }

}
