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
      //BASIC RACTIVE FORM
      //this.message = new FormControl('', [Validators.required]);      
      //this.message.setValidators([Validators.maxLength(10)]);

      //REACTIVE FORM
      this.miGrupo = this.fb.group({
        phone: [0, Validators.compose([Validators.required, Validators.min(0)])],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        addresses: this.fb.array([
          this.fb.control('')
        ])
      });

      // this.message.setValue('hola');

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

  // onSubmit() {
  //   console.log("-----------------------");
  //   console.log("MENSAJE", this.message);
  //   console.log("VALORES", this.message.value);
  //   console.log("VALIDACION", this.message.valid);
  //   console.log("VALIDACION", this.message.errors);
  // }
  
  handleSubmit() {
    console.log("-----------------------");
    console.log("Mi GRUPO", this.miGrupo);
    console.log("CONTROLADORES", this.miGrupo.controls);
    console.log("VALORES", this.miGrupo.value);
    console.log("VALIDACION", this.miGrupo.valid);
    console.log("VALIDACION", this.miGrupo);
    
    
    if(this.miGrupo.valid) {
      console.log('enviado a backend');
    }
    
  }

  changeValues() {
    
    //this.miGrupo.setValue({
    //  email: 'tjier@tjier.tjier'
    //});

    this.miGrupo.patchValue({
      email: 'tjier@tjier.tjier'
    });
  }

}
