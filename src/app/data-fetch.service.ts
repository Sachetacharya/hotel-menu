import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
  providedIn: 'root',
})
export class DataFetchService {
  url = 'https://haru-blank.github.io/data_server/food_data.json';
  constructor(private http: HttpClient) {}

  dataFetch(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.url);
  }
}
