import { Activity, Cpu, Sparkles, CheckCircle2, ShieldCheck, Dna } from "lucide-react";
import hero from "@/assets/hero.jpg";

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-lg items-center justify-center p-4 lg:max-w-xl">
      {/* 1. Subtle, Professional Ambient Backing */}
      <div 
        className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-blue-50/70" 
        aria-hidden="true" 
      />

      {/* 2. Central Bioinformatics Display Frame */}
      <div className="animate-float relative z-10 w-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-2.5 shadow-xl shadow-slate-200/60">
        
        {/* Top Header Bar of the Bioinformatics Display */}
        <div className="mb-2 flex items-center justify-between border-b border-slate-100 bg-slate-50/80 px-3 py-2 text-xs text-slate-500 rounded-t-2xl">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
            </span>
            <span className="font-mono text-[11px] font-bold text-blue-700">SCAN_PIPELINE // ACTIVE</span>
          </div>
          <div className="hidden font-mono text-[10px] text-slate-500 sm:block">
            RES: 10x_CHROMIUM_V3
          </div>
        </div>

        {/* Central Image with Precise Hairline Laser */}
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
          <img 
            src={hero} 
            alt="Hexagonal bioinformatics and single-cell RNA analysis visualization" 
            width={1024} 
            height={1024} 
            className="w-full object-cover transition-transform duration-700 hover:scale-105" 
          />

          {/* Clean Thin Laser Scanline */}
          <div 
            className="animate-scanline pointer-events-none absolute inset-x-0 h-[2px] bg-blue-600 opacity-70"
            aria-hidden="true"
          />

          {/* Real-time Nucleotide Data Stream Overlay Banner */}
          <div className="absolute inset-x-0 bottom-0 border-t border-slate-200 bg-white/95 px-3 py-2 backdrop-blur-md">
            <div className="flex items-center justify-between text-[11px]">
              <span className="flex items-center gap-1.5 font-mono text-slate-700">
                <Dna className="h-3.5 w-3.5 text-blue-600" />
                <span className="truncate font-semibold">SEQ: ATGCCG•TACGGC•GCTAGC•CTGATC</span>
              </span>
              <span className="rounded bg-blue-50 border border-blue-200 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-700">
                Q30 &gt; 94%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Floating HUD Card 1: Single-Cell Clustering Inspector (Top Left) */}
      <div 
        className="animate-float-reverse absolute -top-4 -left-4 z-20 max-w-[210px] rounded-2xl border border-slate-200 bg-white p-3.5 shadow-lg shadow-slate-200/70 sm:-left-6 sm:max-w-[230px]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-50 text-blue-600">
              <Sparkles className="h-3 w-3" />
            </div>
            <span className="text-[11px] font-bold text-slate-900">scRNA Clustering</span>
          </div>
          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-600">UMAP</span>
        </div>

        {/* Mini simulated UMAP cluster scatter */}
        <div className="mt-2.5 flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-2">
          <div className="relative h-10 w-14 overflow-hidden">
            {/* Cluster 1: Blue */}
            <span className="absolute top-1 left-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span className="absolute top-2.5 left-4 h-1 w-1 rounded-full bg-blue-500" />
            <span className="absolute top-2 left-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
            {/* Cluster 2: Teal */}
            <span className="absolute top-5 left-7 h-1.5 w-1.5 rounded-full bg-teal-600" />
            <span className="absolute top-6 left-9 h-1 w-1 rounded-full bg-teal-500" />
            <span className="absolute top-4 left-8 h-1.5 w-1.5 rounded-full bg-teal-400" />
            {/* Cluster 3: Indigo */}
            <span className="absolute bottom-1 left-2 h-1.5 w-1.5 rounded-full bg-indigo-600" />
            <span className="absolute bottom-2 left-4 h-1 w-1 rounded-full bg-indigo-500" />
          </div>
          <div className="text-right">
            <div className="text-xs font-bold text-slate-900">24,890</div>
            <div className="text-[9px] text-slate-500">annotated cells</div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="h-2.5 w-2.5 text-blue-600" /> 14 Cell Types
          </span>
          <span className="font-mono text-blue-700 font-semibold">p &lt; 0.001</span>
        </div>
      </div>

      {/* 4. Floating HUD Card 2: AI Gene Biomarker Equalizer (Bottom Right) */}
      <div 
        className="animate-float absolute -bottom-6 -right-3 z-20 max-w-[210px] rounded-2xl border border-slate-200 bg-white p-3.5 shadow-lg shadow-slate-200/70 sm:-right-6 sm:max-w-[230px]"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-teal-50 text-teal-600">
              <Activity className="h-3 w-3" />
            </div>
            <span className="text-[11px] font-bold text-slate-900">AI Biomarkers</span>
          </div>
          <span className="flex items-center gap-1 text-[10px] font-bold text-teal-700">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
            99.4%
          </span>
        </div>

        {/* Dynamic RNA Expression Equalizer Bars */}
        <div className="mt-2.5 space-y-1.5 rounded-lg border border-slate-100 bg-slate-50 p-2 text-[10px]">
          <div className="flex items-center justify-between font-mono">
            <span className="font-semibold text-slate-600">TP53</span>
            <div className="flex h-2 w-24 items-center overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-blue-600 w-4/5" />
            </div>
          </div>
          <div className="flex items-center justify-between font-mono">
            <span className="font-semibold text-slate-600">BRCA1</span>
            <div className="flex h-2 w-24 items-center overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-teal-600 w-3/5" />
            </div>
          </div>
          <div className="flex items-center justify-between font-mono">
            <span className="font-semibold text-slate-600">EGFR</span>
            <div className="flex h-2 w-24 items-center overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-indigo-600 w-5/6" />
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between text-[10px]">
          <span className="text-slate-500">Discovery Mode</span>
          <span className="font-semibold text-blue-700">Validated</span>
        </div>
      </div>

      {/* 5. Floating Mini Badge: High-Throughput Pipeline (Top Right) */}
      <div 
        className="animate-float absolute top-10 -right-4 z-20 hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-md sm:flex"
      >
        <Cpu className="h-3 w-3 text-blue-600" />
        <span className="text-[10px] font-semibold text-slate-800">GPU Accelerated Nextflow</span>
      </div>

      {/* 6. Floating Mini Badge: Data QC (Bottom Left) */}
      <div 
        className="animate-float-reverse absolute bottom-12 -left-4 z-20 hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-md sm:flex"
      >
        <ShieldCheck className="h-3 w-3 text-teal-600" />
        <span className="text-[10px] font-semibold text-slate-800">99.8% QC Confidence</span>
      </div>
    </div>
  );
}
