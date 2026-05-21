// data.js
const productData = {
  title: "LAKCARB 16 C(SP)",
  description:
    "Surface Treated Calcium Carbonate engineered for high-performance industrial applications. Natural Limestone Powder with surface-coating.",

  // The staff can add as many rows as they need here
  chemicalAnalysis: [
    {
      property: "Calcium Magnesium Carbonate (CaCO₃.MgCO₃)",
      specification: "Min. 98.0 %",
    },
    { property: "Iron Oxide (Fe₂O₃)", specification: "Max. 0.03 %" },
    { property: "HCl Insoluble Content", specification: "Max. 1.2 %" },
    { property: "Loss on Ignition (LOI)", specification: "44 +/- 1 %" },
  ],

  // If a new chemical has 15 physical properties, they just keep adding lines
  physicalProperties: [
    { property: "Particle Size (d₉₀%)", specification: "Max. 17 μm" },
    { property: "Mean Particle Size (d₅₀%)", specification: "Max. 5.0 μm" },
    { property: "Moisture", specification: "Max. 0.20 %" },
    { property: "pH (10% Aqueous solution)", specification: "8-9" },
    { property: "Whiteness", specification: "Min. 93 %" },
    { property: "Density Loose", specification: "0.58 - 0.62 g/ml" },
    { property: "DOP Absorption", specification: "17 - 19 g/100g" },
  ],
};
