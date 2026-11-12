export interface Section { h2: string; paras?: string[]; bullets?: string[] }
export interface Service {
  slug: string;
  name: string;
  short: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  description: string;
  lead: string;
  cta: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
  related: string[];
  gentle?: boolean;
}

export const services: Service[] = [
  {
    slug: 'live-events',
    name: 'Live Stream & Live Event Production',
    short: 'Multi-camera live streaming for conferences, galas, webinars and hybrid events.',
    eyebrow: 'Live streaming · Live events · Event videography',
    h1: 'Live stream & live event video production in Spokane',
    metaTitle: 'Live Stream & Event Videography in Spokane',
    description: 'Multi-camera live streaming for conferences, galas and speaker events in Spokane, WA. Stream to YouTube, Facebook or LinkedIn, plus a recording.',
    lead: "Your event, on screen for everyone who couldn't be in the room. 12 Acre Films provides professional live streaming, multi-camera event videography, and recording for businesses, nonprofits, schools, and organizations across Spokane and the Inland Northwest.",
    cta: 'Get a live event quote',
    sections: [
      {
        h2: 'Live streaming that looks and sounds professional',
        paras: [
          "A live stream is your one shot. There is no retake, so the camera work, audio, and connection all have to hold up while the event is happening. I handle the technical side so you can focus on your speakers, your guests, and your message.",
          "Whether you need a single-camera webinar, a multi-camera conference stream, or a hybrid event that serves both the room and a remote audience, the setup is planned around your venue, your program, and where your viewers will be watching.",
        ],
      },
      {
        h2: 'Events we cover',
        bullets: [
          'Conferences, summits, and speaker series, including TEDx-style talks',
          'Nonprofit galas, fundraisers, and awareness events',
          'Corporate meetings, all-hands, product launches, and employee summits',
          'Panel discussions, town halls, and community forums',
          'School, university, and graduation events',
          'Concerts, performances, and church services',
          'Hybrid events with in-person and online audiences',
          'Webinars and studio-style broadcasts',
        ],
      },
      {
        h2: "What's included",
        bullets: [
          'Multi-camera production with professional camera operators and live switching between angles',
          "Clean audio from wireless lavaliers, handheld mics, and feeds from the venue's sound system",
          'Streaming to YouTube Live, Facebook Live, LinkedIn Live, your own website, or several destinations at once',
          'On-screen graphics such as titles, speaker names, sponsor logos, and slides',
          'A full recording of the event, with optional edited highlights and social media clips',
          'A pre-event walkthrough of the venue, connection plan, and run-of-show',
        ],
      },
      {
        h2: 'Our dedicated live streaming site',
        paras: [
          'Planning a conference, gala, church service, graduation, or hybrid event? Visit [12 Acre Live](https://12acrelive.com) for event-specific guides to live streaming, webinar production, and event recording.',
        ],
      },
      {
        h2: 'How a live event comes together',
        bullets: [
          'Conversation: we talk through your goals, audience, and where viewers will watch.',
          'Planning: venue walkthrough, internet plan, run-of-show, and a list of speakers and presenters.',
          'Setup: cameras, audio, and graphics are in place and tested before doors open.',
          'Live: the stream runs while the event happens, with a backup plan for connectivity.',
          'Delivery: the recording is delivered afterward, with optional highlight edits and social clips.',
        ],
      },
      {
        h2: 'Make the most of the recording',
        paras: [
          'The live moment is only the first use of an event. A recording can become a highlight reel for your website, short speaker clips for social media, a recap for sponsors, and footage for future promotion. If you already work with us on [commercial video](/corporate-video-production) or [social media content](/social-media-video), we can plan the live event so the footage serves all of it. Speakers who record well can also be featured in [interview and testimonial videos](/interview-testimonial-video).',
        ],
      },
    ],
    faqs: [
      { q: 'What does live stream video production include?', a: 'Professional camera operation, switching between cameras, audio capture, optional graphics and lower-thirds, and a connectivity plan, delivered to the platform your audience already uses. We talk through your goals first and build the setup around them.' },
      { q: 'Can you stream to YouTube, Facebook, LinkedIn or our own website?', a: 'Yes. We can stream to one or several destinations at once, or embed the stream on your own website, depending on where your audience is.' },
      { q: 'Do you also record the event?', a: 'Yes. We record the event as part of the live production, and can edit highlights, speaker clips, or a full-length version afterward for social media and your website.' },
      { q: 'What kinds of events do you cover?', a: 'Conferences, speaker series and TEDx-style talks, nonprofit galas and fundraisers, corporate meetings and employee summits, panel discussions, school and university events, concerts and performances, and community events.' },
      { q: 'Do you handle hybrid events with in-person and online audiences?', a: 'Yes. A hybrid event is planned so the people in the room and the people watching online both get a good experience.' },
      { q: 'Where do you work?', a: "Based in Spokane, WA, we regularly travel to Spokane Valley, Liberty Lake, Coeur d'Alene, Cheney, Pullman and Moscow, the Tri-Cities, Yakima, Missoula, and communities throughout the Inland Northwest." },
      { q: 'How do we get a quote?', a: 'Tell us the date, location, expected audience, and where you want to stream, and we will put together a quote. The contact form takes about two minutes.' },
    ],
    related: ['funeral-live-streaming', 'corporate-video-production', 'podcast-video-recording', 'teleprompter-operator', 'gear-rental'],
  },
  {
    slug: 'funeral-live-streaming',
    name: 'Funeral Live Streaming & Recording',
    short: 'Private, respectful live streams and recordings of funerals and memorial services.',
    eyebrow: 'Funeral live streaming · Memorial recording',
    h1: 'Funeral live streaming & recording in Spokane',
    metaTitle: 'Funeral Live Streaming in Spokane, WA',
    description: 'Respectful funeral and memorial live streaming in Spokane, WA. Private links for family who cannot travel, discreet setup and a recording to keep.',
    lead: "When loved ones can't travel, they can still be there. We quietly live stream and record funerals, memorial services, and celebrations of life, so everyone who wants to be present can be.",
    cta: 'Send a message',
    gentle: true,
    sections: [
      {
        h2: 'Be there, even from far away',
        paras: [
          'Families are spread across the country and the world. Health, travel costs, and short notice keep many people from attending a funeral in person. A live stream lets them take part in the service as it happens, and a recording lets them return to it whenever they need.',
          'We handle the technology so the family does not have to think about it. You choose who receives the link, and we take care of the rest.',
        ],
      },
      {
        h2: 'What we provide',
        bullets: [
          'A private live stream, with a link shared only with the people you choose, viewable on a phone, tablet, or computer',
          'Clear audio so remote guests can hear the eulogy, readings, and music',
          'Discreet equipment, placed early and out of the way of the family and funeral home staff',
          'A recording of the full service, available afterward for family and friends',
          'An optional slideshow or photo display, shared on the stream when you provide it',
          'Coordination with your funeral home, church, or venue',
        ],
      },
      {
        h2: 'Services we cover',
        bullets: [
          'Funeral services and visitations',
          'Memorial services and celebrations of life',
          'Church, chapel, and funeral home services',
          'Graveside and committal services',
          'Receptions and gatherings, if you would like those recorded too',
        ],
      },
      {
        h2: 'How it works',
        bullets: [
          'You call or send a message with the date, place, and time of the service.',
          'We confirm details with you and, if you like, with the funeral home or venue.',
          'We arrive early, set up quietly, and test the audio and connection.',
          'You send the private link to the people who will be watching from afar.',
          'After the service, we deliver the recording to you.',
        ],
      },
      {
        h2: 'For funeral homes and churches',
        paras: [
          'If your funeral home, chapel, or church regularly receives requests to live stream services, we are glad to be your local partner. We can coordinate directly with your staff so families have one less thing to manage. Reach out through the [contact page](/contact) and we will talk about how best to work together. The same equipment and experience also support [live events and ceremonies](/live-events) of all kinds. Families can also find us at our dedicated site, [Northwest Memorials](https://northwest-memorials.com), which is devoted entirely to funeral and memorial live streaming.',
        ],
      },
      {
        h2: 'Photos and videos for a tribute',
        paras: [
          'Old family photographs and home videos make the most moving tributes. We can digitize [photo prints](/photo-scanning), [film slides](/film-slide-scanning), [VHS home videos](/vhs-to-digital), and [DVDs and CDs](/dvd-cd-transfer) for a memorial slideshow or video. See all [archival media digitization](/archival-media-digitization).',
        ],
      },
    ],
    faqs: [
      { q: 'What is funeral live streaming?', a: 'Funeral live streaming lets family and friends who cannot travel watch a funeral, memorial service, or celebration of life in real time from anywhere, through a link they open on a phone, tablet, or computer.' },
      { q: 'Can the service be private?', a: 'Yes. The link can be shared only with the people the family chooses, so the service is not publicly listed or searchable.' },
      { q: 'Will you also record the service?', a: 'Yes. A recording lets people who could not watch live view the service later, and it gives the family a keepsake.' },
      { q: 'Will the camera be distracting?', a: 'We set up early, keep equipment discreet, and stay out of the way of the family, the officiant, and the funeral home staff.' },
      { q: 'Do you work with funeral homes, churches and graveside services?', a: 'Yes. We can work with your funeral home or venue directly, and we can cover services in funeral homes, churches, and chapels, as well as graveside and celebration-of-life gatherings.' },
      { q: 'How quickly can you arrange it?', a: 'We understand that services are often planned on short notice. Call 509.339.5227 and we will tell you honestly what we can do for your date.' },
      { q: 'Where do you provide funeral live streaming?', a: "Spokane, WA and the surrounding area." },
    ],
    related: ['live-events', 'interview-testimonial-video', 'corporate-video-production'],
  },
  {
    slug: 'teleprompter-operator',
    name: 'Teleprompter Operator',
    short: 'A skilled teleprompter operator with 17" mirror and presidential prompters for speeches, interviews and shoots.',
    eyebrow: 'Teleprompter operator · Presidential prompters · Speeches · Video shoots',
    h1: 'Teleprompter operator in Spokane',
    metaTitle: 'Teleprompter Operator in Spokane, WA',
    description: 'Teleprompter operator in Spokane, WA with a 17-inch two-way mirror prompter and presidential prompter experience, for corporate video, speeches and live events.',
    lead: "A teleprompter is only as good as the person running it. A skilled operator follows your speaker at their pace, makes script changes on the fly, and keeps the shoot moving, so your talent can sound natural and confident. I bring a 17-inch two-way mirror prompter, and I have operated presidential prompters for speeches and events.",
    cta: 'Book a teleprompter operator',
    sections: [
      {
        h2: 'Why hire a teleprompter operator',
        paras: [
          "Reading a script naturally on camera is harder than it looks. A good operator scrolls to match the speaker, not a fixed speed, pauses when the speaker pauses, and handles stumbles, retakes, and last-minute script edits without slowing the shoot down.",
          "For executives, spokespeople, founders, elected officials, and first-time presenters, a teleprompter operator is often the difference between a stiff read and a confident delivery.",
        ],
      },
      {
        h2: 'The prompter equipment',
        bullets: [
          "17-inch two-way mirror (beam-splitter) teleprompter: mounts in front of the camera lens so the speaker reads the script while looking straight into the camera. Ideal for interviews, executive messages, commercials, and scripted video.",
          "Presidential prompters: experience operating presidential-style prompters, the pair of angled glass panels on stands used for speeches, keynotes, and conferences. The speaker reads from the glass while the audience sees only a clear panel. Ask about availability for your event.",
          "Prompting software with adjustable text size, speed, mirroring, and on-the-spot script editing",
        ],
      },
      {
        h2: 'Types of teleprompters, and which one you need',
        paras: [
          "Teleprompters come in several styles. The right one depends on whether you are shooting video, speaking to a live room, or both.",
        ],
        bullets: [
          "Two-way mirror (beam-splitter) camera prompters: a monitor reflects off angled glass in front of the lens. The speaker looks into the camera while reading. The standard for studio and location video, interviews, and commercials. Available in sizes from tablet up to 19 inches and larger.",
          "Presidential (conference or podium) prompters: one or two glass panels on stands beside or in front of a podium, named for their use by heads of state. Best for speeches, keynotes, town halls, fundraisers, and conferences, because the speaker can look out at the audience from side to side.",
          "Tablet and phone prompters: small, lightweight prompters for tablets and smartphones. Useful for social media, run-and-gun, and solo creators.",
          "Studio and monitor prompters: larger on-camera prompters used in broadcast studios and with long lenses.",
          "In-line and talent-facing prompters: a monitor placed near the lens or at the podium base, often used for quick setups and webinars.",
          "Voice-following and remote-controlled prompting: software that follows the speaker's voice, or a hand or foot controller that an operator or speaker uses to set the speed.",
        ],
      },
      {
        h2: 'Where a teleprompter operator helps',
        bullets: [
          'Corporate and executive messages, such as CEO announcements and internal communications',
          'Commercials, promos, and brand videos with scripted talent',
          'Keynotes, speeches, and conference presentations',
          'Political, public service, and government communications',
          'Fundraising and nonprofit appeal videos',
          'Training, onboarding, and explainer videos',
          'Live events and live streams, where the speaker needs to stay on script',
          'Podcast and web series intros',
        ],
      },
      {
        h2: 'What an operator does on your shoot',
        bullets: [
          'Loads your script and formats it for easy reading',
          'Sets text size, speed, and position for each speaker',
          'Follows the speaker in real time and adjusts for natural pacing',
          'Makes script edits on the spot between takes',
          'Keeps track of takes and lines so the edit goes faster',
          'Sets up the prompter on the camera or at the podium, and tests it before you start',
        ],
      },
      {
        h2: 'Add a full video crew, or just an operator',
        paras: [
          'Need an operator to join an existing crew? We can do that. Or if you need the whole production, 12 Acre Films can provide camera, lighting, audio, and operator together for your [corporate video](/corporate-video-production), [TV commercial](/tv-commercial-production), [nonprofit video](/nonprofit-fundraising-video), or [live stream](/live-events).',
          'See the cameras, lenses, lighting and audio gear we can bring on the [gear list](/gear-list) and [gear rental](/gear-rental) pages.',
        ],
      },
    ],
    faqs: [
      { q: 'What does a teleprompter operator do?', a: 'A teleprompter operator runs the prompter during a shoot or event: loading the script, controlling the scroll speed to match the speaker, and making script changes as needed so the speaker can look into the lens naturally.' },
      { q: 'What teleprompter equipment do you have?', a: 'I own a 17-inch two-way mirror (beam-splitter) teleprompter, and I have experience operating presidential prompters. Tell me about your shoot or event and I will confirm what we will bring.' },
      { q: 'What is a presidential teleprompter?', a: 'A presidential prompter is a pair of angled glass panels on stands, placed beside a podium or stage. The speaker reads the script off the glass while looking out at the audience, and the audience sees only clear glass. They are common at speeches, conferences, and political events.' },
      { q: 'What is a two-way mirror teleprompter?', a: 'A two-way mirror, or beam-splitter, teleprompter mounts in front of a camera lens. A monitor reflects the script off angled glass, so the speaker reads while looking straight into the lens. The camera sees through the glass, and the viewer sees a speaker making direct eye contact.' },
      { q: 'What other kinds of teleprompters are there?', a: 'Besides beam-splitter and presidential prompters, there are tablet and phone prompters, studio monitor prompters, in-line and talent-facing prompters, and voice-following or remote-controlled systems.' },
      { q: 'Can you operate for live events and live streams?', a: 'Yes. Keynotes, speeches, and presentations during live events can use a teleprompter and operator.' },
      { q: 'Can you work with a crew we already have?', a: 'Yes. We can join your crew as an operator, or provide the full production.' },
      { q: 'Where do you provide teleprompter operators?', a: "Spokane and throughout the Inland Northwest." },
    ],
    related: ['corporate-video-production', 'live-events', 'tv-commercial-production', 'gear-rental'],
  },
  {
    slug: 'corporate-video-production',
    name: 'Commercial & Corporate Video Production',
    short: 'Brand, marketing, training and explainer video for Spokane businesses.',
    eyebrow: 'Commercial video · Corporate video · Brand video',
    h1: 'Commercial & corporate video production in Spokane',
    metaTitle: 'Commercial & Corporate Video in Spokane, WA',
    description: 'Spokane commercial and corporate video for marketing, brand, training and web. Professional quality without the big agency price tag.',
    lead: "Your digital first impression is important. 12 Acre Films helps you get the right images in front of the right eyes at the right time, with commercial and corporate video built around your goals, your audience, and your budget.",
    cta: 'Start a conversation',
    sections: [
      {
        h2: 'Video that does a job for your business',
        paras: [
          'Great video starts with a conversation about you, your business, and what you want the video to do. From there, we plan, shoot, and edit video that fits your brand and your budget.',
          'Matt especially likes the challenge of taking a complicated concept or business and packaging a message for a broader audience.',
        ],
      },
      {
        h2: 'Types of commercial and corporate video',
        bullets: [
          'Brand and company story videos',
          'Marketing and promotional videos for your website and social media',
          'Product and service explainers',
          'Customer testimonials and case studies',
          'Training, onboarding, and internal communication videos',
          'Recruiting and culture videos',
          'Event recaps and highlight reels',
          'Executive messages, with a [teleprompter operator](/teleprompter-operator) if needed',
        ],
      },
      {
        h2: 'Clients we have worked with',
        paras: [
          'Our clients include the Washington State Department of Health, the U.S. FDA, Westat, Spokane Parks & Recreation, Spokane Arts, Healing Lodge of the Seven Nations, St. George\'s School, Eastern Washington University, and Community Colleges of Spokane. See more in the [portfolio](/work).',
        ],
      },
      {
        h2: 'Small business, big brand',
        paras: [
          'Whether you are a small business owner who has never made a video before or a marketing director with a clear brief, the process is built around you: your timeline, your audience, and the results you need. Short on time? Ask about [social media video content](/social-media-video) built from a single shoot day.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does commercial video production cost in Spokane?', a: 'It depends on the scope: how many shooting days, locations, people, and finished videos. Tell me about your project and I will give you a quote that fits your goals and budget.' },
      { q: 'Do you work with small businesses?', a: 'Yes. 12 Acre Films works with small businesses, nonprofits, and larger organizations alike.' },
      { q: 'Can you create social media videos too?', a: 'Yes. See our social media video content page.' },
      { q: 'Where do you shoot?', a: "Spokane and the Inland Northwest." },
    ],
    related: ['social-media-video', 'interview-testimonial-video', 'nonprofit-fundraising-video', 'teleprompter-operator'],
  },
  {
    slug: 'nonprofit-fundraising-video',
    name: 'Nonprofit & Fundraising Video',
    short: 'Story-driven video for nonprofits, capital campaigns and fundraising events.',
    eyebrow: 'Nonprofit video · Fundraising video · Capital campaigns',
    h1: 'Nonprofit & fundraising video production in Spokane',
    metaTitle: 'Nonprofit Fundraising Video in Spokane',
    description: 'Spokane nonprofit video: fundraising videos, capital campaign films, gala videos and impact stories that move donors. ADDY Award-winning work.',
    lead: 'Donors give to stories, not statistics. 12 Acre Films produces documentary-style nonprofit video that shares the people behind your mission, in a way that moves viewers to act.',
    cta: 'Talk about your campaign',
    sections: [
      {
        h2: 'Video for the work you do',
        paras: [
          'Nonprofit video works best when it is honest, human, and specific. Documentary-style interviews and real moments from your programs tell your story more convincingly than polished slogans.',
          'Our nonprofit work has been recognized with an ADDY Award, and we have produced fundraising and capital campaign videos for organizations across the Inland Northwest.',
        ],
      },
      {
        h2: 'Nonprofit video we produce',
        bullets: [
          'Fundraising and donor appeal videos',
          'Capital campaign films',
          'Gala and event videos, including [live streaming of galas](/live-events)',
          'Impact stories and client testimonials',
          'Volunteer and board recruitment videos',
          'Annual report and year-in-review videos',
          'Short social videos for giving campaigns, such as Giving Tuesday',
          'Organizational history films, using [digitized archival photos and footage](/archival-media-digitization)',
        ],
      },
      {
        h2: 'Work with your whole team',
        paras: [
          "We are used to working alongside development directors, strategists, and other creative partners. If you already have a campaign strategist or agency, we can slot into your plan. See related work in the [portfolio](/work) and our [documentary filmmaking](/documentary).",
        ],
      },
    ],
    faqs: [
      { q: 'Do you have experience with nonprofit video?', a: 'Yes. Nonprofit video is a core part of our work, including award-winning projects and capital campaign films.' },
      { q: 'Can you film our fundraising event?', a: 'Yes, and we can also live stream it. See our live event production page.' },
      { q: 'Can you work with our strategist or agency?', a: 'Yes. We regularly collaborate with strategists and other creative partners.' },
    ],
    related: ['corporate-video-production', 'live-events', 'interview-testimonial-video', 'social-media-video'],
  },
  {
    slug: 'interview-testimonial-video',
    name: 'Interview & Testimonial Video',
    short: 'Documentary-style interviews and customer testimonials that build trust.',
    eyebrow: 'Interview video · Testimonial video · Documentary style',
    h1: 'Interview & testimonial video production in Spokane',
    metaTitle: 'Interview & Testimonial Video in Spokane',
    description: 'Documentary-style interview and customer testimonial videos in Spokane, WA. Build trust with real stories from your customers, team and community.',
    lead: 'Real people talking about real experiences is some of the most trusted content there is. We produce documentary-style interviews and testimonial videos that share personality, build trust, and increase engagement.',
    cta: 'Plan an interview shoot',
    sections: [
      {
        h2: 'Make interviews feel natural',
        paras: [
          'Most people are not comfortable on camera. The first few minutes of an interview are about helping the person relax, so the conversation feels like a conversation. That is what makes the footage believable and worth watching.',
        ],
      },
      {
        h2: 'Types of interview video',
        bullets: [
          'Customer testimonials and case studies',
          'Founder, team, and leadership stories',
          'Expert and thought-leader interviews',
          'Community and oral-history interviews',
          'Documentary interviews for [film projects](/documentary)',
          'Speaker interviews captured at [live events](/live-events)',
          'Memorial and tribute interviews, with family photos and videos from [archival digitizing](/archival-media-digitization)',
        ],
      },
      {
        h2: 'Professional look, simple process',
        paras: [
          'We bring cinema cameras, professional lighting, and clean wireless audio. See the full [gear list](/gear-list). For scripted messages, we can add a [teleprompter operator](/teleprompter-operator). Finished interviews can be cut into a longer story and into short clips for [social media](/social-media-video).',
        ],
      },
    ],
    faqs: [
      { q: 'How long does a testimonial video shoot take?', a: 'Many testimonial shoots can be done in a few hours, depending on the number of people and locations.' },
      { q: 'Can you shoot at our business or home?', a: 'Yes. We can shoot on location, with lighting and audio set up to look and sound professional.' },
      { q: 'Can you cut short social clips from the interview?', a: 'Yes. One interview can become a full story and several short clips.' },
    ],
    related: ['corporate-video-production', 'nonprofit-fundraising-video', 'social-media-video', 'teleprompter-operator'],
  },
  {
    slug: 'social-media-video',
    name: 'Social Media Video Content',
    short: 'Short, scroll-stopping video and photos for Instagram, Facebook, LinkedIn and YouTube.',
    eyebrow: 'Social media video · Short-form · Content creation',
    h1: 'Social media video content in Spokane',
    metaTitle: 'Social Media Videographer in Spokane, WA',
    description: 'Spokane social media videographer: short-form video for Instagram, Facebook, LinkedIn, TikTok and YouTube. Efficient shoot days that yield weeks of content.',
    lead: 'Consistent video content keeps your brand in front of your audience. We plan efficient shoot days that produce a library of social media videos and photos you can post for weeks.',
    cta: 'Plan your content',
    sections: [
      {
        h2: 'A shoot day that produces weeks of content',
        paras: [
          'Instead of shooting one video at a time, we plan a shoot day around the content you need: short clips for Instagram Reels and Facebook, longer videos for YouTube and LinkedIn, and still images for your feeds.',
          'Batching your content keeps costs down and your message consistent, and it means you are not scrambling for something to post on a Tuesday.',
        ],
      },
      {
        h2: 'Social media video we create',
        bullets: [
          'Short-form video for Instagram Reels, Facebook, TikTok, and YouTube Shorts',
          'Product and service highlights',
          'Team and behind-the-scenes content',
          'Customer testimonial clips from [interview shoots](/interview-testimonial-video)',
          'Event highlights and recaps from [live events](/live-events)',
          'Aerial clips from [drone video](/aerial-drone-video)',
          'Product and social media photography',
          'Vertical, square, and widescreen versions of the same video',
        ],
      },
      {
        h2: 'Content for every platform',
        bullets: [
          'Instagram and Facebook: Reels, Stories, and feed video, in vertical and square formats',
          'LinkedIn: professional brand, team, and thought-leader video',
          'YouTube: longer explainers, tours, and interviews, plus Shorts',
          'TikTok: short, personality-driven clips',
          'Your website: hero video, service explainers, and testimonials',
        ],
      },
      {
        h2: 'Connect social to your bigger story',
        paras: [
          'Social content works hardest when it is connected to a bigger plan. We can cut social clips from your [commercial video](/corporate-video-production), [TV and web commercials](/tv-commercial-production), [podcast](/podcast-video-recording), or [nonprofit campaign](/nonprofit-fundraising-video) so everything works together. Small team? See how we help [small businesses](/for/small-business) and [startups](/for/startups) get consistent content without hiring a full in-house team.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you edit for each social platform?', a: 'Yes. We can deliver in the sizes and lengths that fit each platform.' },
      { q: 'Do you do photography too?', a: 'Yes. We offer social media and product photography.' },
      { q: 'How often can you produce content?', a: 'We can plan a single shoot day or a recurring schedule. Tell us what you need.' },
      { q: 'Can you include drone footage?', a: 'Yes, where it fits the project. See our aerial video page.' },
      { q: 'Do you post the content for us?', a: 'We produce the video and photos, and deliver them ready to post on each platform. Ask about options if you want help beyond that.' },
    ],
    related: ['aerial-drone-video', 'corporate-video-production', 'interview-testimonial-video', 'tv-commercial-production'],
  },
  {
    slug: 'podcast-video-recording',
    name: 'Podcast Production & Recording',
    short: 'Video and audio podcast recording, editing and clips, on location or studio-style.',
    eyebrow: 'Podcast production · Video podcasts · Audio podcasts',
    h1: 'Podcast production & recording in Spokane',
    metaTitle: 'Podcast Production in Spokane, WA',
    description: 'Podcast production in Spokane, WA: multi-camera video podcasts, audio recording, editing, show clips and on-location setups for businesses and creators.',
    lead: 'A podcast is one of the best ways to build an audience and a reputation. We bring cameras, lights, and studio-quality microphones, then record, edit, and package your show so you can focus on the conversation.',
    cta: 'Plan your podcast',
    sections: [
      {
        h2: 'Video podcasts and audio podcasts, set up properly',
        paras: [
          'We set up cameras, lighting, and microphones for the number of hosts and guests you have, in your office, your venue, or a space we find together. Clean audio comes first, because audiences forgive imperfect video much more readily than bad sound.',
          'Choose a video podcast to publish on YouTube and social platforms, an audio-only podcast for Apple Podcasts and Spotify, or both from the same recording.',
        ],
      },
      {
        h2: 'What we can bring',
        bullets: [
          'Shure MV7 podcast and studio microphones',
          'Multi-camera video with professional lighting',
          'A multi-track field recorder',
          'Wireless lavaliers and handheld mics for guests on the move',
          'Editing, show clips, and social teasers',
        ],
      },
      {
        h2: 'Podcast production, start to finish',
        bullets: [
          'Show planning: format, length, guests, and episode structure',
          'Recording: on location or in a studio-style setup',
          'Editing: clean-up, levels, and removing mistakes',
          'Show intro, outro, and music beds',
          'Clips and audiograms for social media',
          'Delivery files for your hosting platform',
        ],
      },
      {
        h2: 'Beyond the single episode',
        paras: [
          'Podcast footage can fuel [social media clips](/social-media-video), and a launch event can be [live streamed](/live-events). If your show is part of a brand or marketing push, we can connect it to your [commercial video](/corporate-video-production). Need audio ads for your show or another? See [radio commercial production](/radio-commercial-production). Browse the full [gear list](/gear-list).',
        ],
      },
    ],
    faqs: [
      { q: 'Can you record a podcast at our location?', a: 'Yes. We bring the equipment to your office, venue, or another space.' },
      { q: 'Do you edit the episodes?', a: 'Yes, and we can also create short clips for social media.' },
      { q: 'Do you record video or audio only?', a: 'Either, or both. Many clients choose video so they can publish to YouTube and social platforms as well as audio platforms.' },
      { q: 'Can you help us start a podcast from scratch?', a: 'Yes. We can help with format, recording, editing, and delivery to your hosting platform.' },
    ],
    related: ['radio-commercial-production', 'social-media-video', 'live-events', 'gear-rental'],
  },
  {
    slug: 'gear-rental',
    name: 'Video Gear Rental',
    short: 'Cameras, lenses, lighting, grip and audio gear owned by 12 Acre Films.',
    eyebrow: 'Camera rental · Lighting rental · Audio rental',
    h1: 'Video camera & gear rental in Spokane',
    metaTitle: 'Video Gear Rental in Spokane, WA',
    description: 'Rent cinema cameras, lenses, lighting, grip and audio gear in Spokane, WA. Panasonic, Blackmagic, Sony, Aputure and more from a working production company.',
    lead: 'The gear on our production days is gear you can rent. Cameras, lenses, lighting, grip, and audio, all owned and maintained by a working production company in Spokane.',
    cta: 'Ask about a rental',
    sections: [
      {
        h2: 'Gear from a working production company',
        paras: [
          'Our kit is used on real shoots every week, so we know what works. Browse the full [gear list](/gear-list) and search by name or category.',
        ],
      },
      {
        h2: 'Popular rental categories',
        bullets: [
          'Cinema and mirrorless cameras, including Panasonic, Blackmagic, and Sony',
          'Cine and photo lenses',
          'LED lighting, including Aputure, KinoFlo, and wireless RGB lights',
          'Tripods, C-stands, dolly rails, and stabilizers',
          'Wireless microphones, shotgun mics, and recorders',
          '17-inch two-way mirror teleprompter, with an operator available for [speeches and shoots](/teleprompter-operator)',
        ],
      },
      {
        h2: 'Need an operator too?',
        paras: [
          'Many rentals work best with someone who knows the gear. We can provide a [crew for live events](/live-events), a [teleprompter operator](/teleprompter-operator), or the full production for your [commercial video](/corporate-video-production).',
        ],
      },
    ],
    faqs: [
      { q: 'What gear do you have available?', a: 'See our searchable gear list for cameras, lenses, lighting, grip, and audio.' },
      { q: 'How do I reserve gear?', a: 'Send a message with the dates and the items you are interested in, and we will confirm availability.' },
      { q: 'Can I hire a crew with the gear?', a: 'Yes. We can provide operators or a full production crew.' },
    ],
    related: ['live-events', 'teleprompter-operator', 'corporate-video-production', 'podcast-video-recording'],
  },
  {
    slug: 'tv-commercial-production',
    name: 'TV & Web Commercial Production',
    short: 'Broadcast, streaming and web commercials: concept, shoot and edit, start to finish.',
    eyebrow: 'TV commercials · Web commercials · Ad production',
    h1: 'TV & web commercial production in Spokane',
    metaTitle: 'TV Commercial Production in Spokane',
    description: 'Spokane commercial production: 15, 30 and 60-second TV, streaming and online commercials. Concept, scripting, shooting and editing for local advertisers.',
    lead: 'A good commercial earns attention in seconds. 12 Acre Films produces TV, streaming, and online commercials for local and regional advertisers, with professional production quality and without the big agency price tag.',
    cta: 'Get a commercial quote',
    sections: [
      {
        h2: 'Commercials that fit your budget and your market',
        paras: [
          'We help you shape the idea, write the script, shoot it professionally, and deliver the cut in the lengths you need. Whether your spot will run on local broadcast TV, connected TV and streaming, or social media and your website, we deliver the right formats for each.',
        ],
      },
      {
        h2: 'Commercial production we handle',
        bullets: [
          '15, 30, and 60-second spots, plus longer-form versions',
          'Local and regional TV commercials',
          'Streaming and connected TV ads',
          'Online and social media ads, including vertical cuts',
          'Product and service commercials',
          'Testimonial-style commercials from [interview shoots](/interview-testimonial-video)',
          'Political and public-service announcements',
        ],
      },
      {
        h2: 'From concept to delivery',
        bullets: [
          'Strategy: audience, offer, and where the commercial will run',
          'Concept and script, with a [teleprompter operator](/teleprompter-operator) for talent when needed',
          'Casting, locations, and shoot planning',
          'Production with professional cameras, lighting, and audio',
          'Editing, color, sound, and graphics',
          'Delivery in broadcast, streaming, and social specs',
        ],
      },
      {
        h2: 'One campaign, many formats',
        paras: [
          'A single commercial shoot can also produce [social media video content](/social-media-video), a longer [brand story](/corporate-video-production), and a matching [radio spot](/radio-commercial-production). Planning them together saves money and keeps your message consistent.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you produce commercials for local TV?', a: 'Yes. We produce spots for local and regional TV, streaming, and online use, and deliver in the lengths and formats each outlet needs.' },
      { q: 'Can you write the script?', a: 'Yes. We can help with concept and scripting, or work from a script you provide.' },
      { q: 'Can you make versions for social media too?', a: 'Yes. We can cut vertical and short versions from the same shoot.' },
      { q: 'How much does a commercial cost?', a: 'It depends on the concept, locations, talent, and shoot days. Tell me about your goals and budget and I will put together a quote.' },
    ],
    related: ['radio-commercial-production', 'corporate-video-production', 'social-media-video', 'teleprompter-operator'],
  },
  {
    slug: 'radio-commercial-production',
    name: 'Radio Commercial & Audio Ad Production',
    short: 'Radio spots, audio ads and voiceover production, from script to finished mix.',
    eyebrow: 'Radio commercials · Audio ads · Voiceover',
    h1: 'Radio commercial & audio ad production in Spokane',
    metaTitle: 'Radio Commercial Production in Spokane',
    description: 'Radio commercial production in Spokane, WA: scripting, voiceover recording, sound design and mixing for radio spots, streaming audio and podcast ads.',
    lead: 'Radio and audio ads reach people while they drive, work, and listen. We write, record, and mix radio commercials and audio ads that sound professional on air and in earbuds.',
    cta: 'Plan your radio spot',
    sections: [
      {
        h2: 'Audio ads that get remembered',
        paras: [
          'A good radio spot has one idea, a clear voice, and a reason to act. We help you shape the message, write a tight script, and produce a spot that sounds right for your station or platform.',
        ],
      },
      {
        h2: 'Audio we produce',
        bullets: [
          '15, 30, and 60-second radio commercials',
          'Streaming audio and music-service ads',
          '[Podcast](/podcast-video-recording) ads and sponsor reads',
          'Voiceover for [video commercials](/tv-commercial-production) and explainers',
          'Radio versions of your TV or web commercial',
          'Event and public-service announcements',
        ],
      },
      {
        h2: 'Script to finished mix',
        bullets: [
          'Concept and scriptwriting',
          'Voiceover recording, with direction',
          'Music and sound effects selection',
          'Editing and mixing for broadcast loudness',
          'Delivery in the formats stations and platforms request',
        ],
      },
      {
        h2: 'Part of a bigger campaign',
        paras: [
          'Radio works hardest alongside other channels. We can build your radio spot together with a [TV or web commercial](/tv-commercial-production), [social media video](/social-media-video), and [corporate video](/corporate-video-production) so one message shows up everywhere. Please ask about voice talent options when you reach out.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you produce radio commercials?', a: 'Yes. We handle scripting, voiceover recording, sound design, and mixing for radio and audio ads.' },
      { q: 'Can you provide voice talent?', a: 'Please ask. Tell us the tone and audience you are going for and we will talk through options.' },
      { q: 'Can you make a radio version of our TV commercial?', a: 'Yes. We can adapt the audio and script from your video commercial into a radio spot.' },
      { q: 'Do you make podcast and streaming ads?', a: 'Yes. We produce audio ads and sponsor reads for podcasts and streaming audio.' },
    ],
    related: ['tv-commercial-production', 'podcast-video-recording', 'corporate-video-production', 'social-media-video'],
  },
  {
    slug: 'aerial-drone-video',
    name: 'Aerial Drone Video & Photography',
    short: 'Licensed, insured aerial video and photos for businesses, properties, events, and campaigns.',
    eyebrow: 'Licensed & insured · Aerial video · Drone photography',
    h1: 'Licensed & insured aerial drone video in Spokane',
    metaTitle: 'Aerial Drone Video in Spokane, WA',
    description: 'Licensed and insured commercial drone pilot in Spokane, WA. Aerial video and photography for businesses, properties, events, nonprofits and commercials.',
    lead: 'A view from above shows scale, place, and context that ground-level cameras cannot. As a licensed and insured commercial drone pilot, I add aerial video and photography to your project, or build a project around it.',
    cta: 'Ask about aerial video',
    sections: [
      {
        h2: 'Licensed and insured',
        paras: [
          'Hiring a drone operator for business use means hiring a professional who is licensed and carries insurance. I am a licensed commercial drone pilot, and my aerial work is insured, so you and your property are protected.',
          'If your project requires proof of licensing or a certificate of insurance, just ask and I will provide it.',
        ],
      },
      {
        h2: 'Why add aerial footage',
        paras: [
          'Aerial shots open a story, establish a location, and make a business or property feel as big as it really is. A few well-planned aerial clips can lift an ordinary video into something that feels cinematic.',
          'The Inland Northwest has landscape worth showing off, from the Spokane River and downtown skyline to farmland, lakes, and mountains.',
        ],
      },
      {
        h2: 'What aerial video is good for',
        bullets: [
          'Business and brand videos that show a facility, campus, or job site',
          'Commercial and residential property marketing',
          'Construction progress and project documentation',
          'Event coverage, from festivals to fundraisers',
          'Nonprofit stories about land, trails, and community places',
          'Tourism, hospitality, and recreation marketing',
          '[Commercials](/tv-commercial-production) and [documentaries](/documentary) that need establishing shots',
        ],
      },
      {
        h2: 'Aerial footage as part of the whole picture',
        paras: [
          'Aerial clips work best when they are planned alongside ground-level video. We can combine drone footage with your [corporate video](/corporate-video-production), cut aerial highlights for [social media](/social-media-video), and deliver still aerial photos for your website and print.',
        ],
      },
    ],
    faqs: [
      { q: 'Are you licensed and insured to fly drones commercially?', a: 'Yes. I am a licensed commercial drone pilot and my aerial work is insured. I can provide proof on request.' },
      { q: 'Do you plan for airspace and location rules?', a: 'Yes. Flights are planned in advance around airspace and location restrictions, which matter in and around Spokane.' },
      { q: 'What can aerial video be used for?', a: 'Brand and company videos, property marketing, construction progress, events, nonprofit stories, tourism, commercials, and documentaries.' },
      { q: 'Can you combine drone footage with other video?', a: 'Yes. Aerial clips are most effective as part of a larger production, and we plan them that way.' },
      { q: 'Do you deliver photos as well as video?', a: 'Yes. We can deliver aerial stills as well as video.' },
      { q: 'Where do you fly?', a: "Spokane and the Inland Northwest." },
    ],
    related: ['corporate-video-production', 'social-media-video', 'tv-commercial-production', 'nonprofit-fundraising-video'],
  },
  {
    "slug": "archival-media-digitization",
    "name": "Archival Media Digitization",
    "short": "Digitize VHS home videos, photos, slides, 35mm and medium format film, DVDs and CDs.",
    "eyebrow": "Digitization \u00b7 Archival media \u00b7 Preserve your memories",
    "h1": "Archival media digitization in Spokane",
    "metaTitle": "Photo, Film & Video Digitizing in Spokane",
    "description": "Digitize VHS and U-matic tapes, photos, slides, 35mm and medium format film, DVDs and CDs in Spokane, WA. Save your memories before the media fades.",
    "lead": "Tapes degrade, film fades, and discs fail. 12 Acre Films digitizes your archival media (VHS and U-matic tapes, photo prints, film slides, 35mm and medium format film, DVDs, and CDs) so your memories are saved, shareable, and safe.",
    "cta": "Get a digitizing quote",
    "sections": [
      {
        "h2": "Save your memories before they fade",
        "paras": [
          "Home videos on VHS tapes, boxes of photographs, slide carousels, and old negatives hold decades of family history. They also deteriorate, and the equipment to play many of them is disappearing from homes.",
          "Digitizing turns them into files you can watch, share with family, back up in more than one place, and use in a video or slideshow. I handle the work carefully, because I know what these are: not just media, but memories."
        ]
      },
      {
        "h2": "Our dedicated digitizing site",
        "paras": [
          "Looking for guides on each format, how to identify old media, and how to protect your tapes? Visit [Old Box of Tapes](https://oldboxoftapes.com), our site devoted to digitizing VHS, U-matic, photos, slides, film, DVDs and CDs."
        ]
      },
      {
        "h2": "What we digitize",
        "bullets": [
          "[VHS home videos](/vhs-to-digital): tapes to digital video files",
      "[U-matic 3/4-inch tape](/umatic-to-digital): professional videotape to digital files",
          "[Photo scanning](/photo-scanning): prints and albums to high-quality digital images",
          "[Film slides](/film-slide-scanning): 35mm slides and slide trays to digital",
          "[35mm film](/35mm-film-scanning): negatives and film strips to digital images",
          "[Medium format film](/medium-format-film-scanning): roll film negatives and transparencies to digital",
          "[DVDs and CDs](/dvd-cd-transfer): home-burned discs transferred to files you can keep"
        ]
      },
      {
        "h2": "Who it is for",
        "bullets": [
          "Families preserving home videos, photographs, and slides",
          "Anyone preparing a [funeral or memorial slideshow](/funeral-live-streaming) or tribute video",
          "Organizations, schools, and churches with historical footage and photographs, including [nonprofits](/for/nonprofits) with decades of history",
          "[Documentary filmmakers](/documentary) who need archival material",
          "Estates and families sorting through a loved one's collection",
          "Photographers digitizing their own film archive"
        ]
      },
      {
        "h2": "How it works",
        "bullets": [
          "Tell me what you have and roughly how much.",
          "I give you a quote based on the format and quantity.",
          "You get your media to me. Ask about drop-off options.",
          "I digitize and organize the files.",
          "You receive your digital files, and your originals come back to you."
        ]
      },
      {
        "h2": "Go beyond digitizing",
        "paras": [
          "Once your media is digital, it can become something new: a [family tribute video](/interview-testimonial-video), a memorial slideshow, an organizational history film for your [business](/corporate-video-production), or an anniversary video. Ask about editing your digitized footage and photos into a finished video."
        ]
      },
      {
        "h2": "Formats we digitize",
        "paras": [
          "Pick your format for details: [VHS tapes](/vhs-to-digital), [U-matic tapes](/umatic-to-digital), [photo scanning](/photo-scanning), [film slides](/film-slide-scanning), [35mm film](/35mm-film-scanning), [medium format film](/medium-format-film-scanning), and [DVDs and CDs](/dvd-cd-transfer). Not sure what you have? Describe it or bring a sample and I will help identify it."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What can you digitize?",
        "a": "VHS home videos, photo prints, film slides, 35mm film, medium format film, DVDs, and CDs."
      },
      {
        "q": "Do I get my originals back?",
        "a": "Yes. Your originals come back to you along with your digital files."
      },
      {
        "q": "What will I receive?",
        "a": "Digital files you can keep, share, and back up. Ask about file formats and delivery options such as a USB drive or a download."
      },
      {
        "q": "Can you edit the digitized video or photos into something new?",
        "a": "Yes. We can edit them into a tribute video, memorial slideshow, or organizational history video."
      },
      {
        "q": "I have a mix of formats. Can you handle all of it?",
        "a": "Yes. Many collections include a mix of tapes, prints, slides, and discs, and we can digitize all of them together."
      },
      {
        "q": "How much does digitizing cost?",
        "a": "It depends on the format and how much you have. Tell me what you have, roughly how many, and I will give you a quote."
      },
      {
        "q": "Where are you located?",
        "a": "12 Acre Films is based in Spokane, WA. Our operating area is the Inland Northwest. Ask about drop-off and other options for your location."
      }
    ],
    "related": [
      "vhs-to-digital",
      "photo-scanning",
      "film-slide-scanning",
      "35mm-film-scanning"
    ]
  },
];

export const audiences: Service[] = [
  {
    slug: 'for/small-business',
    name: 'Video for Small Business',
    short: 'Affordable, professional video built for small business owners who have never made a video before.',
    eyebrow: 'Small business video · Spokane',
    h1: 'Video production for small businesses in Spokane',
    metaTitle: 'Small Business Video Production in Spokane',
    description: 'Spokane small business video: brand videos, testimonials, social content and commercials with professional quality at a small-business price.',
    lead: "You are good at running a business, not at video production, and that is fine. 12 Acre Films works with small business owners to make professional video that fits your goals and your budget, without the big agency price tag.",
    cta: 'Start a conversation',
    sections: [
      {
        h2: 'Video that works as hard as you do',
        paras: [
          'A small business often has one chance to make a first impression, and that impression is usually online. Good video tells people who you are, shows your work, and gives them a reason to call.',
          'You are handing your project to an actual person who cares about you and your goals. The process starts with a conversation about your business, not a rate card.',
        ],
      },
      {
        h2: 'The videos small businesses ask for most',
        bullets: [
          'A brand or "about us" video for your website',
          'Customer testimonials, from [interview shoots](/interview-testimonial-video)',
          'Service and product explainers',
          'A year of [social media video content](/social-media-video) from one or two shoot days',
          'Local [TV and web commercials](/tv-commercial-production) and [radio spots](/radio-commercial-production)',
          'Team, hiring, and culture videos',
          'Aerial footage of your location from [drone video](/aerial-drone-video)',
        ],
      },
      {
        h2: 'Making video fit a small budget',
        bullets: [
          'Plan one shoot day to produce several videos, instead of paying for several shoots',
          'Start with the one video that will earn the most, then build on it',
          'Cut one longer video into short clips for social media',
          'Share the goal and budget up front, and I will tell you honestly what is possible',
        ],
      },
      {
        h2: 'Local, and staying that way',
        paras: [
          'Based in Spokane, serving the Inland Northwest. Look at the [portfolio](/work), read the [about page](/about), or see the full list of [services](/services). If you are a new company, our [startup video](/for/startups) page may fit you better, and if you run a mission-driven organization, see [video for nonprofits](/for/nonprofits).',
        ],
      },
    ],
    faqs: [
      { q: 'I have never made a video. Where do I start?', a: 'With a conversation. Tell me about your business and what you want to happen, and I will recommend a simple first video and walk you through the process.' },
      { q: 'How much does a small business video cost?', a: 'It depends on length, locations, and number of videos. Tell me your goals and budget and I will put together a quote that fits.' },
      { q: 'Do I need a script?', a: 'No. I can help you shape the message, and for scripted videos we can add a teleprompter operator.' },
      { q: 'Can I get video for social media without a huge investment?', a: 'Yes. A single planned shoot day can produce weeks of social content.' },
    ],
    related: ['corporate-video-production', 'social-media-video', 'tv-commercial-production', 'for/startups'],
  },
  {
    slug: 'for/startups',
    name: 'Video for Startups',
    short: 'Launch, pitch and product videos for startups that need to move fast and look credible.',
    eyebrow: 'Startup video · Launch · Pitch · Product',
    h1: 'Video production for startups in Spokane',
    metaTitle: 'Startup Video Production in Spokane, WA',
    description: 'Startup video in Spokane, WA: launch, pitch and investor videos, product demos, explainers and founder stories. Look credible fast, on a startup budget.',
    lead: 'Startups have to look credible before they have a track record. A clear, well-made video can explain what you do in 90 seconds, win a meeting, and give your launch some weight.',
    cta: 'Talk about your launch',
    sections: [
      {
        h2: 'Explain it fast, and make it stick',
        paras: [
          'New companies usually have a product people have not seen, and a short window to explain it. Video is the fastest way to turn a complicated idea into something a customer, partner, or investor understands.',
          'Matt especially likes taking a complicated concept and packaging it for a broader audience.',
        ],
      },
      {
        h2: 'Videos startups use',
        bullets: [
          'Launch and announcement videos for your website, press, and crowdfunding pages',
          'Pitch and investor videos',
          'Product demos and how-it-works explainers',
          'Founder and origin stories, shot [documentary style](/interview-testimonial-video)',
          'Early customer testimonials and case studies',
          'Recruiting and team videos',
          'Launch-day [social media content](/social-media-video) and ads from your [commercial](/tv-commercial-production)',
          '[Live streams](/live-events) for launch events and demo days',
          '[Podcast](/podcast-video-recording) and thought-leadership content',
        ],
      },
      {
        h2: 'Built to move at startup speed',
        bullets: [
          'One shoot, many assets: a hero video, short clips, and photos from the same day',
          'A phased approach: start with a launch video, add more as you grow',
          'Clear scope and a quote up front',
          'Teleprompter operator available for founder-led videos',
        ],
      },
      {
        h2: 'Grow into more',
        paras: [
          'As the company grows, we can scale with you into [corporate video](/corporate-video-production), [aerial footage](/aerial-drone-video) of a new facility, and bigger campaigns. If you are a very small operation today, see [video for small businesses](/for/small-business). Browse the [portfolio](/work) or see all [services](/services).',
        ],
      },
    ],
    faqs: [
      { q: 'How early should a startup invest in video?', a: 'Early, but small. A single launch or explainer video often does more than any other piece of marketing in the first year.' },
      { q: 'Can you help with a pitch or investor video?', a: 'Yes. We can help you shape the story and produce a clear, credible video.' },
      { q: 'Can the same shoot produce social media content?', a: 'Yes. One planned shoot can produce a hero video, short social clips, and photos.' },
      { q: 'Can you work to a launch date?', a: 'Tell us your date and we will work backward from it.' },
    ],
    related: ['corporate-video-production', 'social-media-video', 'interview-testimonial-video', 'for/small-business'],
  },
  {
    slug: 'for/nonprofits',
    name: 'Video for Nonprofits',
    short: 'A guide to video for nonprofits: what to make, how it fits a budget, and how we work with your team.',
    eyebrow: 'Nonprofit video · Mission-driven organizations',
    h1: 'Video production for nonprofits in Spokane',
    metaTitle: 'Video Production for Nonprofits in Spokane',
    description: 'Video for Spokane nonprofits: donor stories, program videos, volunteer recruitment and events. Award-winning work planned around your budget.',
    lead: "Nonprofits do more with less, and video should too. We help mission-driven organizations in Spokane and the Inland Northwest tell their stories honestly, reach donors and volunteers, and make the most of every dollar spent on production.",
    cta: 'Talk about your mission',
    sections: [
      {
        h2: 'Video for the whole nonprofit, not just the gala',
        paras: [
          'The most effective nonprofit video does more than ask for money. It shows the people you serve, the volunteers who show up, and the results of your work, all in the voices of the people who live it.',
          "Our nonprofit work has been recognized with an ADDY Award, and we have worked with organizations including Spokane Arts, Healing Lodge of the Seven Nations, and St. George's School.",
        ],
      },
      {
        h2: 'Where video fits in a nonprofit',
        bullets: [
          'Development: donor stories, appeals, and [capital campaign films](/nonprofit-fundraising-video)',
          'Programs: show what you do, for clients, partners, and referrers',
          'Volunteers and board: recruitment and orientation videos',
          'Events: [live streaming](/live-events) of galas and annual meetings, plus highlight videos',
          'Grants: a short video to support an application or report',
          'Community: [social media content](/social-media-video) for giving campaigns and awareness months',
          'Remembrance: tribute videos, and [funeral and memorial live streams](/funeral-live-streaming) for families you serve',
        ],
      },
      {
        h2: 'Making the budget stretch',
        bullets: [
          'Plan one shoot day to capture content for several uses across the year',
          'Cut one main film into short clips for social media and email',
          'Capture event footage while you are already hosting the event',
          'Be upfront about your budget, and I will help you prioritize',
        ],
      },
      {
        h2: 'Working with your team',
        paras: [
          'We are used to working alongside development directors, strategists, board members, and other creative partners. The goal is a process that respects your time and your relationships with the people in your story.',
          'See the [portfolio](/work), [documentary work](/documentary), or all [services](/services). If you run a very small organization that operates like a business, you may also like [video for small businesses](/for/small-business).',
        ],
      },
    ],
    faqs: [
      { q: 'Do you offer nonprofit pricing?', a: 'Tell me about your organization and your budget, and I will work with you to find something that fits.' },
      { q: 'Can you film our event and live stream it?', a: 'Yes. We can do both, and cut a highlight video afterward.' },
      { q: 'Can you work with our consultant or agency?', a: 'Yes. We regularly collaborate with strategists and other creative partners.' },
      { q: 'How do you protect the people in our stories?', a: 'We plan interviews with care, explain how the footage will be used, and respect the wishes of the people we film.' },
    ],
    related: ['nonprofit-fundraising-video', 'live-events', 'interview-testimonial-video', 'for/small-business'],
  },
  {
    slug: 'for/corporate',
    name: 'Video for Corporate Teams',
    short: 'Brand, training, internal communications, and executive video for companies and agencies that need a dependable production partner.',
    eyebrow: 'Corporate video · Brand · Training · Executive communications',
    h1: 'Corporate video production for companies and agencies in Spokane',
    metaTitle: 'Corporate Video for Companies in Spokane',
    description: 'Corporate video for Spokane companies, agencies and government contractors: brand films, training, executive messages and live events.',
    lead: "Corporate teams need a production partner who is easy to work with, communicates clearly, and delivers on time. 12 Acre Films has produced video for federal agencies, state departments, universities, and growing companies across the Inland Northwest.",
    cta: 'Talk about your project',
    sections: [
      {
        h2: 'What corporate teams hire us to make',
        bullets: [
          'Brand and company films for your website and sales team (see [corporate video production](/corporate-video-production))',
          'Executive and leadership messages, with a [teleprompter operator](/teleprompter-operator) when a script is needed',
          'Employee and customer stories from [interview and testimonial shoots](/interview-testimonial-video)',
          'Training, onboarding, and internal communications video',
          '[Live streaming](/live-events) of town halls, conferences, and product launches',
          'Recorded panels and [podcast-style video](/podcast-video-recording) for thought leadership',
          'Cutdowns for [social media](/social-media-video) and paid campaigns',
          'Facility and site footage from [aerial drone video](/aerial-drone-video)',
        ],
      },
      {
        h2: 'A process built for working with teams',
        paras: [
          'Corporate projects usually involve several stakeholders, a review process, and a fixed date. We plan around that: a clear scope up front, one point of contact, organized review rounds, and files delivered in the formats your marketing, communications, and IT teams expect.',
          'We have worked with agencies, consultants, and in-house marketing teams, and we are comfortable being the production arm of a larger project.',
        ],
      },
      {
        h2: 'Experience with institutional clients',
        paras: [
          'Our client list includes the Washington State Department of Health, the U.S. FDA, Westat, Eastern Washington University, and Community Colleges of Spokane. Projects with public agencies and large organizations come with schedules, approvals, and accessibility needs, and we plan for them.',
          'See the [portfolio](/work), read the [about page](/about), or browse every [service](/services). Smaller companies may prefer our page on [video for small businesses](/for/small-business).',
        ],
      },
    ],
    faqs: [
      { q: 'Can you work with our marketing team or agency?', a: 'Yes. We regularly work alongside in-house teams, agencies, and consultants, and can take direction from an existing creative brief.' },
      { q: 'Do you handle multi-day or multi-location shoots?', a: 'Yes. Tell us the locations and dates and we will plan crew, equipment, and logistics around them.' },
      { q: 'Can you deliver in the formats our team needs?', a: 'Yes. We deliver the master file plus versions for web, social, presentations, and broadcast, with captions on request.' },
      { q: 'Can you live stream our corporate event?', a: 'Yes. We handle multi-camera live streaming and recording for town halls, conferences, and launches, in person or hybrid.' },
    ],
    related: ['corporate-video-production', 'live-events', 'interview-testimonial-video', 'teleprompter-operator'],
  },
];

export const formats: Service[] = [
  {
    "slug": "vhs-to-digital",
    "name": "VHS to Digital",
    "short": "Convert VHS home videos to digital files you can watch, share and keep.",
    "eyebrow": "VHS to digital \u00b7 Home video transfer \u00b7 Tape digitizing",
    "h1": "VHS to digital video transfer in Spokane",
    "metaTitle": "VHS to Digital Transfer in Spokane, WA",
    "description": "Convert VHS home movies to digital files in Spokane, WA. Save birthdays, weddings and holidays from aging tapes, ready to watch, share and back up.",
    "lead": "Your family's home videos are stored on magnetic tape, and tape does not last forever. We transfer your VHS tapes to digital files so birthdays, weddings, holidays, and everyday moments are saved and easy to share.",
    "cta": "Get a digitizing quote",
    "sections": [
      {
        "h2": "Why digitize VHS tapes now",
        "paras": [
          "VHS tapes are made of magnetic tape that can stretch, shed, mold, and lose picture and sound quality over time. Every time a tape is played, it wears a little more. The machines that play them are also getting harder to find and keep working.",
          "Transferring your tapes to digital files preserves what is on them today and lets you watch them on any phone, tablet, computer, or TV."
        ]
      },
      {
        "h2": "What we transfer",
        "bullets": [
          "Family home videos: birthdays, holidays, vacations, and everyday life",
          "Weddings, graduations, recitals, and sports events",
          "School, church, and community recordings",
          "Business and training tapes, and organizational history",
          "Footage for a [documentary](/documentary) or tribute video"
        ]
      },
      {
        "h2": "What you get",
        "bullets": [
          "Digital video files you can play on any device",
          "Files organized so you can find each tape",
          "Options for delivery on a USB drive or by download",
          "Your original tapes, returned to you",
          "Optional editing into a [tribute video or memorial slideshow](/interview-testimonial-video)"
        ]
      },
      {
        "h2": "Part of a larger archive?",
        "paras": [
          "Many families have more than tapes. See our full [archival media digitization](/archival-media-digitization) services, including [U-matic 3/4-inch tape](/umatic-to-digital), [photo scanning](/photo-scanning), [film slides](/film-slide-scanning), and [DVD and CD transfer](/dvd-cd-transfer). Preparing a [funeral or memorial](/funeral-live-streaming)? Old home videos make touching tributes. Our dedicated tape and photo transfer site, [Old Box of Tapes](https://oldboxoftapes.com), has guides for every format."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can you convert VHS tapes to digital?",
        "a": "Yes. We transfer VHS home videos to digital files you can watch, share, and back up."
      },
      {
        "q": "How long do VHS tapes last?",
        "a": "Magnetic tape deteriorates over time, and storage conditions matter a great deal. The sooner you digitize, the better the chance of a clean transfer."
      },
      {
        "q": "Can you transfer other tape formats?",
        "a": "Please ask. Tell me what format you have and I will let you know if I can help."
      },
      {
        "q": "Can you make a video from my old tapes?",
        "a": "Yes. We can edit the footage into a tribute, anniversary, or family history video."
      },
      {
        "q": "How much does digitizing cost?",
        "a": "It depends on the format and how much you have. Tell me what you have, roughly how many, and I will give you a quote."
      },
      {
        "q": "Where are you located?",
        "a": "12 Acre Films is based in Spokane, WA. Our operating area is the Inland Northwest. Ask about drop-off and other options for your location."
      }
    ],
    "related": [
      "archival-media-digitization",
      "dvd-cd-transfer",
      "photo-scanning",
      "film-slide-scanning"
    ]
  },
  {
    "slug": "photo-scanning",
    "name": "Photo Scanning",
    "short": "Scan photo prints and albums into high-quality digital images.",
    "eyebrow": "Photo scanning \u00b7 Print digitizing \u00b7 Family photos",
    "h1": "Photo scanning & digitizing in Spokane",
    "metaTitle": "Photo Scanning in Spokane, WA",
    "description": "Photo scanning in Spokane, WA: digitize family photo prints and albums into high-quality digital images you can share, print, and back up.",
    "lead": "Boxes of photographs fade, yellow, and get lost. We scan your photo prints into high-quality digital images so your family history is preserved, organized, and easy to share.",
    "cta": "Get a digitizing quote",
    "sections": [
      {
        "h2": "Preserve your family photographs",
        "paras": [
          "Prints fade, stick together in albums, and are easily damaged by water, heat, and time. A digital copy protects the image, and it makes it easy to share with every relative, print again, or use in a slideshow."
        ]
      },
      {
        "h2": "What we scan",
        "bullets": [
          "Loose photo prints of all sizes",
          "Photo albums and scrapbooks",
          "School photos, portraits, and wedding photos",
          "Historic and family heirloom photographs",
          "Business, church, school, and organization archives",
          "Photos for a memorial slideshow or [tribute video](/funeral-live-streaming)"
        ]
      },
      {
        "h2": "What you get",
        "bullets": [
          "High-quality digital image files",
          "Files organized so you can find them",
          "Options for delivery on a USB drive or by download",
          "Your original photographs, returned to you",
          "Optional photo slideshows with music"
        ]
      },
      {
        "h2": "Photos, slides, and film",
        "paras": [
          "If your collection also includes [film slides](/film-slide-scanning), [35mm negatives](/35mm-film-scanning), or [medium format film](/medium-format-film-scanning), we can scan those too. Have home movies? See [VHS to digital](/vhs-to-digital). Browse all [archival media digitization](/archival-media-digitization)."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can you scan photos in albums?",
        "a": "Please ask. Tell me about the albums and I will let you know the best way to handle them."
      },
      {
        "q": "Do you scan old and damaged photos?",
        "a": "Yes, handled with care. Ask about retouching or restoration if the photos are damaged."
      },
      {
        "q": "Can you turn my photos into a slideshow video?",
        "a": "Yes. We can build a slideshow with music for a memorial, anniversary, or family event."
      },
      {
        "q": "Do I get my original photos back?",
        "a": "Yes. Your originals are returned to you."
      },
      {
        "q": "How much does digitizing cost?",
        "a": "It depends on the format and how much you have. Tell me what you have, roughly how many, and I will give you a quote."
      },
      {
        "q": "Where are you located?",
        "a": "12 Acre Films is based in Spokane, WA. Our operating area is the Inland Northwest. Ask about drop-off and other options for your location."
      }
    ],
    "related": [
      "archival-media-digitization",
      "film-slide-scanning",
      "35mm-film-scanning",
      "vhs-to-digital"
    ]
  },
  {
    "slug": "film-slide-scanning",
    "name": "Film Slide Scanning",
    "short": "Scan 35mm film slides and slide trays into digital images.",
    "eyebrow": "Slide scanning \u00b7 Film slides \u00b7 35mm slides",
    "h1": "Film slide scanning in Spokane",
    "metaTitle": "35mm Slide Scanning in Spokane, WA",
    "description": "Slide scanning in Spokane, WA: digitize 35mm film slides and carousel trays into digital images. Save decades of family vacations and memories.",
    "lead": "Slide trays in the closet hold some of the most vivid photographs your family ever took, and they are impossible to enjoy without a projector. We scan your film slides to digital so they can be seen, shared, and saved.",
    "cta": "Get a digitizing quote",
    "sections": [
      {
        "h2": "Bring your slides back to life",
        "paras": [
          "Film slides were a favorite for family vacations, weddings, and travel. Over time, slide colors can fade or shift, and the slides themselves can be damaged by moisture and heat. Few people still have a working projector.",
          "Scanning your slides gives you digital images you can view on any screen, share with family, and print."
        ]
      },
      {
        "h2": "What we scan",
        "bullets": [
          "35mm film slides, in mounts",
          "Slides in carousel trays and boxes",
          "Family vacations, holidays, and weddings",
          "Travel, scientific, and educational slide collections",
          "Church, school, and organization archives"
        ]
      },
      {
        "h2": "What you get",
        "bullets": [
          "Digital image files of every slide",
          "Files organized by tray or box",
          "Options for delivery on a USB drive or by download",
          "Your original slides, returned to you",
          "Optional slideshow video with music"
        ]
      },
      {
        "h2": "More from the archive",
        "paras": [
          "Have prints too? See [photo scanning](/photo-scanning). Own the negatives? See [35mm film scanning](/35mm-film-scanning) and [medium format film scanning](/medium-format-film-scanning). Browse all [archival media digitization](/archival-media-digitization)."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can you scan slides in carousel trays?",
        "a": "Yes. Slides in trays and boxes can be scanned, and the files kept in the order of the tray."
      },
      {
        "q": "Can you scan slides that have faded?",
        "a": "We scan what is there and can talk about color correction. Ask about options for faded slides."
      },
      {
        "q": "Do I get my slides back?",
        "a": "Yes. Your original slides are returned to you."
      },
      {
        "q": "Can you make a slideshow from my slides?",
        "a": "Yes. We can build a slideshow video with music."
      },
      {
        "q": "How much does digitizing cost?",
        "a": "It depends on the format and how much you have. Tell me what you have, roughly how many, and I will give you a quote."
      },
      {
        "q": "Where are you located?",
        "a": "12 Acre Films is based in Spokane, WA. Our operating area is the Inland Northwest. Ask about drop-off and other options for your location."
      }
    ],
    "related": [
      "archival-media-digitization",
      "photo-scanning",
      "35mm-film-scanning",
      "medium-format-film-scanning"
    ]
  },
  {
    "slug": "35mm-film-scanning",
    "name": "35mm Film Scanning",
    "short": "Scan 35mm negatives and film strips into digital images.",
    "eyebrow": "35mm film scanning \u00b7 Negative scanning \u00b7 Film digitizing",
    "h1": "35mm film scanning in Spokane",
    "metaTitle": "35mm Film & Negative Scanning in Spokane, WA",
    "description": "35mm film scanning in Spokane, WA: digitize 35mm negatives and film strips into high-quality digital images for photographers, families and archives.",
    "lead": "Negatives hold more detail than prints ever showed. We scan your 35mm film into digital images, so you can see, share, and print your photographs the way they were meant to look.",
    "cta": "Get a digitizing quote",
    "sections": [
      {
        "h2": "Get the most from your negatives",
        "paras": [
          "A 35mm negative holds a lot of detail and tone, often more than the print made from it. Scanning the negative itself gives you a digital image with the quality of the original.",
          "Negatives can also scratch, get dusty, and fade. Scanning protects your photographs for the future."
        ]
      },
      {
        "h2": "What we scan",
        "bullets": [
          "35mm color and black-and-white negatives",
          "Film strips in sleeves",
          "Family photographs from decades past",
          "Work from photographers and artists",
          "Community and organization history"
        ]
      },
      {
        "h2": "What you get",
        "bullets": [
          "Digital image files of each frame",
          "Files organized by roll or strip",
          "Options for delivery on a USB drive or by download",
          "Your original negatives, returned to you"
        ]
      },
      {
        "h2": "Working in film today?",
        "paras": [
          "Shooting film now? Ask about scanning your new rolls. You may also have [slides](/film-slide-scanning) or [medium format film](/medium-format-film-scanning) to digitize. Browse all [archival media digitization](/archival-media-digitization), or see [photo scanning](/photo-scanning) for prints."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can you scan 35mm negatives?",
        "a": "Yes. We scan 35mm negatives and film strips to high-quality digital images."
      },
      {
        "q": "Why scan the negative instead of the print?",
        "a": "A negative often holds more detail than a print made from it, so scanning the negative can give you a better digital image."
      },
      {
        "q": "Do you scan color and black-and-white film?",
        "a": "Please ask. Tell me what you have and I will confirm."
      },
      {
        "q": "Do I get my negatives back?",
        "a": "Yes. Your originals are returned to you."
      },
      {
        "q": "How much does digitizing cost?",
        "a": "It depends on the format and how much you have. Tell me what you have, roughly how many, and I will give you a quote."
      },
      {
        "q": "Where are you located?",
        "a": "12 Acre Films is based in Spokane, WA. Our operating area is the Inland Northwest. Ask about drop-off and other options for your location."
      }
    ],
    "related": [
      "archival-media-digitization",
      "film-slide-scanning",
      "medium-format-film-scanning",
      "photo-scanning"
    ]
  },
  {
    "slug": "medium-format-film-scanning",
    "name": "Medium Format Film Scanning",
    "short": "Scan medium format roll film negatives and transparencies to digital.",
    "eyebrow": "Medium format film \u00b7 120 film scanning \u00b7 Large-negative scanning",
    "h1": "Medium format film scanning in Spokane",
    "metaTitle": "Medium Format Film Scanning in Spokane",
    "description": "Medium format film scanning in Spokane, WA: digitize 120 roll film negatives and transparencies into high-resolution images for photographers and families.",
    "lead": "Medium format film is prized for its detail and quality. We scan your medium format negatives and transparencies into digital images that do justice to the original.",
    "cta": "Get a digitizing quote",
    "sections": [
      {
        "h2": "Detail worth preserving",
        "paras": [
          "Medium format film uses a negative much larger than 35mm film, which means more detail and smoother tones. Wedding photographers, portrait studios, and serious hobbyists have long used it, and many families have precious work on it.",
          "A careful scan preserves that quality and makes the images easy to share, print, and archive."
        ]
      },
      {
        "h2": "What we scan",
        "bullets": [
          "Medium format roll film negatives",
          "Medium format transparencies",
          "Wedding, portrait, and studio archives",
          "Work from photographers and artists",
          "Historic family and organization photographs"
        ]
      },
      {
        "h2": "What you get",
        "bullets": [
          "High-quality digital image files of each frame",
          "Files organized by roll",
          "Options for delivery on a USB drive or by download",
          "Your original film, returned to you"
        ]
      },
      {
        "h2": "More film and photo services",
        "paras": [
          "You may also have [35mm film](/35mm-film-scanning), [slides](/film-slide-scanning), or prints for [photo scanning](/photo-scanning). Browse all [archival media digitization](/archival-media-digitization)."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can you scan medium format film?",
        "a": "Yes. We scan medium format negatives and transparencies to high-quality digital images."
      },
      {
        "q": "What is medium format film?",
        "a": "Medium format film is roll film that makes a larger negative than 35mm film. It is known for detail and tonal quality."
      },
      {
        "q": "Do you scan wedding and portrait film archives?",
        "a": "Yes. Photographers and families bring us archives of all kinds."
      },
      {
        "q": "Do I get my film back?",
        "a": "Yes. Your originals are returned to you."
      },
      {
        "q": "How much does digitizing cost?",
        "a": "It depends on the format and how much you have. Tell me what you have, roughly how many, and I will give you a quote."
      },
      {
        "q": "Where are you located?",
        "a": "12 Acre Films is based in Spokane, WA. Our operating area is the Inland Northwest. Ask about drop-off and other options for your location."
      }
    ],
    "related": [
      "archival-media-digitization",
      "35mm-film-scanning",
      "film-slide-scanning",
      "photo-scanning"
    ]
  },
  {
    "slug": "dvd-cd-transfer",
    "name": "DVD & CD Transfer",
    "short": "Transfer home-burned DVDs and CDs to files before the discs fail.",
    "eyebrow": "DVD transfer \u00b7 CD transfer \u00b7 Disc to digital",
    "h1": "DVD & CD transfer to digital in Spokane",
    "metaTitle": "DVD & CD to Digital Transfer in Spokane",
    "description": "Transfer home-made DVDs and CDs to digital files in Spokane, WA. Rescue family videos, photos and music from aging discs before they fail.",
    "lead": "Burned discs feel permanent, but they are not. We transfer your family DVDs and CDs to digital files, so the videos, photos, and music on them are saved and easy to access.",
    "cta": "Get a digitizing quote",
    "sections": [
      {
        "h2": "Discs do not last forever",
        "paras": [
          "Home-burned DVDs and CDs can become unreadable over time, and many new computers no longer include a disc drive. Discs that skip, freeze, or fail to open are common, and it is best to copy them before they fail completely."
        ]
      },
      {
        "h2": "What we transfer",
        "bullets": [
          "Home-made DVDs of family videos, weddings, and events",
          "Discs of photographs, and photo CDs",
          "Audio and data CDs",
          "School, church, and organization recordings",
          "Footage and files from older projects"
        ]
      },
      {
        "h2": "What you get",
        "bullets": [
          "Digital files copied from your discs",
          "Files organized and labeled",
          "Options for delivery on a USB drive or by download",
          "Your original discs, returned to you",
          "Optional editing of video into a finished piece"
        ]
      },
      {
        "h2": "Everything in one place",
        "paras": [
          "Collections often include [VHS tapes](/vhs-to-digital), [prints](/photo-scanning), and [slides](/film-slide-scanning) as well as discs. We can digitize them together. Browse all [archival media digitization](/archival-media-digitization)."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Can you transfer DVDs to digital files?",
        "a": "Yes. We transfer home-made DVDs to digital video files you can keep and share."
      },
      {
        "q": "Can you recover files from CDs?",
        "a": "We transfer the files from your CDs to digital storage. If a disc is damaged, ask and I will do what I can."
      },
      {
        "q": "Why transfer my discs now?",
        "a": "Burned discs can degrade over time, and fewer computers can read them. Transferring them now protects what is on them."
      },
      {
        "q": "Do I get my original discs back?",
        "a": "Yes. Your originals are returned to you."
      },
      {
        "q": "How much does digitizing cost?",
        "a": "It depends on the format and how much you have. Tell me what you have, roughly how many, and I will give you a quote."
      },
      {
        "q": "Where are you located?",
        "a": "12 Acre Films is based in Spokane, WA. Our operating area is the Inland Northwest. Ask about drop-off and other options for your location."
      }
    ],
    "related": [
      "archival-media-digitization",
      "vhs-to-digital",
      "photo-scanning",
      "film-slide-scanning"
    ]
  },
{
  "slug": "umatic-to-digital",
  "name": "U-matic 3/4\" Tape to Digital",
  "short": "Transfer U-matic 3/4-inch videotape to digital files before the tapes and decks are gone.",
  "eyebrow": "U-matic 3/4 inch \u00b7 Professional videotape \u00b7 Tape digitizing",
  "h1": "U-matic 3/4-inch tape to digital in Spokane",
  "metaTitle": "U-matic Tape to Digital Transfer in Spokane",
  "description": "Transfer U-matic 3/4-inch videotape to digital in Spokane, WA. Preserve broadcast, school, church and corporate footage from aging professional tapes.",
  "lead": "U-matic 3/4-inch tape was a professional workhorse for decades, and many organizations still have boxes of it on a shelf. We transfer your U-matic tapes to digital files, so the footage on them is preserved and usable again.",
  "cta": "Get a digitizing quote",
  "sections": [
    {
      "h2": "A professional format with a short window left",
      "paras": [
        "U-matic is a 3/4-inch videocassette format introduced by Sony in 1971. It was widely used in broadcasting, news gathering, schools, universities, churches, hospitals, and corporate training for years before newer formats replaced it.",
        "Today the tapes are decades old, and the machines that play them are rare and require care to keep working. Magnetic tape ages, and tapes stored in less than ideal conditions can become difficult or impossible to play. The sooner they are transferred, the better the chance of saving what is on them."
      ]
    },
    {
      "h2": "Who has U-matic tapes",
      "bullets": [
        "Schools, colleges, and universities with lecture and program archives",
        "Churches and community organizations with recorded services and events",
        "Businesses with training, marketing, and company history videos",
        "Hospitals, government agencies, and public institutions",
        "Local broadcasters, production companies, and filmmakers",
        "[Documentary](/documentary) filmmakers looking for archival footage",
        "Families and estates who inherited a collection"
      ]
    },
    {
      "h2": "What you get",
      "bullets": [
        "Digital video files you can watch, edit, and share",
        "Files organized so you can find each tape",
        "Options for delivery on a USB drive or by download",
        "Your original tapes, returned to you",
        "Optional editing of footage into a finished piece, such as a [history film](/corporate-video-production) or [tribute video](/interview-testimonial-video)"
      ]
    },
    {
      "h2": "Organizational archives",
      "paras": [
        "If your organization has U-matic tapes, ask about transferring the whole collection. Many [nonprofits](/for/nonprofits), schools, and businesses are surprised by what turns up, from founders' speeches to events no one thought was recorded. Digitized, that footage can become a history video, a fundraising piece, or a documentary."
      ]
    },
    {
      "h2": "Other tape formats",
      "paras": [
        "Home videos on [VHS](/vhs-to-digital)? See our VHS transfer service. For photographs, slides, and film, see [photo scanning](/photo-scanning), [film slides](/film-slide-scanning), [35mm film](/35mm-film-scanning), and [medium format film](/medium-format-film-scanning). Browse all [archival media digitization](/archival-media-digitization)."
      ]
    }
  ],
  "faqs": [
    {
      "q": "What is U-matic tape?",
      "a": "U-matic is a 3/4-inch videocassette format introduced by Sony in 1971. It was widely used in broadcast, education, and corporate video."
    },
    {
      "q": "Can you transfer U-matic tapes to digital?",
      "a": "Yes. We transfer U-matic 3/4-inch tapes to digital video files."
    },
    {
      "q": "My tapes have been in storage for years. Can they still be transferred?",
      "a": "Often, yes, but condition matters. Bring them in and I will tell you what I find. The sooner tapes are transferred, the better."
    },
    {
      "q": "Do you handle both large and small U-matic cassettes?",
      "a": "Please ask. Tell me what you have and I will confirm."
    },
    {
      "q": "Can you digitize a large collection?",
      "a": "Yes. Organizations often have dozens or hundreds of tapes. Tell me how many and I will provide a quote."
    },
    {
      "q": "How much does digitizing cost?",
      "a": "It depends on the format and how much you have. Tell me what you have, roughly how many, and I will give you a quote."
    },
    {
      "q": "Where are you located?",
      "a": "12 Acre Films is based in Spokane, WA. Our operating area is the Inland Northwest. Ask about drop-off and other options for your location."
    }
  ],
  "related": [
    "archival-media-digitization",
    "vhs-to-digital",
    "dvd-cd-transfer",
    "photo-scanning"
  ]
}
];

export const bySlug: Record<string, Service> = Object.fromEntries([...services, ...audiences, ...formats].map((s) => [s.slug, s]));
