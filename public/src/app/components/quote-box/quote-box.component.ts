import { Component, OnInit, Input } from '@angular/core';
import Quote from 'src/app/models/quote';
import { QuoteService } from 'src/app/services/quote.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-quote-box',
  templateUrl: './quote-box.component.html',
  styleUrls: ['./quote-box.component.scss']
})
export class QuoteBoxComponent implements OnInit {

  @Input()
  quote: Quote;
  quoteBody = new FormControl();
  quotee = new FormControl();
  dateQuotedAsString = new FormControl();

  constructor(private quoteService: QuoteService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  displayDateQuoted() {
    let date = new Date(this.quote.dateQuoted).toString().split(" ");
    return `${date[0]} ${date[1]} ${date[2]} ${date[3]}`;
  }

  deleteQuote() {
    if(confirm("Are you sure?")) {
      this.quoteService.deleteQuote(this.quote._id).subscribe(
        (data) => {
          window.location.reload();
        },
        (err) => {
        }
      );
    }
  }

  openModal(content) {
    this.quoteBody = new FormControl(this.quote.body);
    this.quotee = new FormControl(this.quote.quotee);
    this.dateQuotedAsString = new FormControl(this.dateToString());
    this.modalService.open(content, { size: 'lg' });
  }

  patchQuote() {
    let dateQuoted = this.getDateQuotedAsISO();
    let quoteBody = this.quoteBody.value;
    let quotee = this.quotee.value;

    this.quoteService.patchQuote(this.quote._id, quotee, quoteBody, dateQuoted).subscribe(
      data => {
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    );
  }
  
  private getDateQuotedAsISO() {
    let date = this.dateQuotedAsString.value;
    return new Date(date.year, date.month - 1, date.day).toISOString();
  }

  private dateToString() {
    let date = new Date(this.quote.dateQuoted);
    return `${date.getDate().toString()}-${(date.getMonth() + 1).toString()}-${date.getFullYear().toString()}`;
  }

}
