import {ACTIVITY_LEVEL} from "../enums/ACTIVITY_LEVEL";

export interface IProfile {
  name: string;
  weight_lbs: number;
  activityLevel: ACTIVITY_LEVEL
}
