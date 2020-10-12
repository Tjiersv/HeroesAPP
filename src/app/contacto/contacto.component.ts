import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { PropsInputs } from './interfaces/propsInput.interfaces';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  message: FormControl;
  miGrupo: FormGroup;

  propsName: PropsInputs;
  propsAge: PropsInputs;
  propsPhone: PropsInputs;
  propsEmail: PropsInputs;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miGrupo = this.fb.group({
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]],
      addresses: this.fb.array([])
    }); 
    
    this.addToGroup('name', this.propsName = {
      control: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
      label: 'Nombre de usuario',
      type: 'text',
    });

    this.addToGroup('age', this.propsAge = {
      control:new FormControl(0, [Validators.required, Validators.min(1)]),
      label: 'Edad de usuario',
      type: 'number',
    });

    this.addToGroup('phone', this.propsPhone = {
      control:new FormControl('', [Validators.required,Validators.pattern(/^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/)]),
      label: 'Teléfono del usuario',
      type: 'text',
    });

    this.addToGroup('email', this.propsPhone = {
      control:new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(255)]),
      label: 'Teléfono del usuario',
      type: 'text',
    });
  }

  get addresses() {
    return this.miGrupo.get('addresses') as FormArray;
  }

  addToGroup(key: string, props: PropsInputs) {
    this.miGrupo.addControl(key, props.control);
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
    console.log("VALIDACION", this.miGrupo.errors);
    console.log("VALIDACION", this.miGrupo.valid);
    console.log("VALID", this.miGrupo);
    if (this.miGrupo.valid) { console.log('enviado a backend'); }
  }

}
