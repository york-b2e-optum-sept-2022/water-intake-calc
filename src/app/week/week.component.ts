import {Component} from '@angular/core';
import {DataService} from "../data.service";
import {IDay} from "../interfaces/IDay";
import {IProfile} from "../interfaces/IProfile";

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent {

  week: IDay[];
  profile!: IProfile;
  bottleSize: number;

  constructor(private dataService: DataService) {
    this.week = this.dataService.getWeek();
    this.bottleSize = this.dataService.getBottleSize();

    try {
      this.profile = this.dataService.getProfile();
    } catch (error) {
      console.error('no profile found');
    }
  }

  onBottleSizeChange(newValue: number) {
    this.dataService.setBottleSize(newValue);
  }
}
