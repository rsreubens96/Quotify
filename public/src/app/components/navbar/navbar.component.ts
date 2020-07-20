import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  darkTheme(): void {
    let htmlTag = document.getElementsByTagName("html")[0];
    if (htmlTag.hasAttribute("data-theme")) {
      htmlTag.removeAttribute("data-theme");
      return
    }
    htmlTag.setAttribute("data-theme", "dark");
  }
  ngOnInit(): void {
  }

}
