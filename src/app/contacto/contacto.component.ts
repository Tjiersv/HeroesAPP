import { Component, OnInit } from '@angular/core';
import { 
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public message: FormControl;
  public miGrupo: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {    
      //REACTIVE FORM
      this.miGrupo = this.fb.group({
        name: ['', [Validators.required]],
        age: [0, [Validators.required]],
        phone: ['', [Validators.required, Validators.pattern(/^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/
        )]],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
        addresses: this.fb.array([])
      });

  }

  get addresses() {
    return this.miGrupo.get('addresses') as FormArray;
  }

  addToAddresses() {
    (this.miGrupo.get('addresses') as FormArray)
      .push(
        this.fb.control('')
      );
  }

  removeAddress(i: number) {
    (this.miGrupo.get('addresses') as FormArray).removeAt(i);
  }

  handleSubmit() {
    console.log("VALORES", this.miGrupo.value);
    console.log("ERRORE", this.miGrupo.errors);
    console.log("VALIDACION", this.miGrupo.valid);
    if(this.miGrupo.valid) { console.log('enviado a backend'); }
  }

}
