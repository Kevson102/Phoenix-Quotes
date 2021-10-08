import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    {quoteId: 1, quoteStatement: 'Make Hay when the sun shine', quoteAuthor: 'Martin Luther', quotePublisher: 'Kevson'},
    {quoteId: 2, quoteStatement: 'All that glitters is not gold', quoteAuthor: 'Geoffrey', quotePublisher: 'Kelvin'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
