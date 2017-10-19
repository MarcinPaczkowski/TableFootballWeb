import { Component, OnInit, Input } from '@angular/core';
import { Score } from './scores.models';
import { ScoresService } from './scores.service';


@Component({
  selector: 'football-scores',
  templateUrl: './scores.component.html'
})
export class ScoresComponent implements OnInit {
  private scores: Score[] = [];

  constructor(public scoresService: ScoresService) { }

  ngOnInit() {
    this.scores = this.scoresService.getScores();
  }

}
