import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: backend,
  },
  {
    title: "Animator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Virtual Reality Developer Intern",
    company_name: "MIC | Chennai.",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2023",
    points: [
      "Developed immersive and interactive VR experiences using advanced tools and technologies.",
      "Gained hands-on experience in creating realistic simulations and engaging virtual environments.",
      "Strengthened core skills in virtual reality development, including design, interaction, and optimization.",
      "Cultivated a strong passion for exploring and innovating in immersive technology.",
    ],
  },
  {
    title: "Game Developer Intern",
    company_name: "NIT | Trichy.",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - Oct 2024",
    points: [
      "Independently developed a game promoting online bullying awareness during my internship at NIT Trichy.",
      "Managed all stages of the project, including concept design, coding, and user experience development.",
      "Enhanced skills in game mechanics, programming, and creating engaging interactive content.",
      "Strengthened my commitment to leveraging technology for positive social impact.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Completed Java Programming Certification focused on OOP and database handling with Intermediate Projects.",
    name: "CodeChef",
    designation: "Certified",
    company: "Sep-2025",
    image: "https://codechefabesec.netlify.app/img/icons/ccemoji2.webp",
  },
  {
    testimonial:
      "Earned a JavaScript certification demonstrating strong knowledge in modern web development fundamentals.",
    name: "Hackerrank",
    designation: "Certified",
    company: "July-2025",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/40/HackerRank_Icon-1000px.png",
  },
  {
    testimonial:
      "Completed 100hrs of AR/VR Game Development training focused on immersive environments and real-time 3D design.",
    name: "nasscom",
    designation: "Certified",
    company: "jan-2024",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI5SRUZpqWrVCLLaNOgptXstX4ENFsj-t_FA&s",
  },
];

const projects = [
  {
    name: "Student Database Management System",
    description:
      "Java-based console application that manages student records by allowing users to add, update, delete, and view data efficiently. Built purely with core Java concepts to strengthen understanding of OOP and database connectivity.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "jdbc",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/gokulraj9488/Student-Management-System-Java-Intermediate-",
  },
  {
    name: "To-Do List",
    description:
      "Simple command-line program built using Java that lets users create, mark, and delete daily tasks. Focused on logic building, file handling, and basic CRUD operations using Java.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "corejava",
        color: "green-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/gokulraj9488/ToDo-List-Java",
  },
  {
    name: "Open World First Person Game",
    description:
      "Immersive open-world adventure game built in Unity, where players explore a vast environment, collect hidden items, and unlock new areas. Features realistic 3D movement, lighting, and interactive elements for an engaging player experience.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c-sharp",
        color: "green-text-gradient",
      },
      {
        name: "GameDev",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/gokulraj9488/OpenWorld_First_person_Game",
  },
];

export { services, technologies, experiences, testimonials, projects };
