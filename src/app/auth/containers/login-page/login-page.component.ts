import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../actions/auth.actions';
import { getLoginError, getLoginPending } from '../../reducers';

@Component({
  selector: 'fmc-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  pending$ = this._store$.pipe(select(getLoginPending));

  error$ = this._store$.pipe(select(getLoginError));

  constructor(private _store$: Store<any>,
              private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true]
    });
  }

  onSubmit() {
    let formControls = this.loginForm.controls;
    for (const i in formControls) {
      formControls[i].markAsDirty();
      formControls[i].updateValueAndValidity();
    }
    if (this.loginForm.valid) {
      this._store$.dispatch(new Login(this.loginForm.value));
    }
  }
}
