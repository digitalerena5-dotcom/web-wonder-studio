import { useState, useEffect } from "react";
import { 
  Network, 
  Cpu, 
  Sparkles, 
  Activity, 
  Play, 
  Pause, 
  RotateCcw, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Info,
  CheckCircle2
} from "lucide-react";
import molecularImg from "@/assets/molecular-cluster.jpg";

interface MolecularHotspot {
  id: string;
  name: string;
  x: number;
  y: number;
  color: "cyan" | "emerald" | "violet";
  tag: string;
  desc: string;
  metric: string;
  secondaryMetric: string;
}

const molecularHotspots: MolecularHotspot[] = [
  {
    id: "allosteric-hub",
    name: "Allosteric Core & Conformational Switch",
    x: 48,
    y: 45,
    color: "cyan",
    tag: "MD Trajectory",
    desc: "Central regulatory node orchestrating large-scale domain rearrangements upon ligand binding, resolved across 1.2-microsecond all-atom simulations.",
    metric: "ΔG = -12.4 kcal/mol",
    secondaryMetric: "RMSD: 1.28 Å (Equilibrated)",
  },
  {
    id: "cryptic-pocket",
    name: "Cryptic Binding Pocket & Hydration Shell",
    x: 75,
    y: 35,
    color: "emerald",
    tag: "Druggability & FEP+",
    desc: "Dynamic pocket undetectable in static crystal structures, revealed by Markov State Models with persistent bridging water networks.",
    metric: "Kd = 2.1 nM (Sub-Nanomolar)",
    secondaryMetric: "Solvation Envelope: 99.4%",
  },
  {
    id: "ppi-interface",
    name: "Protein-Protein Interaction (PPI) Interface",
    x: 28,
    y: 68,
    color: "violet",
    tag: "Interactome Graph",
    desc: "Multi-subunit oligomeric contact interface with 1,840 Å² buried surface area stabilized by dual salt bridges and hydrophobic packing.",
    metric: "14 Hydrogen Bonds",
    secondaryMetric: "Buried Area: 1,840 Å²",
  },
  {
    id: "graph-node",
    name: "Topological Signal Hub & Bottleneck",
    x: 36,
    y: 22,
    color: "cyan",
    tag: "Graph Neural Networks",
    desc: "Graph centrality bottleneck identified by SE(3)-equivariant neural networks as the key driver of downstream oncogenic kinase phosphorylation.",
    metric: "Betweenness: 0.96",
    secondaryMetric: "GNN Confidence: 99.7%",
  },
];

const simulationModes = [
  {
    id: "molecular-dynamics",
    title: "All-Atom Molecular Dynamics (MD)",
    subtitle: "GROMACS • AMBER • OpenMM",
    icon: Activity,
    color: "cyan",
    badge: "Microsecond Scale",
    summary: "Simulate macromolecular conformational landscapes in explicit solvent with physiological ion concentrations to observe functional transitions.",
    metrics: [
      { label: "Timescale", value: "1.2 µs Trajectory" },
      { label: "Ensemble", value: "NPT (300K, 1 bar)" },
      { label: "Force Fields", value: "CHARMM36m / AMBER19SB" },
      { label: "GPU Acceleration", value: "8x NVIDIA H100s" },
    ],
    features: [
      "Root Mean Square Deviation (RMSD) & RMSF fluctuation curves",
      "Dynamic cross-correlation matrix (DCCM) analysis",
      "Markov State Modeling (MSM) of metastable states",
    ],
  },
  {
    id: "graph-networks",
    title: "Graph Neural Networks & Interactomics",
    subtitle: "PyTorch Geometric • DGL • NetworkX",
    icon: Network,
    color: "purple",
    badge: "AI Network Biology",
    summary: "Model cellular signaling pathways and protein-protein networks as complex heterogeneous graphs to predict novel druggable interaction edges.",
    metrics: [
      { label: "Graph Nodes", value: "128,000+ Genes & Proteins" },
      { label: "Known Edges", value: "1.4M Interactions" },
      { label: "Architecture", value: "SE(3)-Equivariant GNN" },
      { label: "Prediction AUC", value: "0.984" },
    ],
    features: [
      "Protein-protein interaction (PPI) edge prediction",
      "Centrality and disease module subnet clustering",
      "Phenotype-to-target knowledge graph embeddings",
    ],
  },
  {
    id: "fep-docking",
    title: "Free Energy Perturbation (FEP+ & Docking)",
    subtitle: "Thermodynamic Integration • AutoDock Vina",
    icon: Zap,
    color: "emerald",
    badge: "Lead Optimization",
    summary: "Calculate relative and absolute binding free energies with sub-kcal/mol chemical accuracy to prioritize preclinical lead candidates.",
    metrics: [
      { label: "Accuracy", value: "± 0.8 kcal/mol RMSE" },
      { label: "Throughput", value: "500k+ Compounds/Day" },
      { label: "Scoring Function", value: "Deep Learning Scoring" },
      { label: "Success Rate", value: "94% In Vitro Match" },
    ],
    features: [
      "Alchemical transformation thermodynamic cycles",
      "Hydration thermodynamics via 3D-RISM methods",
      "Automated conformer sampling & pose clustering",
    ],
  },
];

