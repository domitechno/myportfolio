export const personalInfo = {
  name: "Yoann's Portfolio",
  email: "yoanngueu@gmail.com",
  location: "https://www.slovaquie.campusfrance.org/fr/la-beaute-de-la-france",
  profilePicture: "/yopdp.jpg",
  github: "https://github.com/domitechno", 
  linkedin: "https://www.linkedin.com/in/yoanngueu/",
  heroDescription: "",
};

interface Project {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  url: string;
}

export const projects: Project[] = [
  {
    title: "Lumen&Leaf",
    image: "/eeyuh.png",
    description: "Online Particpative Library",
    technologies: ["Angular", "Express.js", "Node.js"],
    url: "/lumenandleaf"
  },
  {
    title: "Orange Prod",
    image: "/orange.png",
    description: "Reproduction of Orange.com",
    technologies: ["PHP","MySQL"],
    url: "orange-prod"
  },
    {
    title: "TicTacToe 2v",
    image: "/frontttt.avif",
    description: "Game paltform",
    technologies: ["Python", "AI Injection"],
    url: "/tictactoe"
  },
  {
    title: "MoodTunes",
    image: "/jeans.png",
    description: "Indie Music Player",
    technologies: ["React Native", "Spotify API", "Machine Learning"],
    url: "moodtunes"
  },  
];

export const skills = {
  programmingLanguages: [
    { name: "Java", logo: "/icons/java.png" },
    { name: "Python", logo: "/icons/python.png" },
    { name: "JavaScript", logo: "/icons/javascript.png" },
    { name: "PHP", logo: "/icons/php.png" },
  ],
  frontendDevelopment: [
    { name: "HTML", logo: "/icons/html.png" },
    { name: "CSS", logo: "/icons/css.png" },
    { name: "React", logo: "/icons/react.png" },
    { name: "Angular", logo: "/icons/angular.png" },
  ],
  backendDevelopment: [
    { name: "Symfony", logo: "/icons/symfony.png" },
    { name: "Express.js", logo: "/icons/express.png" },
    { name: "Node.js", logo: "/icons/nodejs.png" },
  ],
  databaseAndStorage: [
    { name: "MySQL", logo: "/icons/mysql.png" },
    { name: "MongoDB", logo: "/icons/mongodb.png" },
  ],
  toolsAndServices: [
    { name: "Git", logo: "/icons/git.png" },
    { name: "Bootstrap", logo: "/icons/bootstrap.png" },
  ],
};

export const skillCategories = [
  { key: "programmingLanguages", title: "Programming Languages", icon: "💻" },
  { key: "frontendDevelopment", title: "Frontend Development", icon: "🎨" },
  { key: "backendDevelopment", title: "Backend Development", icon: "⚙️" },
  { key: "databaseAndStorage", title: "Database & Storage", icon: "🗄️" },
  { key: "toolsAndServices", title: "Tools & Services", icon: "🧰" },
];

export const awards = [
  {
    name: "Coddy Certificates",
    issuer: "HTML & CSS",
    date: "January 2025",
    type: "Personal",
    status: "Completed",
  },
  {
    name: "SQL Associate Certification",
    issuer: "DataCamp",
    date: "October 2025",
    type: "National",
    status: "Ongoing",
  },
  {
    name: "AWS Certified",
    issuer: "Cloud Practitioner",
    date: "December 2025",
    type: "International",
    status: "Later",
  },
];

export const education = [
  {
    institution: "Lycée Marie-Curie",
    location: "Versailles, France",
    degree: "Baccalauréat Générale",
    period: "2016 - 2020",
    achievements: [
      "Seconde Générale",
      "1ère & Terminale ES",
      "Represented of the eco-delegate in 2018"
    ],
  }, {
    institution: "I.N.S.T.A",
    location: "Paris, France",
    degree: "BTS SIO",
    period: "2022 - 2024",
    achievements: ["After attempted law school, I decided to switch to IT and enrolled myself in studies that always suited more"],
  }, {
   institution: "I.N.S.T.A",
    location: "Paris, France",
    degree: "Licence CDA",
    period: "2024 - 2025",
    achievements: ["After a lot of effort and self learning i could obtain my diploma as a software developper",
      "Graduted with honors"
    ],
  },
];