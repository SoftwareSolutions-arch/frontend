import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthroizeComponent } from './unauthroize/unauthroize.component';
import { AuthGuard } from './common/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home-module/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'api',
    loadChildren: () =>
      import('./registration-module/register-module.module').then(
        (m) => m.RegisterModule
      ),
  },
  { path: 'unauthorized', component: UnauthroizeComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
