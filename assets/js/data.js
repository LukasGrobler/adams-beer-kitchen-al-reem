/* Adam's Beer Kitchen Al Reem Island: everything the site shows lives here.
   Update a price or a time here and every page follows.
   Days: 0 Sunday, 1 Monday, ... 6 Saturday. Times are UAE time, 24h.
   "sample: true" marks a night we invented as an example until the team confirms the real schedule;
   those show a small "Example, to confirm" tag on the site. */

window.ABK_DATA = {
  theme: "reem",
  key: "abk_reem",

  venue: {
    name: "Adam's Beer Kitchen",
    branch: "Al Reem Island",
    short: "Al Reem",
    full: "Adam's Beer Kitchen Al Reem Island",
    greet: "Hi Adam's Beer Kitchen Al Reem!",
    phone: "+971568637522",
    phoneDisplay: "+971 56 863 7522",
    whatsapp: "971568637522",
    address: ["Ground floor, The Arc, Tower C", "Shams Gate District, Al Reem Island", "Abu Dhabi"],
    addressLine: "Ground floor, The Arc, Tower C, Shams Gate District, Al Reem Island, Abu Dhabi",
    locality: "Al Reem Island, Abu Dhabi",
    whereShort: "The Arc, Tower C, Al Reem Island",
    headerSub: "Al Reem Island, The Arc Tower C",
    plusCode: "FCW5+4HQ Abu Dhabi",
    google: { rating: "4.4", count: 236 },
    maps: "https://www.google.com/maps/place/?q=place_id:ChIJvSTT8lpnXj4Rw3d0spyzJ0Y",
    reviewUrl: "https://search.google.com/local/writereview?placeid=ChIJvSTT8lpnXj4Rw3d0spyzJ0Y",
    instagram: "https://www.instagram.com/adamsbeerkitchen/",
    handle: "@adamsbeerkitchen",
    /* from the Google profile: Mon – Thu 12PM – 2AM, Fri – Sun 12PM – 3AM */
    hours: { 0: ["12:00", "03:00"], 1: ["12:00", "02:00"], 2: ["12:00", "02:00"], 3: ["12:00", "02:00"], 4: ["12:00", "02:00"], 5: ["12:00", "03:00"], 6: ["12:00", "03:00"] },
    /* guests report a happy-hour discount until 7PM; to confirm */
    happyHour: { 0: ["12:00", "19:00"], 1: ["12:00", "19:00"], 2: ["12:00", "19:00"], 3: ["12:00", "19:00"], 4: ["12:00", "19:00"], 5: ["12:00", "19:00"], 6: ["12:00", "19:00"] },
    hhNote: "Every day till 7PM",
    hhLine: "Happy hour every day, 12PM – 7PM.",
    footerNote: "Parking out front or at Shams Boutik",
    findLede: "Ground floor of The Arc, Tower C, in Shams Gate District on Al Reem Island, next to Shams Boutik and the Gate Towers.",
    parkingTitle: "Parking",
    parkingText: "A few spaces right out front, or park at Shams Boutik next door and walk over."
  },

  nav: [
    ["whats-on.html", "What's on"],
    ["beer-garden.html", "Beer garden"],
    ["match-centre.html", "Match & race centre", "opt"],
    ["on-tap.html", "On tap", "opt"],
    ["menu.html", "Menu"]
  ],
  more: [
    ["match-centre.html", "Match & race centre", "opt"],
    ["on-tap.html", "On tap", "opt"],
    ["after-work.html", "After work"],
    ["offers.html", "Offers"],
    ["gallery.html", "Gallery"],
    ["reviews.html", "Reviews"],
    ["about.html", "Our story"],
    ["find-us.html", "Find us"]
  ],
  explore: [["whats-on.html", "What's on"], ["beer-garden.html", "Beer garden"], ["match-centre.html", "Match & race centre"], ["on-tap.html", "On tap"], ["after-work.html", "After work"], ["menu.html", "Menu"], ["offers.html", "Offers"], ["gallery.html", "Gallery"], ["reviews.html", "Reviews"], ["about.html", "Our story"], ["find-us.html", "Find us"]],
  footerBlurb: "The beer garden on Al Reem Island. Good food, cold pints and string lights, on the ground floor of The Arc, Tower C.",
  siblings: 'Also pouring: <a href="https://lukasgrobler.github.io/adams-beer-kitchen-jvc/">Adam\'s Beer Kitchen JVC, Dubai</a> and <a href="https://lukasgrobler.github.io/adams-beer-kitchen-al-forsan/">Adam\'s Beer Kitchen Al Forsan, Khalifa City</a>.',
  replayLabel: "Switch the lights on again (replay the intro)",
  gateNo: "Come back on your 21st. We'll save you a garden table.",
  introSlogan: ["Cold beer.", "Warm lights.", "Island nights."],
  marquee: ["Happy hour every day till 7PM", "Ladies night Tuesday", "Quiz night Wednesday", "DJ in the garden Thursday", "Premier League Saturday", "Sunday roast AED 69", "Every F1 race on the screens"],

  artists: {
    "eamon": { name: "Eamon", role: "Quiz host", initials: "E" },
    "dj": { name: "Resident DJ", role: "DJ in the garden", initials: "DJ" },
    "band": { name: "House band", role: "Live band", initials: "LB" }
  },

  /* Weekly nights. "slots" drive the flip board, the calendar files and the booking form; "flap" is the short name on the board. */
  events: [
    {
      slug: "darts-night", days: [1], dayLabel: "Every Monday", sample: true,
      name: "Darts Night", with: "Two boards, one leaderboard",
      cats: ["quiz"], img: "darts-2", img2: "darts",
      short: "Both boards free all night, and the top score's first pint is on us.",
      intro: "Monday's for settling scores. Both electronic boards are free to play from 7PM, the best score of the night goes up on the board, and the winner's first pint is on us.",
      facts: [["Darts", "Free from 7PM"], ["Boards", "Two electronic boards"], ["Prize", "Top score's first pint"]],
      slots: [{ label: "Darts night", flap: "DARTS NIGHT", start: "19:00", end: "23:00", price: "Free darts from 7PM" }],
      week: { title: "Darts night", lines: [["7PM – 11PM", "Free darts on both boards"], ["Prize", "Top score's first pint free"]] }
    },
    {
      slug: "ladies-night", days: [2], dayLabel: "Every Tuesday", sample: true,
      name: "Ladies Night", with: "Three drinks and Adam's signature platter",
      cats: ["drinks"], img: "cheers", img2: "amstel-lights",
      short: "3 selected drinks and Adam's signature platter for AED 75.",
      intro: "Tuesday belongs to the ladies. AED 75 gets you three selected drinks and Adam's signature platter to share, inside or out in the beer garden.",
      facts: [["When", "8PM – 11PM"], ["Package", "3 drinks + platter"], ["Price", "AED 75"]],
      deal: { title: "3 selected drinks + Adam's signature platter", note: "Ladies, 8PM – 11PM", price: 75 },
      slots: [{ label: "Ladies night", flap: "LADIES NIGHT", start: "20:00", end: "23:00", price: "AED 75, 3 drinks + platter" }],
      week: { title: "Ladies night", lines: [["AED 75", "3 selected drinks + platter"], ["8PM – 11PM", "Inside or in the garden"]] }
    },
    {
      slug: "quiz-night", days: [3], dayLabel: "Every Wednesday",
      name: "Quiz & Games Night", with: "Hosted by Eamon",
      cats: ["quiz", "drinks"], img: "trophies", img2: "inside-2",
      short: "Teams, trivia and prizes, with 12 wings and 3 drinks from AED 109.",
      intro: "Wednesday's quiz is the island's midweek fixture. Eamon asks the questions from 7PM, teams fight it out for prizes, and the quiz package keeps you going: 12 wings and three selected drinks.",
      facts: [["Quiz", "From 7PM"], ["Host", "Eamon"], ["Package", "From AED 109"]],
      packages: [{ name: "Quiz package", time: "12 wings + 3 selected drinks", house: 109, premium: 169, labels: ["Regular", "Premium"] }],
      lineup: [{ who: "eamon", time: "7PM – 9:30PM" }],
      slots: [{ label: "Quiz & games night with Eamon", flap: "QUIZ NIGHT", start: "19:00", end: "21:30", price: "From AED 109 with wings" }],
      hallOfFame: true,
      week: { title: "Quiz night", lines: [["7PM", "Hosted by Eamon"], ["Package", "12 wings + 3 drinks, AED 109 / 169"]] }
    },
    {
      slug: "garden-thursdays", days: [4], dayLabel: "Every Thursday", sample: true,
      name: "Garden Thursdays", with: "A DJ under the string lights",
      cats: ["music", "garden"], img: "garden-1", img2: "garden-sign",
      short: "The beer garden's weekly warm-up, with a DJ from 8PM.",
      intro: "Thursday is the start of the weekend on Reem. The DJ sets up in the beer garden at 8PM, the string lights come on and the after-work crowd stays for one more.",
      facts: [["DJ", "8PM – 12AM"], ["Where", "The beer garden"], ["Entry", "Free"]],
      lineup: [{ who: "dj", time: "8PM – 12AM" }],
      slots: [{ label: "Garden Thursdays, DJ in the garden", flap: "GARDEN DJ", start: "20:00", end: "00:00", price: "Free entry" }],
      week: { title: "Garden Thursdays", lines: [["8PM – 12AM", "DJ in the beer garden"], ["Entry", "Free"]] }
    },
    {
      slug: "friday-live", days: [5], dayLabel: "Every Friday", sample: true,
      name: "Live Fridays", with: "A live band from 9PM",
      cats: ["music"], img: "neon", img2: "inside-1",
      short: "Happy hour till 7PM, then a live band from 9PM.",
      intro: "Fridays start early with happy hour till 7PM, then a live band takes over at 9PM and plays the songs everyone knows the words to. We're open till 3AM.",
      facts: [["Live band", "9PM – 12AM"], ["Happy hour", "Till 7PM"], ["Open", "Till 3AM"]],
      lineup: [{ who: "band", time: "9PM – 12AM" }],
      slots: [{ label: "Live band", flap: "LIVE BAND", start: "21:00", end: "00:00", price: "Free entry" }],
      week: { title: "Live Fridays", lines: [["9PM – 12AM", "Live band"], ["Till 7PM", "Happy hour"], ["Open", "Till 3AM"]] }
    },
    {
      slug: "match-day", days: [6], dayLabel: "Every Saturday", sample: true,
      name: "Match Day Saturdays", with: "Premier League on every screen",
      cats: ["sport", "garden"], img: "garden-screens", img2: "screens",
      short: "Every Premier League kick-off, on screens inside and out in the garden.",
      intro: "Saturdays follow the fixture list. Every Premier League game is on, with screens inside and out in the beer garden, so you can pick your match and your seat.",
      facts: [["Kick-offs", "From 3:30PM"], ["Screens", "Inside + garden"], ["Sound", "Up for the big one"]],
      slots: [{ label: "Premier League on every screen", flap: "MATCH DAY", start: "15:30", end: "23:30" }],
      week: { title: "Match day", lines: [["From 3:30PM", "Premier League on every screen"], ["Where", "Inside + in the garden"]] }
    },
    {
      slug: "sunday-roast", days: [0], dayLabel: "Every Sunday",
      name: "Sunday Roast", with: "The proper kind, AED 69",
      cats: ["food"], img: null, img2: "world-wall",
      short: "A proper Sunday roast for AED 69, with the football on.",
      intro: "Sunday is for a roast with all the trimmings, a pint and the late kick-off. AED 69 a plate, served from midday.",
      facts: [["Roast", "12PM – 8PM"], ["Price", "AED 69"], ["Football", "On the screens"]],
      deals: [["Sunday roast with all the trimmings", 69]],
      slots: [{ label: "Sunday roast", flap: "SUNDAY ROAST", start: "12:00", end: "20:00", price: "AED 69" }],
      week: { title: "Sunday roast", lines: [["12PM – 8PM", "Sunday roast, AED 69"], ["Football", "On the screens"]] }
    }
  ],

  /* Tonight takeover: on each day the homepage headline becomes that day's main event. */
  takeover: {
    1: { slug: "darts-night", lines: ["Darts", "night"], sub: "Both boards free from 7PM. The top score of the night gets their first pint on us." },
    2: { slug: "ladies-night", lines: ["Ladies", "night"], sub: "Three selected drinks and Adam's signature platter for AED 75, from 8PM." },
    3: { slug: "quiz-night", lines: ["Quiz", "night"], sub: "Eamon asks the questions from 7PM. 12 wings and 3 drinks from AED 109." },
    4: { slug: "garden-thursdays", lines: ["Garden", "Thursdays"], sub: "A DJ in the beer garden from 8PM, under the string lights." },
    5: { slug: "friday-live", lines: ["Live", "Fridays"], sub: "Happy hour till 7PM, then a live band from 9PM. Open till 3AM." },
    6: { slug: "match-day", lines: ["Match", "day"], sub: "Every Premier League kick-off, on screens inside and out in the garden." },
    0: { slug: "sunday-roast", lines: ["Sunday", "roast"], sub: "A proper roast for AED 69 from midday, with the football on." }
  },

  offers: [
    {
      slug: "happy-hour", name: "Happy Hour", with: "Every single day till 7PM", cats: ["drinks"], img: "amstel-lights",
      dayLabel: "Every day, 12PM – 7PM",
      short: "Happy hour prices from opening till 7PM, inside and in the garden.",
      intro: "Happy hour starts the moment the doors open and runs till 7PM, every day of the week. Guests mention 20 to 25% off; the bar has the full list.",
      facts: [["Every day", "12PM – 7PM"], ["Where", "Inside + the garden"], ["After work?", "Leave by 6:45PM"]]
    }
  ],

  specials: [
    {
      slug: "abu-dhabi-grand-prix", name: "Abu Dhabi Grand Prix Weekend", short_name: "Grand Prix", with: "Every session on the big screens", sample: true,
      from: "2026-12-04", to: "2026-12-06", when: "4 – 6 December", img: "garden-screens",
      short: "Practice, qualifying and the race on every screen, with garden tables for lights out.",
      intro: "The Formula 1 finale is just across the water on Yas Island, and every session is on our screens: practice on Friday, qualifying on Saturday and the race on Sunday at 5PM. Book a garden table for lights out.",
      vouchers: [["Race-day garden table with a sharing platter", "TBC"]],
      fine: "Race-day packages and prices to be confirmed."
    }
  ],

  /* Real Google reviews from the venue's Google profile. Names shortened. */
  reviews: [
    { name: "Rashed A.", meta: "Google review", featured: true, text: "Adams Beer Kitchen is one of my favourite places in Abu Dhabi. The food is always delicious, the drinks are great, and the atmosphere is lively and welcoming. The staff are friendly, attentive, and always make you feel at home. Whether you’re watching live football with friends or just enjoying a relaxing evening, it’s a fantastic place to visit." },
    { name: "Naba", meta: "Google review", text: "Had a really great time here! The place has such a cozy and friendly atmosphere, perfect for relaxing with friends over a beer and a nice chat. We went as a group of four and had so much fun playing darts. … Located on Reem Island, this is definitely one of the best spots if you want to chill, enjoy drinks, and spend quality time with friends." },
    { name: "Ihar B.", meta: "Google review", text: "The atmosphere is super vibey - perfect spot to relax and unwind. The portions are huge (definitely come hungry!), and everything we tried was delicious. One of the best parts is the outdoor seating - such a nice option to sit outside, enjoy some drinks and food, and just soak in the atmosphere." },
    { name: "Diane V.", meta: "Google review", text: "Had the best time! food was amazing but the service was superb! kate had very well taken care of us, superstar!! will come back again for sure!" },
    { name: "Marcia H.", meta: "Google review", text: "The Nachos was the winner! Pizza was very good too. A bonus was that they had the best music playing!" }
  ],

  /* SAMPLE: names come from guest reviews; roles and lines to be confirmed with the team. */
  crew: [
    { name: "Kate", role: "Floor team", initials: "K", line: "“Superstar”, according to one very happy Google reviewer. Ask for Kate and you're in good hands." },
    { name: "Satrina", role: "Floor team", initials: "S", line: "Guests say she explains the menu better than the menu does. Not sure what to order? Ask Satrina." },
    { name: "Eamon", role: "Quiz host", initials: "E", line: "Runs the Wednesday quiz. Fair, firm and not open to bribes. Probably." },
    { name: "The kitchen", role: "Back of house", initials: "K", line: "Responsible for the nachos one reviewer called “the winner”. Portions are big, so come hungry." }
  ],

  hof: { title: "Quiz Hall of Fame", sub: "Wednesday's winners, with Eamon's blessing", note: "Sample names, real winners added every Wednesday", photo: "trophies", photoAlt: "Trophies and kegs behind the bar at Adam's Beer Kitchen Al Reem Island", caption: "The silverware" },
  /* SAMPLE quiz winners, replaced every Wednesday once live. */
  hallOfFame: [
    ["14 Oct 2026", "Arc de Trivia"],
    ["7 Oct 2026", "Gate Crashers"],
    ["30 Sep 2026", "The Reem Team"],
    ["23 Sep 2026", "Agatha Quiztie"],
    ["16 Sep 2026", "Trivia Newton-John"],
    ["9 Sep 2026", "Tequila Mockingbird"]
  ],

  /* Photos from the venue's Google profile; swap for the venue's own shots before launch. */
  gallery: [
    { img: "garden-screens", cap: "The beer garden on match day" },
    { img: "amstel-lights", cap: "A cold one under the string lights" },
    { img: "darts-2", cap: "Game on" },
    { img: "nachos", cap: "The nachos, as reviewed" },
    { img: "neon", cap: "Beer, in twenty languages" },
    { img: "garden-sign", cap: "Through here for the garden" },
    { img: "bar-taps", cap: "The bar" },
    { img: "beer-sign", cap: "The house philosophy" },
    { img: "garden-1", cap: "Covered, string-lit and cooled" },
    { img: "bottles", cap: "Beers from around the world" },
    { img: "world-wall", cap: "The map wall" },
    { img: "guinness-tap", cap: "Guinness on tap" },
    { img: "inside-2", cap: "Screens inside too" },
    { img: "trophies", cap: "The silverware" },
    { img: "sandwich", cap: "The club, done properly" },
    { img: "front", cap: "Find the sign, find the garden" },
    { img: "spread", cap: "Something for the table" },
    { img: "beer-signs", cap: "The wall of signs" },
    { img: "inside-1", cap: "Inside, under the greenery" },
    { img: "bartender", cap: "Behind the bar" },
    { img: "darts", cap: "Two boards, no waiting" },
    { img: "cheers", cap: "Cheers to that", noWall: true }
  ],
  wallCta: "Tag {handle} on Instagram and your photo could end up on the line.",

  /* Menus open here once the venue sends the PDFs. */
  menus: { food: null, drinks: null },
  menuCopy: {
    food: ["Food menu", "The full food menu lands here as soon as the kitchen sends the latest version. Want it right now? Ask on WhatsApp and we'll send it over."],
    drinks: ["Drinks menu", "Draught beers, ciders, bottles from around the world and cocktails. The full list is on its way to this page; ask on WhatsApp and we'll send it straight away."]
  },
  /* Dishes guests mention, so Adam can answer food questions. [name, details, AED or null, search words] */
  menuItems: [
    ["Loaded nachos", "One reviewer called them “the winner”", null, "nachos nacho loaded"],
    ["Pizza Margherita", "", null, "pizza margherita vegetarian"],
    ["Pasta", "", null, "pasta penne"],
    ["Fish and chips", "", null, "fish chips"],
    ["Sunday roast", "Sundays from midday", 69, "roast sunday"],
    ["Prawns", "", null, "prawns prawn shrimp shrimps"],
    ["Loaded fries", "", null, "fries loaded"],
    ["Salmon", "", null, "salmon"],
    ["Kale salad", "", null, "salad kale healthy"],
    ["Club sandwich", "With fries", null, "club sandwich"],
    ["Chicken wings", "12 come with the Wednesday quiz package", null, "wings wing chicken"],
    ["Burgers", "", null, "burger burgers cheeseburger"]
  ],
  /* What guests order (menu page). [name, note, price or ""] */
  dishes: [
    ["Loaded nachos", "“The Nachos was the winner!”, said one Google reviewer", ""],
    ["Pizza Margherita", "“Pizza was very good too.”", ""],
    ["Sunday roast", "Every Sunday from midday", 69],
    ["Club sandwich", "Stacked, with fries", ""],
    ["Chicken wings", "Twelve of them come with the Wednesday quiz package", ""],
    ["Fish and chips", "A pub classic, done properly", ""],
    ["Kale salad", "For the healthy half of the table", ""],
    ["Prawns, salmon and pasta", "From the mains", ""]
  ],

  seats: ["No preference", "Inside", "Beer garden", "Near the big screens", "By the darts", "Big group area"],
  filters: [["all", "Everything"], ["music", "Music & DJs"], ["quiz", "Quiz & darts"], ["sport", "Sport"], ["food", "Food deals"], ["drinks", "Drinks deals"], ["garden", "In the garden"]],
  goodToKnow: [
    ["pin", "Ground floor, The Arc, Tower C", 'Shams Gate District, next to Shams Boutik. First time? <a class="link" href="find-us.html">Read the 30-second guide</a>'],
    ["car", "Parking", "A few spaces out front, or park at Shams Boutik next door."],
    ["leaf", "The beer garden", "Covered, string-lit and cooled for summer. Ask for a garden table."],
    ["wa", "Book on WhatsApp", "Tables go quickly on event nights. Booking takes about 20 seconds."]
  ],
  packageNote: "The quiz package comes in two levels, Regular and Premium. The team will happily talk you through what's in each.",
  defaultPhoto: "inside-2",
  liveLink: "whats-on.html",

  /* SAMPLE tap list from the brands on the bar wall; to confirm with the bar. */
  taps: [
    { name: "Guinness", style: "Stout", from: "Ireland", color: "#1c120c", head: "#efe2c6" },
    { name: "Magners", style: "Cider", from: "Ireland", color: "#e3a03a" },
    { name: "Carlsberg", style: "Pilsner", from: "Denmark", color: "#f2c84c" },
    { name: "Heineken", style: "Lager", from: "Netherlands", color: "#efc046" },
    { name: "Amstel", style: "Lager", from: "Netherlands", color: "#eab83c" },
    { name: "Stella Artois", style: "Pilsner", from: "Belgium", color: "#f1c547" },
    { name: "Birra Moretti", style: "Lager", from: "Italy", color: "#e7ad37" },
    { name: "Blue Moon", style: "Wheat beer", from: "USA", color: "#e8a23e", head: "#fbf3e3" },
    { name: "Tooheys New", style: "Lager", from: "Australia", color: "#edbd47" },
    { name: "Henry Westons", style: "Cider", from: "England", color: "#d98f2e" }
  ],

  /* Formula 1, rest of the 2026 season. Lights-out times are UAE time and approximate; check nearer the date. */
  races: [
    { name: "United States Grand Prix", place: "Austin", date: "2026-10-25", time: "23:00" },
    { name: "Mexico City Grand Prix", place: "Mexico City", date: "2026-11-02", time: "00:00", note: "That's the early hours of Monday" },
    { name: "São Paulo Grand Prix", place: "São Paulo", date: "2026-11-08", time: "21:00" },
    { name: "Las Vegas Grand Prix", place: "Las Vegas", date: "2026-11-22", time: "08:00", note: "A Sunday-morning race over here" },
    { name: "Qatar Grand Prix", place: "Lusail", date: "2026-11-29", time: "20:00" },
    { name: "Abu Dhabi Grand Prix", place: "Yas Marina", date: "2026-12-06", time: "17:00", home: true }
  ],

  afterwork: { travel: 15, from: "Al Maryah Island", fromLine: "From Al Maryah Island it's about 5 minutes by taxi." },

  /* Ask Adam: the branch-specific answers. Everything else is worked out from the schedule above. */
  adam: {
    main: [["tonight", "What's on tonight?"], ["hh", "Is it happy hour?"], ["terrace", "Is the beer garden open?"], ["find", "How do I find you?"], ["book", "Book a table"], ["more", "More questions"]],
    more: [["live", "Who's playing?"], ["deals", "Any deals today?"], ["menu", "Show me the menu"], ["sport", "Football and F1?"], ["race", "Next F1 race?"], ["games", "Darts?"], ["parking", "Where do I park?"], ["afterwork", "After-work drinks?"], ["groups", "Big group or party?"], ["hours", "Opening hours"], ["human", "Talk to the team"]],
    greeting: "Ask me anything about Adam's Beer Kitchen Al Reem: what's on, happy hour, the beer garden, parking, or just type naturally, like “garden table for 4 tomorrow at 8”.",
    placeholder: "Ask me anything, e.g. garden table for 4 at 8",
    hhLine: "Happy hour runs every day from 12PM till 7PM, inside and in the beer garden.",
    hoursExtra: "Parking out front, or at Shams Boutik next door.",
    liveIntro: "Here's who's on this week, plus Eamon's quiz:",
    find: "We're on the <b>ground floor of The Arc, Tower C</b>, in Shams Gate District on Al Reem Island, next to Shams Boutik and the Gate Towers. Look for the sign and the plants out front; the beer garden is behind the fence.",
    parking: "There are a few spaces <b>right out front</b>. If they're taken, park at <b>Shams Boutik</b> next door and walk over; it's about two minutes.",
    dealOfDay: { 1: "darts-night", 2: "ladies-night", 3: "quiz-night", 4: "garden-thursdays", 5: "friday-live", 6: "match-day", 0: "sunday-roast" },
    menuIntro: "A few guest favourites from the kitchen:",
    sport: "Football's on the big screens <b>inside and out in the beer garden</b>: Premier League weekends and the big European nights. Every F1 race is on too.",
    sportBtn: ["Match & race centre", "match-centre.html"],
    groups: "Birthdays, leaving dos, office drinks: tell me the date and how many of you, and I'll pass it to the team. The beer garden works well for groups.",
    groupsPage: false,
    kids: "Families are welcome for food during the day. For bringing little ones to a late event night, check with the team first.",
    veg: "Yes. Guests rate the <b>kale salad</b> and the <b>pizza Margherita</b>, and the team can point you to more. For vegan or allergy questions, the team will check with the kitchen.",
    access: "Google lists a <b>wheelchair-accessible toilet and car park</b>, and we're on the ground floor. If you need anything set up, just let the team know.",
    terrace: "Yes, the <b>beer garden</b> is open: covered, string-lit and cooled, with screens for the football. Want me to book you a garden table?",
    terraceBook: "Book a garden table",
    terraceSeat: "Beer garden",
    games: "There are <b>two electronic dartboards</b>, free to play on Monday's darts night. Loser buys the next round, obviously.",
    drinks: "Guinness, ciders and lagers on tap, and a wall of bottles from around the world. Happy hour runs every day till 7PM. <a href=\"on-tap.html\">See what's on tap</a>.",
    afterwork: "From Al Maryah Island it's about 5 minutes by taxi, and you can park at Shams Boutik next door.",
    jokes: [
      "Why did the darts player bring a pencil? To draw a crowd. Both boards are free on Monday nights.",
      "What's a quiz team's favourite drink? A round. Eamon starts asking questions on Wednesday at 7PM.",
      "I told the beer garden a joke. It didn't laugh, but the string lights did come on. Happy hour runs till 7PM.",
      "Our DJ says he only takes requests he likes. Test him on Thursday from 8PM."
    ],
    dishIntro: "From our kitchen:",
    priceNote: "Prices are on the menu; the team can send it over on WhatsApp.",
    prices: "A quick guide to prices:",
    priceRows: [["AED 69", "Sunday roast", ""], ["AED 75", "Ladies night", "3 drinks + Adam's signature platter"], ["AED 109", "Quiz package", "12 wings + 3 drinks, Premium AED 169"], ["Till 7PM", "Happy hour", "Every day"]],
    vocab: "garden eamon arc reem gate maryah darts nachos tap taps cider magners amstel heineken carlsberg moretti stella boutik shams",
    eventWords: [["\\b(quiz|trivia|eamon)\\b", "quiz-night"], ["\\bladies\\b", "ladies-night"], ["\\b(darts night|darts monday)\\b", "darts-night"], ["\\b(garden thursday|thursday dj)", "garden-thursdays"], ["\\b(live band|live friday)", "friday-live"], ["\\b(match day|premier league saturday)", "match-day"], ["\\broast\\b", "sunday-roast"], ["\\b(abu dhabi grand prix|grand prix weekend|yas marina)\\b", "abu-dhabi-grand-prix"]],
    seatWords: [["\\b(garden|outside|outdoor|terrace)\\b", "Beer garden"], ["\\bscreens?\\b", "Near the big screens"], ["\\bdarts?\\b", "By the darts"]]
  }
};
