import { Product } from "../types";

import limitModel from "../products/Modelo-Descolado-Blusa-Preta-LIMIT.png";
import gradientModel from "../products/Mockup-Modelo-Completo-Branca-GRADIENT.png";
import sequenceModel from "../products/Modelo-Descolado-Blusa-Branca-SEQUENCE.png";
import integralModel from "../products/Modelo-Descolado-Blusa-Branca-INTEGRAL.png";
import systemIOModel from "../products/Modelo-Descolado-Blusa-Cinza-I-H-O.png";
import gradientModelBlack from "../products/Mockup-Modelo-Completo-Preta-GRADIENT.png";
import systemLatentState from "../products/Modelo-Descolado-Blusa-Branca-LATENT-STATE.png";

/* ⭐ NOVOS MOCKUPS COSTAS */
import backWhite from "../products/Modelo-Costa-Blusa-Branca-LOGO.png";
import backBlack from "../products/Modelo-Costa-Blusa-Preta-LOGO.png";
import backGray from "../products/Modelo-Costa-Blusa-Cinza-LOGO.png";

export const PRODUCTS: Product[] = [
  // HL-1.0 — MATHEMATICS
  {
    id: "hl-sm-01",
    ref: "MTH-01",
    name: "GRADIENT",
    series: "MATHEMATICS",
    version: "HL-1.0",
    category: "Behavioral Layer",
    description: "Taxa de variação contínua dentro de um sistema fechado.",
    concept:
      "O gradiente representa transformação contínua dentro de sistemas. A peça investiga o espaço entre estados — onde mudança ocorre sem ruptura.",
    image: gradientModel,

    /* ⭐ GALERIA */
    images: [
      gradientModel, // frente principal
      backBlack, // verso preto (principal desta peça)
    ],

    isCore: true,

    hotprintiUrl:
      "https://hotprinti.com.br/hiddenlayer/product/68a906a1-5f0a-4f37-9bea-fd11f12653bc/",
  },

  {
    id: "hl-sm-02",
    ref: "MTH-02",
    name: "LIMIT",
    series: "MATHEMATICS",
    version: "HL-1.0",
    category: "Behavioral Layer",
    description: "Estado de aproximação. Onde o comportamento encontra a fronteira.",
    image: limitModel,

    hotprintiUrl:
      "https://hotprinti.com.br/hiddenlayer/product/a43820ab-51e2-4070-a2ea-f9333aef8312/",
  },
  {
    id: "hl-sm-03",
    ref: "MTH-03",
    name: "SEQUENCE",
    series: "MATHEMATICS",
    version: "HL-1.0",
    category: "Behavioral Layer",
    description: "Progressão discreta como estrutura de transformação.",
    image: sequenceModel,

    hotprintiUrl:
      "https://hotprinti.com.br/hiddenlayer/product/bcd1a47c-59e7-4bc3-91ea-5fc0f4d7a4b5/",
  },
  {
    id: "hl-sm-04",
    ref: "MTH-04",
    name: "INTEGRAL",
    series: "MATHEMATICS",
    version: "HL-1.0",
    category: "Behavioral Layer",
    description: "Acúmulo de comportamento. Síntese do sistema.",
    image: integralModel,

    hotprintiUrl:
      "https://hotprinti.com.br/hiddenlayer/product/99727f84-6e07-4d8b-b810-48e5afad3579/",
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

    hotprintiUrl:
      "https://hotprinti.com.br/hiddenlayer/product/7751bfd6-c04a-4f39-933a-6a195baf6d47/",
  },

  {
    id: "hl-sys-02",
    ref: "SYS-02",
    name: "LATENT STATE",
    series: "SYSTEM",
    version: "HL-1.1",
    category: "Structural Layer",
    description:
      "Estado latente do sistema. Representação interna antes da ativação.",
    image: systemLatentState,

    hotprintiUrl:
      "https://hotprinti.com.br/hiddenlayer/product/5658f4db-3c5e-4c5a-99c0-9129982ce594/",
  },
];
