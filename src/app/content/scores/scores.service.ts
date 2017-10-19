import { Injectable } from '@angular/core';
import { Score } from './scores.models';

@Injectable()
export class ScoresService {

  constructor() { }

  getScores() {
    return this.getMockedData();
  }

  private getMockedData() {
    const scores: Score[] = [{
      id: 1,
      redPlayer: 'Marcin',
      yellowPlayer: 'Mateusz',
      matchDate: '2017-10-19',
      score: '10:6'
    },
    {
      id: 2,
      redPlayer: 'Marcin',
      yellowPlayer: 'Oktawian',
      matchDate: '2017-10-19',
      score: '10:3'
    },
    {
      id: 3,
      redPlayer: 'Mateusz',
      yellowPlayer: 'Oktawian',
      matchDate: '2017-10-19',
      score: '10:6'
    }];

    return scores;
  }
}
