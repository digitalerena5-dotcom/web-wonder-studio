import { useState } from "react";
import {
  Microscope,
  FlaskConical,
  Stethoscope,
  GraduationCap,
  Building2,
  Dna,
  CheckCircle2,
  Atom,
  Brain,
  Server,
  Globe,
  FileText,
  ArrowRight,
  Shield,
  Zap,
  Sparkles,
  Check,
  Cpu,
  Layers,
  ChevronRight,
} from "lucide-react";

export interface SolutionItem {
  id: string;
  category: string;
  tagColor: string;
  icon: typeof Dna;
  title: string;
  description: string;
  features: string[];
  deliverables: string;
  tools: string[];
}

export const solutionsData: SolutionItem[] = [
  {
    id: "genomic-analysis",
    category: "Genomics",
    tagColor: "cyan",
    icon: Dna,
    title: "Genomic Data Analysis",
    description:
      "Turn raw sequencing data into discovery. We specialize in NGS data analyses and multi-omics integration from bulk and single-cell transcriptomics to whole-genome, epigenomics, and metagenomic workflows.",
    features: [
      "Transcriptomics: bulk RNA-seq, scRNA-seq",
      "Genomics: WGS and WES data analyses",
      "Metagenomics: 16S rRNA, Shotgun, Metatranscriptomics",
      "Epigenomics: ChIP-Seq, ATAC-Seq, Methylation, Long-read",
    ],
    deliverables: "BAM files, VCF Files, QC Reports, Count Matrices, Publication-grade Plots, Complex Multi-Omics Matrices",
    tools: ["Linux", "R", "Python", "STAR", "GATK", "Cell Ranger", "QIIME2", "Seurat", "Scanpy"],
  },
  {
    id: "proteomics",
    category: "Proteomics",
    tagColor: "violet",
    icon: Microscope,
    title: "Proteomics & Structural Biology",
    description:
      "Comprehensive CADD and structural biology services from homology modeling and virtual screening to 2D/3D QSAR and pharmacophore-based drug design.",
    features: [
      "Homology Modeling & AlphaFold Prediction",
      "Virtual Screening & Molecular Docking",
      "2D & 3D QSAR Modeling",
      "Structure-based & Ligand-based Drug Design",
    ],
    deliverables: "PDB Files, Interaction Plots, QSAR Models, Pharmacophore Hypotheses, Screening Hit Lists",
    tools: ["PyMOL", "GOLD", "MOE", "ChimeraX", "Discovery Studio", "RDKit", "OpenBabel", "Schrödinger", "AlphaFold"],
  },
  {
    id: "md-simulations",
    category: "Simulation",
    tagColor: "coral",
    icon: Atom,
    title: "MD Simulations",
    description:
      "Full-spectrum Molecular Dynamics simulations for drug discovery, covering protein-ligand and membrane systems, umbrella sampling, and enhanced sampling methods.",
    features: [
      "Protein-Ligand & Membrane Protein MD",
      "Umbrella Sampling & PMF Calculations",
      "Free Energy Calculations (MM-GBSA/PBSA)",
      "Enhanced Sampling (Metadynamics, REMD)",
    ],
    deliverables: "Simulation Trajectories, RMSD/RMSF Plots, Binding Free Energy Reports, 4K Publication-ready Rendered Videos",
    tools: ["GROMACS", "AMBER", "NAMD", "VMD", "Schrödinger", "OpenMM", "MDAnalysis"],
  },
  {
    id: "ai-ml",
    category: "AI / ML",
    tagColor: "cyan",
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Leverage AI for bioinformatics, public health, and precision medicine. We build ML/DL models, NLP pipelines, LLM/GenAI assistants, and agentic workflows that automate analysis.",
    features: [
      "Machine Learning (ML) & Deep Learning (DL)",
      "Natural Language Processing (NLP) for Bio & Health",
      "LLMs, RAG & Generative AI Assistants (GenAI)",
      "Agentic AI & Tool-Using Agents (Automation)",
    ],
    deliverables: "Trained Model (.pkl/.h5), Confusion Matrix, SHAP Feature Importance, Performance Metrics",
    tools: ["PyTorch", "Scikit-learn", "TensorFlow", "XGBoost", "Python", "HuggingFace", "LangChain"],
  },
  {
    id: "pipeline-development",
    category: "DevOps",
    tagColor: "violet",
    icon: Server,
    title: "Tool & Pipeline Development",
    description:
      "Build reproducible, scalable workflows. We engineer robust automated pipelines that run seamlessly across cloud, on-premise clusters, and HPC environments.",
    features: [
      "Snakemake & Nextflow Workflows",
      "Docker & Singularity Containers",
      "Cloud Infrastructure (AWS, GCP, Azure)",
      "CI/CD for Reproducible Science",
    ],
    deliverables: "Snakefile / Nextflow Script, Docker / Singularity Image, Documentation (README), Test Datasets",
    tools: ["Nextflow", "Snakemake", "Docker", "Git", "Python", "nf-core", "AWS", "Bash"],
  },
  {
    id: "web-saas",
    category: "Development",
    tagColor: "coral",
    icon: Globe,
    title: "Web & SAAS Development",
    description:
      "Custom web portals and cloud platforms engineered specifically for biological data visualization, genomic database exploration, and interactive analytics.",
    features: [
      "Data Visualization Portals",
      "Bio-Database Architecture & SQL/NoSQL",
      "Modern User Interface (UI/UX)",
      "Secure Cloud Deployment & APIs",
    ],
    deliverables: "Full Web Application, Admin Management Panel, REST/GraphQL API Documentation, Deployment Guide",
    tools: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS"],
  },
  {
    id: "training-consultancy",
    category: "Mentorship",
    tagColor: "cyan",
    icon: FileText,
    title: "Trainings & Consultancy",
    description:
      "Navigate your research journey with expert mentoring on study design, high-throughput computational tools, and international publication strategy.",
    features: [
      "Experimental Design & Power Analysis",
      "Grant Technical Section Support",
      "Personal Hands-on Bioinformatics Trainings",
      "Lab & Team Group Mentoring",
    ],
    deliverables: "Study Design Plan, Power Analysis Report, Grant Technical Sections, Interactive Lectures & Jupyter Notebooks",
    tools: ["BioRender", "GPower", "Inkscape", "RStudio", "Jupyter", "Office 365"],
  },
];

