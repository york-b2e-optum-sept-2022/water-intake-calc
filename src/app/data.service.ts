import {Injectable} from '@angular/core';
import {IProfile} from "./interfaces/IProfile";
import {ACTIVITY_LEVEL} from "./enums/ACTIVITY_LEVEL";
import {DAY_NAME} from "./enums/DAY_NAME";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // low - 1/2 weight in fl
  // average - 3/4 weight in fl
  // high - 1/1 weight in fl
  foo = "hello world";

  constructor() {
  }


}
