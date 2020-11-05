import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:3000/api/search';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient){}
  getAll(text,source) {
    return this.http.get(`${baseUrl}/?source=${source}&text=${text}`);
  }
}
