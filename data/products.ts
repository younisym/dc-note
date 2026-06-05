import type { Product, Category } from "@/types";

export const categories: Category[] = [
  {
    id: "coloring-books",
    name: "كتب التلوين للكبار",
    description: "تجارب تلوين وتأمل للبالغين لاستعادة الهدوء والإبداع",
    icon: "🎨",
    color: "#C4899A",
    productCount: 1,
  },
  {
    id: "kids-coloring",
    name: "كتب تلوين الأطفال",
    description: "كتب تلوين تعليمية ممتعة لتنمية مهارات الأطفال",
    icon: "🖍️",
    color: "#A8BBA8",
    productCount: 2,
  },
  {
    id: "brain-games",
    name: "ألعاب الدماغ",
    description: "متاهات وألغاز تحفز التفكير وتقوي التركيز",
    icon: "🧩",
    color: "#C9A87C",
    productCount: 1,
  },
  {
    id: "planners",
    name: "المخططات",
    description: "مخططات يومية وأسبوعية وشهرية لتنظيم حياتك",
    icon: "📋",
    color: "#DBA8B8",
    productCount: 0,
  },
  {
    id: "notebooks",
    name: "الدفاتر",
    description: "دفاتر أنيقة لتسجيل أفكارك ومشاعرك",
    icon: "📓",
    color: "#3D3D6B",
    productCount: 0,
  },
  {
    id: "stickers",
    name: "الملصقات",
    description: "ملصقات مميزة لتزيين دفاترك ومساحتك الإبداعية",
    icon: "✨",
    color: "#C4899A",
    productCount: 0,
  },
  {
    id: "educational",
    name: "الأنشطة التعليمية",
    description: "مواد تعليمية تفاعلية للأطفال بأسلوب ممتع",
    icon: "📚",
    color: "#A8BBA8",
    productCount: 0,
  },
  {
    id: "custom",
    name: "تصاميم مخصصة",
    description: "تصاميم بالاسم والطلب الخاص، فريدة من نوعها",
    icon: "💝",
    color: "#C9A87C",
    productCount: 0,
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "heen-tajiz-alkalimat",
    title: "حين تعجز الكلمات الجأ للفن",
    titleEn: "When Words Fail, Turn to Art",
    category: "coloring-books",
    description:
      "كتاب تلوين وتأمل يساعدك على الاسترخاء، التعبير عن مشاعرك، وتنمية إبداعك الداخلي.",
    longDescription:
      "في لحظات الضيق والتشتت، حين تعجز الكلمات عن التعبير، يأتي الفن ليكون صوتك. هذا الكتاب الفريد يجمع بين متعة التلوين وعمق التأمل، ليرافقك في رحلة إلى داخل نفسك. صفحات تلوين بتصاميم مندالا ومشاهد طبيعية هادئة، مصممة خصيصاً لتساعدك على تهدئة العقل وإطلاق العنان للإبداع. مثالي للبالغين الذين يبحثون عن هروب جميل من صخب الحياة اليومية.",
    price: 89,
    originalPrice: 120,
    image: "/images/product-art-coloring.jpg",
    badge: "best-seller",
    features: [
      "تصاميم مندالا حصرية عالية الجودة",
      "صفحات تأملية مع عبارات ملهمة",
      "مناسب لجميع مستويات التلوين",
      "ورق مخصص للألوان المائية والأقلام",
      "تصميم أنيق يمكن تأطيره بعد التلوين",
    ],
    pageCount: 60,
    format: "A4 - طباعة رقمية",
    ageRange: "+16",
    inStock: true,
    rating: 4.9,
    reviewCount: 124,
    whatsappMessage:
      "مرحباً، أريد الاستفسار عن كتاب تلوين (حين تعجز الكلمات الجأ للفن)",
  },
  {
    id: "2",
    slug: "mughamarat-alhasharat",
    title: "مغامرة الحشرات",
    titleEn: "Insect Adventure",
    category: "brain-games",
    description:
      "كتاب ألعاب ومتاهات للأطفال يساعد على تنمية التركيز والتفكير المنطقي مع الاستمتاع بعالم الحشرات الرائع.",
    longDescription:
      "استعد لمغامرة لا تُنسى مع صديقك الصغير في عالم الحشرات المدهش! كتاب مليء بالمتاهات الممتعة، الألغاز الذكية، وتحديات التفكير المصممة خصيصاً لعقول الأطفال. كل صفحة هي مغامرة جديدة تأخذ طفلك في رحلة اكتشاف مشوّقة، بينما يقوي قدرته على التركيز، حل المشكلات، والتفكير الإبداعي. مثالي لأوقات الفراغ الذكي بعيداً عن الشاشات.",
    price: 75,
    originalPrice: 95,
    image: "/images/product-insects.jpg",
    badge: "new",
    features: [
      "أكثر من 40 متاهة متدرجة الصعوبة",
      "ألغاز إدراكية وبصرية متنوعة",
      "معلومات ممتعة عن عالم الحشرات",
      "تصاميم ملونة تجذب الأطفال",
      "يقوي التركيز وحل المشكلات",
    ],
    pageCount: 50,
    format: "A4 - طباعة رقمية",
    ageRange: "4 - 10 سنوات",
    inStock: true,
    rating: 4.8,
    reviewCount: 87,
    whatsappMessage:
      "مرحباً، أريد الاستفسار عن كتاب (مغامرة الحشرات) للأطفال",
  },
  {
    id: "3",
    slug: "yawmiyat-fatah-muslima",
    title: "يوميات فتاة مسلمة",
    titleEn: "A Muslim Girl's Diary",
    category: "kids-coloring",
    description:
      "كتاب تلوين وأنشطة يومية يساعد الفتيات على اكتساب العادات الإيجابية والقيم الجميلة بطريقة ممتعة وملهمة.",
    longDescription:
      "رفيقة يومية رائعة لكل فتاة مسلمة صغيرة! يجمع هذا الكتاب الجميل بين متعة التلوين والأنشطة اليومية الهادفة، ليرافق فتاتك في رحلة بناء شخصيتها وقيمها. صفحات ملونة بشخصية فتاة مسلمة محجبة يومياتها مليئة بالإيمان، الأحلام، والطموح. يغرس في طفلتك عادات الصلاة، القراءة، مساعدة الآخرين، والرياضة بطريقة بصرية ممتعة تحبها وتتعلق بها.",
    price: 79,
    originalPrice: 100,
    image: "/images/product-muslim-girl.jpg",
    badge: "featured",
    features: [
      "شخصية محورية إيجابية ومُلهِمة",
      "أنشطة يومية لبناء عادات صحية",
      "قيم إسلامية بأسلوب بصري جذاب",
      "صفحات تلوين وتفاعل متنوعة",
      "تعزز الثقة بالنفس والهوية الإيجابية",
    ],
    pageCount: 55,
    format: "A4 - طباعة رقمية",
    ageRange: "6 - 14 سنة",
    inStock: true,
    rating: 4.9,
    reviewCount: 203,
    whatsappMessage:
      "مرحباً، أريد الاستفسار عن كتاب (يوميات فتاة مسلمة)",
  },
  {
    id: "4",
    slug: "yawmiyat-alfata-almuslim",
    title: "يوميات الفتى المسلم",
    titleEn: "A Muslim Boy's Diary",
    category: "kids-coloring",
    description:
      "كتاب تلوين وأنشطة يومية للأطفال يجمع بين الترفيه والتعليم وبناء عادات الفتى المسلم الناجح.",
    longDescription:
      "رفيق مثالي لكل فتى مسلم يريد أن يبني نفسه ويطور قدراته! يجمع هذا الكتاب الرائع بين صفحات التلوين الممتعة وأنشطة اليوميات التي تساعد الفتيان على اكتساب العادات الصحية، القيم الإسلامية، والمهارات الحياتية الأساسية. بشخصية محورية إيجابية تشبههم وتُلهمهم، يتعلم طفلك الصلاة، البر، التعاون، وحب القراءة بطريقة مشوقة تشده ويستمتع بها.",
    price: 79,
    originalPrice: 100,
    image: "/images/product-muslim-boy.jpg",
    badge: "new",
    features: [
      "شخصية ذكورية مُلهِمة للفتيان",
      "يوميات بناء الشخصية والعادات",
      "قيم إسلامية بأسلوب عصري ومحبب",
      "صفحات تلوين وتحديات يومية",
      "يُشجع على الاستقلالية والمسؤولية",
    ],
    pageCount: 55,
    format: "A4 - طباعة رقمية",
    ageRange: "6 - 14 سنة",
    inStock: true,
    rating: 4.8,
    reviewCount: 156,
    whatsappMessage:
      "مرحباً، أريد الاستفسار عن كتاب (يوميات الفتى المسلم)",
  },
];

export const getFeaturedProducts = () =>
  products.filter((p) => p.badge === "best-seller" || p.badge === "featured");

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductsByCategory = (categoryId: string) =>
  products.filter((p) => p.category === categoryId);

export const WHATSAPP_NUMBER = "201033276241";
export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const getWhatsAppLink = (message: string) =>
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
