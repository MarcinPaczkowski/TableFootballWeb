import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';
import { DashboardComponent } from '../content/dashboard/dashboard.component';
import { PlayersComponent } from '../content/players/players.component';
import { ScoresComponent } from '../content/scores/scores.component';
import { PlayComponent } from '../content/play/play.component';

const routes: Routes = [{ path: '', component: ShellComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'players', component: PlayersComponent },
    { path: 'scores', component: ScoresComponent },
    { path: 'play', component: PlayComponent },
    {path: '', redirectTo: 'dashboard'}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
