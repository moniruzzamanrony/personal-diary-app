import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {

  }

  gotoAddNewNoteForm(): void {

    this._router.navigate(['home/add-new-diary']);
  }

  gotoAddNewMoreCategories(): void {
    this._router.navigate(['home/categories']);
  }
}
