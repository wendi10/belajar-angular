import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  hovered: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onMouseEnter() {
    this.hovered = true
  }

  onMouseLeave() {
    this.hovered = false
  }

}
