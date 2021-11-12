import {Component, OnInit, TemplateRef} from '@angular/core';
import {ToastService} from "../../services/toast.service";

@Component({
  selector: 'app-toast-component',
  templateUrl: './toast-component.component.html',
  styleUrls: ['./toast-component.component.scss']
})
export class ToastComponentComponent implements OnInit {

  constructor(public toastService: ToastService) {}

  isTemplate(toast) { return toast.textOrTpl instanceof TemplateRef; }
}

}
