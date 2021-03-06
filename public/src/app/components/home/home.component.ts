import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';
import { QuoteService } from 'src/app/services/quote.service';
import { ModalComponent } from 'src/app/components/add_quote_modal/modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quotes: Quote[] = []

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getQuotes().subscribe((quote: Quote[]) => this.quotes = quote);
  }

}
