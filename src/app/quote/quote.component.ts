import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote('Life is either a daring adventure or nothing.', 'Helen Keller', 'Dennis Kiboi', new Date(2021,7,27)),
    new Quote('Live as if you were to die tomorrow. Learn as if you were to live forever.', 'Mahatma Gandhi', 'John Doe', new Date(2021,11,25)),
    new Quote('Success consists of failure to failure without loss of enthusiasm', 'Winston Churchil', 'Jane Doe', new Date(2022,0,10))
  ];

  deleteQuote(deleteConfirm: boolean, index: number) {
    if (deleteConfirm) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].content}?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote: Quote) {
    quote.date = new Date();
    let copyQuote = {...quote}
    this.quotes.push(copyQuote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
