import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!: Quote;
  @Output() deleteConfirm = new EventEmitter<boolean>();

  addUpVote(upVote: boolean) {
    this.quote.upVote++;
  }

  addDownVote(downVote: boolean) {
    this.quote.downVote++;
  }
  
  toDelete(confirm: boolean) {
    this.deleteConfirm.emit(confirm);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
