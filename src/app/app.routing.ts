import { Routes, RouterModule } from '@angular/router';
import {} from './shell/shell.module';

const routes: Routes = [
    { path: '', loadChildren: '../app/shell/shell.module#ShellModule' }
];

export const appRouting =  RouterModule.forRoot(routes);
