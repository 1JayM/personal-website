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
    github: "",
    demo: "",
    featured: true,
  },
  {
    title: "Wordle",
    category: "Game Development",
    description:
      "A Wordle-inspired word game with randomized five-letter words, six guesses, and visual feedback for each attempt.",
    technologies: ["Java", "JavaFX"],
    github: "https://github.com/1JayM/Wordle",
    demo: "",
    featured: false,
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
