import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRanking]'
})
export class RankingDirective {
  constructor(private elem:ElementRef){

  }

}
