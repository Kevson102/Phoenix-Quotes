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
    new Quote(1, 'Make Hay when the sun shine', 'Martin Luther', 'Kevson', 0, 0, false, new Date(2030,5,20)),
    new Quote(2, 'All that glitters is not gold', 'Geoffrey', 'Kelvin', 0, 0, false, new Date(2015,6,13))
  ];

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.quoteId = quoteLength +1;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
  }

  readQuotes(){
    return this.quotes;
  }

  voteForQuote(quote:any,type:number){
    if(this.readQuotes().indexOf(quote) >= 0){
        type === 0 ? this.readQuotes()[this.readQuotes().indexOf(quote)].upvotes++ : this.readQuotes()[this.readQuotes().indexOf(quote)].downvotes++;
    }
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
