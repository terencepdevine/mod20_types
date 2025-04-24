import { RaceType } from "./RaceType";
import { Role } from "./Role";

export interface SystemCharacter {
  id: string;
  name: string;
  races?: RaceType[];
  roles?: Role[];
}
