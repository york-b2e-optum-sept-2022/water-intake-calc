import {Injectable} from '@angular/core';
import {IProfile} from "./interfaces/IProfile";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // low - 1/2 weight in fl
  // average - 3/4 weight in fl
  // high - 1/1 weight in fl
  profile: IProfile | null = null;
  $profile = new Subject<IProfile>();

  constructor() {
  }

  setProfile(profile: IProfile) {
    this.profile = profile;
    this.$profile.next(this.profile);
  }


}
