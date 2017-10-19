import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'football-side-menu',
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent implements OnInit {
  @Output() onClick = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  openCard(cardName: string) {
    this.onClick.emit(cardName);
  }

}
