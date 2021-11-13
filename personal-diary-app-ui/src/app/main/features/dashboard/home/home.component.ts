import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../share/services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: any = this._authService.getName();

  constructor(private _router: Router,
              private _authService: AuthService) {
  }

  ngOnInit(): void {
  }

  gotoAddNewNoteForm(): void {

    this._router.navigate(['home/add-new-diary']);
  }

  gotoAddNewMoreCategories(): void {
    this._router.navigate(['home/categories']);
  }

  logout() {
    localStorage.removeItem('token')
    this._router.navigate(['']);
  }
}
