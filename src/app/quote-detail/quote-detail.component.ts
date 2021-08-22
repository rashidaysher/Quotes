import { Component, Input, OnInit } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quote;


  constructor() { }

  ngOnInit(): void {
  }

}
