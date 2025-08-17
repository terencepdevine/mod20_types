import { AbilityType } from './AbilityType';

export interface SkillType {
  id: string;
  name: string;
  description?: string;
  relatedAbility?: AbilityType;
  system?: string;
}
