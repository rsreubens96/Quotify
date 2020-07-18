import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


//  Injects as a table (probs)

@Injectable({
  providedIn: 'root'
})


export class WebService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    // this.ROOT_URL = "http://localhost:3000";
    this.ROOT_URL = "quotify200.herokuapp.com";
   }

  get(uri: string) {
     return this.http.get(`${this.ROOT_URL}/${uri}`);
  }

  post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  patch(uri: string, quoteId: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}/${quoteId}`, payload);
  }

  delete(uri: string, quoteId: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}/${quoteId}`);
  }
}
