export type PortfolioProject = {
  title: string;
  description: string;
  technologies: string[];
  href?: string;
};

export const portfolio = {
  name: "Akshatha Kulkarni",
  firstName: "Akshatha",
  title: "First-Year Engineering Student",
  field: "Artificial Intelligence & Machine Learning",
  introduction:
    "Hi! I'm Akshatha, an AI and Machine Learning engineering student at S.E.A. College of Engineering and Technology, Bengaluru. I'm curious about technology and enjoy learning new things, exploring ideas, and improving my skills. I'm excited to grow as a student, gain practical experience, and work on projects that help me turn my ideas into reality.",
  about: {
    introduction:
      "I'm at the beginning of my engineering journey, discovering how technology can turn thoughtful ideas into useful things. I enjoy exploring new topics, asking questions, and taking things one step at a time.",
    interests: [
      "Programming and problem-solving",
      "Artificial intelligence and machine learning",
      "Web development and exploring new technology",
    ],
    hobbies: "[Add your hobbies here]",
    aspiration:
      "I hope to grow my technical skills, get hands-on experience, and eventually build projects that bring my ideas to life.",
  },
  skills: [
    {
      title: "Programming",
      description:
        "A beginner, currently starting with Python and building my coding and problem-solving skills.",
      items: ["Python · Learning"],
      mark: "01",
    },
    {
      title: "Areas I’m exploring",
      description:
        "Learning the foundations and discovering how these areas can be put into practice.",
      items: ["Artificial intelligence & machine learning", "Web development"],
      mark: "02",
    },
    {
      title: "Tools I use",
      description:
        "Tools that support my learning, coding practice, and day-to-day exploration.",
      items: ["VS Code", "ChatGPT", "Claude AI"],
      mark: "03",
    },
  ],
  learning: [
    {
      number: "01",
      title: "Getting started with Python",
      description:
        "Practising the basics of programming and building confidence one concept at a time.",
    },
    {
      number: "02",
      title: "Exploring technology",
      description:
        "Learning about AI, machine learning, and web development as I grow my technical foundation.",
    },
    {
      number: "03",
      title: "Growing through practice",
      description:
        "Working toward hands-on experience, stronger problem-solving skills, and new ideas to explore.",
    },
  ],
  projects: [] as PortfolioProject[],
  education: {
    college: "S.E.A. College of Engineering and Technology",
    shortName: "SEACET",
    location: "Bengaluru, Karnataka",
    degree: "B.E.",
    branch: "Artificial Intelligence & Machine Learning",
    year: "First Year",
    graduation: "2030",
  },
  contact: {
    email: "akshathakulkarni70@gmail.com",
    linkedin: "https://www.linkedin.com/in/akshatha-kulkarni-b43bb0442/",
    github: "https://github.com/akshatha1365",
  },
} as const;
