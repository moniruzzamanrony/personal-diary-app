import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {ToastService} from "../../../share/services/toast.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {


  formGroup: any;

  constructor(private _usersService: UsersService,
              public _toastService: ToastService,
              private _router: Router,
              private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  signUp() {
    if (!this.formGroup?.valid) {
      this._toastService.info('Invalid Input')
    } else {
      this._usersService.signUp(this.formGroup?.value).subscribe(result => {
      }, error => {
        if(error.status === 200)
        {
          this._toastService.success('Account create successfully.')
          this._router.navigate(['']);
        }else{
          this._toastService.error('Account exist via this mail.')
        }

      })
    }
  }

}
