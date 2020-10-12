import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { PropsInputs } from '../../interfaces/propsInput.interfaces';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  @Input() props: PropsInputs;

  constructor() { }

  ngOnInit(): void { }

}
