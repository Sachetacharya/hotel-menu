import { Component } from '@angular/core';
import { DataFetchService } from './data-fetch.service';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  information: Menu[] = [];
  dataToDisplay: Menu[] = [];

  constructor(private dataService: DataFetchService) { }

  initData() {
    this.dataService.dataFetch().subscribe((value) => {
      this.information = value;
      this.dataToDisplay = value;
      console.log(value)
    });
  }
  allData() {
    return this.initData();
  }
  otherData(name: string) {
    // console.log(this.information)

    this.dataToDisplay = this.information.filter((a) => a.category == name);
  }

  ngOnInit(): void {
    this.initData();
  }
}
