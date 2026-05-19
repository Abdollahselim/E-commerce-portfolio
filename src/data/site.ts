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
  { label: { en: "Cases", ar: "دراسات الحالة" }, href: "#case-studies" },
  { label: { en: "Services", ar: "الخدمات" }, href: "#services" },
  { label: { en: "Process", ar: "المنهجية" }, href: "#process" },
  { label: { en: "Contact", ar: "تواصل معي" }, href: "#contact" }
];

export const heroCopy = {
  markets: [
    { en: "KSA", ar: "السعودية" },
    { en: "UAE", ar: "الإمارات" },
    { en: "EGY", ar: "مصر" },
    { en: "KW", ar: "الكويت" },
    { en: "QA", ar: "قطر" }
  ],
  auditSlots: {
    en: "Audit slots open",
    ar: "جلسات تدقيق متاحة"
  },
  remote: {
    en: "Remote",
    ar: "عن بُعد"
  },
  title: {
    en: {
      part1: "I build",
      highlight: "high-converting",
      part2: "e-commerce for GCC businesses."
    },
    ar: {
      part1: "أبني متاجر إلكترونية",
      highlight: "عالية التحويل",
      part2: "للشركات في دول الخليج."
    }
  },
  description: {
    en: "Shopify, Salla & WooCommerce, Next.js specialist. 20+ stores delivered. I don't just build websites — I build revenue systems.",
    ar: "متخصص في شوبيفاي، سلة، ووكمرس، و Next.js. قمت بتسليم أكثر من 20 متجراً بنجاح. أنا لا أبرمج مجرد مواقع، بل أبني أنظمة متكاملة لتوليد الأرباح."
  },
  primaryCta: { en: "Get Free Store Audit", ar: "احصل على تدقيق مجاني لمتجرك" },
  secondaryCta: { en: "See Proof", ar: "شاهد النتائج" },
  proofSignalsText: { en: "Proof signals visible before the call", ar: "مؤشرات النجاح قبل حتى بدء العمل" }
};

export const heroProof = [
  { label: { en: "Audit slots this month", ar: "جلسات تدقيق متاحة هذا الشهر" }, value: "2" },
  { label: { en: "Reply window", ar: "متوسط وقت الرد" }, value: "<24h" },
  { label: { en: "Typical launch sprint", ar: "مدة الإطلاق المعتادة" }, value: "14-30d" }
];

export const clientProof: Localized<string>[] = [
  { en: "Saudi eyewear", ar: "علامات نظارات سعودية" },
  { en: "Salla bedding", ar: "متاجر مفروشات على سلة" },
  { en: "Arabic legal services", ar: "خدمات قانونية عربية" },
  { en: "Merchant automation", ar: "أتمتة عمليات التجار" }
];

export const stats = [
  { value: "20+", label: { en: "Production stores delivered", ar: "متجراً تم تسليمه بنجاح" } },
  { value: "60%", label: { en: "Load-time reduction achieved", ar: "تقليص في وقت التحميل" } },
  { value: "85+", label: { en: "Lighthouse scores reached", ar: "متوسط تقييم لايتهاوس للأداء" } },
  { value: "90%+", label: { en: "Client retention rate", ar: "نسبة احتفاظ العملاء" } }
];

