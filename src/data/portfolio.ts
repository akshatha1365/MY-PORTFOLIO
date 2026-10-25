export type PortfolioProject = {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubHref?: string;
  demoHref?: string;
  status?: "In Progress" | "Completed";
};

export type PortfolioCertification = {
  title?: string;
  issuer: string;
  completedAt?: string;
  image?: string;
  certificateUrl?: string;
  credentialUrl?: string;
};

export const portfolio = {
  name: "Akshatha Kulkarni",
  firstName: "Akshatha",
  initials: "AK",
  profilePlaceholder: "AK",
  profileImage: null as string | null,
  title: "First-Year AI & ML Engineering Student",
  field: "Artificial Intelligence & Machine Learning",
  introduction:
    "Hi! I'm Akshatha Kulkarni, an AI and Machine Learning engineering student at S.E.A. College of Engineering and Technology, Bengaluru. I'm curious about technology and enjoy learning new things, exploring ideas, and improving my skills. I'm excited to grow as a student, gain practical experience, and work on projects that help me turn my ideas into reality.",
  about: {
    introduction:
      "I'm at the beginning of my engineering journey, discovering how technology can turn thoughtful ideas into useful things. I'm curious about artificial intelligence and machine learning, and enjoy programming, exploring new ideas, and improving a little at a time.",
    interests: [
      "Programming and problem-solving",
      "Artificial intelligence and machine learning",
      "Web development and exploring technology",
    ],
    hobbies: [] as string[],
    aspiration:
      "I hope to gain practical experience through projects and internships while continuing to learn, grow, and strengthen my skills.",
  },
  skills: [
    {
      title: "Programming languages",
      description:
        "Building a foundation in programming and problem-solving, one concept at a time.",
      items: ["Python · Beginner / Currently learning"],
      mark: "01",
    },
    {
      title: "Technologies I'm exploring",
      description:
        "Areas I’m curious about and learning the fundamentals of.",
      items: ["Artificial intelligence", "Machine learning", "Web development"],
      mark: "02",
    },
    {
      title: "Tools",
      description:
        "Tools that support my learning, coding practice, and exploration.",
      items: ["Visual Studio Code", "ChatGPT", "Claude AI"],
      mark: "03",
    },
  ],
  learning: [
    {
      number: "01",
      title: "Starting with Python",
      description:
        "Learning programming fundamentals and practising problem-solving as I build confidence.",
    },
    {
      number: "02",
      title: "Understanding the building blocks",
      description:
        "Exploring core coding concepts and finding ways to apply what I learn.",
    },
    {
      number: "03",
      title: "Exploring AI and machine learning",
      description:
        "Getting familiar with introductory ideas in AI and machine learning.",
    },
    {
      number: "04",
      title: "Getting comfortable with developer tools",
      description:
        "Practising with tools that help me learn, write, and organize code.",
    },
    {
      number: "05",
      title: "Looking ahead",
      description:
        "Working towards practical projects, internship opportunities, and long-term growth.",
    },
  ],
  projects: [] as PortfolioProject[],
  education: {
    college: "S.E.A. College of Engineering and Technology",
    shortName: "SEACET",
    location: "Bengaluru, Karnataka, India",
    degree: "Bachelor of Engineering (B.E.)",
    branch: "Artificial Intelligence and Machine Learning (AI & ML)",
    year: "First Year",
    graduation: "2030",
  },
  puc: {
    college: "KSVK Pre university",
    board: "Karnataka State Board",
    course: "PCMB",
    firstYear: {
      label: "1st PUC",
      marks: 557,
      maximum: 600,
    },
    secondYear: {
      label: "2nd PUC",
      marks: 535,
      maximum: 625,
    },
  },
  certifications: [
    { issuer: "Microsoft" },
    { issuer: "Wadhwani Foundation" },
  ] as PortfolioCertification[],
  contact: {
    email: "akshathakulkarni70@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshatha-kulkarni-b43bb0442",
    github: "https://github.com/akshatha1365",
  },
} as const;
