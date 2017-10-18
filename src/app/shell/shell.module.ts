import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { SharedModule } from '../core/shared.module';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ShellRoutingModule
  ],
  declarations: [ShellComponent]
})
export class ShellModule { }
