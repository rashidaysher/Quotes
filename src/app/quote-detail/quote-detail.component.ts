import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upVotes:number=0;
  upVote(){
    this.upVotes=this.upVotes+1;
  }

  downVotes:number=0;
  downVote(){
    this.downVotes=this.downVotes+1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
