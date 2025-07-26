export const coffeeMachineData = [
  {
    id: 1,
    name: "Breville Barista Express Espresso Machine",
    brand: "Breville", 
    price: 699.95,
    rating: 4.4,
    totalReviews: 8547,
    image: "/coffee_machine_files/71io+Gh4ApL._AC_UL320_.jpg",
    category: "Semi-Automatic Espresso Machine",
    reviewAnalysis: {
      sentiment: "Positive",
      sustainabilityMentions: 127,
      durabilityScore: 8.5,
      repairabilityScore: 7.2,
      energyEfficiencyMentions: 89,
      materialQualityScore: 9.1
    },
    environmental: {
      carbonFootprint: 35.8,
      microplastics: "Medium",
      energyUsage: "High (1600W)",
      waterUsage: 25,
      recyclability: "High (stainless steel)",
      packaging: "Recyclable cardboard"
    },
    sustainabilityHighlights: [
      "15-year+ lifespan mentioned in reviews",
      "Repairable components available",
      "Stainless steel construction reduces plastic use",
      "Users report buying fewer single-use coffee pods"
    ],
    reviewInsights: {
      positiveThemes: [
        "Exceptional build quality and durability",
        "Professional-grade espresso at home",
        "Integrated grinder saves counter space",
        "Consistent temperature and pressure"
      ],
      concerns: [
        "Learning curve for beginners",
        "Regular maintenance required",
        "Takes up significant counter space",
        "Can be noisy when grinding"
      ],
      sustainabilityReviews: [
        {
          user: "EcoFriendlyBarista",
          rating: 5,
          comment: "Bought this to replace my pod machine. The environmental impact difference is huge - no more single-use pods! Built like a tank, expecting it to last decades."
        },
        {
          user: "SustainableLiving2023",
          rating: 4,
          comment: "Love that I can use fresh beans instead of wasteful pods. The stainless steel build means it should last for years. Only wish it used less energy."
        }
      ]
    },
    alternatives: [
      {
        name: "Manual Espresso Maker (La Pavoni)",
        price: 450.00,
        carbonReduction: 28.3,
        benefits: ["No electricity needed", "50+ year lifespan", "100% repairable"]
      },
      {
        name: "Refurbished Breville Unit",
        price: 399.00,
        carbonReduction: 22.1,
        benefits: ["Extends product lifecycle", "Professional refurbishment", "1-year warranty"]
      }
    ]
  },
  {
    id: 2,
    name: "Technivorm Moccamaster KBGV Select", 
    brand: "Technivorm",
    price: 369.00,
    rating: 4.6,
    totalReviews: 3421,
    image: "/coffee_machine_files/61a7BOOkDjL._AC_UL320_.jpg",
    category: "Drip Coffee Maker",
    reviewAnalysis: {
      sentiment: "Very Positive",
      sustainabilityMentions: 89,
      durabilityScore: 9.8,
      repairabilityScore: 9.5,
      energyEfficiencyMentions: 67,
      materialQualityScore: 9.7
    },
    environmental: {
      carbonFootprint: 18.4,
      microplastics: "Low",
      energyUsage: "Medium (1520W)",
      waterUsage: 12,
      recyclability: "Very High (all metal)",
      packaging: "Minimal recyclable"
    },
    sustainabilityHighlights: [
      "Hand-assembled in Netherlands for 50+ years",
      "5-year warranty with lifetime repair service",
      "Minimal plastic components",
      "Users report 20+ year lifespans common"
    ],
    reviewInsights: {
      positiveThemes: [
        "Incredible build quality and longevity",
        "Perfect brewing temperature consistency",
        "Beautiful, timeless design",
        "Made in small batches with care"
      ],
      concerns: [
        "Premium price point",
        "No programmable features",
        "Single cup brewing not ideal",
        "Hot plate can overcook coffee"
      ],
      sustainabilityReviews: [
        {
          user: "ZeroWasteCoffee",
          rating: 5,
          comment: "This is a buy-it-for-life product. Mine is 15 years old and works like new. The company still services machines from the 1970s! Worth every penny for sustainability."
        },
        {
          user: "MinimalistBrewer",
          rating: 5,
          comment: "No plastic taste, no planned obsolescence. Just honest engineering that lasts generations. My parents gave me theirs from 1985 and it still brews perfectly."
        }
      ]
    },
    alternatives: [
      {
        name: "Pour-Over Setup (Chemex + Kettle)",
        price: 85.00,
        carbonReduction: 16.8,
        benefits: ["No electricity", "Completely manual", "Glass and wood construction"]
      },
      {
        name: "Vintage Technivorm (Refurbished)",
        price: 180.00,
        carbonReduction: 14.2,
        benefits: ["Proven longevity", "Professional restoration", "Classic design"]
      }
    ]
  },
  {
    id: 3,
    name: "Nespresso VertuoPlus Coffee and Espresso Maker",
    brand: "Nespresso", 
    price: 199.95,
    rating: 4.2,
    totalReviews: 12847,
    image: "/coffee_machine_files/51HrtoZ9YVL._AC_UL320_.jpg",
    category: "Pod Coffee Machine",
    reviewAnalysis: {
      sentiment: "Mixed",
      sustainabilityMentions: 234,
      durabilityScore: 6.2,
      repairabilityScore: 3.1,
      energyEfficiencyMentions: 156,
      materialQualityScore: 6.8
    },
    environmental: {
      carbonFootprint: 45.6,
      microplastics: "High",
      energyUsage: "Medium (1350W)",
      waterUsage: 35,
      recyclability: "Low (mixed materials)",
      packaging: "Excessive plastic"
    },
    sustainabilityHighlights: [
      "Nespresso recycling program available",
      "Some pods made from aluminum (recyclable)",
      "Automatic power-off feature",
      "Compact design saves space"
    ],
    reviewInsights: {
      positiveThemes: [
        "Convenience and speed",
        "Consistent coffee quality",
        "Variety of pod flavors",
        "Easy to use and clean"
      ],
      concerns: [
        "Expensive ongoing pod costs",
        "Environmental impact of single-use pods",
        "Machine lifespan concerns",
        "Limited to Nespresso ecosystem"
      ],
      sustainabilityReviews: [
        {
          user: "EnvironmentallyAware",
          rating: 2,
          comment: "The convenience is great but I feel guilty about all the pod waste. Even with the recycling program, it doesn't feel sustainable. Looking to switch to a manual option."
        },
        {
          user: "BusyParent123",
          rating: 4,
          comment: "I know pods aren't the most eco-friendly, but I do use the Nespresso recycling program religiously. The time savings with two kids make it worth it for now."
        }
      ]
    },
    alternatives: [
      {
        name: "AeroPress Coffee Maker",
        price: 39.95,
        carbonReduction: 42.1,
        benefits: ["No electricity needed", "Durable plastic-free filters", "Compact and portable"]
      },
      {
        name: "Espresso Machine with Reusable Pods",
        price: 299.00,
        carbonReduction: 38.7,
        benefits: ["Use any coffee", "Reusable pod system", "No ongoing pod costs"]
      }
    ]
  },
  {
    id: 4,
    name: "Hamilton Beach FlexBrew Trio Coffee Maker",
    brand: "Hamilton Beach",
    price: 129.99,
    rating: 4.1,
    totalReviews: 5689,
    image: "/coffee_machine_files/71gYAwOfxPL._AC_UL320_.jpg",
    category: "Multi-Serve Coffee Maker",
    reviewAnalysis: {
      sentiment: "Positive",
      sustainabilityMentions: 67,
      durabilityScore: 5.8,
      repairabilityScore: 6.2,
      energyEfficiencyMentions: 34,
      materialQualityScore: 6.1
    },
    environmental: {
      carbonFootprint: 22.3,
      microplastics: "Medium",
      energyUsage: "Medium (1050W)",
      waterUsage: 18,
      recyclability: "Medium (mixed materials)",
      packaging: "Standard cardboard"
    },
    sustainabilityHighlights: [
      "Versatile brewing reduces need for multiple machines",
      "Works with ground coffee and pods",
      "Auto-shutoff feature saves energy",
      "Affordable price point extends accessibility"
    ],
    reviewInsights: {
      positiveThemes: [
        "Great value for versatility",
        "Multiple brewing options",
        "Compact design",
        "Easy to operate"
      ],
      concerns: [
        "Build quality concerns for long-term use",
        "Plastic components may wear over time",
        "Not suitable for coffee purists",
        "Mixed reviews on coffee taste quality"
      ],
      sustainabilityReviews: [
        {
          user: "BudgetSustainable",
          rating: 4,
          comment: "Perfect starter machine that lets me use both ground coffee and occasional pods. Planning to phase out pods completely but nice to have the option during transition."
        },
        {
          user: "CollegeBrewer",
          rating: 3,
          comment: "Good for the price but probably won't last as long as premium models. Still better than daily coffee shop visits from an environmental perspective."
        }
      ]
    },
    alternatives: [
      {
        name: "French Press + Electric Kettle",
        price: 45.00,
        carbonReduction: 18.9,
        benefits: ["No filters needed", "Simple mechanics", "Easy to repair"]
      },
      {
        name: "Upgraded Single-Serve Brewer",
        price: 200.00,
        carbonReduction: 8.4,
        benefits: ["Better build quality", "Energy efficient", "Longer lifespan"]
      }
    ]
  },
  {
    id: 5,
    name: "Cuisinart DCC-3200P1 Perfectemp Coffee Maker",
    brand: "Cuisinart",
    price: 79.95,
    rating: 4.3,
    totalReviews: 9234,
    image: "/coffee_machine_files/71BvCt6eAFL._AC_UL320_.jpg",
    category: "Programmable Drip Coffee Maker",
    reviewAnalysis: {
      sentiment: "Positive",
      sustainabilityMentions: 89,
      durabilityScore: 7.1,
      repairabilityScore: 6.8,
      energyEfficiencyMentions: 78,
      materialQualityScore: 7.4
    },
    environmental: {
      carbonFootprint: 16.7,
      microplastics: "Medium",
      energyUsage: "Medium (1050W)",
      waterUsage: 14,
      recyclability: "Medium (stainless steel carafe)",
      packaging: "Standard packaging"
    },
    sustainabilityHighlights: [
      "Stainless steel thermal carafe eliminates hot plate",
      "Programmable features reduce energy waste",
      "Long-standing brand with parts availability",
      "Good value extends coffee maker accessibility"
    ],
    reviewInsights: {
      positiveThemes: [
        "Consistent brewing temperature",
        "Thermal carafe keeps coffee hot without burning",
        "Reliable daily performance",
        "Good value for money"
      ],
      concerns: [
        "Some plastic components in water reservoir",
        "Carafe can be difficult to clean",
        "Not suitable for single cups",
        "Programming can be confusing initially"
      ],
      sustainabilityReviews: [
        {
          user: "HomeOfficeWorker",
          rating: 4,
          comment: "The thermal carafe is great - no more burnt coffee from sitting on a hot plate all day. Been using it for 3 years with no issues. Solid, practical choice."
        },
        {
          user: "FamilyCoffee",
          rating: 4,
          comment: "Makes enough for the whole family and the timer means it's ready when we wake up. Much better than our old machine that died after 18 months."
        }
      ]
    },
    alternatives: [
      {
        name: "Thermal Pour-Over Carafe Setup",
        price: 65.00,
        carbonReduction: 14.2,
        benefits: ["No electricity", "Manual control", "Thermal retention"]
      },
      {
        name: "Higher-End Thermal Machine",
        price: 150.00,
        carbonReduction: 5.3,
        benefits: ["Better materials", "Longer warranty", "More precise temperature"]
      }
    ]
  },
  {
    id: 6,
    name: "Keurig K-Elite Single Serve Coffee Maker",
    brand: "Keurig",
    price: 169.99,
    rating: 4.3,
    totalReviews: 15247,
    image: "/coffee_machine_files/71McTfnZGvL._AC_UL320_.jpg",
    category: "Single Serve Coffee Maker",
    reviewAnalysis: {
      sentiment: "Positive",
      sustainabilityMentions: 156,
      durabilityScore: 6.7,
      repairabilityScore: 4.2,
      energyEfficiencyMentions: 98,
      materialQualityScore: 6.9
    },
    environmental: {
      carbonFootprint: 28.4,
      microplastics: "High",
      energyUsage: "Medium (1500W)",
      waterUsage: 22,
      recyclability: "Low (plastic)",
      packaging: "Recyclable cardboard"
    },
    sustainabilityHighlights: [
      "Compatible with reusable K-Cup filter",
      "Strong brew option uses less pods per serving", 
      "Auto-off feature saves energy",
      "Multiple cup sizes reduce waste"
    ],
    reviewInsights: {
      positiveThemes: [
        "Fast single-serve convenience",
        "Multiple brew strength options",
        "Large water reservoir",
        "Quiet brewing operation"
      ],
      concerns: [
        "K-Cup waste environmental impact",
        "Descaling required regularly",
        "Limited to Keurig ecosystem",
        "Plastic taste initially"
      ],
      sustainabilityReviews: [
        {
          user: "EcoOfficeWorker",
          rating: 3,
          comment: "Convenient for the office but I switched to using the reusable filter. Much better environmentally and saves money on K-Cups."
        }
      ]
    },
    alternatives: [
      {
        name: "Pour-Over Single Cup Setup",
        price: 35.00,
        carbonReduction: 26.8,
        benefits: ["No pods needed", "Better coffee quality", "Minimal waste"]
      }
    ]
  },
  {
    id: 7,
    name: "De'Longhi Stilosa Manual Espresso Machine",
    brand: "De'Longhi",
    price: 99.95,
    rating: 4.1,
    totalReviews: 7856,
    image: "/coffee_machine_files/61B869x6ElL._AC_UL320_.jpg",
    category: "Manual Espresso Machine",
    reviewAnalysis: {
      sentiment: "Positive",
      sustainabilityMentions: 78,
      durabilityScore: 7.4,
      repairabilityScore: 8.1,
      energyEfficiencyMentions: 45,
      materialQualityScore: 7.8
    },
    environmental: {
      carbonFootprint: 19.2,
      microplastics: "Low",
      energyUsage: "Low (1100W)",
      waterUsage: 8,
      recyclability: "High (mostly metal)",
      packaging: "Minimal packaging"
    },
    sustainabilityHighlights: [
      "Manual operation means no electronics to break",
      "Compact footprint saves resources",
      "Compatible with any ground coffee",
      "Simple design aids longevity"
    ],
    reviewInsights: {
      positiveThemes: [
        "Great value for espresso quality",
        "Compact size perfect for small spaces",
        "Manual control over brewing process",
        "Easy to clean and maintain"
      ],
      concerns: [
        "Learning curve for espresso novices",
        "No automatic features",
        "Small water tank capacity",
        "Plastic drip tray"
      ],
      sustainabilityReviews: [
        {
          user: "MinimalBrewer",
          rating: 5,
          comment: "Love the simplicity - no complex electronics to fail. Been using fresh beans instead of pods and the quality is fantastic for the price."
        }
      ]
    },
    alternatives: [
      {
        name: "Moka Pot (Stovetop)",
        price: 35.00,
        carbonReduction: 18.1,
        benefits: ["No electricity", "Decades of use", "Pure aluminum construction"]
      }
    ]
  },
  {
    id: 8,
    name: "Ninja Specialty Coffee Maker",
    brand: "Ninja",
    price: 199.99,
    rating: 4.4,
    totalReviews: 11234,
    image: "/coffee_machine_files/51l2h37RiFL._AC_UL320_.jpg",
    category: "Specialty Coffee Maker",
    reviewAnalysis: {
      sentiment: "Very Positive",
      sustainabilityMentions: 92,
      durabilityScore: 7.2,
      repairabilityScore: 6.5,
      energyEfficiencyMentions: 67,
      materialQualityScore: 7.6
    },
    environmental: {
      carbonFootprint: 24.8,
      microplastics: "Medium",
      energyUsage: "Medium (1200W)",
      waterUsage: 16,
      recyclability: "Medium (mixed materials)",
      packaging: "Recyclable cardboard"
    },
    sustainabilityHighlights: [
      "Versatile - replaces multiple appliances",
      "Works with any ground coffee (no pods)",
      "Cold brew feature reduces energy use",
      "Programmable to optimize energy consumption"
    ],
    reviewInsights: {
      positiveThemes: [
        "Incredible versatility - hot, iced, cold brew",
        "Rich flavor extraction technology",
        "Large capacity for families",
        "User-friendly controls"
      ],
      concerns: [
        "Large footprint takes counter space",
        "Complex features may overwhelm beginners",
        "More expensive than basic drip makers",
        "Cleaning can be time-consuming"
      ],
      sustainabilityReviews: [
        {
          user: "VersatileCoffee",
          rating: 5,
          comment: "Replaced my old drip maker, French press, AND cold brew setup with this one machine. Less clutter and works with any coffee beans I want."
        }
      ]
    },
    alternatives: [
      {
        name: "Manual Cold Brew + French Press Combo",
        price: 65.00,
        carbonReduction: 22.3,
        benefits: ["No electricity", "Simple maintenance", "Outstanding coffee"]
      }
    ]
  },
  {
    id: 9,
    name: "BLACK+DECKER 12-Cup Thermal Coffee Maker",
    brand: "BLACK+DECKER",
    price: 89.99,
    rating: 4.2,
    totalReviews: 8945,
    image: "/coffee_machine_files/61UTFJux1pL._AC_UL320_.jpg",
    category: "Thermal Coffee Maker",
    reviewAnalysis: {
      sentiment: "Positive",
      sustainabilityMentions: 73,
      durabilityScore: 6.8,
      repairabilityScore: 7.1,
      energyEfficiencyMentions: 84,
      materialQualityScore: 6.4
    },
    environmental: {
      carbonFootprint: 21.1,
      microplastics: "Medium",
      energyUsage: "Medium (900W)",
      waterUsage: 15,
      recyclability: "Medium (stainless carafe)",
      packaging: "Standard packaging"
    },
    sustainabilityHighlights: [
      "Thermal carafe eliminates hot plate energy use",
      "Large capacity reduces brewing frequency",
      "Affordable sustainability option",
      "Auto-shutoff prevents energy waste"
    ],
    reviewInsights: {
      positiveThemes: [
        "Great value for thermal brewing",
        "Keeps coffee hot for hours without burning",
        "Easy to use and program",
        "Large capacity perfect for offices"
      ],
      concerns: [
        "Build quality not premium",
        "Carafe can be difficult to pour",
        "Some plastic components",
        "Water reservoir could be larger"
      ],
      sustainabilityReviews: [
        {
          user: "BudgetOffice",
          rating: 4,
          comment: "Perfect for our office - makes a lot of coffee and keeps it hot all day without wasting electricity on a hot plate. Good value for a thermal machine."
        }
      ]
    },
    alternatives: [
      {
        name: "Thermal Carafe + Pour Over",
        price: 55.00,
        carbonReduction: 19.6,
        benefits: ["Manual control", "No electricity for heating", "Better coffee quality"]
      }
    ]
  },
  {
    id: 10,
    name: "Mr. Coffee Iced Coffee Maker",
    brand: "Mr. Coffee", 
    price: 39.99,
    rating: 4.0,
    totalReviews: 6789,
    image: "/coffee_machine_files/71LB1AbsorL._AC_UL320_.jpg",
    category: "Iced Coffee Maker",
    reviewAnalysis: {
      sentiment: "Positive",
      sustainabilityMentions: 45,
      durabilityScore: 6.1,
      repairabilityScore: 6.7,
      energyEfficiencyMentions: 32,
      materialQualityScore: 5.9
    },
    environmental: {
      carbonFootprint: 14.3,
      microplastics: "Medium",
      energyUsage: "Low (600W)",
      waterUsage: 10,
      recyclability: "Medium (mostly plastic)",
      packaging: "Minimal packaging"
    },
    sustainabilityHighlights: [
      "Lower energy use than traditional makers",
      "Reduces need for coffee shop visits",
      "Simple design means fewer parts to break",
      "Affordable entry to home brewing"
    ],
    reviewInsights: {
      positiveThemes: [
        "Perfect for iced coffee lovers",
        "Quick and convenient",
        "Compact design",
        "Very affordable"
      ],
      concerns: [
        "Limited to iced coffee only",
        "Plastic construction throughout",
        "Small capacity",
        "Not built for heavy daily use"
      ],
      sustainabilityReviews: [
        {
          user: "IcedCoffeeFan",
          rating: 4,
          comment: "Great little machine for summer! Saves me money and reduces waste from coffee shop runs. Simple design means it should last a while."
        }
      ]
    },
    alternatives: [
      {
        name: "Cold Brew Concentrate System",
        price: 25.00,
        carbonReduction: 13.8,
        benefits: ["No electricity", "Makes concentrate", "Glass construction available"]
      }
    ]
  }
];
