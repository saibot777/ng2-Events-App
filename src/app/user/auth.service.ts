/**
 * Created by stefan.trajkovic on 13.4.2017..
 */

import {Injectable} from "@angular/core";
import {IUser} from "./user.model";

@Injectable()
export class AuthService {
  currentUser : IUser

  loginUser(userName : string, password : string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Stefan',
      lastName: 'Trajkovic'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
