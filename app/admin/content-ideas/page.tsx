'use client'

import { useState } from 'react'

// --- Types ---
type Pillar = 'Educate' | 'Entertain' | 'Inspire' | 'Promote'

interface ContentIdea {
  number: number
  title: string
  format: string
  platform: string
  pillar: Pillar
  hook: string
  concept: string
  cta: string
}

interface Section {
  title: string
  ideas: ContentIdea[]
}

// --- Pillar Badge Colors ---
const pillarColors: Record<Pillar, { bg: string; border: string; text: string }> = {
  Educate: {
    bg: 'rgba(199, 178, 138, 0.15)',
    border: 'rgba(199, 178, 138, 0.3)',
    text: 'var(--champagne-gold)',
  },
  Entertain: {
    bg: 'rgba(139, 58, 52, 0.15)',
    border: 'rgba(139, 58, 52, 0.3)',
    text: 'var(--wine-red)',
  },
  Inspire: {
    bg: 'rgba(232, 180, 166, 0.2)',
    border: 'rgba(232, 180, 166, 0.35)',
    text: '#E8B4A6',
  },
  Promote: {
    bg: 'rgba(138, 178, 138, 0.2)',
    border: 'rgba(138, 178, 138, 0.35)',
    text: '#8AB28A',
  },
}

