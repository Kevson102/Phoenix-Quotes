export class Quote {
  showDetails: boolean;
  constructor(public quoteId: number, public quoteStatement: string, public quoteAuthor: string, public quotePublisher: string){
    this.showDetails = false;
  }
}
