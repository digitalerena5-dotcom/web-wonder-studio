import { useState } from "react";
import { 
  Brain, 
  Dna, 
  ShieldCheck, 
  Microscope, 
  Code, 
  Database, 
  Atom, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Cpu,
  Sprout
} from "lucide-react";
import omicsDomainsImg from "@/assets/omics-domains.png";

interface DomainInfo {
  id: string;
  name: string;
  icon: typeof Dna;
  tag: string;
  color: string;
  summary: string;
  methods: string[];
  metrics: string;
}

const domains: DomainInfo[] = [
  {
    id: "ai-neuro",
    name: "AI & Neural Network Biology",
    icon: Brain,
    tag: "Deep Learning",
    color: "cyan",
    summary: "Graph neural networks, transformer-based protein language models, and predictive algorithms for biomarker discovery and cellular state mapping.",
    methods: ["Graph Convolutional Networks (GCN)", "Protein Language Models (ESM-2)", "DeepVariant & Transformer Models"],
    metrics: "99.4% Predictive Accuracy",
  },
  {
    id: "immunology",
    name: "Immunology & Antibody Engineering",
    icon: ShieldCheck,
    tag: "Biotherapeutics",
    color: "violet",
    summary: "High-resolution V(D)J single-cell immune profiling, monoclonal antibody design, and CDR3 hypervariable loop modeling for therapeutic development.",
    methods: ["Single-cell TCR/BCR Phasing", "Epitope Paratope Binding Prediction", "Immune Repertoire Diversity Indices"],
    metrics: "Sub-Nanomolar Affinity",
  },
  {
    id: "agro-genomics",
    name: "Plant & Agricultural Genomics",
    icon: Sprout,
    tag: "Agri-Tech",
    color: "emerald",
    summary: "Deciphering complex polyploid crop genomes, drought-resistance loci, and plant-microbe symbioses using long-read sequencing and GWAS.",
    methods: ["Polyploid Chromosome Phasing", "QTL & GWAS Marker Mapping", "Chloroplast & Mitochondrial Assembly"],
    metrics: "Chromosome-Scale Assembly",
  },
  {
    id: "cadd",
    name: "CADD & Chemical Biology",
    icon: Atom,
    tag: "Drug Discovery",
    color: "coral",
    summary: "Accelerating small-molecule lead optimization with high-throughput virtual screening, molecular docking, and 2D/3D QSAR pharmacophores.",
    methods: ["Molecular Dynamics (GROMACS/AMBER)", "Structure-Based Virtual Screening", "MM-GBSA Free Energy Binding"],
    metrics: "1M+ Compounds Screened/day",
  },
  {
    id: "metagenomics",
    name: "Microbiome & Metagenomics",
    icon: Microscope,
    tag: "Microbiology",
    color: "emerald",
    summary: "Taxonomic profiling and functional metabolic reconstruction of complex microbial communities from human gut to extreme soil environments.",
    methods: ["16S / 18S / ITS Taxonomic Binning", "Shotgun Metatranscriptomics", "Antimicrobial Resistance (AMR) Profiling"],
    metrics: "Species-Level Resolution",
  },
  {
    id: "big-data",
    name: "Genomic Big Data Architecture",
    icon: Database,
    tag: "HPC & Cloud",
    color: "cyan",
    summary: "Scalable cloud orchestration processing terabytes of NGS sequencing data with reproducible Nextflow pipelines and automated CI/CD.",
    methods: ["nf-core Standard Compliance", "Distributed AWS / Slurm Cluster Scaling", "MultiQC Diagnostic Analytics"],
    metrics: "Petabyte-Ready Pipelines",
  },
  {
    id: "software",
    name: "Software & Web Platforms",
    icon: Code,
    tag: "Bio-SaaS",
    color: "violet",
    summary: "Interactive web applications, biological database portals, and secure APIs engineered for intuitive visualization of high-dimensional data.",
    methods: ["React / Next.js Visualization Dashboards", "REST & GraphQL Genomic Endpoints", "PostgreSQL Genomic Repositories"],
    metrics: "Instant Web Interaction",
  },
  {
    id: "single-cell",
    name: "Single-Cell & Spatial Biology",
    icon: Dna,
    tag: "Transcriptomics",
    color: "coral",
    summary: "Cell-type deconvolution, cell-cell communication networks, trajectory inference, and spatial transcriptomics mapping tissue microenvironments.",
    methods: ["Seurat v5 & Scanpy Workflows", "CellChat & NicheNet Ligand-Receptor", "Spatial RNA-Seq Registration"],
    metrics: "Million-Cell Scalability",
  },
  {
    id: "consultancy",
    name: "Strategic Scientific Consultancy",
    icon: Sparkles,
    tag: "Expert Advisory",
    color: "cyan",
    summary: "High-level grant proposal writing, study design validation, peer-review responses, and publication-ready scientific illustrations.",
    methods: ["Experimental Power Calculations", "Nature/Science Figure Polishing", "Grant Experimental Section Drafting"],
    metrics: "50+ Q1 Publications",
  },
];

