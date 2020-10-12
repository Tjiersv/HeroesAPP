import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './contacto.component';
import { ContactoRoutingModule } from './contacto-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputsComponent } from './components/inputs/inputs.component';

@NgModule({
  declarations: [ContactoComponent, InputsComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactoModule { }
