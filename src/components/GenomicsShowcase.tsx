import { useState } from "react";
import { 
  Dna, 
  Microscope, 
  ShieldCheck, 
  Sparkles, 
  Activity, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Info,
  Workflow
} from "lucide-react";
import dnaHelixImg from "@/assets/dna-helix.png";

interface Hotspot {
  id: string;
  name: string;
  x: number;
  y: number;
  color: "coral" | "cyan";
  tag: string;
  desc: string;
  metric: string;
}

const hotspots: Hotspot[] = [
  {
    id: "major-groove",
    name: "Major Groove & Regulatory Docking",
    x: 24,
    y: 20,
    color: "coral",
    tag: "Structural Biochemistry",
    desc: "Primary binding site for transcription factors, zinc-finger domains, and Cas9 endonuclease recognition sequences.",
    metric: "Affinity Kd < 0.1 nM",
  },
  {
    id: "base-pairs",
    name: "Watson-Crick Base Pair Thermodynamics",
    x: 52,
    y: 46,
    color: "cyan",
    tag: "High-Fidelity Sequencing",
    desc: "Single-molecule kinetic monitoring distinguishes natural A-T/G-C pairs with Q40+ base accuracy and minimal GC bias.",
    metric: "99.99% Resolution",
  },
  {
    id: "backbone",
    name: "Phosphodiester Backbone Stability",
    x: 82,
    y: 24,
    color: "coral",
    tag: "Epigenomic Integrity",
    desc: "Direct chemical modification mapping detects 5mC and 6mA epigenetic markers without damaging bisulfite treatments.",
    metric: "Zero Sample Degradation",
  },
  {
    id: "nucleotides",
    name: "Fluorophore Kinetics & Polymerase Dynamics",
    x: 28,
    y: 72,
    color: "cyan",
    tag: "Real-Time Readout",
    desc: "Interpulse duration (IPD) analysis enables instant identification of modified bases during high-throughput synthesis.",
    metric: "Single-Base Kinetics",
  },
];

const omicsModes = [
  {
    id: "wgs",
    title: "Whole-Genome & Exome (WGS/WES)",
    icon: Dna,
    summary: "Deep 30x–100x coverage variant calling identifying germline and somatic mutations, complex indels, and structural rearrangements.",
    stats: [
      { label: "Variant Sensitivity", value: "99.98%" },
      { label: "Genome Coverage", value: "99.4%" },
      { label: "Algorithms", value: "DeepVariant & GATK4" },
    ],
  },
  {
    id: "epigenetics",
    title: "Epigenomics & Methylation",
    icon: Layers,
    summary: "Single-CpG resolution DNA methylation profiling and chromatin accessibility (ATAC-seq) mapping for gene regulation studies.",
    stats: [
      { label: "CpG Sites Mapped", value: "28M+" },
      { label: "Bisulfite-Free", value: "Direct Kinetics" },
      { label: "Resolution", value: "1 Base Pair" },
    ],
  },
  {
    id: "long-read",
    title: "Long-Read PacBio & Nanopore",
    icon: Microscope,
    summary: "Ultra-long reads exceeding 100kb resolving complex repeat expansions, pseudogenes, and chromosomal translocations with ease.",
    stats: [
      { label: "Read Length", value: "Up to 150 kb" },
      { label: "Phasing Accuracy", value: "99.9%" },
      { label: "Repeat Resolution", value: "100% Complete" },
    ],
  },
  {
    id: "crispr",
    title: "CRISPR Off-Target Profiling",
    icon: ShieldCheck,
    summary: "Genome-wide cleavage site validation (GUIDE-seq and CIRCLE-seq) certifying therapeutic guide RNA safety profiles.",
    stats: [
      { label: "Detection Limit", value: "< 0.01% Frequency" },
      { label: "Off-Target Sensitivity", value: "100%" },
      { label: "Compliance", value: "FDA / EMA Ready" },
    ],
  },
];