const audiences = [
  {
    icon: Microscope,
    title: "Research Labs",
    desc: "Academic & institutional research teams needing robust, publication-ready NGS pipelines.",
  },
  {
    icon: FlaskConical,
    title: "Biotech Startups",
    desc: "Early-stage drug discovery ventures scaling their genomics and computational capabilities.",
  },
  {
    icon: Stethoscope,
    title: "Clinicians",
    desc: "Translational medicine specialists requiring fast, actionable genomic and biomarker insights.",
  },
  {
    icon: GraduationCap,
    title: "Students & Trainees",
    desc: "Graduate researchers and postdocs seeking technical mentorship and data analysis guidance.",
  },
  {
    icon: Building2,
    title: "Pharma & Industry",
    desc: "Pharmaceutical teams accelerating high-throughput screening and multi-omics pipelines.",
  },
];

const techStacks = [
  {
    category: "Bioinformatics Pipelines & DevOps",
    items: ["Nextflow", "Snakemake", "nf-core", "Docker", "Linux", "Git", "AWS", "Singularity"],
  },
  {
    category: "Genomics & Single-Cell Analysis",
    items: ["R / Bioconductor", "Python", "Jupyter", "Cell Ranger", "STAR", "GATK", "QIIME 2", "Seurat v5"],
  },
  {
    category: "CADD & Molecular Modeling",
    items: ["Schrödinger", "MOE", "GROMACS", "Discovery Studio", "ChimeraX", "OpenBabel", "RDKit", "GOLD", "PyMOL"],
  },
  {
    category: "AI, Deep Learning & LLMs",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "HuggingFace", "LangChain", "OpenCV", "XGBoost"],
  },
  {
    category: "Web & SaaS Development",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "REST APIs"],
  },
];

const packages = [
  {
    name: "Standard Analysis",
    icon: Shield,
    badge: null,
    desc: "Perfect for single-omics studies requiring standard QC, alignment, and exploratory matrices.",
    features: [
      "Raw Data QC & Trimming",
      "Alignment to Reference Genome",
      "Basic Statistical Analysis",
      "Count Matrix Generation",
      "Standard PDF Technical Report",
      "2 Weeks Fast Turnaround",
    ],
    cta: "Get Started",
  },
  {
    name: "Advanced Insight",
    icon: Zap,
    badge: "Most Popular",
    desc: "Deep dive analysis with pathway enrichment, publication-ready figures, and biological interpretation.",
    features: [
      "Everything in Standard",
      "Differential Expression Analysis",
      "Pathway & GO Enrichment",
      "Publication-Ready Figures (300 DPI)",
      "Interactive HTML MultiQC Report",
      "Methodology Write-up for Papers",
      "1 Month Dedicated Support",
    ],
    cta: "Choose Advanced",
  },
  {
    name: "Enterprise Multi-Omics",
    icon: Sparkles,
    badge: "Comprehensive",
    desc: "Complete end-to-end multi-omics integration, custom AI models, and dedicated pipeline engineers.",
    features: [
      "Everything in Advanced Insight",
      "Cross-Omics Data Integration (RNA + DNA + Proteome)",
      "Custom Machine Learning Biomarker Models",
      "Scalable Nextflow/Snakemake Pipeline Delivery",
      "Co-authorship & Grant Writing Support",
      "Dedicated Senior Bioinformatician Assigned",
      "Continuous Consultation & Lab Training",
    ],
    cta: "Contact Enterprise",
  },
];

