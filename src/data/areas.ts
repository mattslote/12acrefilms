export interface Area {
  slug: string;
  name: string;
  state: 'WA' | 'ID' | 'MT';
  county: string;
  pop: string;
  drive: string;
  region: string;
  intro: string;
  sectors: string[];
  places: string[];
  events: string[];
  // [service slug, how it applies in this city]
  uses: [string, string][];
  nearby: string[];
  localFaq: { q: string; a: string };
}

export const areas: Area[] = [
  {
    slug: 'spokane', name: 'Spokane', state: 'WA', county: 'Spokane County', pop: 'about 230,000', drive: 'home base', region: 'Spokane area',
    intro: "Spokane is home. 12 Acre Films has produced video here since 2016 for hospitals, universities, nonprofits, city and state agencies, and local businesses, and we know the venues, the crews, and the light.",
    sectors: ['healthcare', 'higher education', 'nonprofits and the arts', 'manufacturing', 'government and public agencies'],
    places: ['Spokane Convention Center and the First Interstate Center for the Arts', 'Riverfront Park and the Spokane Falls', 'Gonzaga University, Whitworth University, and Spokane Falls Community College', 'The Fox Theater and the INB Performing Arts Center', 'Providence Sacred Heart and MultiCare Deaconess hospital campuses'],
    events: ['Bloomsday', 'Hoopfest', 'Spokane Lilac Festival', 'TEDx Spokane'],
    uses: [
      ['live-events', 'Conference, gala, and hybrid event streaming at downtown venues and hotels'],
      ['nonprofit-fundraising-video', 'Fundraising and campaign films for Spokane nonprofits and arts organizations'],
      ['corporate-video-production', 'Brand, recruiting, and training video for local employers'],
      ['funeral-live-streaming', 'Funeral and memorial live streaming with Spokane funeral homes and churches'],
      ['archival-media-digitization', 'VHS, slide, photo, and film digitizing for Spokane families and organizations'],
    ],
    nearby: ['spokane-valley', 'coeur-d-alene', 'post-falls', 'pullman'],
    localFaq: { q: 'Are you based in Spokane?', a: 'Yes. 12 Acre Films is based in the Spokane area, so we can usually respond quickly and meet in person.' },
  },
  {
    slug: 'spokane-valley', name: 'Spokane Valley', state: 'WA', county: 'Spokane County', pop: 'about 105,000', drive: 'about 20 minutes', region: 'Spokane area',
    intro: "Spokane Valley is the east side of the Spokane metro and one of the busiest business corridors in the Inland Northwest. We shoot here regularly and treat it as part of our home market.",
    sectors: ['manufacturing and aerospace suppliers', 'retail and auto', 'healthcare', 'construction and trades', 'local government'],
    places: ['CenterPlace Regional Event Center', 'Mirabeau Point Park', 'Spokane Valley Mall and the Sprague corridor', 'Valley hospital and clinic campuses', 'Spokane County Interstate Fairgrounds'],
    events: ['Spokane County Interstate Fair', 'Valley community festivals and parades'],
    uses: [
      ['corporate-video-production', 'Manufacturer and supplier videos: process, safety, and recruiting'],
      ['tv-commercial-production', 'Local TV and streaming commercials for Valley retailers and dealers'],
      ['live-events', 'Streaming for meetings, trainings, and community events at CenterPlace and local halls'],
      ['for/small-business', 'Straightforward video packages for Valley small businesses'],
    ],
    nearby: ['spokane', 'post-falls', 'coeur-d-alene'],
    localFaq: { q: 'Do you work in Spokane Valley?', a: 'Yes. Spokane Valley is part of our regular service area, and we shoot and live stream there often.' },
  },
  {
    slug: 'coeur-d-alene', name: "Coeur d'Alene", state: 'ID', county: 'Kootenai County', pop: 'about 55,000', drive: 'about 40 minutes', region: 'North Idaho',
    intro: "Coeur d'Alene is a destination as much as a city: resorts, lake events, and a fast-growing business community. We cross the state line often for hospitality, real estate, and event video.",
    sectors: ['hospitality and tourism', 'real estate and development', 'healthcare', 'education', 'outdoor and recreation brands'],
    places: ['Lake Coeur d\'Alene and the downtown waterfront', 'The Coeur d\'Alene Resort and other lakeside venues', 'North Idaho College', 'Kootenai Health', 'The Kroc Center'],
    events: ['Summer lake and downtown festivals', 'Holiday light shows on the lake', 'Regional running and cycling events'],
    uses: [
      ['aerial-drone-video', 'Licensed and insured drone video of lakefront property, resorts, and developments'],
      ['live-events', 'Streaming for conferences, weddings of note, and tournaments at lakeside venues'],
      ['corporate-video-production', 'Brand video for hospitality, real estate, and professional services'],
      ['funeral-live-streaming', 'Funeral and celebration-of-life streaming for North Idaho families'],
    ],
    nearby: ['post-falls', 'spokane', 'spokane-valley'],
    localFaq: { q: "Do you film in Coeur d'Alene?", a: "Yes, often. It is about 40 minutes from our base, so we regularly shoot and live stream in Coeur d'Alene, Post Falls, and Hayden." },
  },
  {
    slug: 'post-falls', name: 'Post Falls', state: 'ID', county: 'Kootenai County', pop: 'about 40,000', drive: 'about 30 minutes', region: 'North Idaho',
    intro: "Post Falls sits right on the Idaho line and has grown quickly, with new businesses, warehouses, and neighborhoods. We are a short drive away and handle video for both established and new companies there.",
    sectors: ['logistics and distribution', 'light manufacturing', 'construction and homebuilding', 'retail', 'healthcare'],
    places: ["Q'emiln Park on the Spokane River", 'Falls Park and the Post Falls Dam area', 'The I-90 business and industrial corridors', 'Post Falls schools and community facilities'],
    events: ['Post Falls community events and parades', 'High school sports and graduations'],
    uses: [
      ['corporate-video-production', 'Employer, recruiting, and product videos for Post Falls manufacturers and distributors'],
      ['aerial-drone-video', 'Drone video for construction progress, subdivisions, and commercial sites'],
      ['live-events', 'Graduation and school event streaming'],
      ['for/small-business', 'Simple, affordable video for new Post Falls businesses'],
    ],
    nearby: ['coeur-d-alene', 'spokane-valley', 'spokane'],
    localFaq: { q: 'Can you stream a graduation or ceremony in Post Falls?', a: 'Yes. We can set up cameras and audio and stream the ceremony to family who cannot attend. Contact us with the date and location.' },
  },
  {
    slug: 'pullman', name: 'Pullman', state: 'WA', county: 'Whitman County', pop: 'about 33,000', drive: 'about 1 hour 30 minutes', region: 'The Palouse',
    intro: "Pullman is the home of Washington State University and a research-driven town in the middle of the Palouse. Video here is often about the university, research, agriculture, or events that draw people from far away.",
    sectors: ['higher education and research', 'agriculture', 'engineering and technology', 'healthcare'],
    places: ['Washington State University', 'Martin Stadium and WSU athletic venues', 'Pullman Regional Hospital', 'Schweitzer Engineering Laboratories', 'Downtown Pullman and the Bill Chipman Palouse Trail'],
    events: ['National Lentil Festival', 'WSU commencement and campus events', 'Cougar athletics home games'],
    uses: [
      ['live-events', 'Streaming for conferences, symposiums, lectures, and commencement-related events'],
      ['interview-testimonial-video', 'Researcher and faculty profile videos and grant outreach'],
      ['aerial-drone-video', 'Palouse aerial video: farms, rolling hills, and campus'],
      ['podcast-video-recording', 'Podcast and video recording for faculty, departments, and startups'],
    ],
    nearby: ['moscow', 'lewiston', 'spokane'],
    localFaq: { q: 'Do you work with university departments?', a: 'Yes. We have produced video for universities and colleges, including Eastern Washington University and the Community Colleges of Spokane, and can work with your purchasing process.' },
  },
  {
    slug: 'moscow', name: 'Moscow', state: 'ID', county: 'Latah County', pop: 'about 25,000', drive: 'about 1 hour 30 minutes', region: 'The Palouse',
    intro: "Moscow, Idaho is the home of the University of Idaho and a close neighbor of Pullman. It is a small city with a lot of culture, music, and student life, and a strong market for event and educational video.",
    sectors: ['higher education', 'arts and music', 'agriculture', 'small business'],
    places: ['University of Idaho', 'The Kibbie Dome and UI athletic venues', 'Downtown Moscow and the Farmers Market', 'Latah County Fairgrounds'],
    events: ['Lionel Hampton Jazz Festival', 'University of Idaho commencement and campus events', 'Moscow Farmers Market'],
    uses: [
      ['live-events', 'Streaming for concerts, lectures, and campus events'],
      ['interview-testimonial-video', 'Faculty, alumni, and community stories'],
      ['social-media-video', 'Short-form video for Moscow shops, restaurants, and venues'],
      ['archival-media-digitization', 'Digitizing family and university archive media'],
    ],
    nearby: ['pullman', 'lewiston', 'spokane'],
    localFaq: { q: 'Do you cover both Moscow and Pullman in one trip?', a: 'Yes. They are about eight miles apart, so we often handle projects in both places together.' },
  },
  {
    slug: 'lewiston', name: 'Lewiston', state: 'ID', county: 'Nez Perce County', pop: 'about 34,000', drive: 'about 2 hours', region: 'The Palouse',
    intro: "Lewiston sits where the Snake and Clearwater rivers meet, across the state line from Clarkston, Washington. It is a port, manufacturing, and healthcare hub for the region.",
    sectors: ['river transportation and port activity', 'manufacturing and paper', 'healthcare', 'education', 'outdoor recreation and tourism'],
    places: ['Lewis-Clark State College', 'The Port of Lewiston', 'The Snake and Clearwater river confluence', 'Hells Gate and riverfront parks', 'Clarkston and the Lewis-Clark Valley'],
    events: ['Lewiston Roundup', 'River and fishing events', 'College events'],
    uses: [
      ['aerial-drone-video', 'Licensed and insured aerial video of river, canyon, and industrial sites'],
      ['corporate-video-production', 'Employer and safety videos for manufacturers and regional businesses'],
      ['nonprofit-fundraising-video', 'Stories for Lewis-Clark Valley nonprofits and health organizations'],
      ['live-events', 'Streaming for meetings, commencements, and community events'],
    ],
    nearby: ['pullman', 'moscow', 'spokane'],
    localFaq: { q: 'Do you work on both sides of the river, in Lewiston and Clarkston?', a: 'Yes. We work in the entire Lewis-Clark Valley, in Idaho and Washington.' },
  },
  {
    slug: 'moses-lake', name: 'Moses Lake', state: 'WA', county: 'Grant County', pop: 'about 25,000', drive: 'about 1 hour 45 minutes', region: 'Columbia Basin',
    intro: "Moses Lake is the center of the Columbia Basin, with farms, food processing, aerospace testing, and technology companies. It is a working town where video is often about operations, safety, and recruiting.",
    sectors: ['agriculture and food processing', 'aerospace testing', 'data centers and energy', 'manufacturing', 'outdoor recreation'],
    places: ['Grant County International Airport', 'Big Bend Community College', 'Moses Lake and Potholes State Park', 'Grant County Fairgrounds', 'Downtown Moses Lake'],
    events: ['Moses Lake Spring Festival', 'Grant County Fair'],
    uses: [
      ['corporate-video-production', 'Operations, safety, and recruiting video for processors, farms, and manufacturers'],
      ['aerial-drone-video', 'Aerial video of farms, facilities, and lake property'],
      ['tv-commercial-production', 'Commercials for Basin retailers and dealers'],
      ['live-events', 'Streaming for community and industry meetings'],
    ],
    nearby: ['spokane', 'wenatchee', 'tri-cities'],
    localFaq: { q: 'Can you film at a farm or processing facility?', a: 'Yes. We follow your safety and biosecurity rules, and can do drone work where it is allowed.' },
  },
  {
    slug: 'wenatchee', name: 'Wenatchee', state: 'WA', county: 'Chelan County', pop: 'about 35,000', drive: 'about 3 hours', region: 'North Central Washington',
    intro: "Wenatchee is the hub of North Central Washington, known for apples, outdoor recreation, and a growing food and wine scene. Video here is about orchards, tourism, and a strong sense of place.",
    sectors: ['apple and orchard agriculture', 'tourism and outdoor recreation', 'healthcare', 'wine and food', 'education'],
    places: ['Wenatchee Valley College', 'Confluence Health', 'The Numerica Performing Arts Center', 'Town Toyota Center', 'Pybus Public Market and the Riverfront Loop Trail'],
    events: ['Washington State Apple Blossom Festival', 'Wenatchee Wine and Food events', 'Outdoor racing and cycling events'],
    uses: [
      ['aerial-drone-video', 'Aerial video of orchards, river corridors, and outdoor attractions'],
      ['corporate-video-production', 'Packing house, grower, and brand video'],
      ['social-media-video', 'Content for tourism, lodging, and restaurants'],
      ['live-events', 'Streaming for conferences and festivals'],
    ],
    nearby: ['moses-lake', 'yakima', 'spokane'],
    localFaq: { q: 'Do you film in Wenatchee?', a: 'Yes. We produce video and live streams in Wenatchee and across North Central Washington. Tell us what you have in mind and we will plan the shoot with you.' },
  },
  {
    slug: 'yakima', name: 'Yakima', state: 'WA', county: 'Yakima County', pop: 'about 97,000', drive: 'about 3 hours 15 minutes', region: 'Yakima Valley',
    intro: "Yakima is the largest city of the Yakima Valley, one of the most productive farming regions in the country, with hops, apples, wine, and a large Spanish-speaking community. Video here often needs to work for both English- and Spanish-speaking audiences.",
    sectors: ['hops and orchard agriculture', 'wine and tourism', 'healthcare', 'tribal government and enterprise', 'education'],
    places: ['Yakima Valley College', 'The Yakima Valley SunDome and State Fair Park', 'Yakima Valley Museum', 'The Yakima Greenway', 'Downtown Yakima and the Yakima Convention Center'],
    events: ['The Central Washington State Fair', 'Yakima Valley wine and hop harvest season events'],
    uses: [
      ['corporate-video-production', 'Growers, packers, and agricultural suppliers: operations, safety, and recruiting'],
      ['nonprofit-fundraising-video', 'Stories for Valley nonprofits, health organizations, and foundations'],
      ['aerial-drone-video', 'Aerial video of fields, vineyards, and facilities'],
      ['tv-commercial-production', 'Commercials for Valley retailers and dealers'],
    ],
    nearby: ['wenatchee', 'tri-cities', 'richland'],
    localFaq: { q: 'Can you produce Spanish-language video for Yakima?', a: 'We can work with a bilingual team and captions to produce Spanish-language or bilingual video. Ask us about your project.' },
  },
  {
    slug: 'tri-cities', name: 'Tri-Cities', state: 'WA', county: 'Benton and Franklin Counties', pop: 'about 225,000 across Kennewick, Pasco, and Richland', drive: 'about 2 hours 30 minutes', region: 'Tri-Cities',
    intro: "The Tri-Cities (Kennewick, Pasco, and Richland) is one of the largest metro areas in Eastern Washington, where the Columbia, Snake, and Yakima rivers meet. Most businesses here work across all three cities, so we treat the area as one market and schedule shoots across it in a single trip.",
    sectors: ['science, engineering, and national laboratory work', 'agriculture and food processing', 'wine', 'healthcare', 'logistics and construction'],
    places: ['Three Rivers Convention Center in Kennewick', 'Pacific Northwest National Laboratory and WSU Tri-Cities in Richland', 'Columbia Basin College in Pasco', 'Tri-Cities Airport', 'The Columbia River shoreline and Red Mountain wineries'],
    events: ['Water Follies and Columbia Cup hydroplane racing', 'Franklin County Fair', 'Tri-Cities wine and food events'],
    uses: [
      ['live-events', 'Streaming for conferences, trainings, and public meetings across the Tri-Cities'],
      ['corporate-video-production', 'Employer, recruiting, and explainer video for technical and industrial companies'],
      ['tv-commercial-production', 'Commercials for Tri-Cities retailers, dealers, and service businesses'],
      ['aerial-drone-video', 'Licensed and insured aerial video along the rivers and across farms and job sites'],
      ['funeral-live-streaming', 'Funeral and memorial streaming for families with relatives far away'],
    ],
    nearby: ['kennewick', 'richland', 'pasco', 'walla-walla'],
    localFaq: { q: 'Do you cover Kennewick, Pasco, and Richland together?', a: 'Yes. We work across all three cities and can schedule several shoots across them together.' },
  },
  {
    slug: 'kennewick', name: 'Kennewick', state: 'WA', county: 'Benton County', pop: 'about 83,000', drive: 'about 2 hours 30 minutes', region: 'Tri-Cities',
    intro: "Kennewick is the largest of the Tri-Cities and a hub for retail, healthcare, and the Columbia River's recreation economy. It sits beside Pasco and Richland, so we cover all three together.",
    sectors: ['retail and auto', 'healthcare', 'agriculture and wine', 'construction', 'tourism and events'],
    places: ['Three Rivers Convention Center', 'Columbia Park and the Columbia River shoreline', 'The Tri-City Americans hockey arena', 'The Reach and the Hanford history region', 'Red Mountain and Columbia Valley wineries'],
    events: ['Water Follies and Columbia Cup hydroplane racing', 'Tri-Cities wine and food events'],
    uses: [
      ['live-events', 'Streaming for conferences and meetings at Three Rivers Convention Center and local hotels'],
      ['tv-commercial-production', 'Commercials for Tri-Cities retailers, dealers, and service businesses'],
      ['corporate-video-production', 'Employer and recruiting videos for local companies'],
      ['social-media-video', 'Content for wineries, restaurants, and local brands'],
    ],
    nearby: ['tri-cities', 'richland', 'pasco', 'walla-walla'],
    localFaq: { q: 'Do you cover the whole Tri-Cities?', a: 'Yes. We work in Kennewick, Pasco, and Richland and can schedule shoots across all three on a single trip.' },
  },
  {
    slug: 'richland', name: 'Richland', state: 'WA', county: 'Benton County', pop: 'about 61,000', drive: 'about 2 hours 30 minutes', region: 'Tri-Cities',
    intro: "Richland is shaped by science and engineering, with the Pacific Northwest National Laboratory, Hanford cleanup, and a highly educated workforce. Video here must be precise and often needs to explain complicated work clearly.",
    sectors: ['national laboratory and cleanup contracting', 'engineering and technology', 'higher education', 'healthcare', 'wine'],
    places: ['Pacific Northwest National Laboratory', 'WSU Tri-Cities', 'Columbia Basin College', 'Howard Amon Park and the Richland riverfront', 'Hanford-area contractor offices'],
    events: ['Richland riverfront and community events', 'Science and technology outreach events'],
    uses: [
      ['corporate-video-production', 'Explainer, training, and recruiting video for technical employers'],
      ['interview-testimonial-video', 'Scientist and engineer profiles for outreach and grants'],
      ['teleprompter-operator', 'Teleprompter operation for executive and technical presentations'],
      ['live-events', 'Streaming for symposiums, training, and public meetings'],
    ],
    nearby: ['tri-cities', 'kennewick', 'pasco', 'walla-walla'],
    localFaq: { q: 'Have you produced video for government and federal clients?', a: 'Yes. Our clients have included the U.S. FDA, Westat, and the Washington State Department of Health, so we are used to the review and compliance steps.' },
  },
  {
    slug: 'pasco', name: 'Pasco', state: 'WA', county: 'Franklin County', pop: 'about 79,000', drive: 'about 2 hours 30 minutes', region: 'Tri-Cities',
    intro: "Pasco is the Tri-Cities' agricultural and food-processing center, with one of the largest Spanish-speaking communities in Eastern Washington. Bilingual video and clear, direct messaging matter here.",
    sectors: ['food processing and agriculture', 'logistics and rail', 'construction', 'retail', 'education'],
    places: ['Columbia Basin College', 'Tri-Cities Airport', 'Sacajawea State Park', 'Pasco Farmers Market', 'Franklin County Fairgrounds'],
    events: ['Franklin County Fair', 'Community festivals and quinceañeras'],
    uses: [
      ['corporate-video-production', 'Processing, logistics, and safety video, including bilingual versions'],
      ['live-events', 'Streaming for community meetings, ceremonies, and celebrations'],
      ['social-media-video', 'Bilingual social video for local businesses'],
      ['aerial-drone-video', 'Aerial video of farms, facilities, and the Columbia River'],
    ],
    nearby: ['tri-cities', 'kennewick', 'richland', 'walla-walla'],
    localFaq: { q: 'Can you make bilingual videos for Pasco?', a: 'Yes. We can produce English and Spanish versions, with captions, using translators or bilingual talent you choose.' },
  },
  {
    slug: 'walla-walla', name: 'Walla Walla', state: 'WA', county: 'Walla Walla County', pop: 'about 34,000', drive: 'about 3 hours', region: 'Southeast Washington',
    intro: "Walla Walla is wine country: more than a hundred wineries, Whitman College, and a historic downtown. Video here is about hospitality, craft, and the story behind each label.",
    sectors: ['wine and hospitality', 'agriculture (including sweet onions)', 'higher education', 'healthcare', 'tourism'],
    places: ['Whitman College', 'Walla Walla University in nearby College Place', 'Downtown Walla Walla and the wine tasting rooms', 'Fort Walla Walla Museum', 'Walla Walla Valley vineyards'],
    events: ['Walla Walla Balloon Stampede', 'Spring Release and wine harvest weekends', 'Fair and rodeo season'],
    uses: [
      ['social-media-video', 'Content for tasting rooms, restaurants, and lodging'],
      ['tv-commercial-production', 'Brand commercials for wineries and regional products'],
      ['aerial-drone-video', 'Licensed and insured drone video of vineyards and estates'],
      ['nonprofit-fundraising-video', 'Stories for Walla Walla nonprofits and the college community'],
    ],
    nearby: ['tri-cities', 'kennewick', 'richland', 'pasco', 'lewiston'],
    localFaq: { q: 'Can you film at a winery during harvest?', a: 'Yes, and harvest makes great footage. Plan dates early, since schedules shift with the weather and the crush.' },
  },
  {
    slug: 'kalispell', name: 'Kalispell', state: 'MT', county: 'Flathead County', pop: 'about 25,000', drive: 'about 4 hours 30 minutes', region: 'Northwest Montana',
    intro: "Kalispell is the center of the Flathead Valley, close to Flathead Lake and Glacier National Park. Tourism, healthcare, and outdoor brands drive much of the local economy.",
    sectors: ['tourism and outdoor recreation', 'healthcare', 'real estate and resort development', 'education', 'manufacturing and outfitters'],
    places: ['Flathead Valley Community College', 'Logan Health', 'Flathead Lake', 'Glacier National Park', 'Downtown Kalispell'],
    events: ['Northwest Montana Fair and Rodeo', 'Summer and winter outdoor festivals'],
    uses: [
      ['aerial-drone-video', 'Licensed and insured aerial video of lakes, mountains, resorts, and lodges'],
      ['social-media-video', 'Seasonal content for lodging, guides, and outfitters'],
      ['corporate-video-production', 'Brand video for Flathead Valley businesses'],
      ['live-events', 'Streaming for conferences, weddings, and memorials where travel is hard'],
    ],
    nearby: ['missoula', 'coeur-d-alene'],
    localFaq: { q: 'Do you film in Kalispell and the Flathead?', a: 'Yes. We produce video and live streams in the Flathead Valley, and we can combine projects with Missoula.' },
  },
  {
    slug: 'missoula', name: 'Missoula', state: 'MT', county: 'Missoula County', pop: 'about 74,000', drive: 'about 3 hours 15 minutes', region: 'Western Montana',
    intro: "Missoula is a university town and a creative center, home to the University of Montana and a noted documentary film community. It is the eastern edge of our regular service area.",
    sectors: ['higher education', 'healthcare', 'film, arts, and music', 'outdoor industry', 'nonprofits and conservation'],
    places: ['University of Montana', 'Washington-Grizzly Stadium and the Adams Center', 'KettleHouse Amphitheater', 'Caras Park and the Clark Fork riverfront', 'Providence St. Patrick Hospital'],
    events: ['Big Sky Documentary Film Festival', 'Griz home games', 'First Friday downtown'],
    uses: [
      ['interview-testimonial-video', 'Documentary-style story video for nonprofits and conservation groups'],
      ['live-events', 'Streaming for conferences and campus events'],
      ['nonprofit-fundraising-video', 'Fundraising films for Western Montana nonprofits'],
      ['aerial-drone-video', 'Aerial video of river, valley, and mountain settings'],
    ],
    nearby: ['kalispell', 'coeur-d-alene', 'spokane'],
    localFaq: { q: 'Do you make documentaries as well as commercial video?', a: 'Yes. Documentary storytelling is the foundation of our work. See our documentary page for the films we have made.' },
  },
];

export const areaBySlug = Object.fromEntries(areas.map((a) => [a.slug, a]));
export const areaRegions = Array.from(new Set(areas.map((a) => a.region)));
