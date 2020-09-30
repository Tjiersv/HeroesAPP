import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-poll',
  templateUrl: './modal-poll.component.html',
  styleUrls: ['./modal-poll.component.css']
})
export class ModalPollComponent implements OnInit {

  @Input() public title_modal : string;
  @Input() public team_selected : string;
  
  @Output() setTeam:EventEmitter<string> = new EventEmitter<string>();

  public show_modal = false;

  constructor() { }

  ngOnInit(): void {}

  toggle_modal(): void { this.show_modal = !this.show_modal; }

  send_team(team: string): void {
    this.setTeam.emit(team);
    this.toggle_modal();
  }

}
