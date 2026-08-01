import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Dhruv",
  lastName: "Arora",
  name: `Dhruv Arora`,
  role: "AI/ML Engineer",
  avatar: "/images/avatar.jpg",
  email: "2004dhruvarora@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/dhruvarora2004",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/dhruvaroura",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building applied ML systems that ship</>,
  featured: {
  display: true,
  title: (
    <Row gap="12" vertical="center">
      <strong className="ml-4">Retail Analytics Copilot</strong>{" "}
      <Line background="brand-alpha-strong" vert height="20" />
      <Text marginRight="4" onBackground="brand-medium">
        Featured work
      </Text>
    </Row>
  ),
  href: "/work/retail-analytics-copilot",
},
  subline: (
  <>
    I'm {person.firstName}, an {person.role.toLowerCase()} focused on{" "}
    <Text as="span" size="xl" weight="strong">retrieval systems and applied ML</Text>.
    I build data pipelines and AI systems end-to-end, from raw data to
    deployed product. <br /> Based in Delhi NCR, open to relocation.
  </>
),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
  display: true,
  title: "Introduction",
  description: (
    <>
      {person.firstName} is a Delhi NCR-based {person.role.toLowerCase()}
      with a background in Mathematics, focused on building applied
      machine learning and retrieval-augmented systems. His work spans
      classical ML pipelines, hybrid SQL+RAG architectures, and
      end-to-end deployment — grounded in a strong mathematical and
      statistical foundation.
    </>
  ),
},

  work: {
  display: true,
  title: "Experience",
  experiences: [
    {
      company: "Self-employed (Home Tuition)",
      timeframe: "2022 - 2025",
      role: "Mathematics Tutor",
      achievements: [
        <>
          Delivered personalized coaching to 10-25 students at a time,
          breaking down complex mathematical concepts into structured,
          learnable steps.
        </>,
        <>
          Tracked individual student performance over time to identify
          learning gaps and adapt teaching strategy accordingly — the
          same diagnostic, iterative approach now applied to model
          evaluation and debugging.
        </>,
      ],
      images: [],
    },
  ],
},
  studies: {
  display: true,
  title: "Education",
  institutions: [
    {
      name: "Hansraj College, University of Delhi",
      description: <>B.Sc. (Hons.) Mathematics, Minor in Computer Science — CGPA 8.34 (2022-2026)</>,
    },
    {
      name: "Certifications",
      description: (
        <>
          DP-800: Microsoft Certified Implementing an SQL-based AI
          Developer Solution (in progress) · Data Analytics and
          Visualization with MS Power BI, IIM Bangalore (via Swayam) ·
          Data Analytics with Python, NPTEL (via Swayam)
        </>
      ),
    },
  ],
},
  technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Machine Learning & Deep Learning",
      description: (
        <>Classical ML (Logistic Regression, KNN, Naive Bayes, XGBoost, SVM, K-Means) and deep learning in PyTorch (FNNs, CNNs, RNNs), with hyperparameter tuning via GridSearchCV.</>
      ),
      tags: [{ name: "Python", icon: "javascript" }],
      images: [],
    },
    {
      title: "Data & Retrieval Systems",
      description: (
        <>SQL-based structured querying, vector retrieval with ChromaDB and sentence-transformer embeddings, and hybrid routing between SQL and RAG.</>
      ),
      tags: [],
      images: [],
    },
    {
      title: "Data Analytics & Visualization",
      description: (
        <>Power BI and Excel dashboards with star-schema data modeling, pivot tables, and statistical analysis (regression, binomial/Poisson/normal distributions).</>
      ),
      tags: [],
      images: [],
    },
    {
      title: "Deployment & Tooling",
      description: (
        <>Streamlit Cloud deployment, multi-provider LLM integration, and evaluation-harness design for measuring answer correctness and retrieval accuracy.</>
      ),
      tags: [],
      images: [],
    },
  ],
},
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `ML, data science, and AI engineering projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
