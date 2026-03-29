export const myProjects = [
  {
    id: 1,
    title: "AI Financial Document Analyzer",
    description:
      "A multi-agent AI system built with CrewAI + FastAPI that analyzes financial PDF documents, extracts key metrics, computes financial ratios, assesses risk, and generates structured investment insights.",
    subDescription: [
  "Built a multi-agent AI pipeline using CrewAI and FastAPI, orchestrating 4 specialized agents for end-to-end financial document analysis.",
  "Implemented asynchronous job processing with Celery and Redis, enabling concurrent PDF analysis requests without blocking the API.",
  "Integrated PostgreSQL via SQLAlchemy ORM for persistent storage of analysis results, user records, and generated report paths.",
  "Designed a PDF extraction and financial ratio computation engine using LangChain and custom BaseTool subclasses powered by Gemini 2.5 Flash.",
],
    href: "https://github.com/KaKashi0209/financial-document-analyzer-debug",
    logo: "",
    image: "/assets/projects/AIfinance.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Postgresql",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 3,
        name: "fast api",
        path: "/assets/logos/fastapi.svg",
      },
      {
        id: 4,
        name: "crewai",
        path: "/assets/logos/crewai.svg",
      },
       {
        id: 4,
        name: "redis",
        path: "/assets/logos/redis.svg",
      },
    ],
  },
  {
    id: 2,
    title: "KafkaPay",
    description:
      "KafkaPay is a production-grade payment processing backend that solves the hard problems of financial systems at scale — duplicate payments, concurrent race conditions, data inconsistency, and settlement reconciliation.",
   subDescription: [
  "Built a real-time payment system using Spring Boot, Kafka, Redis, and PostgreSQL.",
  "Implemented idempotency and distributed locking to prevent duplicate transactions and race conditions.",
  "Designed an immutable ledger system for accurate balance tracking and auditability.",
  "Enabled event-driven architecture with Kafka for reliable payment processing.",
],
    href: "https://github.com/KaKashi0209/Kafkapay",
    logo: "",
    image: "/assets/projects/KafkaPay.png",
    tags: [
      {
        id: 1,
        name: "Springboot",
        path: "/assets/logos/springboot.svg",
      },
      {
        id: 2,
        name: "Apache kafka",
        path: "/assets/logos/kafka.svg",
      },
       {
        id: 3,
        name: "Postgresql",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "redis",
        path: "/assets/logos/redis.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Diabetes Risk Analyser",
    description:
      "A machine learning-based diabetes risk prediction system that analyzes medical data to provide intelligent, data-driven insights for early detection and preventive healthcare.",
   subDescription: [
  "Built a machine learning model to predict diabetes risk using medical data.",
  "Performed EDA, preprocessing, and model optimization using Scikit-learn.",
  "Developed a modular pipeline for training, evaluation, and prediction.",
  "Generated insights through data visualization for better decision-making.",
],
    href: "https://github.com/KaKashi0209/Diabetes_analyzer",
    logo: "",
    image: "/assets/projects/dibete.png",
    tags: [
      {
        id: 1,
        name: "python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "streamlit",
        path: "/assets/logos/streamlit-icon.svg",
      },
      {
        id: 3,
        name: "numpy",
        path: "/assets/logos/numpy.svg",
      },
      {
        id: 4,
        name: "pandas",
        path: "/assets/logos/Pandas.svg",
      },
       {
        id: 5,
        name: "matplotlib",
        path: "/assets/logos/Matplotlib.svg",
      },
       {
        id: 6,
        name: "scikit-learn",
        path: "/assets/logos/Scikit.svg",
      },
    ],
  },
  {
    id: 4,
    title: "BakBak-Chat-App",
    description:
      "A real-time chat application enabling instant messaging with secure authentication, scalable backend architecture, and customizable user experience.",
    subDescription: [
  "Developed a real-time chat app using React, Node.js, Socket.io, and MongoDB.",
  "Implemented JWT authentication and media messaging features.",
  "Designed a customizable UI with 30+ themes and ensured reliable message delivery.",
],
    href: "https://github.com/KaKashi0209/BakBak-Chat-App",
    logo: "",
    image: "/assets/projects/bakbak.png",
    tags: [
      {
        id: 1,
        name: "javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 2,
        name: "react.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "mongoDB",
        path: "/assets/logos/mongodb.svg",
      },
      {
        id: 4,
        name: "Node.js",
        path: "/assets/logos/node.svg",
      },
      
      {
        id: 5,
        name: "Websocket",
        path: "/assets/logos/websocket.svg",
      },
    ],
  },
  {
    id: 5,
    title: "SAARTHI",
    description:
      "A full-stack web application that connects students with alumni for mentorship, real-time communication, and knowledge sharing through a scalable and interactive platform.",
    subDescription: [
  "Developed a mentorship platform enabling seamless interaction between students and alumni.",
  "Implemented secure authentication using Firebase for user management and protected access.",
  "Built real-time chat functionality for instant communication and knowledge exchange.",
  "Integrated video calling features to support one-on-one virtual mentorship sessions.",
  "Designed a resource hub for uploading and sharing educational materials.",
  "Created a dynamic news feed to provide curated educational and career insights.",
  "Developed a responsive UI using React.js and Tailwind CSS for enhanced user experience.",
],
    href: "https://github.com/KaKashi0209/SAARTHI--Student-Alumni-Connection",
    logo: "",
    image: "/assets/projects/saarthi.png",
    tags: [
      {
        id: 1,
        name: "react.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "firebase",
        path: "/assets/logos/firebase.svg",
      },
      {
        id: 4,
        name: "cloudinary",
        path: "/assets/logos/cloud.svg",
      },
       {
        id: 5,
        name: "streamlit",
        path: "/assets/logos/streamlit-icon.svg",
      }
    ],
  },
  {
    id: 6,
    title: "AruMart_Shopping_website",
    description:
      "A responsive e-commerce frontend application built with React.js, enabling seamless product browsing, user authentication, and optimized shopping experience.",
    subDescription: [
  "Built a responsive e-commerce frontend using React.js, Vite, and Tailwind CSS.",
  "Implemented routing, API integration, and form validation using Axios, React Router, Formik, and Yup.",
  "Designed reusable UI components for product browsing and cart functionality.",
],
    href: "https://github.com/KaKashi0209/AruMart_Shopping_website",
    logo: "",
    image: "/assets/projects/arumart.png",
    tags: [
      {
        id: 1,
        name: "react.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
  {
    id: 7,
    title: "iTask",
    description:
      "A responsive note-taking web application built with React.js that allows users to create, manage, and organize notes efficiently with a clean and interactive UI.",
   subDescription: [
  "Built a React-based note-taking app with full CRUD functionality.",
  "Implemented local storage for persistent data and efficient state management.",
  "Designed a responsive UI for smooth user experience.",
],
    href: "https://github.com/KaKashi0209/iTask",
    logo: "",
    image: "/assets/projects/task.png",
    tags: [
      {
        id: 1,
        name: "react.js",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "javascript",
        path: "/assets/logos/javascript.svg",
      },
      {
        id: 3,
        name: "vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/aryan-sharma-33b1b6210/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/KaKashi0209",
    icon: "/assets/socials/github.svg",
  },
 
];

export const experiences = [
  {
    title: "Research Intern",
    job: " IIT Ropar",
    date: "May 2024- Jun 2024",
    contents: [
      "Contributed to an AI-based automated evaluation system processing 1,000+ student records with 85% accuracy.",
     "Integrated facial recognition (OpenCV) and handwriting verification (CNN) for anomaly detection with 90% precision. ",
      "Built role-based dashboards in Streamlit, improving grading efficiency by 40%.",
      "Developed scalable backend using Python, TensorFlow, Streamlit, and MySQL."
    ],
  },
  {
    title: "Frontend Trainee",
    job: "Devslane",
    date: "Jun 2024-Oct 2024",
    contents: [
     " Developed 10+ responsive web apps with React.js, JavaScript, and modern UI libraries for seamless cross-device experiences.",

"Built production-ready interfaces, including a full-stack e-commerce platform and real-time note-taking app with state management (Redux/Context API).",

"Optimized performance and accessibility, collaborating on agile delivery to ship features 20% faster."
    ],
  },
  
  { title: "SDE Intern",
    job: "Nirvana Solutions Pvt. Ltd.",
    date: "Dec 2025-Feb 2026",
    contents: [
     "Built AI-assisted internal tooling in Python using Generative AI to analyze code changes and surface potential defects before merge.",
"Designed and implemented a Dev Quality Gateway to detect code-level issues early and trigger automated safe rollbacks, noticeably reducing production incident rate.",
"Collaborated in Agile sprints with cross-functional teams (SDEs, QA, PMs), owning features from design to deployment for streamlined workflows and enhanced system stability."
    ],
  }
  
];
export const reviews = [
  {
    name: "LeetCode",
    username: "@aryansharmag29",
    body: "Solved 500+ DSA problems with strong problem-solving skills.",
    img: "/assets/logos/leetcode.png",
    link: "https://leetcode.com/u/aryansharmag29/",
  },
  {
    name: "CodeChef",
    username: "@aryansharma_17",
    body: "Competitive programming with consistent participation in contests.",
    img: "/assets/logos/Codechef.jpeg",
    link: "https://www.codechef.com/users/aryansharma_17",
  },
  {
    name: "Codeforces",
    username: "@aryansharmag29",
    body: "Active problem solver with strong algorithmic thinking.",
    img: "/assets/logos/code.svg",
    link: "https://codeforces.com/profile/aryansharmag29",
  },
  {
    name: "HackerRank",
    username: "@_2215000379",
    body: "Hands-on coding practice across multiple domains.",
    img: "/assets/logos/hackerran.png",
    link: "https://www.hackerrank.com/profile/_2215000379",
  },
  {
    name: "Amazon ML Summer School",
    username: "Achievement",
    body: "Selected in Top 5% among 60,000+ applicants (2025).",
    img: "/assets/logos/amazon.png",
  },
  {
    name: "Hackathon Winner (IIITM)",
    username: "Achievement",
    body: "Won 1st prize in a competitive hackathon at IIIT Gwalior.",
    img: "/assets/logos/iitm.png",
  },
  {
    name: "Machine Learning Certification",
    username: "Coursera",
    body: "Completed supervised & unsupervised ML certification.",
    img: "/assets/logos/coursera.svg",
  },
];