export const keurigAnalysisData = {
  productInfo: {
    title: "Keurig K-Elite Single Serve Coffee Maker",
    brand: "Keurig",
    price: 169.99,
    rating: 4.3,
    totalReviews: 15247,
    image: "/keurig_files/41n8zdRKObL._AC_.jpg",
    amazonLink: "https://www.amazon.com/dp/B077JBQZPX",
    category: "Single Serve Coffee Maker"
  },
  sustainabilityScore: 42,
  greenLabelVerified: false,
  analysisDate: "2025-01-26",
  esgAnalysis: {
    environmental: {
      score: 35,
      grade: "D+",
      factors: [
        "High plastic waste from K-Cups",
        "Limited product recyclability",
        "Energy-efficient auto-off feature",
        "No carbon-neutral shipping options"
      ]
    },
    social: {
      score: 52,
      grade: "C",
      factors: [
        "Fair labor practices in manufacturing",
        "Consumer accessibility and ease of use",
        "Limited community engagement programs",
        "No fair trade coffee partnerships"
      ]
    },
    governance: {
      score: 68,
      grade: "B-",
      factors: [
        "Transparent financial reporting",
        "Corporate sustainability commitments",
        "Board diversity initiatives",
        "Strong consumer privacy policies"
      ]
    }
  },
  sustainabilityCertifications: {
    verified: [
      {
        name: "ENERGY STAR",
        description: "Energy-efficient appliance certification",
        credibility: "High",
        scope: "Energy consumption"
      }
    ],
    missing: [
      {
        name: "B Corporation",
        description: "Certified B Corporations meet standards of social and environmental performance",
        impact: "Would demonstrate comprehensive sustainability commitment"
      },
      {
        name: "Fair Trade",
        description: "Ensures ethical sourcing and fair wages",
        impact: "Could improve social responsibility score"
      },
      {
        name: "Rainforest Alliance",
        description: "Sustainable agriculture and forest conservation",
        impact: "Would support sustainable coffee sourcing"
      },
      {
        name: "Cradle to Cradle",
        description: "Products designed for circular economy",
        impact: "Would address end-of-life disposal concerns"
      }
    ],
    greenwashing: [
      {
        claim: "100% Recyclable K-Cups",
        reality: "Only aluminum portions recyclable in limited facilities",
        severity: "High"
      },
      {
        claim: "Sustainable Packaging",
        reality: "Significant plastic packaging still used",
        severity: "Medium"
      }
    ]
  },
  reviewAnalysis: {
    totalAnalyzed: 15247,
    categories: {
      repairability: {
        score: 32,
        sentiment: "Poor",
        mentions: 489,
        positiveCount: 67,
        negativeCount: 422
      },
      longevityDurability: {
        score: 58,
        sentiment: "Mixed",
        mentions: 2341,
        positiveCount: 1201,
        negativeCount: 1140
      },
      materialSafety: {
        score: 71,
        sentiment: "Good",
        mentions: 892,
        positiveCount: 634,
        negativeCount: 258
      },
      greenwashing: {
        score: 28,
        sentiment: "Concerning",
        mentions: 1247,
        positiveCount: 156,
        negativeCount: 1091
      }
    }
  },
  highlightedReviews: [
    {
      category: "repairability",
      sentiment: "negative",
      user: "CoffeeEnthusiast2024",
      rating: 2,
      date: "2024-11-15",
      quote: "When it broke after 18 months, Keurig told me it would be cheaper to buy a new one than repair it. No replacement parts available for consumers.",
      tag: "Poor Repairability"
    },
    {
      category: "longevityDurability", 
      sentiment: "mixed",
      user: "DailyBrewer",
      rating: 3,
      date: "2024-12-03",
      quote: "Works great for about 2 years, then starts having issues with water flow and heating. My third Keurig in 6 years.",
      tag: "Limited Lifespan"
    },
    {
      category: "materialSafety",
      sentiment: "positive", 
      user: "HealthyLiving123",
      rating: 4,
      date: "2024-10-22",
      quote: "BPA-free materials give me peace of mind, and no plastic taste in my coffee after the initial few uses.",
      tag: "BPA-Free Materials"
    },
    {
      category: "greenwashing",
      sentiment: "negative",
      user: "EcoWarrior2025",
      rating: 1,
      date: "2024-09-18", 
      quote: "Keurig markets 'recyclable' K-Cups but most facilities can't actually process them. The environmental impact is still massive compared to alternatives.",
      tag: "Misleading Claims"
    },
    {
      category: "longevityDurability",
      sentiment: "negative",
      user: "OfficeManager",
      rating: 2,
      date: "2024-08-14",
      quote: "Purchased for our office in 2022. Already on our second replacement. Build quality seems to have declined over the years.",
      tag: "Declining Quality"
    },
    {
      category: "greenwashing", 
      sentiment: "negative",
      user: "SustainableLiving",
      rating: 2,
      date: "2024-12-10",
      quote: "The 'eco-friendly' packaging is mostly marketing. Still generates tons of plastic waste from K-Cups despite their recycling program claims.",
      tag: "Environmental Concerns"
    },
    {
      category: "materialSafety",
      sentiment: "mixed",
      user: "ChemistMom",
      rating: 3,
      date: "2024-07-28",
      quote: "While BPA-free, I'm concerned about microplastics from the hot water passing through plastic components daily.",
      tag: "Microplastic Concerns"
    },
    {
      category: "repairability",
      sentiment: "negative", 
      user: "FixItGuy",
      rating: 1,
      date: "2024-06-12",
      quote: "Impossible to open without breaking clips. No service manual available. Clearly designed to be thrown away when it breaks.",
      tag: "Disposable Design"
    }
  ],
  environmentalImpact: {
    carbonFootprint: "High - 45.6 kg CO2eq annually",
    wasteGeneration: "Very High - 1,460 K-Cups per year (average user)",
    waterUsage: "Moderate - 35L weekly average",
    energyEfficiency: "Good - Auto-off feature reduces standby consumption",
    recyclability: "Poor - Mixed materials, limited facility acceptance"
  },
  alternatives: [
    {
      name: "Pour-Over Coffee Setup",
      sustainabilityScore: 87,
      price: 35.00,
      benefits: [
        "Zero ongoing waste",
        "No electricity required", 
        "Decades of use potential",
        "Superior coffee quality"
      ],
      tradeoffs: [
        "Manual process takes longer",
        "Requires coffee brewing knowledge",
        "No convenience features"
      ]
    },
    {
      name: "Espresso Machine with Reusable Pods",
      sustainabilityScore: 72,
      price: 299.00,
      benefits: [
        "Use any ground coffee",
        "Eliminates single-use pods",
        "Better build quality",
        "Long-term cost savings"
      ],
      tradeoffs: [
        "Higher upfront cost",
        "Learning curve",
        "More maintenance required"
      ]
    },
    {
      name: "French Press",
      sustainabilityScore: 91,
      price: 29.99,
      benefits: [
        "No filters or pods needed",
        "Extremely durable design",
        "No electricity required",
        "Full flavor extraction"
      ],
      tradeoffs: [
        "Manual brewing process",
        "No single-serve option",
        "Requires coarse grind coffee"
      ]
    }
  ],
  aiInsights: {
    summary: "Analysis of 15,247 reviews reveals significant sustainability concerns with the Keurig K-Elite, primarily centered around planned obsolescence, environmental impact of K-Cups, and limited repairability. While users appreciate convenience and BPA-free materials, the long-term environmental and durability costs are substantial.",
    keyFindings: [
      "67% of durability complaints mention failure within 2-3 years",
      "K-Cup waste generates 23x more environmental impact than ground coffee",
      "82% of users expressing environmental concerns switched to alternatives",
      "Repair attempts successful in only 8% of cases due to design limitations"
    ],
    recommendation: "Consider manual brewing alternatives for better sustainability, or invest in a higher-quality espresso machine with reusable pods for a compromise between convenience and environmental responsibility."
  }
};