// --- All 108 Content Ideas ---
const sections: Section[] = [
  {
    title: 'Section 1: Relatable Couple/Dating Struggles',
    ideas: [
      {
        number: 1,
        title: '"We Need to Talk\u2026 About Date Night"',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'POV: You finally have a free evening together\u2026',
        concept: 'Quick-cut montage of a couple staring at each other saying "so what do you want to do?" back and forth, escalating in frustration. Freeze frame. Text overlay: "There\'s an app for that." Cut to Dately scratch card reveal.',
        cta: 'Tag someone who does this every weekend',
      },
      {
        number: 2,
        title: 'The Decision Paralysis Loop',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'The 45-minute \'where should we eat\' spiral',
        concept: 'Screen recording of a couple\'s text thread going back and forth: "idk you pick" / "no you pick" / "I don\'t care" / "me neither." Transition to scratching a Dately card that picks for them. Relief washes over.',
        cta: 'Stop the loop. Link in bio',
      },
      {
        number: 3,
        title: 'Netflix & No Chill',
        format: 'TikTok/Reel (12 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Date night in 2026 vs. what it should be',
        concept: 'Split screen: left side shows couple scrolling Netflix for 40 minutes then falling asleep. Right side shows them scratching a Dately home date card and actually doing something fun together (cooking challenge, wine tasting, etc.).',
        cta: 'Which side are you on? Comment',
      },
      {
        number: 4,
        title: 'The Boring Routine Alarm',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'When you realize you\'ve been to the same 3 restaurants for 2 years straight',
        concept: 'Person dramatically looking at Google Maps timeline/recent restaurant visits \u2014 all the same place. Alarm sound effect. Cut to opening Dately and discovering a new food adventure nearby they\'ve never tried.',
        cta: 'Break the cycle. Download Dately',
      },
      {
        number: 5,
        title: '"I Planned the Last One"',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Every couple has this argument\u2026',
        concept: 'Two people pointing at each other saying "I planned the last date" with increasing intensity. Text: "What if neither of you had to plan?" Dately logo reveal. The app plans it for both of you.',
        cta: 'Let AI settle the debate. Link in bio.',
      },
      {
        number: 6,
        title: 'Pinterest Board vs. Reality',
        format: 'Instagram Carousel (6 slides)',
        platform: 'Instagram',
        pillar: 'Entertain',
        hook: 'Your 847 saved date ideas vs. dates you\'ve actually done',
        concept: 'Slide 1: Screenshot of overflowing Pinterest board. Slide 2: "Dates actually completed: 0." Slides 3-5: How Dately turns those saved ideas into real plans with real venues and times. Slide 6: "Stop pinning. Start scratching."',
        cta: 'Save this for later\u2026 or actually do something about it',
      },
      {
        number: 7,
        title: 'The "We Should Do Something Different" Couple',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'When you both agree to try something new\u2026 then order from the same place',
        concept: 'Couple enthusiastically agreeing to "do something fun this weekend!" Cut to: them on the couch, same takeout, same show. Dately notification pops up with a committed date plan. They actually go.',
        cta: 'The push you both need. Try Dately free.',
      },
      {
        number: 8,
        title: 'Long-Distance Date Dilemma',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok',
        pillar: 'Educate',
        hook: 'Long-distance couples, this one\'s for you',
        concept: 'Show the frustration of trying to plan virtual dates that aren\'t just "watch a movie on FaceTime." Transition to Dately\'s Home Date pack with creative at-home activities both partners can do simultaneously from different locations.',
        cta: 'Distance doesn\'t mean boring. Link in bio.',
      },
      {
        number: 9,
        title: 'First Date Panic Mode',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: '24 hours before a first date and you have zero plans',
        concept: 'Frantic montage of someone googling "fun first date ideas [city]" at 2 AM, reading 47 blog posts, and still having nothing. Opens Dately, scratches a card, gets a full itinerary with real venues. Calm restored.',
        cta: 'First date? We got you.',
      },
      {
        number: 10,
        title: 'The Group Chat Debate',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'The group chat when someone asks for date ideas',
        concept: 'Mock group chat with increasingly unhinged suggestions: "go axe throwing" / "escape room again??" / "just go to dinner." Person sighs, opens Dately instead, gets a curated plan based on their actual preferences and location.',
        cta: 'Better than your group chat\'s advice',
      },
      {
        number: 11,
        title: 'Seasonal Relationship Rut',
        format: 'Instagram Carousel (5 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'Signs you\'re in a date night rut (and the fix)',
        concept: 'Slide 1: Hook. Slides 2-4: Relatable signs \u2014 always eating at the same place, can\'t remember your last "real" date, dates always end with "that was fine." Slide 5: Introduce Dately as the spontaneity injection your relationship needs.',
        cta: 'How many did you check off? Tell us below',
      },
      {
        number: 12,
        title: 'The Over-Planner vs. The Go-With-the-Flow',
        format: 'TikTok/Reel (22 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'Every couple has a planner and a \'whatever you want\' person',
        concept: 'Split personality sketch: one person making a spreadsheet for date night, the other shrugging. Show how Dately satisfies both \u2014 surprise element for the spontaneous one, real structure and details for the planner.',
        cta: 'Which one are you? Comment',
      },
      {
        number: 13,
        title: 'Budget Date Night Stress',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok',
        pillar: 'Educate',
        hook: 'When you want a great date but payday is next week',
        concept: 'Show the internal panic of wanting to impress but being broke. Dately generates plans across all price ranges \u2014 including free and budget-friendly home dates. You don\'t need money to be creative.',
        cta: 'Great dates don\'t need a great budget. Link in bio.',
      },
      {
        number: 14,
        title: 'The "What Are We" Date',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Planning a date for someone you\'re \'talking to\' but not official with',
        concept: 'The anxiety of picking the right vibe \u2014 not too casual, not too serious. Show Dately generating the perfect balanced plan that says "I\'m interested" without saying "I\'ve named our kids."',
        cta: 'Dately knows the vibe. Trust the scratch card.',
      },
      {
        number: 15,
        title: 'Anniversary Amnesia',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'POV: It\'s your anniversary tomorrow and you forgot to plan',
        concept: 'Classic panic face. Frantically opens Dately. Gets a full special-occasion date plan with real restaurant reservations, activities, and timing \u2014 all generated in seconds. Crisis averted.',
        cta: 'Your emergency date planner. Save this for later',
      },
      {
        number: 16,
        title: 'Couples Who\'ve "Done Everything"',
        format: 'Instagram Carousel (8 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'Think you\'ve done every date in your city? Think again.',
        concept: 'Slide 1: Hook. Slides 2-7: Unique date ideas people never think of \u2014 generated from real local events, hidden gem venues, seasonal pop-ups. Show Dately pulling from Ticketmaster, Google Events, and local places data. Slide 8: "Dately finds what you\'d never Google."',
        cta: 'Drop your city in the comments \u2014 we\'ll prove it',
      },
      {
        number: 17,
        title: 'The Post-Kids Date Drought',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'Parents: when was your last real date? Not grocery shopping together.',
        concept: 'Montage of "dates" that are actually errands. Then show a couple finally getting a babysitter and using Dately to make the most of their rare free evening with a perfectly timed itinerary.',
        cta: 'You deserve more than Target runs. Link in bio',
      },
      {
        number: 18,
        title: 'The Solo Dater\'s Struggle',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'When the apps give you a match but zero date ideas',
        concept: 'Someone excitedly matching on a dating app, then freezing when the other person says "so where are we going?" Dately to the rescue \u2014 generate a full date plan in seconds that actually impresses.',
        cta: 'Matching is step one. Dately is step two.',
      },
    ],
  },
  {
    title: 'Section 2: Date Ideas & Tips',
    ideas: [
      {
        number: 19,
        title: '"5 Dates Under $20 in Any City"',
        format: 'Instagram Carousel (7 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'Broke doesn\'t mean boring',
        concept: 'Each slide presents one budget date idea with visual tips: sunset picnic, free museum nights, farmers market crawl, stargazing, cooking challenge at home. Final slide: "Or let Dately find budget dates near you automatically."',
        cta: 'Save this for your next no-budget date night',
      },
      {
        number: 20,
        title: 'Seasonal Date Guide \u2014 Spring Edition',
        format: 'Instagram Carousel (10 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'Spring dates that aren\'t just \'go for a walk\'',
        concept: '8 creative spring date ideas with aesthetic visuals: botanical garden picnic, outdoor painting class, farmers market then cook together, rooftop drinks at golden hour, bike ride to a new neighborhood, outdoor concert, plant shopping date, sunset kayaking.',
        cta: 'Which one are you trying first? Comment the number',
      },
      {
        number: 21,
        title: 'The Perfect First Date Formula',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'A therapist-approved first date formula that actually works',
        concept: 'Break down the ideal first date structure: low-pressure activity + walking + optional food. Show how Dately builds this naturally \u2014 an activity, a nearby walk, and a food spot, all real places near you.',
        cta: 'Screenshot this formula. Or just let Dately do it for you.',
      },
      {
        number: 22,
        title: '"Recreate Your First Date" Challenge',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'We recreated our first date 3 years later\u2026',
        concept: 'Couple recreating their first date beat by beat \u2014 same restaurant, same outfits, same nervous energy. Emotional. End card: "Use Dately\'s scrapbook to remember every date. Recreate the ones that matter."',
        cta: 'Would you recreate your first date? Comment where it was',
      },
      {
        number: 23,
        title: 'Dessert Crawl Date',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'The best date idea you\'ve never tried: a dessert crawl',
        concept: 'Show a couple hitting 3 dessert spots in one night \u2014 bakery, ice cream, chocolate shop. Each stop is a quick taste and move. Show how Dately\'s Food Adventures pack creates these multi-stop food itineraries automatically with real nearby places.',
        cta: 'Dately\'s Food Adventures pack does this for you. Link in bio',
      },
      {
        number: 24,
        title: 'Home Date Night Tier List',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Ranking home date ideas from S-tier to \'just say you\'re bored\'',
        concept: 'Tier list format ranking home dates: S-tier (cooking competition, wine tasting, blanket fort movie marathon), A-tier (paint night, game night), B-tier (puzzles, baking), F-tier (scrolling phones next to each other). Dately\'s Home Date pack mentioned as the shortcut.',
        cta: 'What\'s your S-tier home date? Drop it below',
      },
      {
        number: 25,
        title: '"Date Your City" Series \u2014 Episode 1',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'You live in [City] but date like a tourist \u2014 here\'s how to fix that',
        concept: 'Recurring series. Each episode explores a different neighborhood/area with hidden date spots. Show Dately pulling real nearby suggestions for that area. Works for any city \u2014 encourage UGC versions.',
        cta: 'Drop your city. We\'ll make an episode',
      },
      {
        number: 26,
        title: 'The 36 Questions Date',
        format: 'Instagram Carousel (8 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'The scientifically proven way to fall in love on a date',
        concept: 'Introduce the famous "36 Questions to Fall in Love" study. Pick 8 of the best questions, one per slide, with beautiful typography. Final slide: pair these questions with a Dately home date plan for the ultimate deep-connection evening.',
        cta: 'Save and try these on your next date',
      },
      {
        number: 27,
        title: 'Rainy Day Date Rescue',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'Rain just cancelled your date plans? Even better.',
        concept: 'Show plans getting rained out, then pivoting to Dately\'s Home Date pack or indoor suggestions. The weather changes, the date doesn\'t have to be cancelled. Show Dately\'s weather-aware date planning in action.',
        cta: 'Rain check? Nah. Rain upgrade',
      },
      {
        number: 28,
        title: 'Adventure Date vs. Chill Date',
        format: 'Instagram Carousel (6 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'Are you an adventure couple or a chill couple?',
        concept: 'Side-by-side comparison: adventure dates (hiking, kayaking, rock climbing) vs. chill dates (caf\u00e9 hopping, bookstore browsing, wine tasting). Neither is better. Dately generates both based on your preferences.',
        cta: 'Vote in stories: Adventure or Chill',
      },
      {
        number: 29,
        title: '"What to Do After Dinner" Ideas',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'Dinner\'s over at 8:30\u2026 now what?',
        concept: 'The awkward post-dinner "so\u2026 what now?" moment. Quick-fire ideas: dessert somewhere new, live music, night market, rooftop bar, late-night bookshop, waterfront walk. Dately plans the full evening so you never hit this wall.',
        cta: 'Dately plans the whole night, not just dinner.',
      },
      {
        number: 30,
        title: 'Morning Date Ideas Nobody Talks About',
        format: 'Instagram Carousel (7 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'Who said dates have to be at night?',
        concept: 'Morning/daytime date ideas: sunrise hike, farmers market, brunch crawl, coffee shop tour, morning swim, museum before crowds, early bookshop browse. Less crowded, more affordable, totally underrated.',
        cta: 'Morning dates hit different. Try one this weekend.',
      },
      {
        number: 31,
        title: 'The Stay-In Date Night Starter Pack',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok',
        pillar: 'Educate',
        hook: 'The stay-in date starter pack that doesn\'t suck',
        concept: 'Quick checklist: candles, a playlist (not your gym one), phones away, something to cook together, a Dately Home Date card for the activity. Show the transformation from regular Tuesday night to actual date night.',
        cta: 'Screenshot the checklist. You\'re welcome',
      },
      {
        number: 32,
        title: 'Food Adventure: Restaurant Roulette',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'We let an app pick our restaurant and this happened\u2026',
        concept: 'Document the experience of using Dately\'s restaurant roulette feature. From scratching the card, to seeing the reveal, to arriving at a place they\'d never normally try. Genuine reactions. The surprise element is the hook.',
        cta: 'Would you trust a scratch card to pick your dinner?',
      },
      {
        number: 33,
        title: 'The "No Phones" Date Challenge',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok',
        pillar: 'Inspire',
        hook: 'We put our phones away for 3 hours on a date. Here\'s what happened.',
        concept: 'Couple commits to a phone-free date (except for the initial Dately reveal). Show the real connection, laughter, and presence that comes from being fully engaged. Emotional, authentic moments.',
        cta: 'Try it this weekend. Tag us in the results @trydately',
      },
      {
        number: 34,
        title: 'Double Date Made Easy',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok',
        pillar: 'Educate',
        hook: 'Planning a double date is 4x the \'idk what do you want to do\'',
        concept: 'The chaos of coordinating two couples. Solution: one person opens Dately, scratches a card, shares the plan in the group chat. Decision made in 10 seconds instead of 3 days of texting.',
        cta: 'Send this to your double date couple',
      },
      {
        number: 35,
        title: 'Midweek Mini Date Ideas',
        format: 'Instagram Carousel (6 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'You don\'t need a whole Saturday for a great date',
        concept: 'Quick 1-2 hour midweek date ideas: coffee + walk after work, sunset from a new spot, dessert date, bookstore browse, happy hour at a new place. Dately generates these time-aware mini dates automatically.',
        cta: 'Which midweek date are you trying this week?',
      },
      {
        number: 36,
        title: 'Date Night In: Cooking Challenge',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'We let an app pick our cooking challenge and it got competitive',
        concept: 'Couple gets a Dately home date that\'s a cooking challenge \u2014 same ingredients, different dishes, blind taste test. Show the fun, the mess, the judging. Real, chaotic, and entertaining.',
        cta: 'Who won? Watch till the end',
      },
      {
        number: 37,
        title: 'Seasonal Pop-Up Date Hunt',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'Your city has secret pop-up events happening this week \u2014 here\'s how to find them',
        concept: 'Show how Dately pulls from Ticketmaster and Google Events to surface pop-up experiences, food festivals, art shows, and seasonal markets you\'d never find on your own. The dates find you.',
        cta: 'Stop missing out. Dately finds what\'s happening near you',
      },
      {
        number: 38,
        title: 'The "Surprise Your Partner" Playbook',
        format: 'Instagram Carousel (8 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'How to plan a surprise date without your partner suspecting anything',
        concept: 'Step-by-step: 1) Open Dately, 2) Set preferences, 3) Scratch and pick, 4) Commit the plan, 5) Tell them to dress nice, 6) Enjoy the surprise. The app does the hard part \u2014 you get the credit.',
        cta: 'Tag the person who needs to see this',
      },
    ],
  },
  {
    title: 'Section 3: App Feature Showcases',
    ideas: [
      {
        number: 39,
        title: 'Scratch-to-Reveal ASMR',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Promote',
        hook: 'The most satisfying thing you\'ll see today',
        concept: 'Close-up, ASMR-style screen recording of someone scratching a Dately card on their phone. Slow, satisfying scratch sound. The date plan reveals underneath. Pure sensory content \u2014 let the interaction sell itself.',
        cta: 'Your turn. Download Dately and scratch your first card',
      },
      {
        number: 40,
        title: '"How It Works" in 30 Seconds',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Promote',
        hook: 'This app plans your entire date in 10 seconds',
        concept: 'Clean, fast walkthrough: pick a pack \u2192 see your scratch cards with hint icons \u2192 scratch one \u2192 full itinerary revealed with real venues, times, and map \u2192 commit \u2192 share with partner. No voiceover needed \u2014 just text overlays and the app doing its thing.',
        cta: 'Try it free. Link in bio',
      },
      {
        number: 41,
        title: 'Pack System Breakdown',
        format: 'Instagram Carousel (7 slides)',
        platform: 'Instagram',
        pillar: 'Promote',
        hook: 'Which Dately pack matches your vibe?',
        concept: 'Slide 1: Hook. Slides 2-5: Each pack with its personality \u2014 Local Events (the explorer), Food Adventures (the foodie), Home Dates (the homebody), Spicy (the bold one). Slide 6: Seasonal packs tease. Slide 7: "Download and pick your pack."',
        cta: 'Comment your pack',
      },
      {
        number: 42,
        title: 'The Scrapbook Feature Reveal',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Promote',
        hook: 'What if every date you\'ve ever been on was saved in a beautiful timeline?',
        concept: 'Scroll through a filled-out Dately scrapbook \u2014 completed dates with photos, journal entries, and memories. Each entry is a chapter in the couple\'s story. Emotional, nostalgic music. The scrapbook makes dates collectible.',
        cta: 'Start your date story. First entry is free',
      },
      {
        number: 43,
        title: 'AI Date Planning Demo',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Promote',
        hook: 'I told an AI my vibe and it planned a perfect date in my city',
        concept: 'Show the input process \u2014 mood, budget, time, location. Then the AI generating a multi-stop itinerary with real places, real ratings, real times. The plan isn\'t generic \u2014 it\'s hyper-local and personalized. Zoom in on the real venue details.',
        cta: 'AI that actually knows your city. Try Dately',
      },
      {
        number: 44,
        title: 'Hint Icons Explained',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok',
        pillar: 'Promote',
        hook: 'These little icons tell you everything without spoiling anything',
        concept: 'Close-up of Dately scratch cards showing hint icons (food, music, outdoor, etc.). Explain how hints give just enough info to build excitement without revealing the full plan. It\'s the anticipation that makes the reveal exciting.',
        cta: 'The surprise is the whole point. Link in bio',
      },
      {
        number: 45,
        title: 'Re-Roll Feature',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok',
        pillar: 'Promote',
        hook: 'Not feeling the date plan? Just re-roll',
        concept: 'Quick demo: scratch a card, see the plan, decide it\'s not the vibe, tap re-roll, get a completely different plan. Show that you\'re never stuck \u2014 Dately adapts to what you actually want to do.',
        cta: 'You\'re in control of the surprise. Download free.',
      },
      {
        number: 46,
        title: 'Real Venues, Real Plans',
        format: 'TikTok/Reel (22 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Promote',
        hook: 'Unlike those AI apps that make up restaurants that don\'t exist\u2026',
        concept: 'Call out the problem of AI hallucinating fake venues. Show Dately pulling from Google Places, Ticketmaster, and real event data. Zoom in on real ratings, real addresses, real hours. "Every place in your plan is a place you can actually go to."',
        cta: 'Real dates. Real places. Download Dately.',
      },
      {
        number: 47,
        title: 'Commit & Share Walkthrough',
        format: 'Instagram Stories (3-part)',
        platform: 'Instagram',
        pillar: 'Promote',
        hook: 'Scratch \u2192 Reveal \u2192 Commit \u2192 Share with your partner',
        concept: 'Story 1: Scratch the card. Story 2: Read the full plan. Story 3: Hit commit, share with partner, get a reminder. Show the full flow. Add a poll: "Would you use this?"',
        cta: 'Tap the link to try it yourself',
      },
      {
        number: 48,
        title: 'Offline Access Feature',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok',
        pillar: 'Promote',
        hook: 'No signal? No problem.',
        concept: 'Show someone on a date in a location with no service \u2014 tunnel, subway, remote area. They pull up their committed Dately plan and it\'s all there: venue names, addresses, times. Committed plans work offline.',
        cta: 'Your date plan goes wherever you go.',
      },
      {
        number: 49,
        title: 'Weather-Aware Planning',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'This app checks the weather before planning your date',
        concept: 'Show Dately incorporating real weather data \u2014 if rain is forecast, it prioritizes indoor venues. If it\'s perfect weather, it suggests outdoor options. Smart planning that doesn\'t ignore reality.',
        cta: 'No more rained-out dates. Dately checks the forecast',
      },
      {
        number: 50,
        title: 'Map Integration Feature',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Promote',
        hook: 'Your whole date plan on one map',
        concept: 'Show the Apple MapKit integration \u2014 all date stops pinned on a map with walking/driving directions. No more switching between apps. The whole itinerary is visual, spatial, and easy to follow.',
        cta: 'Navigate your date like a pro. Link in bio',
      },
      {
        number: 51,
        title: 'Spicy Pack Tease',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Promote',
        hook: 'There\'s a pack we can\'t fully show you on here',
        concept: 'Blurred/censored preview of the Spicy Pack. Playful, mysterious, suggestive but not explicit. Emphasize it\'s about intimacy, connection, and communication \u2014 not just physical. "18+ | Privacy controls built in."',
        cta: 'Unlock the Spicy Pack in the app',
      },
      {
        number: 52,
        title: 'Scrapbook Photo Memory',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'One year of dates, all in one place',
        concept: 'Cinematic scroll through a year\'s worth of scrapbook entries \u2014 photos from dates, journal snippets, locations visited. Set to emotional music. Shows how Dately turns individual dates into a love story you can look back on.',
        cta: 'Your relationship deserves a highlight reel',
      },
    ],
  },
  {
    title: 'Section 4: Trending Format Adaptations',
    ideas: [
      {
        number: 53,
        title: '"Get Ready With Me: Date Edition" (GRWM)',
        format: 'TikTok/Reel (45-60 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'GRWM for a date I haven\'t even seen yet',
        concept: 'Classic GRWM format but with a twist: the person is getting ready while their Dately scratch card is still unscratched on screen. They get ready first, THEN scratch the card live on camera. Real surprise reaction. What they wear might not match the plan \u2014 that\'s the comedy.',
        cta: 'Would you get ready blind? Try it with Dately',
      },
      {
        number: 54,
        title: '"POV: Your Partner Uses Dately"',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'POV: they said \'just trust me\' and pulled out this app',
        concept: 'From the partner\'s perspective \u2014 they\'re told nothing, just "dress nice and be ready at 7." Show the excitement, confusion, and delight as each stop on the Dately plan unfolds. The surprise element from the receiver\'s perspective.',
        cta: 'Be this partner. Download Dately.',
      },
      {
        number: 55,
        title: '"Things That Just Make Sense" Trend',
        format: 'TikTok/Reel (12 sec)',
        platform: 'TikTok',
        pillar: 'Promote',
        hook: 'Things that just make sense',
        concept: 'Quick succession of universally agreed-upon combos: peanut butter + jelly, Netflix + couch, [your city] + Dately. Simple, viral format that positions Dately as an obvious pairing with going on dates.',
        cta: 'It just makes sense. Link in bio.',
      },
      {
        number: 56,
        title: '"Day in My Life" Couple Edition',
        format: 'TikTok/Reel (60 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'Day in our life: surprise date edition',
        concept: 'Full day-in-my-life vlog format. Morning routine, work, then the date begins \u2014 scratch the card, get ready, follow the Dately itinerary through each stop. Authentic, unpolished, showing real joy.',
        cta: 'Plan less, live more. @trydately',
      },
      {
        number: 57,
        title: '"What I Ordered vs. What I Got" \u2014 Date Edition',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'What I expected from a date app vs. what Dately actually gave me',
        concept: 'Left side: generic "top 10 date ideas" listicle. Right side: Dately\'s personalized itinerary with real venues, real ratings, real times, weather awareness. The comparison sells the quality.',
        cta: 'Upgrade your date game. Link in bio.',
      },
      {
        number: 58,
        title: 'Duet/Stitch: "Best Date You\'ve Been On?"',
        format: 'TikTok (Stitch)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Best date I\'ve been on? Let me show you\u2026',
        concept: 'Stitch popular "best date" videos with Dately-planned experiences. Or create the original prompt for others to stitch. Build a thread of amazing date stories that reference Dately.',
        cta: 'Stitch this with your best Dately date',
      },
      {
        number: 59,
        title: '"Put a Finger Down" \u2014 Date Night Edition',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Put a finger down: date edition',
        concept: '"Put a finger down if you\'ve ever... argued about where to eat, gone to the same restaurant 3 weeks in a row, cancelled plans because you couldn\'t decide, said \'let\'s just stay in\' out of laziness." End: "If you still have fingers up, you probably have Dately."',
        cta: 'How many fingers are down? Comment your count',
      },
      {
        number: 60,
        title: '"I Tried the Viral Date App" Review',
        format: 'TikTok/Reel (45 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Promote',
        hook: 'I tried that date planning app everyone\'s talking about',
        concept: 'Honest first-impression review format. Download, set up, pick a pack, scratch cards, read the plan. Show genuine reactions. Even if some things surprise them, the authenticity sells. Works great as influencer/UGC seeding content.',
        cta: 'Honest verdict: worth it. Try it yourself',
      },
      {
        number: 61,
        title: 'Before/After: Date Night Edition',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'Before Dately vs. After Dately',
        concept: 'Before: couple on couch, bored, scrolling phones. Transition effect. After: same couple dressed up, laughing at a restaurant, exploring a new neighborhood, living their best life. Clean, aspirational, simple.',
        cta: 'Your glow-up starts with a scratch card',
      },
      {
        number: 62,
        title: '"It\'s Giving\u2026" Trend',
        format: 'TikTok/Reel (12 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Dately is giving\u2026',
        concept: 'Quick montage set to trending audio: "It\'s giving main character energy. It\'s giving effort without the stress. It\'s giving \'I planned this\' when the app did all the work. It\'s giving romance on autopilot."',
        cta: 'It\'s giving everything. Link in bio',
      },
      {
        number: 63,
        title: '"Expectation vs. Reality" Date Night',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Date night expectation vs. reality',
        concept: 'Expectation: Pinterest-perfect candlelit dinner, horse carriage, Eiffel Tower. Reality: arguing about parking, restaurant has a 2-hour wait, phone dies. Plot twist: "Reality with Dately" \u2014 real restaurant reserved, nearby parking, backup options built in.',
        cta: 'Better than your expectations. Link in bio.',
      },
      {
        number: 64,
        title: 'Speed Dating Your Date Cards',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'Speed dating but it\'s scratch cards',
        concept: 'Person has 3 unscratched Dately cards. They scratch each one rapid-fire and react live: "Ooh, outdoor market? Maybe. Japanese food? YES. Rooftop jazz? ABSOLUTELY." Pick their favorite. Fun, fast, reactive content.',
        cta: 'Which one would you pick? Comment 1, 2, or 3',
      },
      {
        number: 65,
        title: '"Tell Me Without Telling Me" \u2014 Dately Edition',
        format: 'TikTok/Reel (15 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Tell me you use Dately without telling me you use Dately',
        concept: 'Montage: person always has date plans ready, partner is always surprised, their scrapbook is full, they never say "idk where should we go." Others in comments join in with their tells.',
        cta: 'Drop yours in the comments',
      },
    ],
  },
  {
    title: 'Section 5: Behind-the-Scenes / Founder Story',
    ideas: [
      {
        number: 66,
        title: '"Why I Built Dately"',
        format: 'TikTok/Reel (60 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'I built this app because my girlfriend said \'you never plan anything\'',
        concept: 'Founder story \u2014 the real, personal reason behind Dately. The universal frustration of planning dates, the realization that AI could solve it, the journey from idea to app. Vulnerable, real, relatable. People root for indie founders.',
        cta: 'This is Dately. Built with love (and a little guilt). Link in bio.',
      },
      {
        number: 67,
        title: '"Building an App in Public" Series',
        format: 'TikTok/Reel (30-45 sec)',
        platform: 'TikTok',
        pillar: 'Educate',
        hook: 'Building a dating app as a solo dev \u2014 week 47',
        concept: 'Recurring series showing real development progress. Screen recordings of new features, design decisions, bug fixes, late-night coding. The indie dev community eats this up. Cross-pollinates tech audience with dating audience.',
        cta: 'Follow for the journey. New update every week',
      },
      {
        number: 68,
        title: 'Design System Behind Dately',
        format: 'Instagram Carousel (8 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'The design choices that make Dately feel different',
        concept: 'Deep dive into Theme.swift decisions: why wine red (romance without being cheesy), why glass-morphism (modern intimacy), why Libre Baskerville serif (editorial elegance), why warm blacks over true black (luxury, not tech). Design-focused audience will share this.',
        cta: 'Every pixel has a reason. Download to experience it',
      },
      {
        number: 69,
        title: '"Things They Don\'t Tell You About Building an App"',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok',
        pillar: 'Educate',
        hook: 'No one told me building an app would mean arguing with APIs at 3 AM',
        concept: 'Relatable indie dev content: the late nights, the App Store rejections, the feature that works on your phone but no one else\'s, the moment you get your first real user. Raw, funny, real.',
        cta: 'Follow the chaos. New episode every week',
      },
      {
        number: 70,
        title: 'Feature Request Q&A',
        format: 'Instagram Stories (Q&A sticker)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'What feature should we build next?',
        concept: 'Use the Q&A sticker to collect feature requests. Respond to the best ones in stories or a follow-up reel. Makes users feel heard and invested in the product. Free market research disguised as engagement.',
        cta: 'Your idea might be in the next update',
      },
      {
        number: 71,
        title: '"Day in the Life of an Indie Dev"',
        format: 'TikTok/Reel (45 sec)',
        platform: 'TikTok',
        pillar: 'Inspire',
        hook: 'What building a startup alone actually looks like',
        concept: 'Morning routine, coffee, sit down to code, hit a bug, fix it, design a new screen, test on device, respond to user feedback, evening coding session. Authentic day-in-the-life that humanizes the brand.',
        cta: 'Support indie apps. Try Dately',
      },
      {
        number: 72,
        title: 'User Feedback Reactions',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Promote',
        hook: 'Reading what real users say about Dately\u2026',
        concept: 'Founder reacting to real user reviews and DMs. Genuine happiness at positive feedback, thoughtful responses to feature requests, funny reactions to unexpected uses. Builds authenticity and social proof.',
        cta: 'Join the community. Download Dately.',
      },
      {
        number: 73,
        title: '"How AI Powers Your Date"',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'There\'s a Claude AI and 5 real APIs behind every scratch card',
        concept: 'Quick explainer of the tech stack in accessible terms: AI generates the plan, Google Places finds real venues, Ticketmaster finds events, weather API checks the forecast, MapKit routes your evening. Tech transparency builds trust.',
        cta: 'Smart tech, real dates. Link in bio',
      },
    ],
  },
  {
    title: 'Section 6: UGC & Community',
    ideas: [
      {
        number: 74,
        title: '#ScratchToReveal Challenge',
        format: 'TikTok/Reel (15-30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Promote',
        hook: 'Scratch your card and show us the reveal',
        concept: 'Launch a branded challenge: users film themselves scratching their Dately card and reacting to the reveal. Best reactions get featured. The scratch interaction is inherently visual and shareable \u2014 perfect for UGC.',
        cta: 'Post yours with #ScratchToReveal and we\'ll feature the best ones!',
      },
      {
        number: 75,
        title: '"Rate My Dately Date" Series',
        format: 'TikTok/Reel (30-45 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'We went on a Dately date and here\'s our honest rating',
        concept: 'Couples film their Dately-planned date, rate each stop, give an overall score. Creates a review-style format that\'s both entertaining and acts as a real product demo. Encourage all users to post their own versions.',
        cta: 'Rate your Dately date and tag us @trydately',
      },
      {
        number: 76,
        title: '"Best Dately Date of the Month" Feature',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'This month\'s best Dately date goes to\u2026',
        concept: 'Monthly series featuring the best user-submitted date story. Show their photos, their scrapbook entry, the plan they got. Builds community, incentivizes participation, creates recurring content.',
        cta: 'Submit your date for next month\'s feature! DM us',
      },
      {
        number: 77,
        title: 'Couples Q&A with Dately Questions',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Asking my partner questions I\'m scared to hear the answers to',
        concept: 'Use couple Q&A format with date-related questions: "What was our worst date? Best date? Most surprising date?" Naturally leads to Dately scrapbook memories. Encourage other couples to duet with their own answers.',
        cta: 'Duet this with your partner\'s answers',
      },
      {
        number: 78,
        title: '"Show Your Scrapbook" Trend',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'POV: you actually documented your relationship',
        concept: 'Users scroll through their Dately scrapbook showing all their completed dates \u2014 the photos, the notes, the memories. Set to nostalgic/romantic audio. The visual timeline of a relationship is inherently emotional content.',
        cta: 'Start your scrapbook today. Link in bio.',
      },
      {
        number: 79,
        title: '"Tag Your Date Planner" Post',
        format: 'Instagram Post (single image)',
        platform: 'Instagram',
        pillar: 'Entertain',
        hook: 'Tag the person who always says \'I\'ll plan it\' and never does',
        concept: 'Simple, shareable image with the text and Dately branding. Tag-a-friend posts still drive massive organic reach. The caption adds: "Or just let Dately plan it for both of you."',
        cta: 'Tag them. They need this.',
      },
      {
        number: 80,
        title: 'UGC Compilation: "Real Dates, Real Couples"',
        format: 'TikTok/Reel (45 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'Real couples. Real Dately dates. Real moments.',
        concept: 'Compilation of user-submitted clips from their Dately dates \u2014 quick cuts of laughter, food, adventures, surprises. Set to emotional/uplifting music. Social proof at scale. The diversity of dates and couples makes it inclusive and aspirational.',
        cta: 'Your date could be next. Submit via DM',
      },
      {
        number: 81,
        title: '"Date Night Bingo" Interactive Story',
        format: 'Instagram Stories (interactive)',
        platform: 'Instagram',
        pillar: 'Entertain',
        hook: 'Date night bingo \u2014 how basic are your dates?',
        concept: 'Bingo card in stories with date activities: "went to the movies," "said \'I don\'t know, you pick,\'" "ended up at the same restaurant," "cancelled last minute." Users screenshot and mark their squares. High engagement, high shares.',
        cta: 'Share your bingo card to stories and tag @trydately',
      },
    ],
  },
  {
    title: 'Section 7: Seasonal & Timely',
    ideas: [
      {
        number: 82,
        title: 'Valentine\'s Day Anti-Clich\u00e9 Guide',
        format: 'Instagram Carousel (8 slides) + TikTok',
        platform: 'Instagram + TikTok',
        pillar: 'Educate',
        hook: 'Skip the overpriced prix fixe. Here\'s what to actually do on Valentine\'s Day.',
        concept: 'Contrarian V-Day content: the best Valentine\'s dates avoid the traps (crowded restaurants, inflated prices, clich\u00e9 gifts). Dately generates creative alternatives \u2014 cooking class for two, dessert crawl, surprise activity. Be the anti-Valentine\'s Day voice that\'s still romantic.',
        cta: 'A scratch card is more romantic than a prix fixe. Fight me',
      },
      {
        number: 83,
        title: 'Summer Date Bucket List',
        format: 'Instagram Carousel (12 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: '10 summer dates you\'ll actually remember',
        concept: 'Visually stunning summer date ideas: rooftop cinema, beach sunset picnic, night swim, food truck crawl, outdoor concert, sunrise hike, boat rental, farmers market brunch, stargazing blanket night, spontaneous road trip stop. Dately finds these near you.',
        cta: 'How many can you check off this summer? Save this list',
      },
      {
        number: 84,
        title: '"Cuffing Season Starter Pack"',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok',
        pillar: 'Entertain',
        hook: 'Cuffing season starter pack 2026',
        concept: 'Fall vibes: cozy date ideas, pumpkin everything, flannel weather, "wanna come over and watch a movie" energy. Show Dately generating perfect fall dates \u2014 apple picking, haunted houses, cozy caf\u00e9 crawls, home date with candles and cooking.',
        cta: 'Cuff responsibly. Use Dately',
      },
      {
        number: 85,
        title: 'Holiday Date Ideas (Non-Gift Edition)',
        format: 'Instagram Carousel (7 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'The best holiday gift isn\'t a thing \u2014 it\'s an experience',
        concept: 'Holiday dates > holiday gifts: ice skating, Christmas market crawl, holiday lights drive, gingerbread decorating competition, New Year\'s Eve countdown date. Dately plans the experience so you give something meaningful.',
        cta: 'Give a date, not a thing. Link in bio',
      },
      {
        number: 86,
        title: '"New Year, New Date Energy"',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'Your New Year\'s resolution should be better dates',
        concept: 'Quick montage of last year\'s boring dates vs. this year\'s upgraded dates with Dately. New year, new approach. Stop defaulting to the same 3 restaurants. Let 2026 be the year you actually explore your city together.',
        cta: 'New year, new dates. Start with Dately.',
      },
      {
        number: 87,
        title: 'Rainy Season Indoor Date Marathon',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok',
        pillar: 'Educate',
        hook: 'When it rains for 2 weeks straight, you need a plan',
        concept: 'Rapid-fire indoor date ideas for extended rainy seasons: museum hop, indoor rock climbing, cooking challenge, home spa night, game tournament, indoor picnic, virtual cooking class together. Dately\'s Home Date pack shines here.',
        cta: 'Rain can\'t stop your date life. Home Date pack in Dately',
      },
      {
        number: 88,
        title: 'Back-to-School Date Refresh',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok',
        pillar: 'Educate',
        hook: 'Summer\'s over but your dates don\'t have to suck',
        concept: 'Transition from carefree summer dates to creative fall dates. Show that the end of summer isn\'t the end of fun \u2014 it\'s a vibe shift. Dately adapts to seasonal events, indoor options, and fall-specific experiences.',
        cta: 'Fall dates > summer dates. I said what I said',
      },
      {
        number: 89,
        title: '"Date Night on [Holiday]" Trend',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Entertain',
        hook: 'What our [holiday] date night looked like',
        concept: 'Evergreen template for any holiday \u2014 show the Dately plan and the actual date experience. Works for Halloween, Thanksgiving, Christmas, New Year\'s, 4th of July, etc. Film once, repeat the format for every holiday.',
        cta: 'What\'s your ideal [holiday] date? Comment below',
      },
    ],
  },
  {
    title: 'Section 8: Educational / Relationship Advice',
    ideas: [
      {
        number: 90,
        title: '"5 Love Languages on a Date"',
        format: 'Instagram Carousel (7 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'How to hit all 5 love languages on one date',
        concept: 'Each love language gets a slide with a specific date action: Words (write them a note before the date), Touch (hold hands walking between stops), Gifts (pick up something small at a shop), Quality Time (phones away), Acts of Service (plan the whole thing \u2014 or let Dately do it).',
        cta: 'What\'s your love language? Tell us below',
      },
      {
        number: 91,
        title: '"Why Novelty Keeps Relationships Alive"',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'Psychologists say THIS is the secret to long-term attraction',
        concept: 'Quick-hit science: novel experiences release dopamine, which your brain associates with your partner (misattribution of arousal). New dates = new excitement = feeling like you\'re falling in love again. Dately is literally designed to create novelty.',
        cta: 'Science says try something new. Dately makes it easy',
      },
      {
        number: 92,
        title: '"Gottman\'s Date Night Research"',
        format: 'Instagram Carousel (6 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'What 40 years of relationship research says about date night',
        concept: 'Reference the Gottman Institute\'s research on quality time. Key findings: weekly dates improve relationship satisfaction, variety matters more than expense, planning together (or mutual surprise) builds partnership. Dately aligns with all of this.',
        cta: 'The research is clear. Prioritize date night.',
      },
      {
        number: 93,
        title: '"Green Flags in Date Planning"',
        format: 'TikTok/Reel (18 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'Green flags: when they actually plan a date',
        concept: 'List of green flags related to date effort: they remember your food preferences, they found a new spot, they planned the timing, they had a backup plan. End with: "Or they just used Dately and got all of this automatically." Effort matters either way.',
        cta: 'What\'s your biggest green flag? Comment',
      },
      {
        number: 94,
        title: '"How to Break Out of the Dinner-and-a-Movie Trap"',
        format: 'Instagram Carousel (8 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'Dinner and a movie isn\'t a bad date \u2014 it\'s just a lazy default',
        concept: 'Reframe: dinner+movie is fine sometimes, but when it\'s ALL you do, it\'s a crutch. Slides show alternative structures: activity \u2192 food, food \u2192 experience, multi-stop exploration, thematic dates. Dately builds these structures automatically.',
        cta: 'When was the last date that wasn\'t dinner + movie? Be honest',
      },
      {
        number: 95,
        title: '"Attachment Styles and Date Preferences"',
        format: 'Instagram Carousel (6 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'What your attachment style says about your ideal date',
        concept: 'Secure: comfortable with anything, enjoys variety. Anxious: prefers structured plans (Dately\'s full itinerary). Avoidant: needs low-pressure, casual activities. Disorganized: benefits from the surprise element removing overthinking. Relatable psychology content.',
        cta: 'What\'s your attachment style? Take the quiz in our stories.',
      },
      {
        number: 96,
        title: '"The 2-2-2 Rule for Couples"',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'A therapist said every couple should follow the 2-2-2 rule',
        concept: 'The 2-2-2 rule: every 2 weeks go on a date, every 2 months have a weekend away, every 2 years take a big trip. Simple framework that\'s gone viral. Show how Dately handles the "every 2 weeks" part effortlessly.',
        cta: 'Following this rule changed our relationship. Try it.',
      },
      {
        number: 97,
        title: '"Communication on Dates: Beyond Small Talk"',
        format: 'Instagram Carousel (7 slides)',
        platform: 'Instagram',
        pillar: 'Educate',
        hook: 'Conversation starters that go deeper than \'how was your day\'',
        concept: 'Provide 5-6 meaningful conversation prompts for dates: "What\'s something you\'ve changed your mind about recently?" "What\'s a goal you\'ve been afraid to tell me about?" "What made you fall for me?" Great paired with a Dately Home Date.',
        cta: 'Save these for your next date. You\'ll thank us',
      },
      {
        number: 98,
        title: '"Why You Should Date Yourself"',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'Hot take: single people should use a date planning app too',
        concept: 'Solo dates are self-care. Using Dately as a single person to explore your city, try new restaurants, attend events. It\'s not sad \u2014 it\'s main character energy. Dately works for singles too.',
        cta: 'Solo date era is here. Try Dately for one.',
      },
      {
        number: 99,
        title: '"The Effort Gap in Relationships"',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Educate',
        hook: 'The #1 complaint in long-term relationships? \'They stopped trying.\'',
        concept: 'Address the effort gap \u2014 how one partner often feels like they\'re carrying the romantic load. Dately levels the playing field: either partner can open the app and plan something special in seconds. Effort doesn\'t have to be exhausting.',
        cta: 'Effort, simplified. Download Dately.',
      },
    ],
  },
  {
    title: 'Section 9: Aspirational / Couple Goals',
    ideas: [
      {
        number: 100,
        title: '"A Year of Dates" Timelapse',
        format: 'TikTok/Reel (30-45 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'We went on a new date every week for a year. Here\'s what happened.',
        concept: 'Timelapse compilation of 52 dates over a year \u2014 quick clips from each one. Different locations, seasons, outfits, vibes. Set to an emotional song. End with: "52 dates. 52 memories. All in our Dately scrapbook." Aspirational and achievable.',
        cta: 'Start your 52-date challenge. Download Dately',
      },
      {
        number: 101,
        title: 'The Couple That Explores Together',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'Be the couple that says \'let\'s go somewhere new\' and actually does it',
        concept: 'Aesthetic montage of a couple exploring \u2014 street food, hidden gardens, live music, waterfront walks, art galleries. Each stop discovered through Dately. The message: adventure is a mindset, not a budget.',
        cta: 'Explore more together. @trydately',
      },
      {
        number: 102,
        title: '"How We Keep It Fresh After [X] Years"',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: '5 years in and we still surprise each other every week',
        concept: 'Long-term couple sharing their secret: intentional novelty. They use Dately to get out of routine, try new things, keep the spark alive. It\'s not magic \u2014 it\'s a system. And the system works.',
        cta: 'Keep the spark. Link in bio',
      },
      {
        number: 103,
        title: '"From First Date to 100th Date"',
        format: 'Instagram Carousel (10 slides)',
        platform: 'Instagram',
        pillar: 'Inspire',
        hook: 'Our love story, one date at a time',
        concept: 'Couple\'s date journey told through 10 milestone dates \u2014 first date, first trip, first cooking disaster, first road trip, first holiday together, etc. Each slide is a scrapbook-style photo + caption. Final slide: "All saved in Dately."',
        cta: 'What\'s your milestone date? Share below',
      },
      {
        number: 104,
        title: 'Sunset Date Montage',
        format: 'TikTok/Reel (20 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'Chasing sunsets with my person',
        concept: 'Purely aesthetic: compilation of sunset moments from different dates \u2014 rooftop, beach, park, car ride, hilltop. Soft, romantic music. Minimal text. Just beautiful moments. Dately logo at the end. Let the visuals do the selling.',
        cta: 'Make more moments like these. @trydately',
      },
      {
        number: 105,
        title: '"The Little Things" Montage',
        format: 'TikTok/Reel (25 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'It\'s never about the fancy restaurant. It\'s about this.',
        concept: 'Close-up montage of small moments: holding hands under the table, sharing a bite of food, laughing at a wrong turn, dancing in the parking lot, stealing a kiss at a stoplight. Real, raw, intimate. Dately enables the moments \u2014 the magic is yours.',
        cta: 'The best dates are made of little things',
      },
      {
        number: 106,
        title: '"Our Dately Scrapbook So Far"',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'We\'ve been using Dately for 6 months and look at our scrapbook',
        concept: 'Screen recording scrolling through a real (or staged) Dately scrapbook filled with date entries. Photos, journal notes, ratings, locations. The visual proof that intentional dating creates a love story worth looking back on.',
        cta: 'Every date is a page in your story. Start writing',
      },
      {
        number: 107,
        title: '"Fall in Love With Your City"',
        format: 'TikTok/Reel (30 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'You\'ve lived here for years but you\'ve barely explored',
        concept: 'Beautiful shots of hidden gems in a city \u2014 small caf\u00e9s, street art, rooftop views, park corners, neighborhood markets. "Your city has a thousand dates waiting. You just haven\'t found them yet." Dately surfaces the magic that\'s already around you.',
        cta: 'Discover your city again. With Dately',
      },
      {
        number: 108,
        title: '"The Date That Changed Everything"',
        format: 'TikTok/Reel (45 sec)',
        platform: 'TikTok + Instagram',
        pillar: 'Inspire',
        hook: 'One date can change your whole relationship',
        concept: 'Storytelling format: a couple who was in a rut, drifting apart, going through the motions. They try Dately on a whim. One surprise date \u2014 something they\'d never have planned themselves \u2014 reconnects them. Not selling an app. Selling the possibility that one evening can shift everything.',
        cta: 'Your next date could be the one. Try Dately',
      },
    ],
  },
]

