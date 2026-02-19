export type Series = "MATHEMATICS" | "SYSTEM" | "SIGNAL";

export interface Product {
  id: string;
  ref: string;
  name: string;

  series: Series;          // 👈 NOVO (arquitetura)
  category?: string;       // 👈 vira opcional (UI)

  description: string;
  image: string;

  price?: string;          // 👈 opcional por enquanto

  specs?: {
    composition?: string;
    resistance?: string;
    origin?: string;
  };

  labels?: string[];
  isCore?: boolean;        // 👈 já usamos no grid
}
