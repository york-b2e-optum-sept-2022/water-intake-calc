import {Component, OnInit} from '@angular/core';
import {ACTIVITY_LEVEL} from "../enums/ACTIVITY_LEVEL";
import {DataService} from "../data.service";
import {IProfile} from "../interfaces/IProfile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string = "";
  weight_lbs: number = 0;
  activityLevel!: ACTIVITY_LEVEL;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dataService.setProfile({
      name: this.name,
      weight_lbs: this.weight_lbs,
      activityLevel: this.activityLevel
    });
  }

  onActivityLevelClick(selection: string) {
    // THIS IS A ALTERNATIVE METHOD TO SETTING THE CORRECT ACTIVITY LEVEL
    // USE THIS IF YOU DO NOT UNDERSTAND SWITCH STATEMENTS YET
    // LEARN TO USE SWITCH STATEMENTS!!!!!!!!
    // if (selection === "LOW") {
    //   this.activityLevel = ACTIVITY_LEVEL.LOW;
    // }
    //
    // if (selection === "AVERAGE") {
    //   this.activityLevel = ACTIVITY_LEVEL.AVG;
    // }
    //
    // if (selection === "HIGH") {
    //   this.activityLevel = ACTIVITY_LEVEL.HIGH;
    // }

    switch (selection) {
      case "LOW":
        this.activityLevel = ACTIVITY_LEVEL.LOW;
        break;
      case "AVERAGE":
        this.activityLevel = ACTIVITY_LEVEL.AVG;
        break;
      case "HIGH":
        this.activityLevel = ACTIVITY_LEVEL.HIGH;
        break;
      default:
        console.error('unknown activity level selected!')
    }

  }

}
