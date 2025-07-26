export const wishlistItems = [
  {
    id: 1,
    name: "Gemmy 39121-32 Airblown Movie Screen Inflatable with Storage Bag",
    brand: "Gemmy",
    price: 109.80,
    category: "Lawn & Patio",
    description: "149\" Screen Outdoor Inflatable Movie Screen",
    image: "/wishlist_files/movie_screen.jpg",
    environmental: {
      carbonFootprint: 45.2, // kg CO2
      microplastics: "High",
      energyUsage: "Medium (inflator motor)",
      waterUsage: 15, // liters
      recyclability: "Low",
      packaging: "Excessive plastic packaging"
    },
    alternatives: [
      {
        name: "DIY Projector Screen with Organic Cotton Sheet",
        price: 25.00,
        carbonReduction: 38.1,
        benefits: ["Biodegradable", "Reusable", "Minimal packaging"]
      },
      {
        name: "Rent/Borrow Inflatable Screen",
        price: 30.00,
        carbonReduction: 42.8,
        benefits: ["Shared resource", "No storage needed", "Professional quality"]
      }
    ],
    needsAssessment: {
      frequency: "2-3 times per year",
      alternatives: ["Drive-in theater", "Indoor movie night", "Community screenings"],
      sustainabilityScore: 3
    }
  },
  {
    id: 2,
    name: "Hongdian M2 Black Forest Mini Fountain Pen",
    brand: "Hong Dian",
    price: 19.98,
    category: "Office Product",
    description: "Fine Soft Nib & Sleek Shape Aluminum Short Pocket Travel Pen (Midnight Blue)",
    image: "/wishlist_files/fountain_pen.jpg",
    environmental: {
      carbonFootprint: 8.5,
      microplastics: "Low",
      energyUsage: "None (reusable)",
      waterUsage: 5,
      recyclability: "High (aluminum)",
      packaging: "Minimal"
    },
    alternatives: [
      {
        name: "Refurbished/Vintage Fountain Pen",
        price: 15.00,
        carbonReduction: 6.8,
        benefits: ["Extends product life", "Unique character", "Often better quality"]
      },
      {
        name: "Bamboo Fountain Pen",
        price: 22.00,
        carbonReduction: 5.1,
        benefits: ["Renewable material", "Biodegradable", "Carbon negative"]
      }
    ],
    needsAssessment: {
      frequency: "Daily use",
      alternatives: ["Use existing pens", "Digital note-taking", "Pencils"],
      sustainabilityScore: 8
    }
  },
  {
    id: 3,
    name: "Muji Gel Ink Ball Point Pen, Black, 0.5mm, Pack of 3",
    brand: "MUJI",
    price: 7.42,
    category: "Office Product",
    description: "Japan Import gel ink pens",
    image: "/wishlist_files/muji_pens.jpg",
    environmental: {
      carbonFootprint: 3.2,
      microplastics: "Medium",
      energyUsage: "Low manufacturing",
      waterUsage: 8,
      recyclability: "Low (mixed materials)",
      packaging: "International shipping"
    },
    alternatives: [
      {
        name: "Locally-made Refillable Pens",
        price: 12.00,
        carbonReduction: 2.8,
        benefits: ["Refillable", "Local production", "Durable"]
      },
      {
        name: "Use Digital Note-Taking",
        price: 0.00,
        carbonReduction: 3.2,
        benefits: ["Paperless", "Searchable", "Cloud backup"]
      }
    ],
    needsAssessment: {
      frequency: "Weekly use",
      alternatives: ["Digital apps", "Existing pens", "Voice memos"],
      sustainabilityScore: 4
    }
  },
  {
    id: 4,
    name: "MARCATO Made in Italy Atlas 150 Classic Manual Pasta Maker",
    brand: "MARCATO",
    price: 98.79,
    category: "Kitchen",
    description: "Chrome Steel. Makes Lasagna, Fettuccine & Tagliolini",
    image: "/wishlist_files/pasta_maker.jpg",
    environmental: {
      carbonFootprint: 25.6,
      microplastics: "None",
      energyUsage: "None (manual)",
      waterUsage: 45,
      recyclability: "High (steel)",
      packaging: "Cardboard and minimal plastic"
    },
    alternatives: [
      {
        name: "Rolling Pin Method",
        price: 8.00,
        carbonReduction: 24.1,
        benefits: ["Multi-purpose tool", "No storage issues", "Traditional technique"]
      },
      {
        name: "Buy Fresh Pasta from Local Producer",
        price: 5.00,
        carbonReduction: 12.3,
        benefits: ["Supports local business", "No storage needed", "Professional quality"]
      }
    ],
    needsAssessment: {
      frequency: "2-3 times per month",
      alternatives: ["Store-bought pasta", "Other grain dishes", "Rolling pin"],
      sustainabilityScore: 7
    }
  },
  {
    id: 5,
    name: "KitchenAid Variable Speed Corded Hand Blender",
    brand: "KitchenAid",
    price: 59.99,
    category: "Kitchen",
    description: "5 Speed, Empire Red, Regular Style",
    image: "/wishlist_files/hand_blender.jpg",
    environmental: {
      carbonFootprint: 18.7,
      microplastics: "Medium",
      energyUsage: "High (200W motor)",
      waterUsage: 22,
      recyclability: "Medium (mixed materials)",
      packaging: "Plastic and cardboard"
    },
    alternatives: [
      {
        name: "Manual Whisk and Fork",
        price: 10.00,
        carbonReduction: 17.2,
        benefits: ["No electricity", "Durable", "Exercise", "Quiet"]
      },
      {
        name: "Refurbished Immersion Blender",
        price: 25.00,
        carbonReduction: 14.6,
        benefits: ["Extends product life", "Cost effective", "Tested quality"]
      }
    ],
    needsAssessment: {
      frequency: "2-3 times per week",
      alternatives: ["Manual mixing", "Food processor", "Regular blender"],
      sustainabilityScore: 5
    }
  },
  {
    id: 6,
    name: "Aura Carver HD WiFi Digital Picture Frame",
    brand: "AURA",
    price: 149.00,
    category: "Electronics",
    description: "10.1\", Add Photos with Aura App, Free Unlimited Storage - Gravel",
    image: "/wishlist_files/digital_picture_frame.jpg",
    environmental: {
      carbonFootprint: 67.3,
      microplastics: "High",
      energyUsage: "High (always-on display + WiFi)",
      waterUsage: 89,
      recyclability: "Low (e-waste)",
      packaging: "Plastic and foam padding"
    },
    alternatives: [
      {
        name: "Traditional Printed Photos in Frames",
        price: 25.00,
        carbonReduction: 45.8,
        benefits: ["No electricity", "Recyclable frames", "Tangible memories"]
      },
      {
        name: "Repurpose Old Tablet",
        price: 0.00,
        carbonReduction: 67.3,
        benefits: ["Zero waste", "Multi-functional", "Already owned"]
      }
    ],
    needsAssessment: {
      frequency: "Continuous display",
      alternatives: ["Printed photos", "Smartphone slideshow", "Existing frames"],
      sustainabilityScore: 2
    }
  },
  {
    id: 7,
    name: "Fujifilm Instax Mini Link 3 Smartphone Printer",
    brand: "Fujifilm",
    price: 95.99,
    category: "Office Product",
    description: "Clay White smartphone printer",
    image: "/wishlist_files/instax_printer.jpg",
    environmental: {
      carbonFootprint: 32.4,
      microplastics: "High",
      energyUsage: "Medium (battery + printing)",
      waterUsage: 56,
      recyclability: "Low (e-waste)",
      packaging: "Plastic components"
    },
    alternatives: [
      {
        name: "Local Photo Printing Service",
        price: 0.50,
        carbonReduction: 28.7,
        benefits: ["Professional quality", "Bulk printing efficiency", "No device storage"]
      },
      {
        name: "Digital Photo Sharing",
        price: 0.00,
        carbonReduction: 32.4,
        benefits: ["Instant sharing", "Cloud storage", "No physical waste"]
      }
    ],
    needsAssessment: {
      frequency: "Occasional printing",
      alternatives: ["Phone gallery", "Cloud sharing", "Professional printing"],
      sustainabilityScore: 3
    }
  },
  {
    id: 8,
    name: "Tapo TP-Link RGBWIC Smart LED Light Strip",
    brand: "Tapo",
    price: 49.99,
    category: "Tools & Home Improvement",
    description: "16.4Ft, 1000 Lumens, 16M Colors, Works w/Apple HomeKit/Alexa/Google",
    image: "/wishlist_files/led_light_strip.jpg",
    environmental: {
      carbonFootprint: 28.9,
      microplastics: "High",
      energyUsage: "Low LED (energy efficient)",
      waterUsage: 34,
      recyclability: "Low (electronic components)",
      packaging: "Plastic housing and packaging"
    },
    alternatives: [
      {
        name: "Natural Lighting Solutions",
        price: 15.00,
        carbonReduction: 26.1,
        benefits: ["Circadian rhythm friendly", "No electricity", "Candles/lanterns"]
      },
      {
        name: "Standard LED Bulbs with Colored Shades",
        price: 20.00,
        carbonReduction: 18.7,
        benefits: ["Simpler technology", "Repairable", "Standard fittings"]
      }
    ],
    needsAssessment: {
      frequency: "Daily ambiance",
      alternatives: ["Dimmer switches", "Colored bulbs", "Natural light"],
      sustainabilityScore: 4
    }
  },
  {
    id: 9,
    name: "Victrola Rock Speaker Connect",
    brand: "Victrola",
    price: 149.99,
    category: "Electronics",
    description: "Stone, Wireless Outdoor Bluetooth 5.3, 22-Hour Battery, Solar Charging",
    image: "/wishlist_files/bluetooth_speaker.jpg",
    environmental: {
      carbonFootprint: 41.6,
      microplastics: "Medium",
      energyUsage: "Medium (battery + Bluetooth)",
      waterUsage: 72,
      recyclability: "Medium (battery + electronics)",
      packaging: "Mixed materials packaging"
    },
    alternatives: [
      {
        name: "Acoustic/Unplugged Music",
        price: 0.00,
        carbonReduction: 41.6,
        benefits: ["No electricity", "Social interaction", "Skill development"]
      },
      {
        name: "Existing Bluetooth Speaker",
        price: 0.00,
        carbonReduction: 41.6,
        benefits: ["Use what you have", "Indoor/outdoor versatile", "No new purchase"]
      }
    ],
    needsAssessment: {
      frequency: "Occasional outdoor use",
      alternatives: ["Indoor speakers", "Acoustic instruments", "Community sound systems"],
      sustainabilityScore: 3
    }
  }
];
