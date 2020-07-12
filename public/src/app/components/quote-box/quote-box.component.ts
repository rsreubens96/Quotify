import { Component, OnInit, Input } from '@angular/core';
import Quote from 'src/app/models/quote';

@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent implements OnInit {

  @Input() 
  quote: Quote;

  constructor() { }

  ngOnInit(): void {
  }

  displayDateQuoted() {
    let date = new Date(this.quote.dateQuoted).toString().split(" ");
    return date[0] + " " + date[1] + " " + date[2] + " " + date[3];
  }

} 
