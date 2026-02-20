import { Product } from "../types";

import limitModel from "../products/Modelo-Descolado-Blusa-Branca-LIMIT.png";
import gradientModel from "../products/Modelo-Descolado-Blusa-Preta-GRADIENT.png";
import sequenceModel from "../products/Modelo-Descolado-Blusa-Branca-SEQUENCE.png";
import integralModel from "../products/Modelo-Descolado-Blusa-Preta-INTEGRAL.png";
import systemIOModel from "../products/Modelo-Descolado-Blusa-Cinza-I-H-O.png";

export const PRODUCTS: Product[] = [

  // HL-1.0 — MATHEMATICS
  {
    id: "hl-sm-01",
    ref: "MTH-01",
    name: "GRADIENT",
    series: "MATHEMATICS",
    version: "HL-1.0",
    category: "Behavioral Layer",
    description:
      "Taxa de variação contínua dentro de um sistema fechado.",
    image: gradientModel,
    isCore: true,
  },
  {
    id: "hl-sm-02",
    ref: "MTH-02",
    name: "LIMIT",
    series: "MATHEMATICS",
    version: "HL-1.0",
    category: "Behavioral Layer",
    description:
      "Estado de aproximação. Onde o comportamento encontra a fronteira.",
    image: limitModel,
  },
  {
    id: "hl-sm-03",
    ref: "MTH-03",
    name: "SEQUENCE",
    series: "MATHEMATICS",
    version: "HL-1.0",
    category: "Behavioral Layer",
    description:
      "Progressão discreta como estrutura de transformação.",
    image: sequenceModel,
  },
  {
    id: "hl-sm-04",
    ref: "MTH-04",
    name: "INTEGRAL",
    series: "MATHEMATICS",
    version: "HL-1.0",
    category: "Behavioral Layer",
    description:
      "Acúmulo de comportamento. Síntese do sistema.",
    image: integralModel,
  },

  // HL-1.1 — SYSTEM
  {
    id: "hl-sys-01",
    ref: "SYS-01",
    name: "INPUT → HIDDEN → OUTPUT",
    series: "SYSTEM",
    version: "HL-1.1",
    category: "Structural Layer",
    description:
      "Arquitetura fundamental de transformação. Representação do fluxo interno do sistema.",
    image: systemIOModel,
  },

];
