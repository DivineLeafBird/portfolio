import Venpic from "../assets/venpic.png";
import Venpic2 from "../assets/venpic2.jpeg";
import Purpletray from "../assets/purpletray.png";
import Foodie from "../assets/foodie.png";
import Foodie2 from "../assets/foodie2.png";
import Foodie3 from "../assets/foodie3.png";
import Foodie4 from "../assets/foodie4.png";
import Foodie5 from "../assets/foodie5.png";
import Foodie6 from "../assets/foodie6.png";
import CoffeeStar from "../assets/coffeestar.jpg";
import CoffeeStar2 from "../assets/coffeestar2.jpeg";
import Portfolio from "../assets/portfolio.png";
import Portfolio2 from "../assets/portfolio2.png";
import Portfolio3 from "../assets/portfolio3.png";
import Renkla from "../assets/renkla.png";

const projectDetails = [
  {
    id: 1,
    imgSrc: Foodie4,
    name: "Foodie App",
    task: "Design",
    platform: "Mobile",
    role: "UX / UI Designer",
    tech: ["Figma", "Figjam", "UX / UI"],
    stack: ["Figma", "UX Design"],
    images: [Foodie5, Foodie, Foodie2, Foodie3, Foodie4, Foodie6],
    category: "design",
    intro:
      "An Intuitive design of a Food Ordring App for a take-out restaurant.",
    description:
      "Foodie is a food ordering app designed for individuals who want a quick and convenient way to get delicious takeout meals. The app offers a wide variety of cuisines to choose from, all with the ability to order for pickup or delivery. Foodie is  your ultimate solution for satisfying your cravings with just a few taps on your phone. Whether you're in the mood for mouthwatering pasta, spicy curry, or a classic burger, Foodie has got you covered with its extensive variety of cuisines.",
    githubLink:
      "https://www.figma.com/design/QN0X7HjqPldz9KqxHyhS5j/Food-Delivery-App?t=Wfy69bnTiPfzP6zt-1",
  },
  {
    id: 2,
    imgSrc: Venpic,
    name: "Venpic Agencies",
    task: "Design",
    platform: "Web",
    role: "UX / UI Designer",
    tech: ["Figma", "Figjam", "UX / UI"],
    stack: ["Figma", "UX Design"],
    images: [Venpic, Venpic2],
    category: "design",
    intro: "UX design of a Real-Estate property managment system.",
    description:
      "A design concept of Venpic a web application to simplify the rental search for tenants. Tenants can browse listings with detailed filters, explore properties with virtual tours, and manage applications electronically. The agency can create professional listings, target ideal tenants, manage applications, and collect rent seamlessly - all within one user-friendly web app. Find your perfect place or fill your vacancy effortlessly with Venpic.",
    githubLink:
      "https://www.figma.com/design/A73fnRviw5MgQldtNeX5Zr/Real-Estate-Web-App?t=qK9PjoBhb20mdfGp-1",
  },
  {
    id: 3,
    imgSrc: Purpletray,
    name: "Purpletray",
    task: "Frontend",
    platform: "Web",
    role: "Software Engineer",
    tech: ["React", "Node.js", "Vite"],
    stack: ["HTML", "JavaScript", "Tailwind CSS", "React", "Node.js", "Vite"],
    images: [Purpletray],
    category: "web",
    intro:
      "Practical example of (Single Page Application (SPA) with Framer motion animations using React.",
    description:
      "Purpletray is a web application for student tutoring. Get matched with experienced tutors who specialize in your area of interest. Whether it's programming, language learning, music, or any other skill, our tutors provide personalized lesson plans and tailored learning strategies to help you achieve your goals. Purpletray is your one-stop solution for finding the perfect tutor to help you reach your full potential.",
    githubLink: "https://github.com/DivineLeafBird/react-project-purpletray",
  },
  {
    id: 4,
    imgSrc: Venpic,
    name: "Venpic Agencies",
    task: "Fullstack",
    platform: "Web",
    role: "Software Engineer",
    tech: ["Laravel", "PHP", "MySQL"],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Laravel",
      "PHP",
      "MySQL",
      "Jetstream",
    ],
    images: [Venpic, Venpic2],
    category: "web",
    intro: "Implementation of the Real-Estate property managment system. ",
    description:
      "Developed web application of the Venpic design that  simplifies the rental search for tenants. Tenants can browse listings with detailed filters, explore properties with virtual tours, and manage applications electronically. The agency can create professional listings, target ideal tenants, manage applications, and collect rent seamlessly - all within one user-friendly web app. Find your perfect place or fill your vacancy effortlessly with Venpic.",
    githubLink: "https://github.com/DivineLeafBird/rental-homes",
  },
  {
    id: 5,
    imgSrc: CoffeeStar,
    name: "Coffee Star",
    task: "Design",
    platform: "Mobile",
    role: "UX / UI Designer",
    tech: ["Figma", "Figjam", "UX / UI"],
    stack: ["Figma", "UX Design"],
    images: [CoffeeStar, CoffeeStar2],
    category: "design",
    intro: "A design challenge of a Coffee Ordering App.",
    description:
      "Coffee Star is a mobile app designed for coffee lovers who want to  order their favorite drinks with ease. The app provides a user-friendly interface that allows users to explore coffee menus, and place orders for pickup or delivery. Coffee Star is your go-to app for finding your favorite drinks wherever you are.",
    githubLink:
      "https://www.figma.com/design/EPGHVmBP7gq4IkxKEMrn98/Coffee-App?t=qK9PjoBhb20mdfGp-1",
  },
  {
    id: 6,
    imgSrc: Portfolio,
    name: "Portfolio",
    task: "Design",
    platform: "Web",
    role: "UX / UI Designer",
    tech: ["Figma", "Figjam", "UX / UI"],
    stack: ["Figma", "UX Design"],
    images: [Portfolio, Portfolio2, Portfolio3],
    category: "design",
    intro: "Portfolio UX design.",
    description:
      "A design concept of my portfolio web application. A place to showcase my projects, skills, and experiences as a software engineer and UX / UI designer. The web app is designed to be responsive and user-friendly, providing visitors with an easy way to navigate through my work and get in touch. The website is designed to be visually appealing and engaging, with a focus on clean, modern design and intuitive user experience.",
    githubLink:
      "https://www.figma.com/design/ymCQ5Bn8lKRaURUTiTtPY2/Portfolio-Web-App?t=OVabUKhs50yB9H1l-1",
  },
  {
    id: 7,
    imgSrc: Portfolio,
    name: "Portfolio",
    task: "Frontend",
    platform: "Web",
    role: "Software Engineer",
    tech: ["React", "Node.js", "Vite"],
    stack: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Vite",
      "Jest",
    ],
    images: [Portfolio, Portfolio2, Portfolio3],
    category: "web",
    intro: "Implementation of the portfolio UX design.",
    description:
      "Developed my personal portfolio website using React, Tailwind CSS, and Node.js. The web application showcases my projects, skills, and experiences as a software engineer and UX / UI designer. The website is designed to be responsive and user-friendly, providing visitors with an easy way to navigate through my work and get in touch with me.",
    githubLink: "https://github.com/DivineLeafBird/portfolio",
  },
  {
    id: 8,
    imgSrc: Renkla,
    name: "Renkla",
    task: "Design",
    platform: "Mobile",
    role: "UX / UI Designer",
    tech: ["Figma", "Figjam", "UX / UI"],
    stack: ["Figma", "UX Design"],
    images: [Renkla],
    category: "design",
    intro: "Apparel store UX design. For fashion enthusiats.",
    description:
      "A design concept for a fashion e-commerce mobile app. Renkla is designed for fashion enthusiasts who want to discover the latest trends, shop for stylish outfits, and get inspired by fashion influencers. The app offers a wide range of clothing items, accessories, and beauty products from top brands, all with the convenience of shopping on your phone. Renkla is your ultimate destination for all things fashion.",
    githubLink:
      "https://www.figma.com/proto/h4I8n7vZa2g4uzw4NPZLoP/Renkla?node-id=12-123&starting-point-node-id=19%3A1556&t=VxmHVkep6GZntXaG-1",
  },
];

export default projectDetails;

// platform: ["Web", "Mobile"],
// role: ["Software Engineer", "UX / UI Designer"],
// tech: ["Laravel", "PHP", "React","Figma","HTML", "CSS", "Tailwind CSS", "MySQL", "React Native"],
// frontEnd: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Figma", "UX / UI", "React Native"],
// backEnd: ["Laravel", "PHP", "MySQL", ""],
// category: ["web", "design", "mobile"],
