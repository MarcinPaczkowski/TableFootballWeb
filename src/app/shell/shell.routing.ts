import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell.component';

const routes: Routes = [
  { path: '', component: ShellComponent }
];

export const shellRouting = RouterModule.forChild(routes);
