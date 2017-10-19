import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { SharedModule } from '../core/shared.module';
import { ShellRoutingModule } from './shell-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';
import { DashboardComponent } from '../content/dashboard/dashboard.component';
import { PlayersComponent } from '../content/players/players.component';
import { ScoresComponent } from '../content/scores/scores.component';
import { PlayComponent } from '../content/play/play.component';
import { ScoresService } from '../content/scores/scores.service';
import { PlayersService } from '../content/players/players.service';

@NgModule({
  imports: [
    SharedModule,
    ShellRoutingModule
  ],
  declarations: [
    ShellComponent,
    SideMenuComponent,
    ContentPanelComponent,
    DashboardComponent,
    PlayersComponent,
    ScoresComponent,
    PlayComponent],

  providers: [
    ScoresService,
    PlayersService
  ]
})
export class ShellModule { }
