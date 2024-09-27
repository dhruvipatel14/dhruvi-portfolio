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
  docker,
  winjit,
  ecosmob,
  electrum,
  carrent,
  jobit,
  tripguide,
  threejs,
  pandas,
  redis,
  scikit,
  tensorflow,
  kafka,
  postgres,
  mysql,
  django,
  cplus,
  aws,
  python,

  applied_nlp,
  deeplearning_ai,
  gcp,
  nlp_coursera


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
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Machine learning Engineer",
    icon: mobile,
  },
  {
    title: "Photographer",
    icon: creator,
  },
];

const technologies = [
  // {
  //   name: "C Plus",
  //   icon: cplus,
  // },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "Django",
    icon: django,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "My Sql",
    icon: mysql,
  },
  {
    name: "Postgres Sql",
    icon: postgres,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Kafka",
    icon: kafka,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  // {
  //   name: "Scikit Learn",
  //   icon: scikit,
  // },
  // {
  //   name: "Pandas",
  //   icon: pandas,
  // },
  // {
  //   name: "Tensorflow",
  //   icon: tensorflow,
  // },

];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Winjit Technologies Pvt. Ltd.",
    icon: winjit,
    iconBg: "#E6DEDD",
    date: "June 2019 - May 2020",
    points: [
      "Contributed to the full machine learning lifecycle, encompassing data transformation, EDA, feature engineering, model development, and deployment.",
      "Implemented diverse machine learning algorithms, customized to match the unique data characteristics.",
      "Played a key role in collaborative product development, handling debugging and testing tasks.",
      "Demonstrated proficiency in Python, MongoDB, and REST API integration for seamless project implementation.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Electrum IT Solutions Pvt. Ltd.",
    icon: electrum,
    iconBg: "#383E56",
    date: "March 2021 - August 2022",
    points: [
      "Developed REST APIs for web applications using Django, DRF, and MySQL, serving over 1 million users.",
      "Created a real-time data streaming platform integrating GraphQL and WebSockets for mobile clients, with a hybrid MySQL-MongoDB architecture.",
      "Designed a Python-based desktop app for Modbus protocol communication with PLC devices and load cell indicators."
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Ecosmob Technologies Pvt Ltd.",
    icon: ecosmob,
    iconBg: "#E6DEDD",
    date: "August 2022 - April 2024",
    points: [
      "Created a scalable backend application, utilizing microservice architecture, task management via Celery and Redis, and integrating payment gateways. Provided APIs for both web and mobile clients.",
      "Implemented a system to track live call events from PBX, leveraging Kafka as a data streaming platform. Integrated with Zoho CRM for logging and notification functionalities.",
      "API development using Django REST Framework (DRF), Django, MySQL, and PostgreSQL, ensuring efficient and reliable communication between systems."
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    website_link: "https://www.google.com/"
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const certificates = [
  {
    title: "Applied Natural Language Processing",
    image: applied_nlp,
  },
  {
    title: "GCP Big Data data and ML fundamentals",
    image: gcp,
  },
  {
    title: "Tensorflow in Practice Specialization",
    image: deeplearning_ai,
  },
  {
    title: "NLP with Classification and Vector Spaces",
    image: nlp_coursera,
  },
];

export { services, technologies, experiences, testimonials, projects, certificates };