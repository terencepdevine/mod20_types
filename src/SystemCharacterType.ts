import { RaceType } from "./RaceType";
import { RoleType } from "./RoleType";

export interface SystemCharacterType {
  id: string;
  name: string;
  races?: RaceType[];
  roles?: RoleType[];
}
