import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {RootToastService} from "../../../share/services/root-toast.service";
import {ToastService} from "../../../share/services/toast.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router,
              public _toastService: ToastService) { }

  ngOnInit(): void {

  }

  gotoAddNewNoteForm(): void {

    this._router.navigate(['home/add-new-diary']);
  }

  gotoAddNewMoreCategories(): void {
    this._router.navigate(['home/categories']);
    this.showStandard();
  }

  showStandard() {
    this._toastService.success('I am a standard toast');
  }
}
