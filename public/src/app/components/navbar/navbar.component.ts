import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  darkTheme(): void {
    let root = document.documentElement; // #999999
    if (getComputedStyle(root).getPropertyValue('--darkTheme') == "1") {
      root.style.setProperty('--darkTheme', "0");
    } else {
      root.style.setProperty('--darkTheme', "1");
    }
  }

  ngOnInit(): void {
  }

}
