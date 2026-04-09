export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  readTime: string
  content: string
}

export const posts: BlogPost[] = [
  {
    slug: 'why-surprise-dates-work',
    title: 'The Psychology Behind Surprise Dates — Why Not Knowing Makes It Better',
    description: 'Research shows that anticipation and novelty are two of the strongest drivers of relationship satisfaction. Here\'s why surprise date plans work better than over-planned ones.',
    date: '2026-04-08',
    author: 'Sondre Guttormsen',
    readTime: '5 min read',
    content: `Most couples fall into a predictable rhythm: same restaurants, same time, same conversation. It feels comfortable, but research in relationship psychology tells a different story. A landmark study published in the Journal of Personality and Social Psychology found that couples who regularly engage in novel, exciting activities together report significantly higher relationship satisfaction than those who stick to familiar routines.

This is the core insight behind Dately's scratch-to-reveal mechanic. When you don't know what's coming next, your brain releases dopamine — the same neurotransmitter associated with reward and motivation. That neurochemical response transforms a Tuesday dinner into something that feels like the early days of a relationship.

## The Problem with Over-Planning

Planning a date should be exciting, but for most couples it becomes a chore. You spend 30 minutes scrolling through restaurant reviews, texting back and forth about preferences, and eventually defaulting to somewhere safe. By the time you sit down, the spontaneity is gone.

Psychologist Dr. Arthur Aron, whose research on building closeness has been cited thousands of times, emphasizes that shared novel experiences are one of the most reliable ways to deepen connection. The key word is "novel" — not expensive, not elaborate, just different from your routine.

## How Dately Applies This

When Dately generates a date plan, it considers your mood, budget, and time constraints, then builds a multi-stop itinerary from real venues in your area. But instead of showing you everything upfront, each activity is hidden behind a scratch card. You can reveal them all at once or one at a time as your date progresses.

This simple mechanic does three things:
1. **Creates anticipation** — You know something is planned, but not what. That uncertainty drives excitement.
2. **Removes decision fatigue** — No more "where do you want to go?" loops. The decision is made for you.
3. **Adds shared discovery** — Scratching a card together becomes a bonding moment in itself.

## The Real Venue Difference

Plenty of apps generate random date suggestions. What makes Dately different is that every venue is real. We pull from Google Places, Ticketmaster, and local event data to ensure that when you reveal a restaurant, it actually exists, is open, and matches your budget. The AI doesn't hallucinate a fictional bistro — it recommends a place with actual reviews and directions.

## Try It Yourself

Dately launches in 2026. Join the waitlist at trydately.app to be among the first to experience surprise date planning powered by AI and real local data.`,
  },
  {
    slug: 'date-night-ideas-under-50',
    title: '12 Creative Date Night Ideas Under $50 That Actually Feel Special',
    description: 'You don\'t need to spend a fortune to have a memorable date. Here are 12 budget-friendly date ideas that feel anything but cheap.',
    date: '2026-04-06',
    author: 'Sondre Guttormsen',
    readTime: '6 min read',
    content: `The best dates aren't about how much you spend — they're about how present you are. Whether you're a new couple exploring your city or long-term partners looking to break out of the dinner-and-a-movie cycle, these 12 ideas prove that great dates don't require a big budget.

## 1. Sunset Picnic at a Local Park

Pack sandwiches, a blanket, and a portable speaker. Find a park with a good view and arrive 30 minutes before sunset. Total cost: the price of groceries you'd buy anyway.

## 2. Cooking Challenge Night

Pick a cuisine neither of you has tried before. Buy the ingredients together, then cook from a recipe you've never attempted. The imperfection is part of the fun.

## 3. Free Museum or Gallery Night

Most cities have at least one museum with free admission days. Check your local options — you might be surprised. Art galleries and university exhibitions are almost always free.

## 4. Local Live Music

Skip the $200 concert tickets and find a local bar or coffee shop with live music. Many venues host free or low-cost shows on weekday nights. Ticketmaster's discovery feature and local event pages are great for finding these.

## 5. Walking Food Tour (DIY)

Pick a neighborhood and walk to three different spots: one for appetizers, one for the main course, one for dessert. You'll discover places you'd never visit on a normal night, and the walking between stops gives you time to talk.

## 6. Stargazing

Drive 20 minutes outside your city and find a dark spot. Download a stargazing app to identify constellations. Bring hot chocolate or wine. This works particularly well in fall and winter.

## 7. Board Game Cafe

Many cities now have board game cafes where you pay a small cover fee and play from a library of hundreds of games. It's social, interactive, and surprisingly competitive.

## 8. Farmers Market Morning Date

Swap the typical dinner date for a morning one. Walk through a weekend farmers market, sample food, buy ingredients, then cook brunch together at home.

## 9. Take a Class Together

Community centers, libraries, and local studios offer drop-in classes in everything from pottery to salsa dancing. One-time sessions usually cost $10-25 per person and give you something to laugh about later.

## 10. Thrift Store Challenge

Give each other a $10 budget and 20 minutes to find the most ridiculous or thoughtful gift. It's silly, creative, and you end up with a memento.

## 11. Neighborhood Exploration

Pick a neighborhood you've never been to and just walk. Go into shops you wouldn't normally visit, try a random cafe, and see what you discover. The lack of a plan is the whole point.

## 12. Drive-In Movie

If there's a drive-in theater within driving distance, it's almost always cheaper than a regular cinema and infinitely more memorable. Bring your own snacks.

## Let Dately Plan It For You

All of these ideas work great as self-planned dates. But if you'd rather skip the planning entirely, Dately generates personalized date itineraries using real local venues — filtered by your budget, mood, and time. The AI won't suggest a $200 tasting menu when your budget is $50. Join the waitlist at trydately.app.`,
  },
  {
    slug: 'how-dately-uses-ai',
    title: 'How Dately Uses AI to Plan Your Dates — And Why Every Venue Is Real',
    description: 'A look at how Dately combines Claude AI with Google Places, Ticketmaster, and local event data to generate date plans that you can actually follow.',
    date: '2026-04-03',
    author: 'Sondre Guttormsen',
    readTime: '4 min read',
    content: `When we say Dately is "AI-powered," we mean something specific. The AI doesn't generate fictional restaurants or invent events that don't exist. Instead, it acts as a smart curator — taking real venue and event data from your area and weaving it into a personalized itinerary based on your preferences.

Here's exactly how it works.

## Step 1: Real Data First

Before the AI does anything, Dately queries multiple real-time data sources based on your location:

- **Google Places API** returns restaurants, cafes, bars, parks, museums, and other attractions near you. Each result includes ratings, price levels, operating hours, and photos.
- **Ticketmaster** provides upcoming concerts, comedy shows, sports events, and performances.
- **Local event APIs** surface community events like food festivals, art walks, and pop-up markets.

This gives Dately a pool of actual, verified options to work with — not a list of generic suggestions.

## Step 2: AI Curation

Once the real data is collected, Dately sends it to Claude (made by Anthropic) along with your preferences: mood (romantic, adventurous, cozy, spontaneous), budget range, available time window, dietary restrictions, and any accessibility needs.

Claude doesn't just pick random venues. It builds a coherent multi-stop plan that flows logically — considering travel time between stops, matching the mood across the entire evening, and balancing different types of activities. A "romantic evening" plan might pair a candlelit restaurant with a sunset walk, not a sports bar and a bowling alley.

If the primary AI is unavailable, Dately falls back to OpenAI's GPT-4o to ensure your date plan is always generated.

## Step 3: The Scratch Reveal

The generated plan is then presented as a series of scratch cards in the app. Each card represents one stop on your date. You choose whether to reveal them all at once or discover each one as you go.

## Why This Matters

Most "AI date idea" tools simply generate text suggestions like "go to a nice Italian restaurant." That's not helpful — which restaurant? Is it open? Is it in your budget? Is it even in your city?

Dately's approach is fundamentally different. Every suggestion is a specific, real venue with a name, address, rating, and operating hours. You can tap any venue in your plan to open directions in Apple Maps.

The AI adds intelligence to real data. The real data adds reliability to the AI. That combination is what makes Dately's plans actionable, not just aspirational.

## Built With Privacy in Mind

Your preferences and location are only used to generate your date plan. Under Anthropic's and OpenAI's commercial API terms, your data is never used to train their AI models. We delete the raw API request data after your plan is generated.

Read our full privacy policy at trydately.app/privacy.`,
  },
]
