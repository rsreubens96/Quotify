import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebService } from './web.service';
import { Quote } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class QuoteService {
  constructor(private webService: WebService) { }

  getQuotes() {
    return this.webService.get('quotes');
  }

  createQuote(quotee: string, body: string) {
    return this.webService.post('quotes', { quotee, body })
  }
  


}


