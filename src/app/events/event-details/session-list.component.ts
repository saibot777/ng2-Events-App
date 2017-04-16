import {Component, Input} from '@angular/core';
import {ISession} from "../shared/event.model";

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent {
  @Input() sessions : ISession[]
}