export const projects = [
  {
    title: { en: "Lamha Optics Booking System", ar: "نظام حجز لمحة للبصريات" },
    category: { en: "Next.js + Salla Integration", ar: "Next.js + ربط مع سلة" },
    href: "https://book.lamhaoptics.com",
    summary: {
      en: "Custom appointment booking experience for a Saudi eyewear brand, connected to the commerce flow and WhatsApp operations.",
      ar: "تجربة حجز مواعيد مخصصة لعلامة نظارات سعودية، متصلة بشكل مباشر بعمليات الشراء وتنبيهات واتساب."
    },
    result: {
      en: "Booking time reduced from 15 minutes to 2 minutes",
      ar: "انخفض وقت الحجز من 15 دقيقة إلى دقيقتين فقط"
    },
    image: "/projects/lamha-booking.jpg",
    imageHint: "Lamha Optics booking app screenshot",
    featured: true
  },
  {
    title: { en: "Al-Shaalhoub Bedding Store", ar: "متجر الشلهوب للمفروشات" },
    category: { en: "Salla E-Commerce", ar: "متجر سلة" },
    href: "https://alshaalhoub.com",
    summary: {
      en: "Arabic-first Salla store setup for home textiles, with catalog structure, offers, checkout readiness, and Saudi-market UX.",
      ar: "إعداد متجر سلة بتجربة مستخدم مخصصة للمفروشات، مع هيكلة المنتجات، إعداد العروض، وتجهيز سلة المشتريات للسوق السعودي."
    },
    result: { en: "Full-featured launch in 8 days", ar: "إطلاق متكامل للمتجر خلال 8 يومًا" },
    image: "/projects/alshaalhoub.webp",
    imageHint: "Al-Shaalhoub Salla store screenshot"
  },
  {
    title: { en: "Al-Arab Lawyers Firm", ar: "مكتب المحامون العرب" },
    category: { en: "WordPress Corporate", ar: "موقع مؤسسي عبر ووردبريس" },
    href: "https://alarablawyers.com",
    summary: {
      en: "Professional legal-services website with bilingual structure, service pages, and lead capture for Arabic-speaking clients.",
      ar: "موقع خدمات قانونية احترافي يدعم اللغتين، مع صفحات للخدمات ونظام لجلب العملاء المحتملين."
    },
    result: { en: "Organic leads increased 3x in 90 days", ar: "زيادة العملاء المحتملين بمقدار 3 أضعاف خلال 90 يومًا" },
    image: "/projects/alarab-lawyers.webp",
    imageHint: "Al-Arab Lawyers website screenshot"
  },
  {
    title: { en: "Salla Operations Automation", ar: "أتمتة عمليات سلة" },
    category: { en: "Merchant Automation", ar: "أتمتة عمليات التجار" },
    href: "#",
    summary: {
      en: "Streamlining e-commerce operations for Salla merchants using custom webhooks and automated fulfillment triggers.",
      ar: "تبسيط عمليات التجارة الإلكترونية لتجار سلة باستخدام خطافات الويب (Webhooks) المخصصة ومحفزات إتمام الطلبات الآلية."
    },
    result: { en: "40% reduction in manual processing", ar: "تقليل بنسبة 40% في العمليات اليدوية" },
    image: "/projects/salla-automation.png",
    imageHint: "Salla automation dashboard screenshot"
  }
];

export const caseStudies = [
  {
    title: { en: "E-Commerce Speed & CRO Overhaul", ar: "تحسين سرعة ومعدل تحويل متجر إلكتروني" },
    tag: { en: "Salla / Performance / CRO", ar: "سلة / أداء / تحسين التحويل" },
    problem: {
      en: "Store loading above 8 seconds, weak mobile experience, and checkout abandonment hurting paid traffic returns.",
      ar: "استغراق المتجر أكثر من 8 ثوانٍ للتحميل، وتجربة مستخدم ضعيفة على الجوال، وارتفاع معدل التخلي عن سلة المشتريات مما يؤثر سلباً على عائد الإعلانات."
    },
    solution: {
      en: "Optimized images, reduced render-blocking scripts, improved font loading, refined the checkout flow, and moved critical assets closer to users.",
      ar: "تحسين الصور، تقليل ملفات الجافاسكريبت المعيقة للتحميل، تسريع ظهور الخطوط، تحسين مسار الدفع، وتقريب الخوادم من المستخدمين (CDN)."
    },
    metrics: [
      { value: "85+", label: { en: "Lighthouse", ar: "تقييم لايتهاوس" } },
      { value: "60%", label: { en: "Faster load", ar: "سرعة التحميل" } },
      { value: "35%", label: { en: "Revenue lift", ar: "نمو في الإيرادات" } }
    ]
  },
  {
    title: { en: "Lamha Optics Appointment System", ar: "نظام مواعيد لمحة للبصريات" },
    tag: { en: "Next.js / Operations Automation", ar: "Next.js / أتمتة تشغيلية" },
    problem: {
      en: "Manual WhatsApp booking took too long, created staff pressure, and left the business without clean appointment data.",
      ar: "الحجز اليدوي عبر الواتساب كان يستغرق وقتاً طويلاً ويشكل ضغطاً على فريق العمل، ولا يوفر بيانات منظمة ودقيقة للمواعيد."
    },
    solution: {
      en: "Built a custom booking flow with server-rendered pages, automated confirmations, and a structure ready for admin reporting.",
      ar: "بناء مسار حجز مخصص باستخدام صفحات خوادم سريعة، تأكيدات تلقائية للمواعيد، وهيكل قواعد بيانات جاهز لتقارير الإدارة."
    },
    metrics: [
      { value: "2m", label: { en: "Booking time", ar: "مدة الحجز" } },
      { value: "100%", label: { en: "Confirmations", ar: "تأكيدات تلقائية" } },
      { value: "0", label: { en: "Manual loops", ar: "تدخلات يدوية" } }
    ]
  }
];

