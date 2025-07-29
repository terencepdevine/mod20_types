import { ArmorTaxonomyType } from "./ArmorTaxonomyType";
import { WeaponTaxonomyType } from "./WeaponTaxonomyType";
import { SkillType } from "./SkillType";
import { ToolTaxonomyType } from "./ToolTaxonomyType";
import { AbilityType } from "./AbilityType";

export interface RoleType {
  id: string;
  name: string;
  slug: string;
  hp_dice: number;
  introduction?: string;
  primaryAbility?: AbilityType;
  savingThrows: [string];
  armorTaxonomies?: [ArmorTaxonomyType];
  weaponTaxonomies?: [WeaponTaxonomyType];
  skills?: [SkillType];
  tools?: [ToolTaxonomyType];
  system?: string;
  images?: Array<{ imageId: string; orderby: number }>;
  backgroundImageId?: string;
  createdAt: Date;
  updatedAt: Date;
}