export function ServicesContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Genomics", "Proteomics", "Simulation", "AI / ML", "DevOps", "Development", "Mentorship"];

  const filteredSolutions = selectedCategory === "All" 
    ? solutionsData 
    : solutionsData.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="relative overflow-hidden bg-transparent text-slate-900">
      
      {/* 1. Header Banner / Breadcrumb */}
      <section className="relative overflow-hidden bg-slate-50/60 py-20 lg:py-28 border-b border-slate-200">
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Bioinformatics Research Services</span>
          </div>

          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-slate-900">
            Expert Solutions for{" "}
            <br className="hidden sm:inline" />
            <span className="text-blue-600">
              Biological Discovery
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 leading-relaxed sm:text-xl">
            Accelerate your research with our publication-grade data analysis, custom reproducible pipelines, and AI-driven translational insights.
          </p>
        </div>
      </section>

      {/* 2. "Who We Serve" Section */}
      <section className="relative border-b border-slate-200 bg-white/70 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">WHO WE SERVE</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-5xl text-slate-900">
              Tailored Solutions <span className="text-blue-600">Built For</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              We adapt our deliverables, timelines, and computational frameworks to match your laboratory's exact context.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((aud) => {
              const Icon = aud.icon;
              return (
                <div
                  key={aud.title}
                  className="group relative flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {aud.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed sm:text-sm">
                    {aud.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. "Comprehensive Solutions" Main Showcase */}
      <section id="solutions" className="relative bg-slate-50/50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">WHAT WE OFFER</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-5xl text-slate-900">
              Comprehensive <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              End-to-end scientific services designed with rigorous statistical standards, reproducible containers, and publication-ready reporting.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? "border border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredSolutions.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.id}
                  id={sol.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-400 hover:shadow-md sm:p-8 text-slate-800"
                >
                  <div>
                    {/* Header: Icon, Category & Title */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 transition-colors">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div className="flex-1">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700">
                          {sol.category}
                        </span>
                        <h3 className="mt-1 font-display text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600 sm:text-2xl">
                          {sol.title}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 text-sm text-slate-600 leading-relaxed sm:text-base">
                      {sol.description}
                    </p>

                    {/* Key Features */}
                    <div className="mt-6">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
                        Key Features
                      </h4>
                      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {sol.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2 text-xs text-slate-600 sm:text-sm">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5 border-t border-slate-100 pt-6">
                    {/* Deliverables Box */}
                    <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wide text-blue-800">
                        Deliverables
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-700 leading-relaxed sm:text-sm">
                        {sol.deliverables}
                      </p>
                    </div>

                    {/* Tools Used Pills */}
                    <div>
                      <h4 className="font-mono text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {sol.tools.map((tool) => (
                          <span
                            key={tool}
                            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Configure CTA */}
                    <div className="pt-2">
                      <a
                        href="#contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-600 bg-blue-50 py-3 text-sm font-semibold text-blue-700 transition-all duration-200 hover:bg-blue-600 hover:text-white"
                      >
                        Inquire About {sol.title.split(" ")[0]} Services
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. "Powered by Modern Standards" Tech Stack Grid */}
      <section className="relative border-y border-slate-200 bg-white/70 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">TECH STACK</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-5xl text-slate-900">
              Powered by <span className="text-blue-600">Modern Standards</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              We never use black-box proprietary software. All workflows leverage reproducible, peer-reviewed, open-source technologies trusted by international researchers.
            </p>
          </div>

          <div className="mt-16 space-y-12">
            {techStacks.map((stack) => (
              <div key={stack.category} className="space-y-4">
                <h3 className="border-l-4 border-blue-600 pl-3 font-display text-lg font-bold text-slate-900 sm:text-xl">
                  {stack.category}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                  {stack.items.map((item) => (
                    <div
                      key={item}
                      className="group flex h-24 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-sm"
                    >
                      <Cpu className="h-5 w-5 text-blue-600 transition-transform duration-200 group-hover:scale-110" />
                      <span className="mt-2 font-mono text-xs font-semibold text-slate-800 transition-colors group-hover:text-blue-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "Flexible Packages" Section */}
      <section className="relative bg-slate-50/60 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-700">SERVICE PACKAGES</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-5xl text-slate-900">
              Flexible <span className="text-blue-600">Packages</span> for Every Need
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
              Whether you need quick pipeline execution or comprehensive translational discovery, we have a clear, predictable engagement tier.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {packages.map((pkg) => {
              const Icon = pkg.icon;
              const isPopular = pkg.badge === "Most Popular";
              return (
                <div
                  key={pkg.name}
                  className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-200 ${
                    isPopular
                      ? "border-2 border-blue-600 bg-white shadow-xl scale-105 z-10"
                      : "border border-slate-200 bg-white shadow-sm hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-bold text-slate-900">
                      {pkg.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed sm:text-sm">
                      {pkg.desc}
                    </p>

                    <div className="mt-8 space-y-3.5 border-t border-slate-100 pt-6">
                      {pkg.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-3 text-xs text-slate-700 sm:text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 pt-4">
                    <a
                      href="#contact"
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all duration-200 ${
                        isPopular
                          ? "bg-blue-600 text-white shadow-sm hover:bg-blue-700"
                          : "border border-slate-200 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-600"
                      }`}
                    >
                      {pkg.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