export const testimonials = [
  {
    quote: {
      en: "The booking flow removed daily WhatsApp back-and-forth and gave our staff a cleaner way to manage appointments.",
      ar: "مسار الحجز الجديد أزال عناء المراسلات اليومية عبر الواتساب، ومنح فريقنا طريقة أسهل وأكثر تنظيماً لإدارة المواعيد."
    },
    name: "Lamha Optics",
    role: { en: "Saudi eyewear brand", ar: "علامة نظارات سعودية" },
    metric: "15m -> 2m"
  },
  {
    quote: {
      en: "Abdullah understood the Arabic shopping journey and helped us launch with the right structure, checkout flow, and offers.",
      ar: "فهم عبدالله رحلة التسوق العربية بشكل ممتاز وساعدنا على الإطلاق بالهيكلة الصحيحة، ومسار دفع سلس، وعروض مناسبة."
    },
    name: "Al-Shaalhoub",
    role: { en: "Salla merchant", ar: "تاجر على منصة سلة" },
    metric: "8-day launch"
  },
  {
    quote: {
      en: "The work connected technical SEO, page speed, and lead capture instead of treating the website like a static brochure.",
      ar: "العمل ربط بين تحسين محركات البحث التقني (SEO)، وسرعة الصفحة، وجلب العملاء، بدلاً من التعامل مع الموقع كمجرد واجهة ثابتة."
    },
    name: "Al-Arab Lawyers",
    role: { en: "Professional services", ar: "خدمات احترافية" },
    metric: "3x leads"
  }
];

