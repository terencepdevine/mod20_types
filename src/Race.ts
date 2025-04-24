export interface Race {
  id: string;
  name: string;
  age?: string;
  size?: string;
  speed?: number;
  languages?: string;
  alignment?: {
    value: string;
  };
}
