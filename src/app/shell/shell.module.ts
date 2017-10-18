import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { SharedModule } from '../core/shared.module';
import { ShellRoutingModule } from './shell-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ContentPanelComponent } from './content-panel/content-panel.component';

@NgModule({
  imports: [
    SharedModule,
    ShellRoutingModule
  ],
  declarations: [ShellComponent, SideMenuComponent, ContentPanelComponent]
})
export class ShellModule { }
