import { Component, OnInit } from '@angular/core';
import {AuthService} from "../user/auth.service";
import {ISession} from "../events/shared/event.model";
import {EventService} from "../events/shared/event.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm : string = "";
  foundSessions : ISession[];

  constructor(private authService : AuthService, private eventService : EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe( sessions => {
        this.foundSessions = sessions;
        console.log(this.foundSessions);
      })
  }

}
