import {Component} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'water-calc';
  isProfileCreated: boolean = false;

  constructor(private dataService: DataService) {
    this.dataService.$profile.subscribe((profile) => {
        this.isProfileCreated = true;
    });
  }
}