export const services = [
  {
    title: { en: "Salla & Zid Commerce", ar: "متاجر سلة وزد" },
    description: {
      en: "Store setup, payment gateways, shipping, Arabic UX, webhooks, and merchant automation.",
      ar: "إعداد المتجر، ربط بوابات الدفع وشركات الشحن، تحسين تجربة المستخدم العربية، الـ Webhooks، وأتمتة المهام للتجار."
    },
    icon: ShoppingBag
  },
  {
    title: { en: "Shopify Development", ar: "تطوير شوبيفاي" },
    description: {
      en: "Custom themes, storefront API work, conversion-focused UX, and app integration support.",
      ar: "برمجة ثيمات مخصصة، العمل مع Storefront API، بناء تجربة مستخدم تركز على التحويل، وتكامل التطبيقات."
    },
    icon: Layers3
  },
  {
    title: { en: "Next.js Commerce Apps", ar: "تطبيقات التجارة بـ Next.js" },
    description: {
      en: "Fast headless storefronts, booking systems, dashboards, and customer-facing web apps.",
      ar: "واجهات Headless سريعة، أنظمة حجوزات، لوحات تحكم، وتطبيقات ويب تفاعلية موجهة للعملاء."
    },
    icon: Code2
  },
  {
    title: { en: "CRO & Performance", ar: "الأداء وتحسين معدل التحويل" },
    description: {
      en: "Core Web Vitals audits, checkout improvements, tracking fixes, and landing page optimization.",
      ar: "مراجعة مقاييس الأداء الأساسية، تحسين مسار الدفع، إصلاح أخطاء التتبع، وتحسين صفحات الهبوط."
    },
    icon: Gauge
  },
  {
    title: { en: "SEO Foundations", ar: "أساسيات الـ SEO" },
    description: {
      en: "Technical SEO, metadata, schema, Arabic/English structure, and search-console readiness.",
      ar: "تحسين محركات البحث التقني، البيانات الوصفية، الـ Schema، بنية الموقع للمحتوى العربي والإنجليزي، وربط أدوات مشرفي المواقع."
    },
    icon: Search
  },
  {
    title: { en: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة" },
    description: {
      en: "WhatsApp workflows, reporting automations, AI-assisted support flows, and operations systems.",
      ar: "أتمتة رسائل الواتساب، إنشاء التقارير التلقائية، أنظمة الدعم بمساعدة الذكاء الاصطناعي، وأتمتة العمليات التشغيلية."
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
      ar: "مراجعة أهداف العمل، التحليلات، حدود المنصة، نقاط الضعف في التحويل، والقيود التقنية الحالية."
    },
    icon: BarChart3
  },
  {
    title: { en: "Architecture", ar: "هندسة الحلول" },
    description: {
      en: "Choose the right commerce stack, integrations, data flow, and deployment path.",
      ar: "اختيار الحزمة التقنية المناسبة للتجارة الإلكترونية، وعمليات التكامل، وتدفق البيانات، وخطة النشر المثالية."
    },
    icon: Workflow
  },
  {
    title: { en: "Build", ar: "التطوير والبناء" },
    description: {
      en: "Ship clean, modular components with performance, SEO, and maintainability in mind.",
      ar: "برمجة مكونات نظيفة وقابلة لإعادة الاستخدام، مع وضع الأداء، الـ SEO، وسهولة الصيانة في الاعتبار."
    },
    icon: Sparkles
  },
  {
    title: { en: "Harden", ar: "الإطلاق والمتابعة" },
    description: {
      en: "Verify Core Web Vitals, accessibility, security headers, tracking, and launch readiness.",
      ar: "التحقق من مقاييس أداء الويب، إمكانية الوصول، إعدادات الأمان، وسلامة التتبع قبل الإطلاق النهائي."
    },
    icon: ShieldCheck
  }
];

export const faqs = [
  {
    question: { en: "Do you work with Salla and Zid stores in Saudi Arabia?", ar: "هل تعمل مع متاجر سلة وزد في السعودية؟" },
    answer: {
      en: "Yes. I work on Salla and Zid setup, Arabic UX, checkout readiness, payment and shipping configuration, webhooks, tracking, and merchant operations.",
      ar: "نعم. أعمل على إعداد متاجر سلة وزد، تحسين تجربة المستخدم العربية، تجهيز سلة المشتريات، إعداد الدفع والشحن، ربط الـ Webhooks، التتبع، والعمليات التشغيلية للتجار."
    }
  },
  {
    question: { en: "Can you improve an existing Shopify or Salla store?", ar: "هل يمكنك تحسين متجر شوبيفاي أو سلة موجود مسبقاً؟" },
    answer: {
      en: "Yes. Most projects start with a speed, SEO, CRO, and tracking audit so we can fix the highest-value leaks before redesigning anything.",
      ar: "نعم. تبدأ معظم المشاريع بتدقيق لسرعة الموقع، الـ SEO، معدل التحويل، والتتبع لإصلاح المشاكل الأكثر تأثيراً قبل التفكير في أي إعادة تصميم."
    }
  },
  {
    question: { en: "How long does an e-commerce project usually take?", ar: "كم يستغرق مشروع التجارة الإلكترونية عادةً؟" },
    answer: {
      en: "Focused audits and fixes can take a few days. Store builds, booking systems, and automation projects usually run in 2-6 week delivery sprints depending on scope.",
      ar: "قد تستغرق عمليات التدقيق والإصلاح المحددة بضعة أيام. أما بناء المتاجر، أنظمة الحجوزات، ومشاريع الأتمتة فغالباً ما تستغرق من أسبوعين إلى 6 أسابيع بناءً على حجم المشروع."
    }
  },
  {
    question: { en: "What happens after I request the free audit?", ar: "ماذا يحدث بعد طلب التدقيق المجاني؟" },
    answer: {
      en: "Send your store URL, platform, market, and target outcome. I review the obvious conversion and technical issues, then reply with the clearest next step.",
      ar: "أرسل رابط متجرك، المنصة، السوق المستهدف، والهدف الذي تسعى إليه. سأقوم بمراجعة المشكلات التقنية ومشاكل التحويل الواضحة، ثم أرد عليك بالخطوة التالية الأنسب."
    }
  }
];

export const trustSignals: Localized<string>[] = [
  { en: "Saudi/GCC commerce focus", ar: "تركيز على التجارة في السعودية والخليج" },
  { en: "Arabic-first UX experience", ar: "تجربة مستخدم مصممة للعربية أولاً" },
  { en: "Platform + custom-code hybrid thinking", ar: "حلول تدمج بين المنصات الجاهزة والبرمجة المخصصة" },
  { en: "Performance and conversion measured together", ar: "الاهتمام بالأداء ومعدل التحويل معاً" },
  { en: "Post-launch support mindset", ar: "دعم مستمر بعد الإطلاق" },
  { en: "Agency-partner friendly delivery", ar: "تسليم المشاريع باحترافية مناسبة للوكالات" }
];

export const contactChannels = [
  { label: { en: "WhatsApp", ar: "واتساب" }, value: "+20 010 9945 4508", href: siteConfig.whatsapp, icon: MessageCircle },
  { label: { en: "Email", ar: "البريد الإلكتروني" }, value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: Globe2 }
];

export const sectionCopy = {
  work: {
    eyebrow: { en: "Selected Work", ar: "أبرز الأعمال" },
    title: { en: "Proof-led projects for e-commerce growth", ar: "مشاريع حققت نمواً ملحوظاً في التجارة الإلكترونية" },
    description: {
      en: "Real screenshots, real business context, and outcomes agency partners can understand quickly.",
      ar: "لقطات شاشة حقيقية، سياق عمل واقعي، ونتائج واضحة يمكن للتجار والوكالات استيعابها بسهولة."
    }
  },
  cases: {
    eyebrow: { en: "Case Studies", ar: "دراسات الحالة" },
    title: { en: "Show the business change behind the build", ar: "التحول التجاري الحقيقي خلف التطوير" },
    description: {
      en: "Each case is structured as problem, solution, and measurable result.",
      ar: "كل دراسة حالة مقسمة إلى: المشكلة، الحل، والنتائج القابلة للقياس."
    }
  },
  services: {
    eyebrow: { en: "Services", ar: "الخدمات" },
    title: { en: "E-commerce execution for serious operators", ar: "تنفيذ حلول تجارة إلكترونية للمشاريع الجادة" },
    description: {
      en: "Focused services for merchants and agencies that need platform, conversion, performance, and delivery experience.",
      ar: "خدمات مركزة للتجار والوكالات التي تبحث عن الخبرة في التعامل مع المنصات، رفع معدلات التحويل، تحسين الأداء، وسرعة التنفيذ."
    }
  },
  stack: {
    eyebrow: { en: "Technology", ar: "التقنيات المستخدمة" },
    title: { en: "Modern stack, practical delivery", ar: "تقنيات حديثة بتنفيذ عملي" },
    description: {
      en: "The stack is modern, but the pitch stays business-focused: speed, maintainability, SEO, and conversion.",
      ar: "نعتمد على أحدث التقنيات مع الحفاظ على التركيز التجاري: السرعة، سهولة الصيانة، الـ SEO، ومعدل التحويل."
    },
    core: { en: "Core stack", ar: "التقنيات الأساسية" },
    care: { en: "Why clients should care", ar: "لماذا يهم هذا العميل؟" }
  },
  process: {
    eyebrow: { en: "Process", ar: "المنهجية" },
    title: { en: "A clean path from audit to launch", ar: "مسار واضح من التدقيق وحتى الإطلاق" },
    description: {
      en: "This makes you easier to hire: clients can see what happens after the first message.",
      ar: "منهجية واضحة تتيح للعملاء معرفة خطوات العمل المتوقعة بعد الرسالة الأولى مباشرة."
    }
  },
  testimonials: {
    eyebrow: { en: "Client Proof", ar: "آراء العملاء" },
    title: { en: "Signals that reduce hiring risk", ar: "إشارات تقلل من مخاطر التعاقد" },
    description: { en: "Short proof points from real delivery contexts, tied to operational and revenue outcomes.", ar: "نقاط إثبات قصيرة من سياقات تسليم حقيقية، مرتبطة بالعمليات التشغيلية والنتائج المالية." }
  },
  faqs: {
    eyebrow: { en: "FAQ", ar: "الأسئلة الشائعة" },
    title: { en: "Common questions before the first call", ar: "أسئلة شائعة قبل مكالمتنا الأولى" },
    description: { en: "Clear answers for GCC merchants comparing platforms, timelines, audits, and ongoing optimization.", ar: "إجابات واضحة للتجار في الخليج حول المنصات، فترات العمل، التدقيق، والتحسين المستمر." }
  },
  contact: {
    label: { en: "Let's Work Together", ar: "لنتعاون معاً" },
    title: {
      en: "Book a GCC commerce review",
      ar: "احجز مراجعة لمتجرك الإلكتروني"
    },
    description: {
      en: "Share the store, platform, budget range, and target outcome. I will reply with the clearest technical and conversion next step.",
      ar: "أرسل رابط متجرك، المنصة، الميزانية المتوقعة، والهدف المطلوب، وسأرد عليك بأفضل وأوضح خطوة فنية تالية."
    },
    whatsapp: { en: "WhatsApp Me", ar: "راسلني عبر الواتساب" },
    email: { en: "Email Me", ar: "راسلني عبر البريد" },
    form: {
      name: { en: "Name", ar: "الاسم" },
      business: { en: "Business", ar: "نشاطك التجاري" },
      platform: { en: "Platform", ar: "المنصة" },
      budget: { en: "Budget range", ar: "الميزانية المتوقعة" },
      url: { en: "Store URL", ar: "رابط المتجر" },
      goal: { en: "Target outcome", ar: "الهدف المطلوب" },
      urlPlaceholder: { en: "https://", ar: "https://" },
      goalPlaceholder: { en: "Speed, checkout conversion, Salla launch, automation, SEO...", ar: "السرعة، تحسين سلة المشتريات، إطلاق سلة، الأتمتة، الـ SEO..." },
      submit: { en: "Request Free Audit", ar: "اطلب تدقيق مجاني" }
    },
    budgetOptions: [
      { en: "Under 1,000 $", ar: "أقل من 1,000 $" },
      { en: "1,000-5,000 $", ar: "1,000 - 5,000 $" },
      { en: "5,000-15,000 $", ar: "5,000 - 15,000 $" },
      { en: "15,000-25,000 $", ar: "15,000 - 25,000 $" },
      { en: "25,000+ $", ar: "أكثر من 25,000 $" }
    ],
    platformOptions: [
      { en: "Salla", ar: "سلة" },
      { en: "Zid", ar: "زد" },
      { en: "Shopify", ar: "شوبيفاي" },
      { en: "WooCommerce", ar: "ووكمرس" },
      { en: "Next.js", ar: "Next.js" },
      { en: "Other", ar: "أخرى" }
    ]
  }
};

