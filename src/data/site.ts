import {
  BarChart3,
  Bot,
  Code2,
  Gauge,
  Globe2,
  Layers3,
  MessageCircle,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Workflow
} from "lucide-react";
import type { Localized } from "@/lib/i18n";

export const siteConfig = {
  name: "Abdullah Selim",
  role: "E-Commerce Systems Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://abdullahselim.com",
  email: "3bdullahselim@gmail.com",
  phone: "+201099454508",
  location: "Mansoura, Egypt",
  market: "Saudi Arabia & GCC",
  linkedin: "https://www.linkedin.com/in/%D9%90abdullah-selim-721693175",
  github: "https://github.com/Abdollahselim",
  whatsapp:
    "https://wa.me/201099454508?text=Hi%20Abdullah%2C%20I%20want%20to%20discuss%20a%20project",
  description:
    "E-commerce systems engineer building high-converting Salla, Shopify, WooCommerce, Next.js and automation systems for Saudi and GCC businesses."
};

export const navItems = [
  { label: { en: "Work", ar: "الأعمال" }, href: "#work" },
  { label: { en: "Cases", ar: "دراسات" }, href: "#case-studies" },
  { label: { en: "Services", ar: "الخدمات" }, href: "#services" },
  { label: { en: "Process", ar: "المنهجية" }, href: "#process" },
  { label: { en: "Contact", ar: "تواصل" }, href: "#contact" }
];

export const heroCopy = {
  markets: [
    { en: "KSA", ar: "السعودية" },
    { en: "UAE", ar: "الإمارات" },
    { en: "EGY", ar: "مصر" },
    { en: "KW", ar: "الكويت" },
    { en: "QA", ar: "قطر" }
  ],
  title: {
    en: {
      part1: "I build",
      highlight: "high-converting",
      part2: "E-commerce for GCC businesses."
    },
    ar: {
      part1: "أقوم ببناء متاجر",
      highlight: "عالية التحويل",
      part2: "للمشاريع في دول الخليج."
    }
  },
  description: {
    en: "Shopify, Salla & WooCommerce, Next.js specialist. 20+ stores delivered. I don't just build websites — I build revenue systems.",
    ar: "متخصص في سلة، شوبيفاي، ووردبريس، و Next.js. قمت بتسليم أكثر من 20 متجراً. أنا لا أبني مجرد مواقع، بل أنظمة لتوليد الأرباح."
  },
  primaryCta: { en: "Let's Talk", ar: "لنتحدث" },
  secondaryCta: { en: "View Work", ar: "شاهد الأعمال" }
};

export const stats = [
  { value: "20+", label: { en: "Production stores delivered", ar: "متجر إنتاجي تم تسليمه" } },
  { value: "60%", label: { en: "Load-time reduction achieved", ar: "تقليل في وقت التحميل" } },
  { value: "85+", label: { en: "Lighthouse scores reached", ar: "نقاط لايتهاوس" } },
  { value: "90%+", label: { en: "Client retention rate", ar: "نسبة احتفاظ العملاء" } }
];