export function MolecularNetworkShowcase() {
  const [selectedSpot, setSelectedSpot] = useState<MolecularHotspot>(molecularHotspots[0]);
  const [activeModeIdx, setActiveModeIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [simProgress, setSimProgress] = useState(68);

  const activeMode = simulationModes[activeModeIdx];

  // Dynamic simulation playback ticker effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setSimProgress((prev) => (prev >= 100 ? 5 : prev + 1));
    }, 180);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="molecular-dynamics" className="relative overflow-hidden bg-slate-50/70 py-20 text-slate-900 md:py-28 border-y border-slate-200">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Biophysical Simulation & Network Biology</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl md:leading-tight text-slate-900">
            Simulate Macromolecular Complexes with{" "}
            <span className="text-blue-600">
              Atomic Network Dynamics
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
            From all-atom molecular dynamics (MD) trajectories to graph neural network (GNN) interactome modeling, decode complex cellular machinery, cryptic binding pockets, and drug interaction kinetics.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {simulationModes.map((mode, i) => {
            const Icon = mode.icon;
            const isActive = activeModeIdx === i;
            return (
              <button
                key={mode.id}
                onClick={() => setActiveModeIdx(i)}
                className={`group flex items-center gap-2.5 rounded-2xl px-5 py-3 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  isActive
                    ? "border border-blue-600 bg-blue-600 text-white shadow-sm"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 shadow-xs"
                }`}
              >
                <div className={`flex h-7 w-7 items-center justify-center rounded-lg transition-colors ${
                  isActive ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
                }`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="font-bold">{mode.title.split(" (")[0]}</div>
                  <div className={`text-[10px] ${isActive ? "text-blue-100" : "text-slate-500"}`}>{mode.badge}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Main Stage */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Interactive Molecular Cluster Viewport */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/50">
              
              {/* Corner Tech Annotations */}
              <span className="pointer-events-none absolute top-3 left-4 font-mono text-[10px] text-slate-400 font-semibold">
                LATTICE_ID // 0x7B45_PPI
              </span>
              <span className="pointer-events-none absolute top-3 right-4 font-mono text-[10px] text-slate-400 font-semibold">
                ENSEMBLE: NPT_300K
              </span>
              <span className="pointer-events-none absolute bottom-3 left-4 font-mono text-[10px] text-slate-400 font-semibold">
                GPU_CORE: H100_TENSOR
              </span>
              <span className="pointer-events-none absolute bottom-3 right-4 font-mono text-[10px] text-slate-400 font-semibold">
                TIMESTEP: 2.0 fs
              </span>

              {/* Viewport Top Header & Telemetry */}
              <div className="mb-2.5 flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3 py-2 text-xs rounded-t-xl">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                  </span>
                  <span className="font-mono text-[11px] font-bold tracking-wider text-blue-700">
                    MOLECULAR_CLUSTER_HUD // SIMULATION_STREAM
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
                  <span className="hidden sm:inline">SELECT SPHERES TO EXAMINE</span>
                  <Info className="h-3 w-3 text-blue-600" />
                </div>
              </div>

              {/* Image Container with Scanning Laser and Hotspots */}
              <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800">
                <img
                  src={molecularImg}
                  alt="3D luminous molecular network cluster with blue and green spheres and glowing orbital toruses"
                  width={1600}
                  height={1000}
                  className="h-[390px] w-full object-cover transition-transform duration-700 ease-out sm:h-[470px] group-hover:scale-105"
                />

                {/* Subtle Hairline Scanline */}
                <div className="animate-scanline pointer-events-none absolute inset-x-0 h-[2px] bg-blue-500 opacity-70" />

                {/* Hotspots Placed on Image Spheres */}
                {molecularHotspots.map((spot) => {
                  const isSelected = selectedSpot.id === spot.id;
                  const isEmerald = spot.color === "emerald";
                  const isViolet = spot.color === "violet";

                  return (
                    <div
                      key={spot.id}
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer"
                      onClick={() => setSelectedSpot(spot)}
                    >
                      <button
                        type="button"
                        className="group/btn relative flex items-center justify-center p-2 focus:outline-none"
                        aria-label={`Inspect ${spot.name}`}
                      >
                        {/* Outer Orb */}
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full border-2 transition-transform duration-200 group-hover/btn:scale-125 ${
                            isSelected
                              ? isEmerald
                                ? "border-emerald-300 bg-emerald-600 shadow-md"
                                : isViolet
                                ? "border-purple-300 bg-purple-600 shadow-md"
                                : "border-blue-300 bg-blue-600 shadow-md"
                              : isEmerald
                              ? "border-emerald-300 bg-emerald-500/80 hover:bg-emerald-600"
                              : isViolet
                              ? "border-purple-300 bg-purple-500/80 hover:bg-purple-600"
                              : "border-blue-300 bg-blue-500/80 hover:bg-blue-600"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 rounded-full ${
                              isSelected ? "bg-white" : isEmerald ? "bg-emerald-200" : isViolet ? "bg-purple-200" : "bg-blue-200"
                            }`}
                          />
                        </span>

                        {/* Hover Tooltip Pill */}
                        <span className="pointer-events-none absolute bottom-full mb-1.5 hidden whitespace-nowrap rounded-md bg-slate-900 px-2 py-0.5 font-mono text-[10px] font-semibold text-white shadow-md group-hover/btn:block">
                          {spot.name}
                        </span>
                      </button>
                    </div>
                  );
                })}

                {/* Bottom Overlay: Selected Hotspot Telemetry Card */}
                <div className="absolute inset-x-3 bottom-3 z-30 rounded-xl border border-slate-200 bg-white/95 p-3.5 shadow-xl backdrop-blur-md sm:p-4 text-slate-800">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span
                        className={`inline-block h-2.5 w-2.5 rounded-full ${
                          selectedSpot.color === "emerald"
                            ? "bg-emerald-600"
                            : selectedSpot.color === "violet"
                            ? "bg-purple-600"
                            : "bg-blue-600"
                        }`}
                      />
                      <span className="text-xs font-bold text-slate-900 sm:text-sm">
                        {selectedSpot.name}
                      </span>
                    </div>
                    <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 font-mono text-[10px] font-bold text-blue-700">
                      {selectedSpot.tag}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed sm:text-sm">
                    {selectedSpot.desc}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-2.5 text-[11px]">
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">Free Energy / Affinity:</span>
                      <span className="font-mono font-bold text-blue-700">{selectedSpot.metric}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500">Status:</span>
                      <span className="font-mono font-bold text-teal-700">{selectedSpot.secondaryMetric}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Simulation Playback & Trajectory Scrubber Strip */}
              <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 border border-blue-200 text-blue-700 hover:bg-blue-100 transition"
                      aria-label={isPlaying ? "Pause simulation" : "Play simulation"}
                    >
                      {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />}
                    </button>
                    <button
                      onClick={() => setSimProgress(0)}
                      className="flex h-7 w-7 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-slate-900 transition"
                      aria-label="Restart trajectory"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                    </button>
                    <span className="font-mono text-[11px] font-semibold text-blue-700">
                      FRAME: {(simProgress * 12).toFixed(0)} / 1200 ns
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span className="text-slate-500">RMSD:</span>
                    <span className="font-bold text-blue-700">{(1.15 + (simProgress % 15) * 0.02).toFixed(2)} Å</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-200"
                    style={{ width: `${simProgress}%` }}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Active Simulation Pipeline Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mode Detail Card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 border border-blue-200 text-blue-600">
                    <activeMode.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                      {activeMode.subtitle}
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      {activeMode.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {activeMode.summary}
              </p>

              {/* Simulation Architecture Metrics */}
              <div className="mt-6 grid grid-cols-2 gap-2.5">
                {activeMode.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-slate-100 bg-slate-50 p-3">
                    <p className="font-mono text-[10px] text-slate-500 uppercase">{m.label}</p>
                    <p className="mt-1 font-mono text-xs font-bold text-blue-700 sm:text-sm">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Core Features */}
              <div className="mt-6 space-y-2.5 border-t border-slate-100 pt-4">
                <p className="text-xs font-bold text-slate-800">Validated Capabilities:</p>
                <div className="space-y-2 text-xs text-slate-600">
                  {activeMode.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <a
                  href="#contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
                >
                  Initiate {activeMode.title.split(" ")[0]} Simulation Project
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Performance Ribbon Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-blue-600">
                  <Cpu className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold">Simulation Speed</span>
                </div>
                <p className="mt-2 font-display text-2xl font-bold text-slate-900">350 ns/day</p>
                <p className="text-[11px] text-slate-500">per 100k atom system</p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-purple-600">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold">Validation Standard</span>
                </div>
                <p className="mt-2 font-display text-2xl font-bold text-slate-900">Cryo-EM / NMR</p>
                <p className="text-[11px] text-slate-500">Experimental cross-check</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
