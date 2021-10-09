import { Component, OnInit } from '@angular/core';
// import { globalAgent } from 'http';
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
    // quote.quoteStatement = new Quote(quote.quoteStatement);
  }

  // addNewQuote(quote:any){
  //   this.quotes = new Quote(0, this.quoteStatement, this.quoteAuthor, this.quotePublisher);
  //   this.quotes.push(this.quotes);
  // }

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
