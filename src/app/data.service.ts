import {Injectable} from '@angular/core';
import {IProfile} from "./interfaces/IProfile";
import {Subject} from "rxjs";
import {IDay} from "./interfaces/IDay";
import {ACTIVITY_LEVEL} from "./enums/ACTIVITY_LEVEL";
import {DAY_NAME} from "./enums/DAY_NAME";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private profile: IProfile | null = null;
  $profile = new Subject<IProfile>();

  private weekDayCount = 7;
  private week: IDay[] = []

  private bottleSize_fl: number = 16;

  constructor() {
  }

  setProfile(profile: IProfile) {
    this.profile = profile;

    // calculate the daily goal
    let dailyGoal;
    try {
      dailyGoal = this.calculateDailyGoal(this.profile);
    } catch (error) {
      console.error(error)
      return;
    }

    // create a day obj for each week day and add it to the week array
    for (let i = 0; i < this.weekDayCount; i++) {
      try {
        let day: IDay = {
          name: this.numberToDayName(i),
          goal_fl: dailyGoal,
          current_fl: 0
        }
        this.week.push(day);
      } catch (error) {
        console.error(error);
        return;
      }
    }

    // notify components that are subscribed, so they have the new profile data
    this.$profile.next(this.profile);
  }

  increaseDayValue(day: IDay) {
    day.current_fl += this.bottleSize_fl;
  }

  decreaseDayValue(day: IDay) {
    day.current_fl -= this.bottleSize_fl;

    // if current_fl is less than 0 then just set it back to 0
    if (day.current_fl < 0) {
      day.current_fl = 0;
    }
  }

  calculateDailyGoal(profile: IProfile): number {
    let dayGoal = 0;
    switch (profile.activityLevel) {
      case ACTIVITY_LEVEL.LOW:
        dayGoal = profile.weight_lbs * 0.5;
        break;
      case ACTIVITY_LEVEL.AVG:
        dayGoal = profile.weight_lbs * 0.75;
        break;
      case ACTIVITY_LEVEL.HIGH:
        dayGoal = profile.weight_lbs;
        break;
      default:
        throw new Error('unknown activity level')
    }

    return dayGoal;
  }

  numberToDayName(num: number): DAY_NAME {
    let selectedDay: DAY_NAME;
    switch (num) {
      case 0:
        selectedDay = DAY_NAME.MONDAY;
        break;
      case 1:
        selectedDay = DAY_NAME.TUESDAY;
        break;
      case 2:
        selectedDay = DAY_NAME.WEDNESDAY;
        break;
      case 3:
        selectedDay = DAY_NAME.THURSDAY;
        break;
      case 4:
        selectedDay = DAY_NAME.FRIDAY;
        break;
      case 5:
        selectedDay = DAY_NAME.SATURDAY;
        break;
      case 6:
        selectedDay = DAY_NAME.SUNDAY;
        break;
      default:
        throw new Error('unknown day name')
    }

    return selectedDay;
  }

  getBottleSize() {
    return this.bottleSize_fl;
  }

  setBottleSize(num: number) {
    this.bottleSize_fl = num;
  }

  getWeek() {
    return this.week;
  }

}
