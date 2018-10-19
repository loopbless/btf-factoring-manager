import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPageComponent } from './layout';
import { NotFoundPageComponent } from './core/containers';
import { AuthGuard } from './core/services/guards/auth.guard';
import { LoginPageComponent } from './auth/containers/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'home', loadChildren: './features/home/home.module#HomeModule'}
    ]
  },
  {path: 'login', component: LoginPageComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
