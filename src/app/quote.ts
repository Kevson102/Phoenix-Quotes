export class Quote {
  showDetails: boolean;
  constructor(public quoteId: number, public quoteStatement: string, public quoteAuthor: string, public quotePublisher: string, public upvotes: number, public downvotes: number, public isFavorite:boolean){
    this.showDetails = false;
  }
}
