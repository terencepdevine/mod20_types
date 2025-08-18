export interface MentalConditionType {
  id: string;
  name: string; // e.g., "Stressed", "Panicked", "Broken", "Shaken"
  slug: string;
  description?: string; // Effect description for the mental condition
  severity?: number; // Optional severity level (1-10 scale)
  minPercentage?: number; // e.g., 0 for 0-25% range (when used in mental system)
  maxPercentage?: number; // e.g., 25 for 0-25% range (when used in mental system)
  system: string; // Reference to parent system (required for mental conditions)
  createdAt?: string;
  updatedAt?: string;
}