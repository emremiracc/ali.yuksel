// content/site.ts
export type SocialIcon = "linkedin" | "twitter" | "mail";

export type SocialLink = {
  name: string;
  url: string;
  icon: SocialIcon;
};

export type WorkItem = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

export type ExperienceItem = {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
};

export type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
};

export type WritingItem = {
  id: number;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  link: string;
};

export type SiteData = {
  hero: {
    name: string;
    title: string;
    description: string;
    email: string;
    avatarSrc: string;
    companyName: string;
    companyLogoSrc?: string;
    established: string;
  };

  // Hero / Footer gibi yerlerde ikonlu sosyal link göstermek için
  socials: SocialLink[];

  workIntro: {
    heading: string;
    subheading: string;
  };

  work: WorkItem[];
  experience: ExperienceItem[];
  testimonials: TestimonialItem[];
  writing: WritingItem[];

  contact: {
    email: string;
    social: {
      linkedin: string;
      twitter: string;
    };
  };
};

export const siteData: SiteData = {
  hero: {
    name: "Ali Yüksel",
    title: "Business Development Professional",
    description:
      "Hey, I'm Ali a sales & business development director at Harvard Business Review, based in Türkiye. I work at the intersection of strategy, content and partnerships, helping connect global management thinking with local leaders through premium events, executive programs and strategic branded content collaborations.",
    email: "aliyuks@outlook.com",
    avatarSrc: "/avatar.jpg",
    companyName: "Harvard Business Review",
    companyLogoSrc: "/hbr.svg",
    established: "EST. 2020",
  },

  workIntro: {
    heading: "Work",
    subheading: "A curated selection of work, full details available on request.",
  },

  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aliyuksl/",
      icon: "linkedin",
    },
    {
      name: "X",
      url: "https://x.com/AliYukse1",
      icon: "twitter",
    },
    {
      name: "Email",
      url: "mailto:aliyuks@outlook.com",
      icon: "mail",
    },
  ],

  work: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Next.js ve Node.js ile geliştirilmiş ölçeklenebilir e-ticaret platformu",
      tags: ["Next.js", "Node.js", "PostgreSQL"],
      image: "/work1.jpg",
      link: "https://example.com/work1",
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      description:
        "React ve TypeScript ile geliştirilmiş analitik dashboard uygulaması",
      tags: ["React", "TypeScript", "D3.js"],
      image: "/work2.jpg",
      link: "https://example.com/work2",
    },
    {
      id: 3,
      title: "Mobile App",
      description:
        "React Native ile geliştirilmiş cross-platform mobil uygulama",
      tags: ["React Native", "Firebase", "Redux"],
      image: "/work3.jpg",
      link: "https://example.com/work3",
    },
    {
      id: 4,
      title: "Design System",
      description: "Kapsamlı bir tasarım sistemi ve component library",
      tags: ["Storybook", "Tailwind", "Figma"],
      image: "/work4.jpg",
      link: "https://example.com/work4",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description:
        "Leading development of scalable web applications and mentoring junior developers.",
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Startup Inc",
      period: "2020 - 2022",
      description:
        "Built and maintained multiple client projects using modern JavaScript frameworks.",
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description:
        "Developed responsive web applications and collaborated with design teams.",
    },
  ],

  testimonials: [
    {
      id: 1,
      name: "Ayşe Demir",
      role: "Product Manager",
      company: "Tech Corp",
      content:
        "Ali ile çalışmak harika bir deneyimdi. Projeyi zamanında ve yüksek kalitede teslim etti.",
      avatar: "/testimonial1.jpg",
    },
    {
      id: 2,
      name: "Mehmet Yılmaz",
      role: "CEO",
      company: "StartupXYZ",
      content:
        "Profesyonel yaklaşımı ve teknik becerileri sayesinde projemiz çok başarılı oldu.",
      avatar: "/testimonial2.jpg",
    },
    {
      id: 3,
      name: "Zeynep Kaya",
      role: "Design Lead",
      company: "Creative Studio",
      content:
        "Teknik uzmanlığının yanında yaratıcı çözümleri de çok değerli. Kesinlikle tavsiye ederim.",
      avatar: "/testimonial3.jpg",
    },
  ],

  writing: [
    {
      id: 1,
      title: "Next.js 14'te Yeni Özellikler",
      description: "App Router ve Server Components hakkında detaylı bir inceleme",
      date: "2024-01-15",
      link: "https://example.com/writing1",
    },
    {
      id: 2,
      title: "TypeScript Best Practices",
      description:
        "Modern TypeScript projelerinde dikkat edilmesi gereken noktalar",
      date: "2024-01-10",
      link: "https://example.com/writing2",
    },
    {
      id: 3,
      title: "Tailwind CSS ile Hızlı Prototipleme",
      description:
        "Utility-first CSS yaklaşımının avantajları ve kullanım örnekleri",
      date: "2024-01-05",
      link: "https://example.com/writing3",
    },
  ],

  contact: {
    email: "aliyuks@outlook.com",
    social: {
      linkedin: "https://www.linkedin.com/in/aliyuksl/",
      twitter: "https://x.com/AliYukse1",
    },
  },
};
