import { Product } from "../types";

import limitModel from "../products/Modelo-Descolado-Blusa-Branca-LIMIT.png";
import gradientModel from "../products/Modelo-Descolado-Blusa-Preta-GRADIENT.png";
import sequenceModel from "../products/Modelo-Descolado-Blusa-Branca-SEQUENCE.png";
import integralModel from "../products/Modelo-Descolado-Blusa-Preta-INTEGRAL.png";

export const PRODUCTS: Product[] = [
  {
    id: "hl-sm-02",
    ref: "L-042",
    name: "LIMIT",
    category: "MATHEMATICS SERIES",
    description:
      "Estado de aproximação. Onde o comportamento encontra a fronteira.",
    image: limitModel,
    hotprintiUrl: "https://hotprinti.com.br/seu-link-produto-2",
  },
  {
    id: "hl-sm-01",
    ref: "G-001",
    name: "GRADIENT",
    category: "MATHEMATICS SERIES",
    description:
      "Taxa de variação contínua dentro de um sistema fechado.",
    image: gradientModel,
    hotprintiUrl: "https://hotprinti.com.br/seu-link-produto-1",
  },
  {
    id: "hl-sm-03",
    ref: "S-770",
    name: "SEQUENCE",
    category: "MATHEMATICS SERIES",
    description:
      "Progressão discreta como estrutura de transformação.",
    image: sequenceModel,
    hotprintiUrl: "https://hotprinti.com.br/seu-link-produto-3",
  },
  {
    id: "hl-sm-04",
    ref: "I-912",
    name: "INTEGRAL",
    category: "MATHEMATICS SERIES",
    description:
      "Acúmulo de comportamento. Síntese do sistema.",
    image: integralModel,
    hotprintiUrl: "https://hotprinti.com.br/seu-link-produto-4",
  },
];
