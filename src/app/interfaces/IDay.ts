import {DAY_NAME} from "../enums/DAY_NAME";

export interface IDay {
  name: DAY_NAME;
  goal_fl: number;
  current_fl: number;
}
