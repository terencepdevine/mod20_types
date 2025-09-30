import { SystemCharacterType } from "./SystemCharacterType";
import { MentalConditionType } from "./MentalConditionType";

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

  // Mental/Resilience System (optional)
  mental?: boolean; // True if system uses Mental/Panic mechanic
  mentalName?: string; // Name of the stat (e.g., "Sanity", "Grit", "Courage")
  mentalConditions?: MentalConditionType[]; // Mental-specific conditions for this system

  // Styling Options
  backgroundColorFamily?: string; // Background color family (e.g., "gray", "slate", "zinc")
  primaryColorFamily?: string; // Primary color family for accents and highlights
  headerFontFamily?: string; // Header/headline font family (e.g., "rubik", "nunito-sans")
  bodyFontFamily?: string; // Body text font family (e.g., "rubik", "nunito-sans")
}
