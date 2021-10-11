import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] =[
    new Quote(1, 'Make Hay when the sun shine', 'Martin Luther', 'Kevson', 0, 0, false, new Date(2020,5,20)),
    new Quote(2, 'All that glitters is not gold', 'Geoffrey', 'Kelvin', 0, 0, false, new Date(2019,6,13))
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
  // rankQuotes(): void{
  //   let upvoted: number   = Math.max.apply(Math,this.getQuotes().map(function(chosen){return chosen.upvotes;}));
  //   if( upvoted > 0){
  //     let upvotedQuote: any = this.getQuotes().find(function(selected){ return selected.upvotes == upvoted; });
  //     let favIndex: number  = this.getQuotes().indexOf(upvotedQuote);
  //     this.getQuotes().map((quote)=>{
  //       if(favIndex === this.getQuotes().indexOf(quote)){
  //           this.quotes[favIndex].isFavorite = true;
  //       }else{
  //           quote.isFavorite = false;
  //         }
  //     });
  //   }
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
