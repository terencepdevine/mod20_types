import { ConditionType } from "./ConditionType";

// Represents a percentage range mapping to a condition for mental/resilience systems
export interface MentalTierType {
  id: string;
  minPercentage: number; // e.g., 0 for 0-25% range
  maxPercentage: number; // e.g., 25 for 0-25% range
  condition: ConditionType; // The condition applied in this tier
  system?: string; // Reference to parent system
}
