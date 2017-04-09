import {Component, Input} from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
      .green { color: #6cf000 !important; }
  `]
})
export class EventThumbnailComponent {

  @Input() event : any;

}
