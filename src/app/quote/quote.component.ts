import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote(1, 'Make Hay when the sun shine', 'Martin Luther', 'Kevson'),
    new Quote(2, 'All that glitters is not gold', 'Geoffrey', 'Kelvin')
  ];

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.quoteId = quoteLength +1;
    this.quotes.push(quote);
  }

  toggleDetails(index: number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isUnwanted:boolean, index: number){
    if (isUnwanted){
      this.quotes.splice(index,1)
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
