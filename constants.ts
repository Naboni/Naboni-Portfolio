export const METADATA = {
  title: "Portfolio | Naboni Abebe",
  description:
    "I am a passionate Software Engineer who has experience developing Enterprise projects.",
  siteUrl: "https://naboni-portfolio.vercel.app/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  // {
  //   name: "Timeline",
  //   ref: "timeline",
  // },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I design and develop full stack applications",
  "I develop modern frontend apps",
  "I design dynamic user experience",
  "I design and develop mobile applications",
];

export const EMAIL = "se.naboni.abebe@gmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/naboni-abebe-5586341a1/",
  github: "https://github.com/Naboni",
  // medium: "https://alphaayush.medium.com/",
  instagram: "https://www.instagram.com/the_bonny_24/",
  // facebook: "https://www.facebook.com/ayush013",
  // dribbble: "https://dribbble.com/alphaayush",
  // behance: "https://www.behance.net/alphaayush/",
  twitter: "https://twitter.com/Naboni6",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "Betopia - Marketting Influencer Website",
    image: "/projects/works/betopia.png",
    blurImage: "/projects/blur/betopia.jpg",
    description: "NextJs Ant Design Landing Page",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://hype-master.vercel.app/",
    tech: ["typescript", "next", "antd"],
  },
  {
    name: "Temaribet Website",
    image: "/projects/works/temaribet.png",
    blurImage: "/projects/blur/temaribet.jpg",
    description: "E-learning Site for Parents, Students and Tutors",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://temari-bet.com/",
    tech: ["react", "next", "typescript", "tailwind"],
  },
  {
    name: "Admin Dashboard",
    image: "/projects/works/dashboard.png",
    blurImage: "/projects/blur/dashboard.jpg",
    description: "Built the application from zero to production ????",
    gradient: ["#245B57", "#004741"],
    url: "https://dashboard-next-js-material.vercel.app/",
    tech: ["react", "next", "typescript", "material"],
  },
  {
    name: "SunnySide",
    image: "/projects/works/sunny.png",
    blurImage: "/projects/blur/sunny.jpg",
    description: "Front end sunny side challenge",
    gradient: ["#003052", "#167187"],
    url: "https://sunnyside-eight.vercel.app/",
    tech: ["tailwind", "react", "figma"],
  },
  {
    name: "Covid Tracker",
    image: "/projects/works/covidgis.png",
    blurImage: "/projects/blur/covidgis.jpg",
    description: "Covid case tracker all over the world.",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://covid-gis-react.vercel.app/",
    tech: ["react", "next", "typescript"],
  },
  // {
  //   name: "Huminos website",
  //   image: "/projects/huminos.jpg",
  //   blurImage: "/projects/blur/huminos-blur.jpg",
  //   description: "Marketing site for Huminos bots for workplace by facebook",
  //   gradient: ["#17007B", "#3A2C79"],
  //   url: "https://bots.huminos.com/",
  //   tech: ["javascript", "sass", "svg", "gulp"],
  // },
  // {
  //   name: "Alpha Aesthetics",
  //   image: "/projects/alpha.jpg",
  //   blurImage: "/projects/blur/alpha-blur.jpg",
  //   description: "Designed and developed the platform",
  //   gradient: ["#172839", "#334659"],
  //   url: "https://alpha-aesthetics.ayushsingh.net/",
  //   tech: ["illustrator", "javascript", "angular"],
  // },
  // {
  //   name: "Amantrya - Polling Web App",
  //   image: "/projects/farewell18.jpg",
  //   blurImage: "/projects/blur/farewell18-blur.jpg",
  //   description: "Dark mode dated from 2017 ????",
  //   gradient: ["#142D46", "#2E4964"],
  //   url: "https://farewell18.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "AKGEC - College Website",
  //   image: "/projects/akgec.jpg",
  //   blurImage: "/projects/blur/akgec-blur.jpg",
  //   description: "Contributed in overall design and development",
  //   gradient: ["#5E4C06", "#746528"],
  //   url: "https://www.akgec.ac.in/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "BDC 2018 Web Portal",
  //   image: "/projects/bdc18.jpg",
  //   blurImage: "/projects/blur/bdc18-blur.jpg",
  //   description: "Built the portal from zero to production ????",
  //   gradient: ["#470700", "#712A23"],
  //   url: "https://bdc2018.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
  // {
  //   name: "Scrolls 2017 - Website",
  //   image: "/projects/scrolls.jpg",
  //   blurImage: "/projects/blur/scrolls-blur.jpg",
  //   description: "Built the portal from zero to production ????",
  //   gradient: ["#685506", "#7B6921"],
  //   url: "https://scrolls-17.ayushsingh.net/",
  //   tech: ["angular", "html", "css"],
  // },
  // {
  //   name: "Cardize - Visiting Cards",
  //   image: "/projects/cardize.jpg",
  //   blurImage: "/projects/blur/cardize-blur.jpg",
  //   description: "First web project! Custom visiting card generator",
  //   gradient: ["#552A04", "#614023"],
  //   url: "https://cardize.ayushsingh.net/",
  //   tech: ["javascript", "html", "css"],
  // },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "typescript",
    "react",
    "redux",
    "next",
    "material",
    "antd",
    "flutter",
    "nodejs",
    "graphql",
    "mysql",
    "postgresql",
    "mongodb",
    // "angular",
    // "gsap",
    "tailwind",
    "sass",
    "html",
    "css",
  ],
  userInterface: ["figma", "xd"],
  other: ["git", "postman"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "2021",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (Current)",
    size: ItemSize.SMALL,
    subtitle: "Working on flipkart wholesale platform ????",
    image: "/timeline/flipkart.svg",
    slideImage: "/timeline/flipkart.gif",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance ????",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-freelance.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Motion Graphics (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Motion Graphics content for Product Launch ????",
    image: "/timeline/octanner.svg",
    slideImage: "/timeline/aftereffects.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/timeline/dltlabs.svg",
    slideImage: "/timeline/dlt-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! ???? Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/timeline/huminos.svg",
    slideImage: "/timeline/huminos-website.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College ????",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/timeline/akgec.svg",
    slideImage: "/timeline/farewell.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-head.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/timeline/svg-lecture.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle:
      "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/timeline/ims-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/timeline/js-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle:
      "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/timeline/abes-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/timeline/web-17.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/timeline/ims-16.jpg",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/timeline/si.svg",
    slideImage: "/timeline/si-start.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/timeline/xda.svg",
    slideImage: "/timeline/xda-rt.jpg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "UA-163844688-1";
