import { Injectable } from '@angular/core';
import { Player } from './players.models';

@Injectable()
export class PlayersService {

  constructor() { }

  getPlayers() {
    return this.getMockedData();
  }

  private getMockedData() {
    const players: Player[] = [{
      id: 1,
      lastMatchData: '2017-10-19',
      name: 'Mateusz',
      wonMatchesCounter: 0,
      lostMatchesCounter: 2,
      isOnline: false
    },
    {
      id: 2,
      lastMatchData: '2017-10-19',
      name: 'Oktawian',
      wonMatchesCounter: 1,
      lostMatchesCounter: 1,
      isOnline: false
    },
    {
      id: 3,
      lastMatchData: '2017-10-19',
      name: 'Marcin',
      wonMatchesCounter: 2,
      lostMatchesCounter: 0,
      isOnline: true
    }];

    return players;
  }
}
