/**
 * Created by stefan.trajkovic on 13.4.2017..
 */

import {Component} from "@angular/core";

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {

  login(formValues) {
    console.log(formValues);
  }

}
