import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'football-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['../']);
  }

}
