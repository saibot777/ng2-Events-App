/**
 * Created by stefan.trajkovic on 12.4.2017..
 */
import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">404'd</h1>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor() {

  }

}
