import {Component, Input, OnInit} from '@angular/core';
import {IDay} from "../interfaces/IDay";
import {DataService} from "../data.service";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day!: IDay;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  increase() {
    this.dataService.increaseDayValue(this.day);
  }

  decrease() {
    this.dataService.decreaseDayValue(this.day);
  }

}
