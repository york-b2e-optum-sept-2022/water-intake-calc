import {Component, Input, OnInit} from '@angular/core';
import {IDay} from "../interfaces/IDay";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day!: IDay;

  constructor() { }

  ngOnInit(): void {
  }

}
