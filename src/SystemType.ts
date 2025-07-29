import { SystemCharacterType } from "./SystemCharacterType";

export interface SystemType {
  // 1. Introduction
  id: string;
  name: string;
  slug: string;
  version?: string;
  // - System Details
  excerpt?: string;
  introduction?: string;
  background_image?: string;
  details_featured_image?: string;
  // - Welcome to MOD20
  // - Using These Docs
  // - How to Play

  // 2. Character
  character: SystemCharacterType;
  // 3. Gameplay
  // 4. Guide
  abilities?: [string];
  skills?: [string];
  backgroundImage?: string;
  backgroundImageId?: string;
  isNew: boolean;
}
