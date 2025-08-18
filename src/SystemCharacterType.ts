import { RaceType } from "./RaceType";
import { RoleType } from "./RoleType";

export interface SystemCharacterType {
  id: string;
  name: string;
  maxLevel: number; // Maximum character level (1-100, default 20)
  races?: RaceType[];
  roles?: RoleType[];
}
