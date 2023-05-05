import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-filter',
  templateUrl: './form-filter.component.html',
  styleUrls: [ './form-filter.component.scss' ],
})
export class FormFilterComponent {
  formCheck: FormGroup = this.fb.group({
    check: ['segundo']
  })

  constructor(private readonly fb: FormBuilder) { }
}
