import { SystemCharacterType } from "./SystemCharacterType";

export interface SystemType {
  // 1. Introduction
  id: string;
  name: string;
  slug: string;
  createdAt?: string;
  updatedAt?: string;
  // - System Details
  excerpt?: string;
  introduction?: string;
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
  backgroundImageId?: string;
  isNew: boolean;
}