// --- Chevron Icon ---
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      style={{
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease',
      }}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// --- Main Component ---
export default function ContentIdeasPage() {
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({})

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  const expandAll = () => {
    const allExpanded: Record<number, boolean> = {}
    sections.forEach((_, i) => { allExpanded[i] = true })
    setExpandedSections(allExpanded)
  }

  const collapseAll = () => {
    setExpandedSections({})
  }

  return (
    <div>
      {/* Title & Intro */}
      <h1
        className="text-3xl md:text-4xl lg:text-5xl mb-4"
        style={{
          color: 'var(--text-ivory)',
          fontFamily: 'var(--font-libre), Georgia, serif',
        }}
      >
        108 Content Ideas for Instagram &amp; TikTok
      </h1>
      <p
        className="text-lg mb-2"
        style={{
          color: 'var(--text-linen)',
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
        }}
      >
        Handle: <span style={{ color: 'var(--champagne-gold)' }}>@trydately</span>
      </p>
      <div className="flex flex-wrap gap-2 mb-8">
        {['#Dately', '#ScratchToReveal', '#StopPlanningStartDating', '#DateNight', '#CouplesOfTikTok'].map((tag) => (
          <span
            key={tag}
            className="text-sm px-3 py-1 rounded-full"
            style={{
              background: 'rgba(139, 58, 52, 0.1)',
              color: 'var(--text-linen)',
              border: '1px solid rgba(139, 58, 52, 0.2)',
              fontFamily: 'var(--font-inter)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-16">
        {/* Content Strategy Overview */}
        <section>
          <h2
            className="text-2xl mb-6"
            style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}
          >
            Content Strategy Overview
          </h2>

          {/* Content Pillars */}
          <div className="mb-8">
            <h3
              className="text-lg mb-4"
              style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}
            >
              Content Pillars
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.2)' }}>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Pillar</th>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Share</th>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Purpose</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-linen)' }}>
                  {[
                    { pillar: 'Educate', share: '40%', purpose: 'Date tips, relationship advice, app how-tos, "did you know" facts' },
                    { pillar: 'Entertain', share: '30%', purpose: 'Relatable humor, trending audio, POVs, couple skits' },
                    { pillar: 'Inspire', share: '20%', purpose: 'Couple goals, date transformations, aesthetic mood boards' },
                    { pillar: 'Promote', share: '10%', purpose: 'Direct feature demos, launches, testimonials, CTAs' },
                  ].map((row) => (
                    <tr key={row.pillar} style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                      <td className="py-3 px-4">
                        <span
                          className="px-2 py-0.5 rounded text-xs font-medium"
                          style={{
                            background: pillarColors[row.pillar as Pillar].bg,
                            color: pillarColors[row.pillar as Pillar].text,
                            border: `1px solid ${pillarColors[row.pillar as Pillar].border}`,
                          }}
                        >
                          {row.pillar}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-medium" style={{ color: 'var(--champagne-gold)' }}>{row.share}</td>
                      <td className="py-3 px-4">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Posting Cadence */}
          <div className="mb-8">
            <h3
              className="text-lg mb-4"
              style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-libre)' }}
            >
              Posting Cadence
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.2)' }}>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Platform</th>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Frequency</th>
                    <th className="text-left py-3 px-4" style={{ color: 'var(--champagne-gold)' }}>Best Times</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-linen)' }}>
                  {[
                    ['TikTok', '5-7x/week', '7-9 AM, 12-3 PM, 7-11 PM'],
                    ['Instagram Reels', '4-5x/week', '11 AM-1 PM, 7-9 PM'],
                    ['Instagram Carousels', '2-3x/week', '10 AM-12 PM (weekdays)'],
                    ['Instagram Stories', 'Daily', 'Morning + Evening'],
                  ].map(([platform, freq, times]) => (
                    <tr key={platform} style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                      <td className="py-3 px-4">{platform}</td>
                      <td className="py-3 px-4">{freq}</td>
                      <td className="py-3 px-4">{times}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Brand Voice */}
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
              >
                Brand Voice
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                <li><strong style={{ color: 'var(--text-ivory)' }}>Warm, playful, slightly cheeky</strong> &mdash; like texting your most fun couple-friend</li>
                <li>Never preachy or clinical about relationships</li>
                <li>Inclusive of all couples and singles exploring dating</li>
                <li>Humor over perfection; real over polished</li>
                <li>Sensual but never explicit (especially for Spicy Pack content)</li>
              </ul>
            </div>

            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
              >
                Visual Identity
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}>
                <li><strong style={{ color: 'var(--wine-red)' }}>Wine Red</strong> #8B3A34 &mdash; primary brand accent</li>
                <li><strong style={{ color: 'var(--champagne-gold)' }}>Champagne Gold</strong> #C7B28A &mdash; highlights, premium feel</li>
                <li><strong style={{ color: '#E27A75' }}>Coral</strong> #E27A75 &mdash; buttons, hearts, warmth</li>
                <li><strong style={{ color: 'var(--text-ivory)' }}>Warm Black</strong> #0F0B0A &mdash; dark backgrounds</li>
                <li><strong style={{ color: 'var(--text-ivory)' }}>Soft Ivory</strong> #F3EEE9 &mdash; text, light overlays</li>
                <li>Typography: Libre Baskerville (serif) + Inter (body)</li>
                <li>Mood: intimate, editorial, glass-morphism aesthetic</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 108 Ideas by Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-2xl"
              style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}
            >
              All 108 Content Ideas
            </h2>
            <div className="flex gap-2">
              <button
                onClick={expandAll}
                className="text-xs px-3 py-1 rounded-full transition-opacity hover:opacity-80"
                style={{
                  background: 'rgba(199, 178, 138, 0.1)',
                  color: 'var(--champagne-gold)',
                  border: '1px solid rgba(199, 178, 138, 0.2)',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="text-xs px-3 py-1 rounded-full transition-opacity hover:opacity-80"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  color: 'var(--text-taupe)',
                  border: '1px solid rgba(199, 178, 138, 0.1)',
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {sections.map((section, sectionIndex) => {
              const isOpen = !!expandedSections[sectionIndex]
              return (
                <div
                  key={sectionIndex}
                  className="rounded-xl overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(199, 178, 138, 0.1)',
                  }}
                >
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(sectionIndex)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                    style={{ fontFamily: 'var(--font-libre)' }}
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg" style={{ color: 'var(--text-ivory)' }}>
                        {section.title}
                      </h3>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: 'rgba(199, 178, 138, 0.15)',
                          color: 'var(--champagne-gold)',
                          fontFamily: 'var(--font-inter)',
                        }}
                      >
                        {section.ideas.length} ideas
                      </span>
                    </div>
                    <span style={{ color: 'var(--text-taupe)' }}>
                      <ChevronIcon open={isOpen} />
                    </span>
                  </button>

                  {/* Section Content */}
                  {isOpen && (
                    <div className="px-5 pb-5">
                      <div className="grid gap-4">
                        {section.ideas.map((idea) => {
                          const pillar = pillarColors[idea.pillar]
                          return (
                            <div
                              key={idea.number}
                              className="p-5 rounded-lg"
                              style={{
                                background: 'rgba(0, 0, 0, 0.2)',
                                border: '1px solid rgba(199, 178, 138, 0.08)',
                              }}
                            >
                              {/* Title Row */}
                              <div className="flex items-start justify-between gap-4 mb-3">
                                <h4 className="text-base" style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}>
                                  <span style={{ color: 'var(--champagne-gold)' }}>#{idea.number}</span>{' '}
                                  {idea.title}
                                </h4>
                              </div>

                              {/* Badges */}
                              <div className="flex flex-wrap gap-2 mb-3">
                                <span
                                  className="text-xs px-2 py-0.5 rounded"
                                  style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'var(--text-taupe)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    fontFamily: 'var(--font-inter)',
                                  }}
                                >
                                  {idea.format}
                                </span>
                                <span
                                  className="text-xs px-2 py-0.5 rounded"
                                  style={{
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'var(--text-taupe)',
                                    border: '1px solid rgba(255, 255, 255, 0.08)',
                                    fontFamily: 'var(--font-inter)',
                                  }}
                                >
                                  {idea.platform}
                                </span>
                                <span
                                  className="text-xs px-2 py-0.5 rounded font-medium"
                                  style={{
                                    background: pillar.bg,
                                    color: pillar.text,
                                    border: `1px solid ${pillar.border}`,
                                    fontFamily: 'var(--font-inter)',
                                  }}
                                >
                                  {idea.pillar}
                                </span>
                              </div>

                              {/* Hook */}
                              <p
                                className="text-sm mb-2 italic"
                                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
                              >
                                Hook: &ldquo;{idea.hook}&rdquo;
                              </p>

                              {/* Concept */}
                              <p
                                className="text-sm mb-2 leading-relaxed"
                                style={{ color: 'var(--text-linen)', fontFamily: 'var(--font-inter)' }}
                              >
                                {idea.concept}
                              </p>

                              {/* CTA */}
                              <p
                                className="text-sm"
                                style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}
                              >
                                <strong style={{ color: 'var(--text-ivory)' }}>CTA:</strong> {idea.cta}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        {/* Quick Reference Tables */}
        <section>
          <h2
            className="text-2xl mb-6"
            style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}
          >
            Quick Reference Tables
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Content Mix by Pillar */}
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-4"
                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
              >
                Content Mix by Pillar
              </h3>
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.2)' }}>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>Pillar</th>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>Ideas</th>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>%</th>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>Target</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-linen)' }}>
                  {[
                    ['Educate', '43', '40%', '40%'],
                    ['Entertain', '33', '31%', '30%'],
                    ['Inspire', '19', '18%', '20%'],
                    ['Promote', '13', '12%', '10%'],
                  ].map(([pillar, ideas, pct, target]) => (
                    <tr key={pillar} style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                      <td className="py-2 px-2">{pillar}</td>
                      <td className="py-2 px-2">{ideas}</td>
                      <td className="py-2 px-2">{pct}</td>
                      <td className="py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>{target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Content Mix by Platform */}
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-4"
                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
              >
                Content Mix by Platform
              </h3>
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.2)' }}>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>Platform</th>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>Ideas</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-linen)' }}>
                  {[
                    ['TikTok + Instagram', '52'],
                    ['TikTok only', '27'],
                    ['Instagram only', '24'],
                    ['Instagram Stories', '5'],
                  ].map(([platform, ideas]) => (
                    <tr key={platform} style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                      <td className="py-2 px-2">{platform}</td>
                      <td className="py-2 px-2">{ideas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Content Mix by Format */}
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-4"
                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
              >
                Content Mix by Format
              </h3>
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.2)' }}>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>Format</th>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>Ideas</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-linen)' }}>
                  {[
                    ['TikTok/Reels (7-60 sec)', '80'],
                    ['Instagram Carousels', '20'],
                    ['Instagram Stories', '5'],
                    ['Instagram Post (single image)', '1'],
                    ['Stitch/Duet', '2'],
                  ].map(([format, ideas]) => (
                    <tr key={format} style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                      <td className="py-2 px-2">{format}</td>
                      <td className="py-2 px-2">{ideas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Production Difficulty */}
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-4"
                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
              >
                Production Difficulty
              </h3>
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.2)' }}>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>Difficulty</th>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>Ideas</th>
                    <th className="text-left py-2 px-2" style={{ color: 'var(--champagne-gold)' }}>Examples</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-linen)' }}>
                  {[
                    ['Easy (solo, phone only)', '~45', '#2, #6, #39, #41, #59'],
                    ['Medium (basic filming)', '~40', '#1, #3, #32, #53, #61'],
                    ['Hard (planned production)', '~23', '#22, #56, #100, #108'],
                  ].map(([diff, ideas, examples]) => (
                    <tr key={diff} style={{ borderBottom: '1px solid rgba(199, 178, 138, 0.1)' }}>
                      <td className="py-2 px-2">{diff}</td>
                      <td className="py-2 px-2">{ideas}</td>
                      <td className="py-2 px-2 font-mono text-xs">{examples}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Top 10 Priority Ideas */}
          <div
            className="p-6 rounded-xl"
            style={{ background: 'rgba(139, 58, 52, 0.1)', border: '1px solid rgba(139, 58, 52, 0.2)' }}
          >
            <h3
              className="text-lg mb-4"
              style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}
            >
              Top 10 Priority Ideas (Start Here)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(139, 58, 52, 0.3)' }}>
                    <th className="text-left py-2 px-3" style={{ color: 'var(--champagne-gold)' }}>#</th>
                    <th className="text-left py-2 px-3" style={{ color: 'var(--champagne-gold)' }}>Idea</th>
                    <th className="text-left py-2 px-3" style={{ color: 'var(--champagne-gold)' }}>Title</th>
                    <th className="text-left py-2 px-3" style={{ color: 'var(--champagne-gold)' }}>Why First</th>
                  </tr>
                </thead>
                <tbody style={{ color: 'var(--text-linen)' }}>
                  {[
                    ['1', '#39', 'Scratch-to-Reveal ASMR', 'Viral potential, easy to produce, showcases core UX'],
                    ['2', '#40', '"How It Works" in 30 Seconds', 'Essential explainer, pin to profile'],
                    ['3', '#1', '"We Need to Talk\u2026 About Date Night"', 'Universal hook, high relatability'],
                    ['4', '#74', '#ScratchToReveal Challenge', 'Launches UGC engine, branded hashtag'],
                    ['5', '#66', '"Why I Built Dately"', 'Founder story builds trust, humanizes brand'],
                    ['6', '#2', 'The Decision Paralysis Loop', '#1 pain point for couples, extremely shareable'],
                    ['7', '#60', '"I Tried the Viral Date App"', 'Review format template for influencers'],
                    ['8', '#91', '"Why Novelty Keeps Relationships Alive"', 'Educational authority, shareable science'],
                    ['9', '#19', '"5 Dates Under $20 in Any City"', 'Evergreen save-worthy carousel'],
                    ['10', '#41', 'Pack System Breakdown', 'Product education, drives pack exploration'],
                  ].map(([priority, idea, title, why]) => (
                    <tr key={priority} style={{ borderBottom: '1px solid rgba(139, 58, 52, 0.15)' }}>
                      <td className="py-2 px-3 font-medium" style={{ color: 'var(--champagne-gold)' }}>{priority}</td>
                      <td className="py-2 px-3 font-mono">{idea}</td>
                      <td className="py-2 px-3" style={{ color: 'var(--text-ivory)' }}>{title}</td>
                      <td className="py-2 px-3">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Hashtag Strategy */}
        <section>
          <h2
            className="text-2xl mb-6"
            style={{ color: 'var(--text-ivory)', fontFamily: 'var(--font-libre)' }}
          >
            Hashtag Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Always Include */}
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(139, 58, 52, 0.1)', border: '1px solid rgba(139, 58, 52, 0.2)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: 'var(--wine-red)', fontFamily: 'var(--font-inter)' }}
              >
                Always Include (Brand)
              </h3>
              <div className="flex flex-wrap gap-2">
                {['#Dately', '#ScratchToReveal', '#StopPlanningStartDating'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: 'rgba(139, 58, 52, 0.2)',
                      color: 'var(--text-ivory)',
                      border: '1px solid rgba(139, 58, 52, 0.3)',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Couple Content */}
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
              >
                Couple Content
              </h3>
              <div className="flex flex-wrap gap-2">
                {['#CouplesOfTikTok', '#RelationshipGoals', '#CoupleThings', '#DateNight', '#DateIdeas'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: 'rgba(199, 178, 138, 0.1)',
                      color: 'var(--text-linen)',
                      border: '1px solid rgba(199, 178, 138, 0.2)',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Dating/Singles */}
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
              >
                Dating / Singles
              </h3>
              <div className="flex flex-wrap gap-2">
                {['#DatingIn2026', '#FirstDate', '#DatingTips', '#SingleLife', '#DatePlanning'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: 'rgba(199, 178, 138, 0.1)',
                      color: 'var(--text-linen)',
                      border: '1px solid rgba(199, 178, 138, 0.2)',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Lifestyle */}
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
              >
                Lifestyle
              </h3>
              <div className="flex flex-wrap gap-2">
                {['#ThingsToDoIn[City]', '#HiddenGems', '#FoodieDate', '#WeekendPlans', '#ExploreMore'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: 'rgba(199, 178, 138, 0.1)',
                      color: 'var(--text-linen)',
                      border: '1px solid rgba(199, 178, 138, 0.2)',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Trending */}
            <div
              className="p-5 rounded-lg md:col-span-2"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(199, 178, 138, 0.1)' }}
            >
              <h3
                className="text-sm uppercase tracking-wider mb-3"
                style={{ color: 'var(--champagne-gold)', fontFamily: 'var(--font-inter)' }}
              >
                Trending (Rotate)
              </h3>
              <div className="flex flex-wrap gap-2">
                {['#GreenFlag', '#ItsGiving', '#POV', '#GRWM', '#PutAFingerDown'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: 'rgba(232, 180, 166, 0.15)',
                      color: '#E8B4A6',
                      border: '1px solid rgba(232, 180, 166, 0.3)',
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="pt-12 mt-12" style={{ borderTop: '1px solid rgba(199, 178, 138, 0.1)' }}>
          <p
            className="text-sm text-center"
            style={{ color: 'var(--text-taupe)', fontFamily: 'var(--font-inter)' }}
          >
            Generated for @trydately &mdash; Last updated February 2026
          </p>
        </div>
      </div>
    </div>
  )
}
