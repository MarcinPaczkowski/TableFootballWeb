import { Component, OnInit } from '@angular/core';
import { PlayersService } from './players.service';
import { Player } from './players.models';

@Component({
  selector: 'football-players',
  templateUrl: './players.component.html',
  styles: []
})
export class PlayersComponent implements OnInit {

  private players: Player[] = [];
  constructor(public playersService: PlayersService) { }

  ngOnInit() {
    this.players = this.playersService.getPlayers();
  }

}
