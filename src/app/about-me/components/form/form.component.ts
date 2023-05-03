import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component..html',
  styleUrls: ['./form.component..scss'],
})
export class FormComponent {
  myForm: FormGroup = this.fb.group({
    name: [
      '',
      [ Validators.required, Validators.minLength(3) ],
    ],
    email: ['', Validators.required],
    link_boceto: ['', Validators.required],
    description: ['', Validators.required],
  })

  constructor( private readonly fb: FormBuilder ) { }

  isValidField(campo: string) {
    return this.myForm.controls[campo].errors && this.myForm.controls[campo].touched
  }

  getClass(field: string) {
    if(this.myForm.controls[field].valid && this.myForm.controls[field].touched){
      return 'input_valid'
    }
    if(this.myForm.controls[field].errors && this.myForm.controls[field].touched){
      return 'input_error'
    }
    return 'input'
  }

  guardar() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    };

    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
