export interface RaceType {
  id: string;
  name: string;
  slug: string;
  age?: string;
  size?: string;
  speed?: number;
  languages?: string;
  alignment?: {
    value: string;
  };
  systems: [{ type: string; id: string }];
}
