import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'football-play',
  templateUrl: './play.component.html',
  styles: []
})
export class PlayComponent implements OnInit {
  private currentRate = 0;
  constructor() { }

  ngOnInit() {
  }

}