export const projects = [
  {
    title: { en: "Lamha Optics Booking System", ar: "نظام حجز لمحة للبصريات" },
    category: { en: "Next.js + Salla Integration", ar: "Next.js + تكامل سلة" },
    href: "https://book.lamhaoptics.com",
    summary: {
      en: "Custom appointment booking experience for a Saudi eyewear brand, connected to the commerce flow and WhatsApp operations.",
      ar: "تجربة حجز مواعيد مخصصة لعلامة نظارات سعودية، مرتبطة بتدفق المتجر وتشغيل واتساب."
    },
    result: {
      en: "Booking time reduced from 15 minutes to 2 minutes",
      ar: "انخفض وقت الحجز من 15 دقيقة إلى دقيقتين"
    },
    image: "/projects/lamha-booking.jpg",
    imageHint: "Lamha Optics booking app screenshot",
    featured: true
  },
  {
    title: { en: "Al-Shaalhoub Bedding Store", ar: "متجر الشعلوب للمفروشات" },
    category: { en: "Salla E-Commerce", ar: "متجر سلة" },
    href: "https://alshaalhoub.com",
    summary: {
      en: "Arabic-first Salla store setup for home textiles, with catalog structure, offers, checkout readiness, and Saudi-market UX.",
      ar: "إعداد متجر سلة عربي للمفروشات مع هيكلة المنتجات والعروض وتجربة شراء مناسبة للسوق السعودي."
    },
    result: { en: "Full-featured launch in 14 days", ar: "إطلاق متكامل خلال 14 يومًا" },
    image: "/projects/alshaalhoub.webp",
    imageHint: "Al-Shaalhoub Salla store screenshot"
  },
  {
    title: { en: "Al-Arab Lawyers Firm", ar: "مكتب العرب للمحاماة" },
    category: { en: "WordPress Corporate", ar: "موقع ووردبريس مؤسسي" },
    href: "https://alarablawyers.com",
    summary: {
      en: "Professional legal-services website with bilingual structure, service pages, and lead capture for Arabic-speaking clients.",
      ar: "موقع خدمات قانونية احترافي بهيكل ثنائي اللغة وصفحات خدمات ونظام جذب عملاء للمتحدثين بالعربية."
    },
    result: { en: "Organic leads increased 3x in 90 days", ar: "تضاعفت العملاء المحتملون 3 مرات خلال 90 يومًا" },
    image: "/projects/alarab-lawyers.webp",
    imageHint: "Al-Arab Lawyers website screenshot"
  },
  {
    title: { en: "Salla Operations Automation", ar: "أتمتة عمليات سلة" },
    category: { en: "Merchant Automation", ar: "أتمتة التجار" },
    href: "#",
    summary: {
      en: "Streamlining e-commerce operations for Salla merchants using custom webhooks and automated fulfillment triggers.",
      ar: "تبسيط عمليات التجارة الإلكترونية لتجار سلة باستخدام خطافات الويب المخصصة ومحفزات التنفيذ الآلي."
    },
    result: { en: "40% reduction in manual processing", ar: "تقليل بنسبة 40% في المعالجة اليدوية" },
    image: "/projects/salla-automation.png",
    imageHint: "Salla automation dashboard screenshot"
  }
];

export const caseStudies = [
  {
    title: { en: "E-Commerce Speed & CRO Overhaul", ar: "إعادة تحسين السرعة والتحويل لمتجر إلكتروني" },
    tag: { en: "Salla / Performance / CRO", ar: "سلة / أداء / تحسين تحويل" },
    problem: {
      en: "Store loading above 8 seconds, weak mobile experience, and checkout abandonment hurting paid traffic returns.",
      ar: "متجر يستغرق أكثر من 8 ثوانٍ للتحميل، وتجربة جوال ضعيفة، وتخلي عن الدفع يؤثر على عائد الإعلانات."
    },
    solution: {
      en: "Optimized images, reduced render-blocking scripts, improved font loading, refined the checkout flow, and moved critical assets closer to users.",
      ar: "تحسين الصور، تقليل السكريبتات المعيقة، تحسين تحميل الخطوط، تبسيط الدفع، وتقريب الأصول المهمة من المستخدمين."
    },
    metrics: [
      { value: "85+", label: { en: "Lighthouse", ar: "لايتهاوس" } },
      { value: "60%", label: { en: "Faster load", ar: "تحميل أسرع" } },
      { value: "35%", label: { en: "Revenue lift", ar: "نمو الإيرادات" } }
    ]
  },
  {
    title: { en: "Lamha Optics Appointment System", ar: "نظام مواعيد لمحة للبصريات" },
    tag: { en: "Next.js / Operations Automation", ar: "Next.js / أتمتة تشغيلية" },
    problem: {
      en: "Manual WhatsApp booking took too long, created staff pressure, and left the business without clean appointment data.",
      ar: "الحجز اليدوي عبر واتساب كان بطيئًا ويضغط على الفريق ولا يترك بيانات منظمة للمواعيد."
    },
    solution: {
      en: "Built a custom booking flow with server-rendered pages, automated confirmations, and a structure ready for admin reporting.",
      ar: "بناء تدفق حجز مخصص بصفحات سريعة وتأكيدات تلقائية وهيكل جاهز لتقارير الإدارة."
    },
    metrics: [
      { value: "2m", label: { en: "Booking time", ar: "وقت الحجز" } },
      { value: "100%", label: { en: "Confirmations", ar: "تأكيدات" } },
      { value: "0", label: { en: "Manual loops", ar: "دورات يدوية" } }
    ]
  }
];

