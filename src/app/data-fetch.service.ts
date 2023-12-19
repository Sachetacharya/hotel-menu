import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';
// import { * } from '../assets'

@Injectable({
  providedIn: 'root',
})
export class DataFetchService {
  url = '/assets/items.json';
  constructor(private http: HttpClient) { }

  dataFetch(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.url);
  }
}
