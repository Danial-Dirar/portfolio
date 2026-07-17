export type Project = {
  slug: string;
  title: string;
  category: "AI" | "ML" | "Web" | "Mobile" | "Systems" | "Graphics";
  year: string;
  summary: string;
  description: string;
  tags: string[];
  stack: string[];
  repo?: string;
  /** Live/hosted build the visitor can open and try. */
  liveUrl?: string;
  accent: string; // gradient pair for the card (fallback when no image)
  /** Real cover image for the card + case-study hero. Overrides the gradient. */
  image?: { src: string; blur: string; alt: string };
  /** Architecture / pipeline diagram, shown full-width on the case study page. */
  diagram?: { src: string; blur: string; alt: string };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "haifa-hivemind",
    title: "Haifa HiveMind",
    category: "AI",
    year: "2026",
    summary:
      "A private, local AI research assistant — drop in your papers, ask grounded questions with citations, and it learns from your feedback. Runs entirely offline on your own machine.",
    description:
      "Built for a microbiology researcher who needed an assistant that never sends data to the cloud. HiveMind ingests PDFs, DOCX, text and images into a local knowledge base, answers questions grounded in those sources with citations, and reads screenshots with a vision model. When an answer misses, the user rejects it and the assistant rethinks; approved answers feed a QLoRA fine-tuning loop, so it adapts to how the researcher works. Chat history is searchable with a 30-day recycle bin, and simple On / Pause / Off power controls keep the GPU busy only when needed. Shipped as a cross-platform Electron desktop app over a FastAPI + React core — API-first, so mobile clients can connect over the LAN later.",
    tags: ["Local AI", "RAG", "Fine-tuning"],
    stack: ["Python", "FastAPI", "React", "Electron", "Ollama", "QLoRA"],
    repo: "https://github.com/Danial-Dirar/haifa-hivemind",
    accent: "from-brand-1/30 to-brand-2/20",
    image: {
      src: "/work/haifa-hivemind/cover.webp",
      alt: "Haifa HiveMind — the honeycomb mark on the Odyssus theme",
      blur: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAABwAwCdASoUAAwAPu1iqU2ppaOiMAgBMB2JYgDCgCHe11LtKgAA/vDReWu67OrQA8fLsScAjapbnXq9n+H4m8gAAAA=",
    },
    diagram: {
      src: "/work/haifa-hivemind/architecture.webp",
      alt: "Haifa HiveMind architecture — Electron/Mobile clients over a local FastAPI backend, ChromaDB + SQLite, and an Ollama model server, all on-device",
      blur: "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAwCdASoYABIAPu1ur1KppiQiqAgBMB2JZwDM0BbG3gAA/vAihCc3fU/g6pMSUgUob/n06yYZfk92gGIeMARAAAA=",
    },
    featured: true,
  },
  {
    slug: "groundwater-prediction",
    title: "Groundwater Level Prediction",
    category: "ML",
    year: "2026",
    summary:
      "Thesis-grade model forecasting groundwater levels from hydrological & climate signals.",
    description:
      "A deep time-series pipeline that ingests rainfall, temperature, and historical well data to forecast groundwater levels — built to support sustainable water-resource planning. This is the research engine behind Haifa Intelligence.",
    tags: ["Time-series", "Forecasting", "Research"],
    stack: ["Python", "PyTorch", "Pandas", "Hydrology data"],
    accent: "from-sky-500/30 to-cyan-400/20",
    featured: true,
  },
  {
    slug: "project-grd",
    title: "GRD — Global River Database",
    category: "Web",
    year: "2026",
    summary: "A searchable global river database with a typed full-stack interface.",
    description:
      "A structured, queryable database of rivers worldwide with a clean TypeScript web front-end — making large-scale hydrological data explorable.",
    tags: ["Database", "Geospatial", "Full-stack"],
    stack: ["TypeScript", "Node", "PostgreSQL"],
    repo: "https://github.com/Danial-Dirar/project_grd",
    accent: "from-emerald-500/30 to-teal-400/20",
    featured: true,
  },
  {
    slug: "music-generation",
    title: "Unsupervised Music Generation",
    category: "ML",
    year: "2026",
    summary: "A neural network that composes music without labelled data.",
    description:
      "An unsupervised deep-learning project (CSE425) that learns musical structure from raw sequences and generates original compositions.",
    tags: ["Generative", "Neural nets", "Audio"],
    stack: ["Python", "PyTorch"],
    repo: "https://github.com/Danial-Dirar/music-generation-unsupervised",
    accent: "from-fuchsia-500/30 to-violet-400/20",
    featured: true,
  },
  {
    slug: "loan-approval-ai",
    title: "CreditSense AI",
    category: "ML",
    year: "2025",
    summary:
      "A leak-free ML pipeline that scores loan eligibility — benchmarking five classifiers with stratified cross-validation to find the most reliable approve / reject model.",
    description:
      "CreditSense AI turns a raw loan dataset into a rigorous, reproducible model comparison. A scikit-learn Pipeline and ColumnTransformer do all the preparation inside cross-validation — dropping identifiers, imputing missing values (median for numbers, most-frequent for categories) and one-hot encoding — so no information ever leaks from validation folds into training. Five classifiers (KNN, Logistic Regression, Decision Tree, an MLP neural network and Random Forest) are each scored with 5-fold stratified cross-validation and out-of-fold predictions, using adaptive scaling (MinMax for KNN, standardisation for the rest). Every model is judged on accuracy, precision, recall, F1 and ROC-AUC against a majority-class baseline (~0.69), with confusion matrices and ROC curves saved as figures. A command-line project built to do the evaluation honestly rather than chase a single lucky train/test split.",
    tags: ["Classification", "Model benchmarking", "Credit risk"],
    stack: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn"],
    repo: "https://github.com/Danial-Dirar/loan_approval_ai",
    accent: "from-amber-400/25 to-blue-950/40",
    image: {
      src: "/work/loan-approval-ai/cover.webp",
      alt: "CreditSense AI — a gold classical bank emblem on a deep navy field",
      blur: "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAABQAwCdASoUAA0APu1iqU2ppaOiMAgBMB2JQBYdhDw/JkVYAAD+8NF4MfzNNbi3u+5hzykmSMk5QeWH1IORFo3uJXayTzC/WgA=",
    },
    diagram: {
      src: "/work/loan-approval-ai/architecture.webp",
      alt: "CreditSense AI pipeline — dataset to preprocessing to 5-fold stratified cross-validation across five classifiers, then evaluation metrics and output figures",
      blur: "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAABwAwCdASoYAA8APu1iqU2ppaOiMAgBMB2JYwCdACHfw5iw9gAA/uy6JCT75vDAfttlok/tIhB4x+N/bDrVxumDcSIAAA==",
    },
    featured: true,
  },
  {
    slug: "ecommerce-shipping-ai",
    title: "E-commerce Shipping AI",
    category: "ML",
    year: "2026",
    summary: "Predicts shipping outcomes & delays for online orders.",
    description:
      "A model that forecasts whether e-commerce shipments will arrive on time, helping logistics teams flag at-risk orders early.",
    tags: ["Logistics", "Prediction", "Operations"],
    stack: ["Python", "Pandas", "scikit-learn"],
    repo: "https://github.com/Danial-Dirar/e_commerce_shipping_ai",
    accent: "from-indigo-500/30 to-blue-400/20",
  },
  {
    slug: "dishdash",
    title: "DishDash",
    category: "Mobile",
    year: "2025",
    summary:
      "A two-sided food-offers marketplace — restaurants post live deals, and hungry users discover the tastiest ones near them on a realtime map.",
    description:
      "A two-sided Flutter marketplace that connects restaurants with hungry customers through live, location-based deals. Restaurant owners post and schedule offers — images, pricing, discounts and promo codes — then track views, saves and shares on a per-offer analytics dashboard. Food lovers browse a realtime offers feed with search and an OpenStreetMap view, save deals to personal collections, and share them natively; guests can explore without an account. Role-based auth routes each user to the right experience, with persistent login, password reset and full dark-mode support. Built Firebase-only — Cloud Firestore and Firebase Auth, no custom server — for a fast, native feel across Android, iOS and web.",
    tags: ["Marketplace", "Realtime", "Location"],
    stack: ["Flutter", "Firebase", "Firestore", "OpenStreetMap", "Dart"],
    repo: "https://github.com/Danial-Dirar/DishDash",
    liveUrl: "https://dish-dash-silk.vercel.app",
    accent: "from-rose-500/30 to-pink-400/20",
    image: {
      src: "/work/dishdash/cover.webp",
      alt: "DishDash — a location pin with a fork and spoon over floating deal chips, on the app's orange brand gradient",
      blur: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAABwAwCdASoUAA0APu1iqU2ppaOiMAgBMB2JagC7LoAATd4GgwAA/FqhOKbSvuqzpB6osTQV3/26tAu5/0J1UfqtRKD+rgtR0bFbOyzNM7uev2cgAAA=",
    },
    diagram: {
      src: "/work/dishdash/architecture.webp",
      alt: "DishDash architecture — a single Flutter app serving both restaurant owners and food lovers over a Firebase-only backend (Auth + Cloud Firestore), with OpenStreetMap for maps and device plugins for GPS, camera and native share",
      blur: "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAADQAwCdASoYABIAPu1wsFIppiSiqAgBMB2JZwDM0BEOSIPgXSUmXUAA/uPmwu4dIQ4kT0i8Lj5M25VahuiTABV4gdQu5bzKxhzIK8LMbatJZ9+9AAA=",
    },
    featured: true,
  },
  {
    slug: "distributed-ml",
    title: "Distributed ML System",
    category: "Systems",
    year: "2025",
    summary: "High-performance distributed system for training ML at scale.",
    description:
      "A CSE449 project focused on high-performance computing and distributed systems — parallelising ML workloads across nodes for throughput.",
    tags: ["HPC", "Distributed", "Infra"],
    stack: ["Python", "MPI", "Distributed compute"],
    repo: "https://github.com/Danial-Dirar/CSE449_distributed_ml_system",
    accent: "from-violet-500/30 to-purple-400/20",
  },
  {
    slug: "signal-sweep",
    title: "Signal Sweep",
    category: "Graphics",
    year: "2024",
    summary: "Bluetooth radar — visual device detection in real space.",
    description:
      "A computer-graphics project (CSE423) that visualises Bluetooth device detection as a sweeping radar, blending signal processing with OpenGL rendering.",
    tags: ["OpenGL", "Signals", "Visualization"],
    stack: ["Python", "OpenGL"],
    repo: "https://github.com/Danial-Dirar/Project-Signal-Sweep",
    accent: "from-lime-500/30 to-green-400/20",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