export function GenomicsShowcase() {
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot>(hotspots[1]);
  const [activeTab, setActiveTab] = useState(0);

  const activeMode = omicsModes[activeTab];

  return (
    <section id="genomics-architecture" className="relative overflow-hidden bg-slate-50/70 py-20 text-slate-900 md:py-28 border-y border-slate-200">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Single-Nucleotide Resolution</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl md:leading-tight text-slate-900">
            Deconstruct Every Base Pair with{" "}
            <span className="text-blue-600">
              Genomic Precision
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
            Interact with our molecular analysis framework. From base pair thermodynamics to structural variant resolution, unlock profound scientific discovery with AI-accelerated bioinformatics.
          </p>
        </div>

        {/* Multi-Omics Pipeline Mode Selector Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {omicsModes.map((mode, i) => {
            const Icon = mode.icon;
            const isActive = activeTab === i;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  isActive
                    ? "border border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-white" : "text-slate-500"}`} />
                <span>{mode.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage: 3D DNA Helix Viewport & Scientific HUD */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Side: The 3D DNA Interactive Helix Viewport */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50">
              
              {/* Corner Tech Crosshairs */}
              <span className="pointer-events-none absolute top-3 left-4 font-mono text-[10px] text-slate-400 font-semibold">+ 5' TELOMERE</span>
              <span className="pointer-events-none absolute top-3 right-4 font-mono text-[10px] text-slate-400 font-semibold">3' HYDROXYL +</span>
              <span className="pointer-events-none absolute bottom-3 left-4 font-mono text-[10px] text-slate-400 font-semibold">+ 1.2Å CRYO-EM</span>
              <span className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] text-slate-400 font-semibold">SMRT_PHASED +</span>

              {/* Viewport Header Controls */}
              <div className="mb-2.5 flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3 py-2 text-xs rounded-t-xl">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                  </span>
                  <span className="font-mono text-[11px] font-bold text-blue-700">MOLECULAR_STRUCTURE // 3D_INTERACTIVE</span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
                  <span className="hidden sm:inline">CLICK HOTSPOTS TO INSPECT</span>
                  <Info className="h-3 w-3 text-blue-600" />
                </div>
              </div>

              {/* The Visual Container with 3D DNA Image and Hotspots */}
              <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800">
                <img
                  src={dnaHelixImg}
                  alt="Ultra-high-resolution 3D double helix DNA molecular rendering with base pairs and dispersing nucleotides"
                  width={1200}
                  height={800}
                  className="h-[380px] w-full object-cover transition-transform duration-700 ease-out sm:h-[460px] group-hover:scale-105"
                />

                {/* Hotspot Markers placed directly on the DNA image */}
                {hotspots.map((spot) => {
                  const isSelected = selectedHotspot.id === spot.id;
                  const isCoral = spot.color === "coral";

                  return (
                    <div
                      key={spot.id}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                      onClick={() => setSelectedHotspot(spot)}
                    >
                      <button
                        type="button"
                        className="group/btn relative flex items-center justify-center p-2 focus:outline-none"
                        aria-label={`Inspect ${spot.name}`}
                      >
                        {/* Outer Ring */}
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-transform duration-200 group-hover/btn:scale-125 ${
                            isSelected
                              ? isCoral
                                ? "border-rose-400 bg-rose-600 shadow-md"
                                : "border-blue-300 bg-blue-600 shadow-md"
                              : isCoral
                              ? "border-rose-300 bg-rose-500/80 hover:bg-rose-600"
                              : "border-blue-300 bg-blue-500/80 hover:bg-blue-600"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              isSelected ? "bg-white" : isCoral ? "bg-rose-200" : "bg-blue-200"
                            }`}
                          />
                        </span>

                        {/* Tooltip */}
                        <span className="pointer-events-none absolute bottom-full mb-1.5 hidden whitespace-nowrap rounded-md bg-slate-900 px-2 py-0.5 font-mono text-[10px] font-semibold text-white shadow-md group-hover/btn:block">
                          {spot.name}
                        </span>
                      </button>
                    </div>
                  );
                })}

                {/* Floating Hotspot Details Card */}
                <div className="absolute inset-x-3 bottom-3 z-30 rounded-xl border border-slate-200 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:p-4 text-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block h-2.5 w-2.5 rounded-full ${
                          selectedHotspot.color === "coral" ? "bg-rose-600" : "bg-blue-600"
                        }`}
                      />
                      <span className="text-xs font-bold text-slate-900 sm:text-sm">
                        {selectedHotspot.name}
                      </span>
                    </div>
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 font-mono text-[10px] font-bold text-blue-700">
                      {selectedHotspot.tag}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed sm:text-sm">
                    {selectedHotspot.desc}
                  </p>

                  <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 pt-2 text-[11px]">
                    <span className="text-slate-500">Benchmark Metric:</span>
                    <span className="font-mono font-bold text-blue-700">
                      {selectedHotspot.metric}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Strip */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                  <p className="font-mono text-[10px] text-slate-500 uppercase">Dual Strand</p>
                  <p className="font-semibold text-slate-800">Anti-Parallel</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                  <p className="font-mono text-[10px] text-slate-500 uppercase">Helix Pitch</p>
                  <p className="font-semibold text-slate-800">34Å per Turn</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-2">
                  <p className="font-mono text-[10px] text-slate-500 uppercase">Fidelity</p>
                  <p className="font-semibold text-blue-700">&gt; Q45 Score</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Active Omics Mode Analytics & Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mode Overview Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-200 text-blue-600">
                  <activeMode.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">Selected Pipeline</p>
                  <h3 className="font-display text-xl font-bold text-slate-900">{activeMode.title}</h3>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {activeMode.summary}
              </p>

              {/* Key Pipeline Metrics */}
              <div className="mt-6 space-y-2.5">
                {activeMode.stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5">
                    <span className="text-xs font-medium text-slate-600">{stat.label}</span>
                    <span className="font-mono text-sm font-bold text-blue-700">{stat.value}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Checklist */}
              <div className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                <p className="text-xs font-bold text-slate-800">Standard Deliverables:</p>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>Raw BAM/CRAM alignment with duplicate marking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>Multi-sample VCF with functional annotations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>Interactive HTML MultiQC diagnostic reports</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
                >
                  Configure {activeMode.title.split(" ")[0]} Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Quick Stats Pill Ribbon */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-rose-600">
                  <Activity className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold">Base Pairs Analyzed</span>
                </div>
                <p className="mt-2 font-display text-2xl font-bold text-slate-900">3.2 Billion</p>
                <p className="text-[11px] text-slate-500">per whole-genome sample</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-blue-600">
                  <Workflow className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold">Scalable Pipelines</span>
                </div>
                <p className="mt-2 font-display text-2xl font-bold text-slate-900">AWS / GCP / HPC</p>
                <p className="text-[11px] text-slate-500">Cloud & On-Premises</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