export const services = [
  {
    title: { en: "Salla & Zid Commerce", ar: "متاجر سلة وزد" },
    description: {
      en: "Store setup, payment gateways, shipping, Arabic UX, webhooks, and merchant automation.",
      ar: "إعداد المتجر، بوابات الدفع، الشحن، تجربة عربية، webhooks، وأتمتة للتجار."
    },
    icon: ShoppingBag
  },
  {
    title: { en: "Shopify Development", ar: "تطوير شوبيفاي" },
    description: {
      en: "Custom themes, storefront API work, conversion-focused UX, and app integration support.",
      ar: "ثيمات مخصصة، Storefront API، تجربة تركز على التحويل، وتكاملات التطبيقات."
    },
    icon: Layers3
  },
  {
    title: { en: "Next.js Commerce Apps", ar: "تطبيقات تجارة بـ Next.js" },
    description: {
      en: "Fast headless storefronts, booking systems, dashboards, and customer-facing web apps.",
      ar: "واجهات headless سريعة، أنظمة حجز، لوحات تحكم، وتطبيقات للعملاء."
    },
    icon: Code2
  },
  {
    title: { en: "CRO & Performance", ar: "الأداء وتحسين التحويل" },
    description: {
      en: "Core Web Vitals audits, checkout improvements, tracking fixes, and landing page optimization.",
      ar: "تدقيق Core Web Vitals، تحسين الدفع، إصلاح التتبع، وتحسين صفحات الهبوط."
    },
    icon: Gauge
  },
  {
    title: { en: "SEO Foundations", ar: "أساسيات SEO" },
    description: {
      en: "Technical SEO, metadata, schema, Arabic/English structure, and search-console readiness.",
      ar: "SEO تقني، metadata، schema، بنية عربية/إنجليزية، وتجهيز Search Console."
    },
    icon: Search
  },
  {
    title: { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة" },
    description: {
      en: "WhatsApp workflows, reporting automations, AI-assisted support flows, and operations systems.",
      ar: "تدفقات واتساب، أتمتة التقارير، دعم بالذكاء الاصطناعي، وأنظمة تشغيل."
    },
    icon: Bot
  }
];

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Salla API",
  "Shopify Storefront API",
  "NestJS",
  "PostgreSQL",
  "Vercel",
  "Railway"
];

export const processSteps = [
  {
    title: { en: "Audit", ar: "التدقيق" },
    description: {
      en: "Review goals, analytics, platform limits, conversion leaks, and technical constraints.",
      ar: "مراجعة الأهداف والتحليلات وحدود المنصة وتسريبات التحويل والقيود التقنية."
    },
    icon: BarChart3
  },
  {
    title: { en: "Architecture", ar: "الهندسة" },
    description: {
      en: "Choose the right commerce stack, integrations, data flow, and deployment path.",
      ar: "اختيار stack التجارة المناسب، التكاملات، تدفق البيانات، وخطة النشر."
    },
    icon: Workflow
  },
  {
    title: { en: "Build", ar: "البناء" },
    description: {
      en: "Ship clean, modular components with performance, SEO, and maintainability in mind.",
      ar: "بناء مكونات نظيفة قابلة للتوسع مع مراعاة الأداء وSEO وسهولة الصيانة."
    },
    icon: Sparkles
  },
  {
    title: { en: "Harden", ar: "التجهيز" },
    description: {
      en: "Verify Core Web Vitals, accessibility, security headers, tracking, and launch readiness.",
      ar: "مراجعة Core Web Vitals، الوصول، هيدرز الأمان، التتبع، وجاهزية الإطلاق."
    },
    icon: ShieldCheck
  }
];

