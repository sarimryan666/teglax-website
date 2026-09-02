export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subCategory?: string;
  description: string;
  tags: string[];
  featured?: boolean;
  metrics?: string;
  appScreenshot?: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  crossLinks: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  company: string;
  location: string;
  industry: string;
  project: string;
  result: string;
  rating: number;
  platform: 'Clutch' | 'Upwork';
  verified: boolean;
}

export const SITE_META = {
  title: "Teglax | Digital Agency",
  description: "Teglax is a full-service digital agency. We design, build and grow the websites, apps and marketing engines ambitious companies run on.",
  estYear: "2023",
  locations: "Pakistan ↔ Remote",
  hq: {
    title: "Okara, Pakistan (HQ)",
    address: "MA Jinnah Road, Okara, Pakistan 56300",
    coords: "30.8100° N, 73.4500° E",
    phone: "+92 305 9810233",
    email: "info@teglax.com"
  },
  usOps: {
    title: "United States Operations",
    address: "Remote-first, US client coverage",
    phone: "+1 (916) 382-0727",
    email: "Sarim@teglax.com"
  },
  socials: {
    linkedin: "https://linkedin.com/company/teglax",
    upwork: "https://upwork.com/freelancers/sarimrayyan",
    clutch: "https://clutch.co/profile/teglax",
    instagram: "https://instagram.com/teglax",
    x: "https://x.com/teglax"
  }
};

export const HOME_HERO = {
  headline: "We design, build and market digital products that move real numbers.",
  metaLine: "Teglax · Est. 2023 · Pakistan ↔ Remote",
  subDescription: "We're a full-service digital agency building the websites, apps and growth engines ambitious companies run on. Design, development and marketing sit under one roof, so what ships is what was planned.",
  ctaPrimary: "Start a Project",
  ctaSecondary: "View Selected Work"
};

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "pathsync",
    title: "PathSync",
    category: "Custom Web Applications",
    description: "A complete ground-transportation platform, built to streamline fleet operations and give logistics companies one tool to run the whole service.",
    tags: ["Web Application", "Custom Software", "Logistics"],
    featured: true,
    metrics: "Streamlined fleet operations across US carriers"
  },
  {
    id: "repair-pricer",
    title: "Repair Pricer",
    category: "Inspection SaaS",
    description: "Turns any home-inspection report into an accurate repair estimate in 24 hours or less — no-code, fleet-ready pricing for inspectors nationwide.",
    tags: ["Web Application", "Inspection SaaS", "Automation"],
    featured: true,
    metrics: "24-hour turnaround estimate engine"
  },
  {
    id: "scholarden",
    title: "ScholarDen",
    category: "EdTech Platform",
    description: "An AI-powered GRE prep platform that's already helped 50,000+ students find and apply to scholarships and ace test prep.",
    tags: ["Web Application", "EdTech", "AI Integration"],
    featured: true,
    metrics: "50,000+ active students empowered"
  }
];

export const CAPABILITIES = [
  { number: "01", title: "AI & Automation", desc: "Agents & no-code workflows that cut the busywork.", slug: "ai-automation" },
  { number: "02", title: "Web Development", desc: "High-converting sites & custom web applications.", slug: "web-development" },
  { number: "03", title: "Mobile App Development", desc: "Native & cross-platform apps users keep open.", slug: "mobile-app-development" },
  { number: "04", title: "UI/UX & Product Design", desc: "Interfaces engineered around the conversion path.", slug: "ui-ux-product-design" },
  { number: "05", title: "Digital Marketing", desc: "Google & Meta campaigns tuned to ROI, not vanity.", slug: "digital-marketing" },
  { number: "06", title: "SEO & Content", desc: "Organic visibility that compounds month over month.", slug: "seo-content" },
  { number: "07", title: "E-commerce Builds", desc: "Shopify & custom storefronts wired to scale.", slug: "ecommerce-builds" },
  { number: "08", title: "Branding & Creative", desc: "Identity systems and ad creative that get noticed.", slug: "branding-creative" }
];

