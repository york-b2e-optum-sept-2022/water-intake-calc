import {Component} from '@angular/core';
import {DataService} from "../data.service";
import {IDay} from "../interfaces/IDay";

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent {

  week: IDay[];
  bottleSize: number;

  constructor(private dataService: DataService) {
    this.week = this.dataService.getWeek();
    this.bottleSize = this.dataService.getBottleSize();
  }

  onBottleSizeChange(newValue: number) {
    this.dataService.setBottleSize(newValue);
  }
}
