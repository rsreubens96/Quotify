import { Component, OnInit, Input } from '@angular/core';
import Quote from 'src/app/models/quote';
import { QuoteService } from 'src/app/services/quote.service';


@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent implements OnInit {

  @Input() 
  quote: Quote;

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
  }

  displayDateQuoted() {
    let date = new Date(this.quote.dateQuoted).toString().split(" ");
    return `${date[0]} ${date[1]} ${date[2]} ${date[3]}`;
  }

  deleteQuote() {
    this.quoteService.deleteQuote(this.quote._id).subscribe(
      (data) => {
        window.location.reload();
      },
      (err) => {
        
      }
    );
  }

} 
