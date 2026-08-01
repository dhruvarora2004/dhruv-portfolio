import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Dhruv",
  lastName: "Arora",
  name: `Dhruv Arora`,
  role: "AI/ML Engineer",
  avatar: "/images/avatar1.jpg",
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
      description: (
        <>
          B.Sc. (Hons.) Mathematics, Minor in Computer Science — CGPA
          8.34 (2022-2026). Coursework in Field Theory, Galois Theory,
          Integral Equations, and Calculus of Variations built strong
          analytical and abstract problem-solving foundations, applied
          directly to computer science coursework in algorithms and
          computational thinking.
        </>
      ),
    },
    {
      name: "Bal Bharati Public School — Class XII (CBSE)",
      description: <>92.2% (2021-2022)</>,
    },
    {
      name: "Bal Bharati Public School — Class X (CBSE)",
      description: <>85.8% (2020)</>,
    },
  ],
},
certifications: {
  display: true,
  title: "Certifications",
  items: [
    {
      name: "Prime: AI/ML Job Preparation Program",
      issuer: "Apna College",
      status: "Completed",
      description: (
        <>
          End-to-end ML/DL/GenAI curriculum — supervised and
          unsupervised ML algorithms (Linear/Logistic Regression, Naive
          Bayes, KNN, Decision Trees, K-Means, PCA), deep learning
          architectures (FNN, RNN, LSTM, CNN, Transformers) in
          TensorFlow/PyTorch/Keras, and applied GenAI (LLMs, NLP, RAG,
          Agentic AI) — the direct foundation for the retrieval and
          routing architecture used in Retail Analytics Copilot.
        </>
      ),
    },
    {
      name: "Forward Program",
      issuer: "McKinsey & Company (McKinsey.org)",
      status: "Completed",
      description: (
        <>
          A 10-week global program in structured problem-solving
          (issue trees, prioritization frameworks), adaptability and
          resilience, effective communication, and digital and AI
          essentials — workplace fundamentals rather than a technical
          credential.
        </>
      ),
    },
    {
      name: "Data Analytics and Visualization with MS Power BI",
      issuer: "IIM Bangalore, via Swayam",
      status: "Completed",
      description: (
        <>
          Data cleaning and transformation, dashboard design, DAX for
          calculated measures, data modeling, and Power BI Service for
          publishing and collaboration — applied directly in the Sales
          Performance Analytics Dashboard project.
        </>
      ),
    },
    {
      name: "Data Analytics with Python",
      issuer: "IIT Roorkee (NPTEL), via Swayam",
      status: "Completed",
      description: (
        <>
          Statistical foundations for analytics — probability,
          hypothesis testing, linear/logistic/multiple regression, and
          clustering — implemented hands-on in Python with pandas and
          NumPy.
        </>
      ),
    },
    {
      name: "Microsoft Certified: DP-600, DP-700, DP-800",
      issuer: "Microsoft",
      status: "In Progress — target August 2026",
      description: (
        <>
          DP-600 (Fabric Analytics Engineer Associate): data ingestion,
          semantic modeling, and DAX/SQL/KQL-based analytics in
          Microsoft Fabric. <br />
          DP-700 (Fabric Data Engineer Associate): data engineering at
          scale — pipeline orchestration and Spark/SQL/KQL
          transformations. <br />
          DP-800 (Implementing an SQL-based AI Developer Solution):
          embedding AI capabilities — vectors, embeddings, model
          integration — into SQL Server and Azure SQL applications.
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
      tags: [
        { name: "Python" },
        { name: "Scikit-learn" },
        { name: "PyTorch" },
        { name: "XGBoost" },
        { name: "Pandas" },
        { name: "NumPy" },
      ],
      images: [],
    },
    {
      title: "Data & Retrieval Systems",
      tags: [
        { name: "SQL" },
        { name: "ChromaDB" },
        { name: "Sentence-Transformers" },
        { name: "LangChain" },
        { name: "RAG Pipelines" },
        { name: "Vector Embeddings" },
      ],
      images: [],
    },
    {
      title: "Data Analytics & Visualization",
      tags: [
        { name: "Power BI" },
        { name: "Advanced Excel" },
        { name: "DAX" },
        { name: "Pivot Tables" },
        { name: "Statistical Analysis" },
      ],
      images: [],
    },
    {
      title: "Deployment & Tooling",
      tags: [
        { name: "Streamlit" },
        { name: "Git & GitHub" },
        { name: "Groq" },
        { name: "OpenAI API" },
        { name: "Prompt Engineering" },
      ],
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