export const STATS = [
  { value: "38+", label: "Projects Delivered" },
  { value: "9.2M+", label: "Ad Impressions" },
  { value: "9.6K+", label: "Conversions" },
  { value: "4", label: "Disciplines, One Team" }
];

export const WHY_TEGLAX = [
  { number: "01", title: "One team, full stack", desc: "Web, app, design and ads under one roof — no hand-offs, no finger-pointing." },
  { number: "02", title: "Numbers, not vanity", desc: "We optimise for conversions, leads and revenue — and report honestly." },
  { number: "03", title: "Proven across markets", desc: "From custom SaaS to e-commerce, B2B to D2C — the system adapts and delivers." },
  { number: "04", title: "A partner that stays", desc: "Responsive support that stays in the loop long after launch day." }
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: "Sarim", role: "Founder & Full-Stack AI Developer", bio: "Leads strategy, business development and client delivery.", initials: "SR" },
  { name: "Talha Latif", role: "Flutter Lead", bio: "Architects cross-platform iOS & Android mobile applications.", initials: "TL" },
  { name: "Jahanzaib", role: "Full Stack Developer", bio: "Engineers robust web services, database backends & APIs.", initials: "JB" },
  { name: "Usman", role: "Flutter Developer", bio: "Specializes in high-performance mobile UI & state management.", initials: "UM" }
];

export const WORKFLOW = [
  {
    step: "01",
    title: "Services",
    items: [
      "AI & Automation", "Web Development", "Mobile Development",
      "UI/UX & Product Design", "Digital Marketing", "SEO & Content",
      "E-commerce Builds", "Branding & Creative"
    ]
  },
  {
    step: "02",
    title: "Research",
    items: [
      "Project Goals", "Target Audience", "Competitors",
      "Content Requirements", "User Needs"
    ]
  },
  {
    step: "03",
    title: "Implementation",
    items: [
      "Interactions", "Motion", "Development",
      "Testing", "Quality Assurance"
    ]
  }
];

export const PROCESS_STEPS = [
  { step: "01", title: "Discover", desc: "Goals, audience & the numbers that define success." },
  { step: "02", title: "Design", desc: "UX flows & visual systems mapped to the goal." },
  { step: "03", title: "Build", desc: "Clean, fast, scalable development & QA." },
  { step: "04", title: "Launch", desc: "Go-live, tracking & campaign ignition." },
  { step: "05", title: "Grow", desc: "Optimise, report, scale what's working." }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "trucking",
    quote: "They were highly responsive to our needs, promptly addressing our questions or concerns.",
    author: "Owner",
    title: "Owner",
    company: "E-Trucking Permits",
    location: "Sacramento, California",
    industry: "Supply Chain, Logistics & Transport",
    project: "Web development, branding and digital marketing for a trucking-industry services company.",
    result: "45% increase in website traffic, 50% increase in social engagement and followers, improved search rankings.",
    rating: 4.5,
    platform: "Clutch",
    verified: true
  },
  {
    id: "star-contractors",
    quote: "What impressed me most about Teglax was their dedication to client satisfaction and proactive communication.",
    author: "Huzaifa Atique",
    title: "CEO",
    company: "Star Contractors and Developers (Pvt) Limited",
    location: "Pakistan",
    industry: "Contracting & Construction",
    project: "Website development and branding for a construction firm.",
    result: "Significant traffic growth, first-page keyword rankings, increased client inquiries and revenue growth within six months.",
    rating: 4.0,
    platform: "Clutch",
    verified: true
  }
];

export const TRUST_BAR = {
  clutch: {
    overall: "4.3/5",
    verifiedCount: "2 verified reviews",
    metrics: "Quality 4.5 · Schedule 4.3 · Cost 5.0 · Willing to Refer 4.5",
    link: "https://clutch.co/profile/teglax"
  },
  upwork: {
    rating: "5.0/5",
    reviewsCount: "9 reviews",
    badge: "100% Job Success · Rising Talent",
    completedJobs: "12 completed jobs",
    link: "https://upwork.com/freelancers/sarimrayyan"
  }
};

