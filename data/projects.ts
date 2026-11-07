export type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "CampusConnect",
    category: "Web Development",
    description:
      "A platform for students to connect, share resources, and collaborate on academic projects.",
    technologies: ["React", "Node.js", "TypeScript"],
    github: "https://github.com/XoutDragon/school-forums",
    demo: "",
    featured: true,
  },
  {
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A personal website showcasing my projects, experience, certifications, and interests in finance, economics, and technology.",
    technologies: ["React", "TypeScript", "CSS"],
    github: "https://github.com/1JayM/personal-website",
    demo: "https://jaymardikar.vercel.app/",
    featured: true,
  },
  {
    title: "Big 6 Canadian Comparative Dashboard",
    category: "Web Development, Data Compilation and Analysis",
    description:
      "A dashboard for comparing and analyzing data from the Big 6 Canadian banks.",
    technologies: ["React", "TypeScript", "CSS", "Data Analysis", "Visualization"],
    github: "https://github.com/1JayM/big6-dashboard-canada",
    demo: "",
    featured: true,
  },
  {
    title: "Expense Tracker",
    category: "Web Development",
    description:
      "A web application that allows users to track their expenses, categorize them, and visualize spending patterns over time.",
    technologies: ["Python", "CSV", "Matplotlib", "Tkinter", "Accounting", "Finance"],
    github: "https://github.com/1JayM/expense-tracker",
    demo: "",
    featured: true,
  },
];
