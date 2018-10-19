import { NgModule } from '@angular/core';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { LogoutDialogComponent } from './components/logout-dialog/logout-dialog.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginPageComponent, LogoutDialogComponent]
})
export class AuthModule { }