export const ALL_WORK_CATEGORIES = [
  {
    id: "web-dev",
    number: "01",
    title: "Web Development",
    count: "15 projects",
    subgroups: [
      {
        name: "A. Custom Web Applications (5)",
        projects: [
          { name: "PathSync", desc: "A complete ground-transportation solution — fleet operations, partner engagement, and client service streamlined into one platform.", featured: true, tag: "Web Application" },
          { name: "Repair Pricer", desc: "Home Inspection SaaS. Accurate repair estimates from any inspection report in 24 hours or less.", featured: true, tag: "Inspection SaaS" },
          { name: "ScholarDen", desc: "GRE Test-Prep Platform. An AI-powered scholarship and test-prep platform already used by 50,000+ students.", featured: true, tag: "EdTech" },
          { name: "Dimension Group", desc: "Custom web platform built for multi-entity corporate operations.", featured: false, tag: "Web Application" },
          { name: "The Access Academy", desc: "Online learning & course platform engineered for high conversion.", featured: false, tag: "Education" }
        ]
      },
      {
        name: "B. Corporate & Business Websites (10)",
        projects: [
          { name: "Dimension Adv", desc: "Corporate marketing website & lead capture engine.", tag: "Corporate" },
          { name: "AA Properties", desc: "Real estate property showcase and client portal.", tag: "Real Estate" },
          { name: "FAB", desc: "Business services corporate storefront.", tag: "Business" },
          { name: "Malle", desc: "Retail platform & digital catalog.", tag: "Retail" },
          { name: "Northpole 2", desc: "Enterprise corporate identity site.", tag: "Corporate" },
          { name: "Northpole", desc: "Original brand website and showcase.", tag: "Corporate" },
          { name: "RS", desc: "Business consulting web presence.", tag: "Business" },
          { name: "Skininfinity", desc: "Beauty & skincare brand portal.", tag: "Beauty" },
          { name: "Portland Chauffeur", desc: "Luxury transport booking & dispatch site.", tag: "Transport" },
          { name: "TheNFTNew", desc: "Web3 news & token portal.", tag: "Web3" }
        ]
      }
    ]
  },
  {
    id: "mobile-apps",
    number: "02",
    title: "Mobile App Development",
    count: "11 apps",
    note: "Meditation, fitness, crypto, legal, media & AI, iOS & Android. Built for retention with clean onboarding & habit loops.",
    featuredApps: [
      { name: "SpiritualYou", tag: "Meditation & Awaken", desc: "Lucid dreaming, guided meditation and astral projection, built as an all-in-one wellness app." },
      { name: "Pet AI", tag: "AI · Pet Care", desc: "A pregnancy and care-tracking companion for dog owners, backed by AI." },
      { name: "The Pulse App", tag: "Health & Wellness", desc: "Live location-based reviews and real-time experiences, built for retention from day one." }
    ],
    otherApps: [
      "Hero (Pain Tracking)", "Rel8.app (Social)", "Home Appraised (Real Estate)",
      "EQ9 (Crypto Wallet)", "FixMix (Services)", "Legal Direct (Legal)",
      "FNMR (Fitness)", "Montage Doku (Media)"
    ]
  },
  {
    id: "ecommerce-cms",
    number: "03",
    title: "E-commerce & CMS",
    count: "15 builds",
    subgroups: [
      {
        name: "A. Shopify Storefronts (6)",
        projects: ["Chicago Makers", "Jewellers", "Rediesence", "The Willow Stone", "Two Italian Pizza", "Stickora"]
      },
      {
        name: "B. WordPress Builds (9)",
        projects: ["AA Properties", "FAB", "Malle", "Northpole 2", "Northpole", "RS", "Skininfinity", "Portland Chauffeur", "TheNFTNew"]
      }
    ]
  },
  {
    id: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    count: "10 campaigns",
    campaigns: [
      {
        type: "Google Ads (3)",
        items: [
          { name: "Travel N' Relax", metric: "+68% conversion", desc: "Search & Display on travel-intent keywords, deal-led ad copy and landing page CRO." },
          { name: "Safety Supply Canada", metric: "9.09M impressions", desc: "Performance Search & Shopping for safety gear; B2B + B2C targeting." },
          { name: "Vegas Demolition King", metric: "5.0★ rated", desc: "Localized lead-gen on high-intent keywords driving phone calls & quote requests." }
        ]
      },
      {
        type: "Meta Ads (3)",
        items: [
          { name: "Tier 1 Peptides", metric: "35K+ reach", desc: "Built Meta infrastructure from scratch — Business Portfolio, page & compliant ad account." },
          { name: "Stickora", metric: "451K reach", desc: "Brand built from zero: Shopify store, social accounts & Meta Ads to drive sales." },
          { name: "Dimension Adv", metric: "Brand Growth", desc: "Corporate website from scratch, managed Meta Ads for leads & awareness." }
        ]
      },
      {
        type: "Social Media & Email (4)",
        items: [
          { name: "Stickora, Dimension Adv, Access Academy", metric: "Full Social Management", desc: "Content creation, community trust, course & product promotion." },
          { name: "Clean Owl (Lifecycle)", metric: "Cold-Email Engine", desc: "Infrastructure from scratch: custom inboxes, automated warmup, Clay + Instantly + HubSpot." }
        ]
      }
    ]
  },
  {
    id: "full-service",
    number: "05",
    title: "Full-Service Engagements",
    count: "3 partners",
    note: "Where Teglax owns the whole stack — design, development and ongoing growth under one roof.",
    items: [
      { name: "Stickora", role: "Full-Service Partner", scope: "Shopify Store Development, Website Development, Meta Ads, Social Media Management" },
      { name: "Dimension Adv", role: "Full-Service Partner", scope: "Website Development, Meta Ads, Social Media Management" },
      { name: "The Access Academy", role: "Full-Service Partner", scope: "Website Development, Social Media Management" }
    ]
  }
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "ai-automation": {
    slug: "ai-automation",
    number: "01",
    title: "AI & Automation",
    tagline: "Agents & no-code workflows that cut the busywork.",
    description: "We design and deploy autonomous AI agents, LLM integrations, and custom workflow automations that transform manual operations into silent, automated engines. Save hundreds of operational hours every month.",
    deliverables: [
      "Custom AI Agents & Claude/Gemini API integrations",
      "No-code & low-code workflow automation (Make.com / Zapier / n8n)",
      "Cold outreach infrastructure (Instantly + Clay + HubSpot)",
      "Automated data extraction & internal knowledge bases",
      "Process optimization & API middleware engineering"
    ],
    crossLinks: ["web-development", "mobile-app-development", "digital-marketing"]
  },
  "web-development": {
    slug: "web-development",
    number: "02",
    title: "Web Development",
    tagline: "High-converting sites & custom web applications.",
    description: "From custom SaaS platforms like PathSync and Repair Pricer to corporate flagships, we build ultra-fast, responsive web applications engineered for conversions, performance, and long-term scalability.",
    deliverables: [
      "Custom Web Applications (Next.js, React, Node)",
      "SaaS Platforms & Multi-tenant Architecture",
      "API Integrations & Custom Backend Systems",
      "High-converting Corporate & Marketing Websites",
      "Performance Optimization & Core Web Vitals Tuning"
    ],
    crossLinks: ["ui-ux-product-design", "ai-automation", "seo-content"]
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    number: "03",
    title: "Mobile App Development",
    tagline: "Native & cross-platform apps users keep open.",
    description: "We architect intuitive, high-performance iOS and Android applications using Flutter and native technologies. With 11+ apps shipped across meditation, fitness, crypto, and AI, we build habit loops that drive retention.",
    deliverables: [
      "Cross-Platform iOS & Android Apps (Flutter)",
      "Native Mobile UI & Custom Animation Systems",
      "Real-time Push Notifications & In-App Purchases",
      "Location-Based Services & Off-line Data Sync",
      "App Store & Google Play Publishing & Maintenance"
    ],
    crossLinks: ["ui-ux-product-design", "ai-automation", "branding-creative"]
  },
  "ui-ux-product-design": {
    slug: "ui-ux-product-design",
    number: "04",
    title: "UI/UX & Product Design",
    tagline: "Interfaces engineered around the conversion path.",
    description: "Great design is not just visual polish; it is clear intent. We craft user flows, wireframes, high-fidelity Figma prototypes, and design systems that reduce friction and maximize user engagement.",
    deliverables: [
      "User Research & Information Architecture",
      "Wireframing & Interactive Figma Prototypes",
      "Design Systems & Component Libraries",
      "Conversion Rate Optimization (CRO) UX Reviews",
      "Mobile-First Responsive Interface Design"
    ],
    crossLinks: ["web-development", "mobile-app-development", "branding-creative"]
  },
  "digital-marketing": {
    slug: "digital-marketing",
    number: "05",
    title: "Digital Marketing",
    tagline: "Google & Meta campaigns tuned to ROI, not vanity.",
    description: "We run data-backed performance marketing campaigns on Google Ads and Meta Ads that target high-intent buyers, lift conversion rates, and deliver predictable ROAS for B2B and D2C brands.",
    deliverables: [
      "Google Ads (Search, Display, Shopping & Local Lead-Gen)",
      "Meta Ads (Infrastructure setup, compliance, creative testing)",
      "Landing Page Copywriting & Conversion Optimization",
      "Social Media Management & Brand Community Building",
      "Transparent Analytics & Revenue Attribution"
    ],
    crossLinks: ["seo-content", "web-development", "ai-automation"]
  },
  "seo-content": {
    slug: "seo-content",
    number: "06",
    title: "SEO & Content",
    tagline: "Organic visibility that compounds month over month.",
    description: "Dominate search engine rankings with high-intent keyword strategies, technical site audits, clean page structure, and authoritative content engines built for steady organic traffic growth.",
    deliverables: [
      "Technical SEO Audits & On-Page Optimization",
      "Keyword Research & Search Intent Mapping",
      "Content Strategy & Production Workflows",
      "Local SEO & Google Business Profile Optimization",
      "Link Building & Domain Authority Strategy"
    ],
    crossLinks: ["digital-marketing", "web-development", "ecommerce-builds"]
  },
  "ecommerce-builds": {
    slug: "ecommerce-builds",
    number: "07",
    title: "E-commerce Builds",
    tagline: "Shopify & custom storefronts wired to scale.",
    description: "We build custom Shopify storefronts and WordPress e-commerce solutions optimized for quick checkout, mobile responsiveness, seamless payment integrations, and high average order values.",
    deliverables: [
      "Custom Shopify Store Design & Theme Development",
      "WooCommerce & WordPress Custom Storefronts",
      "Payment Gateway & Inventory Sync Integrations",
      "Product Catalog & Collection Architecture",
      "Checkout Flow Optimization & Cart Recovery"
    ],
    crossLinks: ["digital-marketing", "web-development", "branding-creative"]
  },
  "branding-creative": {
    slug: "branding-creative",
    number: "08",
    title: "Branding & Creative",
    tagline: "Identity systems and ad creative that get noticed.",
    description: "Position your company as an industry leader with visual identity systems, logos, typography palettes, brand guidelines, and high-converting ad creative built to stand out.",
    deliverables: [
      "Logo Design & Full Visual Identity Systems",
      "Brand Guidelines & Typography Scale",
      "High-Converting Ad Creatives & Video Assets",
      "Social Media Templates & Pitch Decks",
      "Marketing Collateral & Packaging Design"
    ],
    crossLinks: ["ui-ux-product-design", "digital-marketing", "ecommerce-builds"]
  }
};
