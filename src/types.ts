export enum AppView {
  HOME = 'HOME',
  CATALOG = 'CATALOG',
  DETAIL = 'DETAIL',
  ASSISTANT = 'ASSISTANT',
  FIELD = 'FIELD',
}

export type Series = "MATHEMATICS" | "SYSTEM" | "SIGNAL";

export interface Product {
  id: string;
  ref: string;
  name: string;

  series: Series;
  version?: string;
  category?: string;

  description: string;
  image: string;

  price?: string;

  specs?: {
    composition?: string;
    resistance?: string;
    origin?: string;
  };

  labels?: string[];
  isCore?: boolean;
}
