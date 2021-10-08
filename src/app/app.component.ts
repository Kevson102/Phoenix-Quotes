import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] =[
    {quoteId: 1, quoteStatement: 'Make Hay when the sun shine'},
    {quoteId: 2, quoteStatement: 'All that glitters is not gold'}
  ]

  constructor(){  }
}
