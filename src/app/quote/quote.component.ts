import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes:Quote [] = [
    
    new Quote(1, 'Street', 'Those who lie belongs to the streets',new Date(2021,3,14)),
    new Quote(2,'Bro Code','Abro shall a comedian when his bro girl is around',new Date(2022,6,9)),
    new Quote(3,'life','What comes easy won;t last and what comes easy won;t last',new Date(2022,1,12)),
    new Quote(4,'Tech','LIve as if everything is ridged in your favour',new Date(2019,0,18)),
    // new Quote(5,'Solve math homework','Damn Math',new Date(2019,2,14)),
    // new Quote(6,'Plot my world domination plan','Cause I am an evil overlord',new Date(2030,3,14)),
  ];
  

  deleteQuote(isComplete:any, index:any){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  
  toggleDetails(index:any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  completeQuote(isComplete:any, index:any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