export const trustSignals: Localized<string>[] = [
  { en: "Saudi/GCC commerce focus", ar: "تركيز على تجارة السعودية والخليج" },
  { en: "Arabic-first UX experience", ar: "خبرة UX عربية أولًا" },
  { en: "Platform + custom-code hybrid thinking", ar: "تفكير يجمع المنصات والكود المخصص" },
  { en: "Performance and conversion measured together", ar: "قياس الأداء والتحويل معًا" },
  { en: "Post-launch support mindset", ar: "دعم بعد الإطلاق" },
  { en: "Agency-partner friendly delivery", ar: "تسليم مناسب لشراكات الوكالات" }
];

export const contactChannels = [
  { label: { en: "WhatsApp", ar: "واتساب" }, value: "+20 010 9945 4508", href: siteConfig.whatsapp, icon: MessageCircle },
  { label: { en: "Email", ar: "البريد" }, value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Globe2 }
];

export const sectionCopy = {
  work: {
    eyebrow: { en: "Selected Work", ar: "أبرز الأعمال" },
    title: { en: "Proof-led projects for e-commerce growth", ar: "مشاريع قائمة على إثبات النمو" },
    description: {
      en: "Real screenshots, real business context, and outcomes agency partners can understand quickly.",
      ar: "صور حقيقية، سياق تجاري واضح، ونتائج يمكن للتجار والوكالات فهمها بسرعة."
    }
  },
  cases: {
    eyebrow: { en: "Case Studies", ar: "دراسات الحالة" },
    title: { en: "Show the business change behind the build", ar: "القيمة التجارية خلف التنفيذ" },
    description: {
      en: "Each case is structured as problem, solution, and measurable result.",
      ar: "كل حالة منظمة حول المشكلة والحل والنتيجة القابلة للقياس."
    }
  },
  services: {
    eyebrow: { en: "Services", ar: "الخدمات" },
    title: { en: "E-commerce execution for serious operators", ar: "تنفيذ تجارة إلكترونية للفرق الجادة" },
    description: {
      en: "Focused services for merchants and agencies that need platform, conversion, performance, and delivery experience.",
      ar: "خدمات مركزة للتجار والوكالات التي تحتاج خبرة في المنصات والتحويل والأداء والتسليم."
    }
  },
  stack: {
    eyebrow: { en: "Technology", ar: "التقنيات" },
    title: { en: "Modern stack, practical delivery", ar: "تقنيات حديثة وتنفيذ عملي" },
    description: {
      en: "The stack is modern, but the pitch stays business-focused: speed, maintainability, SEO, and conversion.",
      ar: "التقنيات حديثة، لكن التركيز تجاري: السرعة، الصيانة، SEO، والتحويل."
    },
    core: { en: "Core stack", ar: "التقنيات الأساسية" },
    care: { en: "Why clients should care", ar: "لماذا يهم العميل؟" }
  },
  process: {
    eyebrow: { en: "Process", ar: "المنهجية" },
    title: { en: "A clean path from audit to launch", ar: "مسار واضح من التدقيق إلى الإطلاق" },
    description: {
      en: "This makes you easier to hire: clients can see what happens after the first message.",
      ar: "هذا يجعل قرار التعاقد أسهل لأن العميل يعرف ما يحدث بعد الرسالة الأولى."
    }
  },
  contact: {
    label: { en: "Let's Work Together", ar: "لنبدأ العمل" },
    title: {
      en: "Ready to build a stronger e-commerce system?",
      ar: "جاهز لبناء نظام تجارة إلكترونية أقوى؟"
    },
    description: {
      en: "Send the store URL, platform, and target outcome. I usually reply with the clearest next technical step.",
      ar: "أرسل رابط المتجر والمنصة والهدف المطلوب، وسأرد عادةً بأوضح خطوة تقنية تالية."
    },
    whatsapp: { en: "WhatsApp Me", ar: "راسلني واتساب" },
    email: { en: "Email Me", ar: "راسلني بريد" }
  }
};
