import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuoteBoxComponent } from './components/quote-box/quote-box.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/add_quote_modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './components/add_quote_modal/modal.customDateParser';

// function isNumber(arg: any) {
//   return typeof arg === 'number';
// }
//
// function padNumber(n: number) {
//   return n < 10 ? '0' + n.toString(10) : n.toString(10);
// }
//
// function toInteger(arg: string) {
//   return parseInt(arg);
// }
//
// @Injectable()
// export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
//   parse(value: string): NgbDateStruct {
//     if (value) {
//       const dateParts = value.trim().split('-');
//       if (dateParts.length === 1 && isNumber(dateParts[0])) {
//         return {day: toInteger(dateParts[0]), month: null, year: null};
//       } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
//         return {day: toInteger(dateParts[0]), month: toInteger(dateParts[1]), year: null};
//       } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
//         return {day: toInteger(dateParts[0]), month: toInteger(dateParts[1]), year: toInteger(dateParts[2])};
//       }
//     }
//     return null;
//   }
//
//   format(date: NgbDateStruct): string {
//     return date ?
//         `${isNumber(date.day) ? padNumber(date.day) : ''}-${isNumber(date.month) ? padNumber(date.month) : ''}-${date.year}` :
//         '';
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteBoxComponent,
    JumbotronComponent,
    HomeComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
