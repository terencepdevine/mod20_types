import { TraitType } from './TraitType';
import { DownloadableFileType } from './DownloadableFileType';

export interface RaceType {
  id: string;
  name: string;
  slug: string;
  introduction?: string;
  speedWalking?: number;
  speedFlying?: number;
  speedSwimming?: number;
  speedClimbing?: number;
  speedBurrowing?: number;
  age?: number;
  size?: string;
  languages?: string;
  traits?: TraitType[];
  abilityScoreBonuses?: [
    {
      ability: string;
      bonus: number;
    }
  ];
  alignment?: {
    value?:
      | "Lawful Good"
      | "Neutral Good"
      | "Chaotic Good"
      | "Lawful Neutral"
      | "True Neutral"
      | "Chaotic Neutral"
      | "Lawful Evil"
      | "Neutral Evil"
      | "Chaotic Evil";
    description?: string;
  };
  system: string;
  images?: Array<{
    imageId: string;
    orderby: number;
  }>;
  backgroundImageId?: string;
  characterSheets?: DownloadableFileType[];
  createdAt?: string;
  updatedAt?: string;
}