export function OmicsDomainsShowcase() {
  const [activeDomain, setActiveDomain] = useState<DomainInfo>(domains[0]);

  return (
    <div className="relative mx-auto w-full max-w-7xl">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
        
        {/* Left Side: The Hexagonal Matrix Visual Frame */}
        <div className="lg:col-span-6">
          <div className="relative mx-auto max-w-lg">
            
            {/* Central Hexagonal Image Canvas */}
            <div className="animate-float group relative z-10 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50">
              
              {/* Header Badge */}
              <div className="mb-2.5 flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3 py-1.5 text-xs rounded-t-xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-blue-700">MULTIDISCIPLINARY_MATRIX // LIVE</span>
                </div>
                <span className="rounded-full bg-blue-50 border border-blue-200 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-700">
                  9 DOMAINS
                </span>
              </div>

              {/* Image Frame with Scanning Hairline */}
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800">
                <img
                  src={omicsDomainsImg}
                  alt="Multidisciplinary bioinformatics and AI hexagonal domain matrix"
                  width={800}
                  height={800}
                  className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Laser scan line passing vertically */}
                <div 
                  className="animate-scanline pointer-events-none absolute inset-x-0 h-[2px] bg-blue-500 opacity-70"
                  aria-hidden="true" 
                />

                {/* Bottom Live Domain Pill on Image */}
                <div className="absolute inset-x-3 bottom-3 rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-md text-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 border border-blue-100">
                        <activeDomain.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-display text-xs font-bold text-slate-900 sm:text-sm">
                          {activeDomain.name}
                        </p>
                        <p className="font-mono text-[10px] font-semibold text-blue-700">{activeDomain.tag}</p>
                      </div>
                    </div>
                    <span className="rounded bg-blue-50 border border-blue-200 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-700">
                      {activeDomain.metrics}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Micro Metrics Strip */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                  <p className="font-mono text-[9px] text-slate-500 uppercase">Integration</p>
                  <p className="font-semibold text-slate-800">Cross-Omics</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                  <p className="font-mono text-[9px] text-slate-500 uppercase">Pipelines</p>
                  <p className="font-semibold text-slate-800">Reproducible</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                  <p className="font-mono text-[9px] text-slate-500 uppercase">Standards</p>
                  <p className="font-semibold text-blue-700">Publication Q1</p>
                </div>
              </div>
            </div>

            {/* Floating HUD Badge 1: Top Left */}
            <div className="animate-float-reverse absolute -top-4 -left-4 z-20 hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-md sm:flex items-center gap-2">
              <Cpu className="h-4 w-4 text-blue-600" />
              <span className="font-mono text-[11px] font-semibold text-slate-800">AI-Powered Synergy</span>
            </div>

            {/* Floating HUD Badge 2: Bottom Right */}
            <div className="animate-float absolute -bottom-4 -right-4 z-20 hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-md sm:flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-rose-600" />
              <span className="font-mono text-[11px] font-semibold text-slate-800">Bench-to-Bedside</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Domain Explorer & Capabilities */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <Sparkles className="h-3 w-3 text-blue-600" />
              <span>Scientific Excellence</span>
            </div>

            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl text-slate-900">
              Unifying Biology, AI &amp;{" "}
              <span className="text-blue-600">
                Computational Innovation
              </span>
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed sm:text-lg">
              Modern biomedical breakthroughs demand cross-domain synergy. We combine genomics, structural proteomics, AI engineering, and microbiological science under one unified computational framework.
            </p>
          </div>

          {/* Interactive Domain Selector Grid */}
          <div className="space-y-3">
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700">
              Select Research Domain to Inspect:
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {domains.map((dom) => {
                const Icon = dom.icon;
                const isSelected = activeDomain.id === dom.id;
                return (
                  <button
                    key={dom.id}
                    onClick={() => setActiveDomain(dom)}
                    className={`flex items-center gap-2 rounded-xl p-2.5 text-left text-xs font-semibold transition-all duration-200 ${
                      isSelected
                        ? "border border-blue-600 bg-blue-50 text-blue-700 font-bold shadow-xs scale-[1.02]"
                        : "border border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700 shadow-xs"
                    }`}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${isSelected ? "text-blue-600" : "text-slate-500"}`} />
                    <span className="truncate">{dom.name.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Selected Domain Deep Dive Card */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md text-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
                  <activeDomain.icon className="h-5 w-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase font-bold text-blue-700">
                    {activeDomain.tag}
                  </span>
                  <h3 className="font-display text-lg font-bold text-slate-900 sm:text-xl">
                    {activeDomain.name}
                  </h3>
                </div>
              </div>
              <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 font-mono text-xs font-bold text-blue-700">
                {activeDomain.metrics}
              </span>
            </div>

            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              {activeDomain.summary}
            </p>

            <div className="mt-5 border-t border-slate-100 pt-4">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-slate-800">
                Core Methodologies:
              </p>
              <div className="mt-2.5 space-y-1.5">
                {activeDomain.methods.map((method) => (
                  <div key={method} className="flex items-center gap-2 text-xs text-slate-600 sm:text-sm">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-2">
              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                Explore {activeDomain.name} Workflows 
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
