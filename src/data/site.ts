const CDN = "https://b4550151.smushcdn.com/4550151/wp-content/uploads";

export const heroImages = [
  { src: `${CDN}/2025/06/hero-1.webp`, alt: "Aura AI face scanning biometric authentication mobile interface design" },
  { src: `${CDN}/2025/06/hero-2.webp`, alt: "Aura AI SaaS platform dashboard user interface displayed on laptop screen" },
  { src: `${CDN}/2025/12/brand-identity-hero.webp`, alt: "E-commerce product branding and packaging design for Elora Kid's Organic Multi supplement" },
  { src: `${CDN}/2025/06/hero-4.webp`, alt: "Interactive SaaS analytics graph chart and data visualization dashboard UI" },
  { src: `${CDN}/2025/06/hero-6.webp`, alt: "Custom responsive web application design interface on desktop monitor" },
  { src: `${CDN}/2025/06/hero-7.webp`, alt: "Aura AI platform user experience design and mobile app layout" },
  { src: `${CDN}/2025/06/hero-8.webp`, alt: "Fintech mobile banking app and digital payment credit card interface design" },
  { src: `${CDN}/2025/06/hero-9.webp`, alt: "User-centered mobile app control settings and security panel UI layout" },
  { src: `${CDN}/2025/06/hero-10.webp`, alt: "Custom iOS and Android mobile app user interface layout design" },
  { src: `${CDN}/2025/06/hero-5.webp`, alt: "AI-powered mobile app user interface and smart workflow design mockup" },
  { src: `${CDN}/2025/06/hero-11.webp`, alt: "Polished mobile app UI UX design showcase by six2eight design agency" },
];

export type Service = {
  title: string;
  titleTop: string;
  titleBottom: string;
  tags: string[];
  copy: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "SaaS Web & Application Design",
    titleTop: "SaaS",
    titleBottom: "Web & Application Design",
    tags: ["Dashboard UI", "Data Visualization", "IA", "Admin Panel"],
    copy: "Your SaaS platform should simplify complex tasks. We create intuitive dashboards and workflows that improve user efficiency.",
    image: `${CDN}/2025/06/sass-web-application.webp`,
  },
  {
    title: "Shopify Development",
    titleTop: "Shopify",
    titleBottom: "Development",
    tags: ["Product Page", "Checkout Optimization", "CRO"],
    copy: "Your online store should make shopping easy and drive more sales. We create high-converting Shopify experiences with smooth navigation and seamless checkout.",
    image: `${CDN}/2025/06/shopify-development.webp`,
  },
  {
    title: "Mobile App Design",
    titleTop: "Mobile",
    titleBottom: "App Design",
    tags: ["Wireframes", "Prototypes", "UI UX", "Usability Testing"],
    copy: "It is important that your app feels effortless and native. We design intuitive interfaces that enhance usability and keep users engaged.",
    image: `${CDN}/2025/06/mobile-app.webp`,
  },
  {
    title: "Webflow Development",
    titleTop: "Webflow",
    titleBottom: "Development",
    tags: ["Responsive Design", "No-Code Development", "User Interface"],
    copy: "We build Webflow websites that are flexible, scalable, and easy to manage. You can also count on us for custom animations and CMS integration.",
    image: `${CDN}/2025/06/webflow-development.webp`,
  },
  {
    title: "Motion Graphics Design",
    titleTop: "Motion",
    titleBottom: "Graphics Design",
    tags: ["Microinteractions", "UI Animation", "Storyboarding"],
    copy: "We create engaging motion graphics that enhance user experience and bring your brand to life.",
    image: `${CDN}/2025/02/motion-graphic.png`,
  },
  {
    title: "Branding",
    titleTop: "Branding",
    titleBottom: "Identity",
    tags: ["Logo Design", "Style Guide", "Typography", "Brand guideline"],
    copy: "The brand you build should be memorable and instantly recognizable. We craft distinct visual identities that align with your business and leave a lasting impact.",
    image: `${CDN}/2025/02/brand-identity-service-feature.webp`,
  },
  {
    title: "UI/UX Design",
    titleTop: "UI/UX",
    titleBottom: "Design",
    tags: ["Wireframes", "Prototypes", "Design system"],
    copy: "A great product starts with understanding the user. We design clean, intuitive interfaces that make every interaction feel effortless and purposeful.",
    image: `${CDN}/2025/06/ui-ux-service.webp`,
  },
  {
    title: "Web Development",
    titleTop: "Web",
    titleBottom: "Development",
    tags: ["API Development", "CMS Development", "Back-end"],
    copy: "Your website should work flawlessly on any device and load in seconds. We build fast, secure, and scalable sites that perform as good as they look.",
    image: `${CDN}/2025/06/web-developement.webp`,
  },
  {
    title: "Web Design",
    titleTop: "Web",
    titleBottom: "Design",
    tags: ["Navigation", "User Flow", "Sitemap", "UI UX"],
    copy: "You need a website that's easy to navigate and visually stunning. We design seamless user flows that guide visitors effortlessly from start to conversion.",
    image: `${CDN}/2025/02/web_design_service_image.webp`,
  },
  {
    title: "WordPress Development",
    titleTop: "WordPress",
    titleBottom: "Development",
    tags: ["Custom Dev", "Plugin", "Headless Development"],
    copy: "There is more to WordPress sites than just looking good. We build high-speed, SEO-friendly sites with custom functionality.",
    image: `${CDN}/2025/02/wordpress-service-cards.webp`,
  },
];

