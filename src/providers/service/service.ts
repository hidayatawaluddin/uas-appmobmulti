import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceProvider {
  API_KEY = 'https://newsapi.org/v2/top-headlines?country=id&apiKey=5e039d3b25294e0a9974ba634abd4244';

  constructor(public httpClient: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  getNews(){
    return this.httpClient.get(this.API_KEY);
  }

}



