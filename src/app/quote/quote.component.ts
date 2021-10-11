import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote(1, 'Make Hay when the sun shine', 'Martin Luther', 'Kevson', 0, 0, false),
    new Quote(2, 'All that glitters is not gold', 'Geoffrey', 'Kelvin', 0, 0, false)
  ];

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.quoteId = quoteLength +1;
    this.quotes.push(quote);
  }

  getQuotes(){
    return this.quotes;
  }

  voteForQuote(quote:any,type:number){
    if(this.getQuotes().indexOf(quote) >= 0){
        type === 0 ? this.getQuotes()[this.getQuotes().indexOf(quote)].upvotes++ : this.getQuotes()[this.getQuotes().indexOf(quote)].downvotes++;
        // this.rankQuotes(); 
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
