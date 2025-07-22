import { ArmorTaxonomyType } from "./ArmorTaxonomyType";
import { WeaponTaxonomyType } from "./WeaponTaxonomyType";
import { SkillType } from "./SkillType";
import { ToolTaxonomyType } from "./ToolTaxonomyType";

export interface RoleType {
  id: string;
  name: string;
  slug: string;
  hp_dice: number;
  introduction?: string;
  savingThrows: [string];
  armorTaxonomies?: [ArmorTaxonomyType];
  weaponTaxonomies?: [WeaponTaxonomyType];
  skills?: [SkillType];
  tools?: [ToolTaxonomyType];
  systems?: [string];
  photo?: string;
}