export type ClientLogo = { name: string; domain: string };

export const clientLogos: ClientLogo[] = [
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Crocs", domain: "crocs.com" },
  { name: "Ace Hardware", domain: "acehardware.com" },
  { name: "Berlitz", domain: "berlitz.com" },
  { name: "Mars", domain: "mars.com" },
  { name: "Shopify", domain: "shopify.com" },
  { name: "Webflow", domain: "webflow.com" },
  { name: "Figma", domain: "figma.com" },
  { name: "Stripe", domain: "stripe.com" },
  { name: "Notion", domain: "notion.so" },
  { name: "Slack", domain: "slack.com" },
  { name: "Airbnb", domain: "airbnb.com" },
  { name: "Squire", domain: "getsquire.com" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "Intercom", domain: "intercom.com" },
  { name: "Atlassian", domain: "atlassian.com" },
  { name: "Dropbox", domain: "dropbox.com" },
  { name: "Canva", domain: "canva.com" },
  { name: "Zoom", domain: "zoom.us" },
  { name: "Spotify", domain: "spotify.com" },
  { name: "Uber", domain: "uber.com" },
  { name: "Adobe", domain: "adobe.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "Klarna", domain: "klarna.com" },
  { name: "Revolut", domain: "revolut.com" },
  { name: "Asana", domain: "asana.com" },
];


export const portfolioFilters = [
  "All",
  "Website Design",
  "Web Development",
  "UI/UX Design",
  "WordPress",
  "Mobile App",
  "SaaS",
  "Webflow",
  "Branding",
  "Motion Graphics",
];

export type Project = {
  name: string;
  copy: string;
  image: string;
  tools: string[];
  categories: string[];
};

export const projects: Project[] = [
  {
    name: "Sixpay",
    copy: "Our R&D team explored faster, flexible digital banking built for fearless business growth.",
    image: `${CDN}/2025/06/hero-8.webp`,
    tools: ["Figma", "Webflow"],
    categories: ["UI/UX Design", "Webflow", "SaaS"],
  },
  {
    name: "Userpath",
    copy: "We redesigned an agency site with high-velocity UI/UX, helping marketers automate and convert.",
    image: `${CDN}/2025/06/hero-4.webp`,
    tools: ["Figma"],
    categories: ["Website Design", "UI/UX Design", "Web Development"],
  },
  {
    name: "Sereni Mind",
    copy: "Our R&D team proved how AI brings 24/7 mental health support to phones.",
    image: `${CDN}/2025/06/hero-7.webp`,
    tools: ["Figma"],
    categories: ["Mobile App", "UI/UX Design"],
  },
  {
    name: "Webtool",
    copy: "Built by six2eight, Webtool uses AI to transform complex audits into clear performance insights.",
    image: `${CDN}/2025/06/hero-2.webp`,
    tools: ["Figma"],
    categories: ["SaaS", "Website Design", "Web Development"],
  },
  {
    name: "Elora",
    copy: "A playful supplement brand identity built for shelf impact and e-commerce conversion.",
    image: `${CDN}/2025/12/brand-identity-hero.webp`,
    tools: ["Figma"],
    categories: ["Branding", "Motion Graphics"],
  },
  {
    name: "Aura AI",
    copy: "Biometric onboarding reimagined — a secure flow that takes seconds, not minutes.",
    image: `${CDN}/2025/06/hero-1.webp`,
    tools: ["Figma"],
    categories: ["Mobile App", "UI/UX Design", "WordPress"],
  },
];

export const testimonials = [
  {
    name: "DailyTime",
    quote:
      "Responses were fast, things didn't get messy, and the process actually made sense. You don't always get that with designers, so it was refreshing.",
  },
  {
    name: "Vizerto",
    quote:
      "They made sure the app felt simple to use without losing any of the bells and whistles. Everything just worked better after their touch.",
  },
  {
    name: "Storytime Owls",
    quote:
      "They actually get how users think, and the onboarding ended up feeling really smooth. We liked it so much we're already planning the next round of changes.",
  },
  {
    name: "GunMade",
    quote:
      "They explained things in plain English, which made choices easy. Felt like a real collaboration, not a cookie-cutter process.",
  },
  {
    name: "Fiction Profits",
    quote:
      "Communication was easy and we didn't have to chase anyone. It's nice when a project just clicks like that.",
  },
  {
    name: "Core & More",
    quote: "Issues were fixed fast, and the work was solid. Will definitely reach out for the next project.",
  },
];

export const stats = [
  { value: "200+", label: "Projects Delivered", copy: "Behind every product we build is a person using it. That's what good design is for." },
  { value: "50+", label: "From 2 to 50+", copy: "Started as a small team is now 50+ people working across the globe." },
  { value: "92%", label: "Client satisfaction", copy: "Most clients don't leave. That's the real measure of quality work." },
  { value: "15+", label: "Industries served", copy: "Fintech, SaaS, healthcare, e-commerce — we adapt to your domain." },
  { value: "48hr", label: "Average kickoff time", copy: "No long onboarding. We move fast without cutting corners." },
  { value: "$2B+", label: "Revenue influenced", copy: "Revenue raised by our clients over the past decade. Good design compounds." },
];

export const processSteps = [
  {
    name: "Discovery",
    image: `${CDN}/2025/06/hero-6.webp`,
    alt: "Project discovery phase and initial UX strategy mapping workshop",
    copy: "We dig into your business goals, users, and constraints before a single pixel moves.",
  },
  {
    name: "Research",
    image: `${CDN}/2025/06/hero-4.webp`,
    alt: "User research, competitive analysis, and tech stack development strategy",
    copy: "User research, competitive analysis, and the right tech stack for the job.",
  },
  {
    name: "UI/UX Design",
    image: `${CDN}/2025/06/hero-7.webp`,
    alt: "Custom mobile app and web UI UX design wireframes and visual interface prototype",
    copy: "Wireframes, prototypes, and polished interfaces backed by a scalable design system.",
  },
  {
    name: "Development",
    image: `${CDN}/2025/06/hero-2.webp`,
    alt: "Custom full-stack web application development and responsive frontend coding",
    copy: "Clean, optimized code built for speed, SEO, and long-term maintainability.",
  },
  {
    name: "QA Testing",
    image: `${CDN}/2025/06/hero-9.webp`,
    alt: "Cross-browser QA testing, usability verification, and performance optimization",
    copy: "Every browser, every breakpoint, every edge case — checked before you ever see it.",
  },
  {
    name: "Launch",
    image: `${CDN}/2025/06/hero-10.webp`,
    alt: "Secure web application deployment, site launch, and post-launch performance monitoring",
    copy: "We ship, monitor, and keep improving with analytics-led optimisation.",
  },
];

export const faqs = [
  {
    q: "What UI/UX design services does six2eight provide?",
    a: "We provide complete UX and UI design services for web, SaaS, and mobile products. This includes user research, wireframing, prototyping, usability testing, and polished UI design. We also create scalable design systems that ensure consistency across products and platforms. Our goal is to deliver intuitive, conversion-driven designs that drive growth and engagement.",
  },
  {
    q: "How does six2eight approach user-centered design?",
    a: "We follow a human-centered design process focused on real user needs and behaviors. We conduct detailed user research, competitor analysis, and usability testing before making design decisions. We continuously gather user feedback and iterate on designs based on real-world interactions and outcomes. The result is an intuitive and accessible experience that aligns with user expectations and business objectives.",
  },
  {
    q: "What industries does six2eight specialize in?",
    a: "Our team has expertise across SaaS, fintech, healthcare, eCommerce, and enterprise platforms. We understand the unique challenges and user needs within each industry we serve. We tailor every UX/UI solution to align with specific industry goals and audience expectations. Our work delivers digital experiences that feel seamless and deliver measurable business results.",
  },
  {
    q: "How does six2eight balance UI/UX design with technical development?",
    a: "We align design and development from the start through close collaboration between both teams. Our designers create interfaces with development feasibility and performance in mind from day one. Developers provide ongoing input during design phases to ensure seamless implementation and technical excellence. This process delivers visually beautiful, high-performing websites that meet both design and code standards.",
  },
  {
    q: "What is six2eight's process for building high-performing websites?",
    a: "Our process starts with UX strategy, research, and wireframing based on user insights. We then move to detailed UI design aligned with brand guidelines and usability best practices. Our development team builds the site with clean, optimized code for speed and SEO. Finally, we test extensively before launch to ensure flawless performance across all devices and browsers.",
  },
  {
    q: "How long does a typical website design and development project take?",
    a: "Project timelines typically range from 8 to 12 weeks, depending on project complexity and scope. We begin with in-depth discovery and research to align strategy with business and user goals. Our agile workflow allows flexibility while maintaining clear milestones and predictable delivery timelines. This ensures high-quality outcomes with realistic project schedules that meet client expectations.",
  },
  {
    q: "How does six2eight ensure quality during development?",
    a: "We conduct thorough QA testing on all browsers, screen sizes, and device types before launch. Performance optimization, accessibility compliance, and cross-browser compatibility are key parts of our QA process. We also involve stakeholders in testing through user acceptance tests to validate functionality and usability. This ensures every product we deliver performs reliably and provides an exceptional user experience.",
  },
  {
    q: "Does six2eight provide post-launch optimization and support?",
    a: "Yes, we offer ongoing optimization, UX improvements, and support after the project launch. We help monitor site performance using analytics and user behavior insights to guide improvements. Our team refines design elements and functionality based on evolving user needs and feedback. This approach keeps your website competitive, high-performing, and aligned with your business growth goals.",
  },
];

export const greetings = [
  "Hello",
  "你好",
  "नमस्ते",
  "Hola",
  "Bonjour",
  "مرحبا",
  "হ্যালো",
  "Olá",
  "ہیلو",
  "Hallo",
];

export const CALENDLY = "https://calendly.com/six2eight-sales/web-discovery-call";
