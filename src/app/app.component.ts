import { Component } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'water-calc';
  foo: string;

  constructor(private dataService: DataService) {
    this.foo = this.dataService.foo;
  }
}
