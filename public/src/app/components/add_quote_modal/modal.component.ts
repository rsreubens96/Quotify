import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { QuoteService } from 'src/app/services/quote.service';
import { Quote } from '@angular/compiler';
import { FormControl } from '@angular/forms'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal, private quoteService: QuoteService) {}

  quoteBody = new FormControl()
  quotee = new FormControl()
  dateQuotedAsString = new FormControl()


  ngOnInit(): void {
  }

  openModal(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  addQuote() {
    let dateCreated = new Date().toISOString();
    let dateQuoted = this.getDateQuotedAsISO();
    let quoteBody = this.quoteBody.value;
    let quotee = this.quotee.value;


    this.quoteService.createQuote(quotee, quoteBody, dateQuoted).subscribe(
      data => {
        window.location.reload();
      },
      err => {
        console.log(err);
      }
    )

    
  }

  private getDateQuotedAsISO() {
    let date = this.dateQuotedAsString.value;
    return new Date(date.year, date.month, date.day).toISOString();
  }

}
