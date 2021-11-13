import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastService} from "../../../share/services/toast.service";
import {FormBuilder, Validators} from "@angular/forms";
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: any;

  constructor(private _usersService: UsersService,
              public _toastService: ToastService,
              private _router: Router,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {
    if (!this.formGroup?.valid) {
      this._toastService.info('Invalid Input')
    } else {
      this._usersService.login(this.formGroup?.value).subscribe(result => {
        localStorage.setItem("token", result.token)
        this._router.navigate(['/home']);
      }, error => {
        this._toastService.error('Invalid email or password.')
      })
    }
  }
}
