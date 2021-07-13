import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnonymousGuardService } from './modules/core/auth/anonymous.guard';
import { AuthGuard } from './modules/core/auth/auth.guard';
import { NotFoundComponent } from './modules/errors/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'publico/usuario/acesso', pathMatch: 'full'},
  {
      path: 'painel',
      loadChildren: () => import('./modules/panel/panel.module').then(m => m.PanelModule),
      canActivate: [AuthGuard]
  },
  {
      path: 'publico',
      loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule),
      canActivate: [AnonymousGuardService]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
