import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from './players.service';
import { Player } from './players.models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'football-players',
  templateUrl: './players.component.html',
  styles: []
})
export class PlayersComponent implements OnInit {
  private players: Observable<any[]>;
  constructor(public playersService: PlayersService, private firebase: AngularFireDatabase) {
    this.players = this.firebase.list<any>('/players').valueChanges();
  }

  ngOnInit() {
  }

}
