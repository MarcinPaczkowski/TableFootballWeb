import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'football-shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent implements OnInit {

  private cardTitle: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.cardTitle = 'Pulpit';
  }


  logout() {
    this.router.navigate(['/login']);
  }

  changeCardTitle(cardTitle: string) {
    this.cardTitle = cardTitle;
  }
}
