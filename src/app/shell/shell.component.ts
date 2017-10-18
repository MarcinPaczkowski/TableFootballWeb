import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'football-shell',
  templateUrl: './shell.component.html'
})
export class ShellComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }


  logout() {
    this.router.navigate(['/login']);
  }
}
