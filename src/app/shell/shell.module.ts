import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { SharedModule } from '../core/shared.module';
import { shellRouting } from './shell.routing';

@NgModule({
  imports: [
    SharedModule,
    shellRouting
  ],
  declarations: [ShellComponent]
})
export class ShellModule { }
