# CartCourt: Judging your purchases so the planet doesn’t have to

## Inspiration: For the Greener Good

You know what you need — a Mac, dog biscuits, or perhaps a new coffee machine. So you open Amazon.com… and suddenly you’re staring at two dozen nearly identical products, all boasting the same buzzwords: “eco-friendly,” “BPA-free,” “sustainable packaging.”

Amazon highlights a handful with its green “Climate Pledge Friendly” badge — but what does that even mean?

The Climate Pledge Friendly label, while a good start, doesn't:
Compare sustainability across similar items
Account for the end-to-end carbon pipeline (shipping distance, packaging type, or manufacturing emissions)
Filter out greenwashed products that use vague language without backing up claims
Consider ESG certifications and compliance of the seller

The average American household generates 18.3 tons of CO₂ annually through purchases alone, yet 73% of consumers want to shop more sustainably but don't know how. Amazon’s commitment to becoming net zero by 2040 is laudable, but it can’t succeed without empowering you to make holistic choices that are better for the planet — and for you.

Right now, that power is buried in PDFs, certifications, and thousands of reviews. Enter: CartCourt.

## What it does

CartCourt is a web app that empowers users to make smarter, sustainable shopping choices on Amazon. We give users the agency to navigate the jungle of lookalike listings, swinging beyond fake marketing and generic labels.

Leveraging AI analysis, we:
Scrape and analyze reviews to detect greenwashing and assess product durability
Aggregate product-level environmental certifications (Fair Trade, B Corp, FSC, GOTS, etc.)
Estimate carbon footprint, packaging waste, and shipping emissions
Offer smarter swaps, wait-or-buy challenges, and reward simulations to incentivize lower-impact habits

Looking to splurge? 
Search for any item you’re thinking about buying and discover the most sustainable alternatives — powered by review analysis, ESG certifications, and greenwashing detection. Get the information you won’t find by scrolling through the product listing.

Debating whether to hit “add to cart”? 
Paste an Amazon product link to instantly reveal:
Estimated carbon footprint
LLM-powered sentiment analysis of product reviews
Verified sustainability certifications (e.g., Fair Trade, B Corp, Rainforest Alliance)

About to check out?
Analyze what’s currently in your checkout queue:
Estimated emissions based on item weight, shipping method, and number of packages 
Suggestions to reduce emissions by delaying or consolidating deliveries


Dreaming of a shopping spree?
Click “Import Wishlist” to scan and assess everything you’ve been eyeing. For each item, you’ll see:
Environmental cost summary (e.g., microplastics, energy use, carbon footprint)
Greener alternatives with easy one-click swaps
Tailored prompts like: “How long have you had your current one?”
Total emissions impact of wishlist


Feeling guilty about your purchases?
View a running history of all your past scans and wishlist analyses.
See your cumulative emissions saved and visually track your personal footprint reduction over time.
Earn Green Points for making smarter swaps and consolidating shipments.
Compete with friends in impact challenges and see who can save the most CO₂ — or get roasted by Peccy for falling off.

## How we built it

Front end: We used React, Javascript, and CSS to build a modern, responsive design. 
Hosting: We used GitHub Pages for site hosting.
LLMs: We used the OpenAI API for sentiment analysis of the reviews and to give user-friendly suggestions via a chatbot.
Machine Learning Models: We used Python-based machine learning to train a regression model to predict the weight of Amazon products. We used CarbonSutra API to estimate the carbon footprint of different products based on product weight and locations.

## Challenges we ran into

Due to time limitations, we weren’t able to integrate the back end components that we had initially planned on.

## Accomplishments that we're proud of

Getting the site deployed in such a short period of time and ideating on a concept we believe Amazon customers (and the planet) would immediately benefit from.

## What's next for CartCourt

More user customization and interaction, such as being able to:
See your real-time “impact dashboard” as you shop
Set monthly carbon or green point goals and track progress
Public “impact pledges” and badges you can wear proudly
Integrate the website with a browser extension so that the website is better integrated into the Amazon shopping experience
