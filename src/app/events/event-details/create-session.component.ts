import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, Validators, FormGroup} from "@angular/forms";
import {ISession} from "../shared/event.model";

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {
  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()

  newSessionForm : FormGroup
  name : FormControl
  presenter : FormControl
  duration : FormControl
  level : FormControl
  abstract : FormControl

  constructor() { }

  ngOnInit() {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required,
      Validators.maxLength(400), this.restrictedWords])

    this.newSessionForm = new FormGroup({
      name : this.name,
      presenter : this.presenter,
      duration : this.duration,
      level : this.level,
      abstract : this.abstract
    })

  }

  private restrictedWords(control: FormControl): {[key: string]: any}
  {
    return control.value.includes('foo')
      ? {'restrictedWords': 'foo'}
      : null
  }

  saveSession(formValues) {
    let session : ISession = {
      id : undefined,
      name : formValues.name,
      duration : +formValues.duration,
      level : formValues.level,
      presenter : formValues.presenter,
      abstract : formValues.abstract,
      voters : []
    }
    this.saveNewSession.emit(session)
  }

  cancel() {
    this.cancelAddSession.emit()
  }

}
