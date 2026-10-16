import { createFileRoute } from "@tanstack/react-router";
import {
  Dna, Brain, Workflow, BarChart3, PenTool, FlaskConical, Users, GraduationCap,
  Upload, ShieldCheck, Microscope, FileText, ArrowRight, Star, Mail, Phone, MapPin, Check,
  Sparkles, Play
} from "lucide-react";
import { HeroVisual } from "@/components/HeroVisual";
import { GenomicsShowcase } from "@/components/GenomicsShowcase";
import { ServicesContent } from "@/components/ServicesContent";
import { OmicsDomainsShowcase } from "@/components/OmicsDomainsShowcase";
import { MolecularNetworkShowcase } from "@/components/MolecularNetworkShowcase";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Omics Nexus — Bioinformatics & AI Solutions" },
      { name: "description", content: "Expert single-cell RNA-seq, NGS analysis, AI and pipeline development for research and healthcare." },
      { property: "og:title", content: "Omics Nexus — Bioinformatics & AI Solutions" },
      { property: "og:description", content: "Expert single-cell RNA-seq, NGS analysis, AI and pipeline development for research and healthcare." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Dna, t: "Bioinformatics Analysis", d: "Genomic, transcriptomic and proteomic data analysis with rigorous methods." },
  { icon: Brain, t: "AI & Machine Learning", d: "Predictive models and biomarker discovery powered by modern AI." },
  { icon: Workflow, t: "Automation & Pipelines", d: "Reproducible, scalable pipelines built with Nextflow and Snakemake." },
  { icon: BarChart3, t: "Statistics & Data Analysis", d: "Robust statistical design and evidence-based interpretation." },
  { icon: PenTool, t: "Content & Illustrations", d: "Publication-ready figures, drafting and scientific writing." },
  { icon: FlaskConical, t: "Research Projects", d: "End-to-end support from hypothesis to publication." },
  { icon: Users, t: "Consultancy Services", d: "Strategic guidance for labs, startups and clinical teams." },
  { icon: GraduationCap, t: "Training & Workshops", d: "Hands-on courses in R, Python and omics analysis." },
];

const steps = [
  { icon: Upload, t: "Upload Data", d: "Secure, encrypted transfer of raw sequencing files." },
  { icon: ShieldCheck, t: "Data QC", d: "MultiQC statistical audits and quality filtering." },
  { icon: Microscope, t: "Analysis", d: "Peer-reviewed, reproducible computational workflows." },
  { icon: FileText, t: "Report & Support", d: "Publication-grade figures and full authoring support." },
];

const reviews = [
  { n: "Dr. Sara Malik", r: "Postdoc, Genomics", q: "Fast, rigorous and incredibly clear reporting. Our scRNA-seq project was a breeze." },
  { n: "Hamza Rizvi", r: "PhD Researcher", q: "They built a pipeline that saved our lab weeks of work every month." },
  { n: "Maryam Aziz", r: "Biotech Founder", q: "Excellent AI models for biomarker discovery. Truly a scientific partner." },
  { n: "Usman Ali", r: "Clinical Scientist", q: "Professional, responsive and deeply knowledgeable team." },
];

const posts = [
  { tag: "AI", t: "The Future of AI in Drug Discovery" },
  { tag: "Genomics", t: "Understanding CRISPR Off-Target Effects" },
  { tag: "scRNA-seq", t: "A Guide to Single-Cell Data Integration" },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">
      <Sparkles className="h-3 w-3 text-blue-600" />
      <span>{children}</span>
    </div>
  );
}

function Index() {
  return (
    <div className="font-sans min-h-screen bg-transparent text-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 font-display text-xl font-bold text-slate-900">
            <Dna className="h-6 w-6 text-blue-600" /> Omics Nexus
          </a>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            {[
              { name: "Home", href: "#home" },
              { name: "3D Genomics", href: "#genomics-architecture" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Dynamics", href: "#molecular-dynamics" },
              { name: "Trainings", href: "#trainings" },
              { name: "Blogs", href: "#blogs" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a key={item.name} href={item.href} className="font-medium transition hover:text-blue-600">
                {item.name}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden bg-white/70 py-16 text-slate-900 md:py-24 border-b border-slate-200">
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Column */}
          <div className="lg:col-span-7">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-600 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>
              <span className="font-bold text-blue-700">Next-Gen Omics Intelligence</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600">v2.4 Live Platform</span>
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            </div>

            <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:leading-[1.15]">
              Mastering{" "}
              <span className="relative inline-block text-blue-600">
                Single Cell RNA-Seq
              </span>{" "}
              Data Analysis
            </h1>

            <p className="mt-6 max-w-xl text-base text-slate-600 leading-relaxed sm:text-lg">
              Accelerate biological breakthroughs with publication-grade bioinformatics workflows — high-resolution cell clustering, automated annotation, trajectory inference, and AI-powered biomarker discovery.
            </p>

            {/* Feature Pills */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs">
              {[
                "🧬 Seurat v5 & Scanpy",
                "⚡ Nextflow & Snakemake",
                "🔬 10x Genomics & Spatial",
                "🤖 AI Biomarkers",
              ].map((pill) => (
                <span 
                  key={pill} 
                  className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* CTA Group */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a 
                href="#services" 
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a 
                href="#genomics-architecture" 
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-6 py-3.5 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-100"
              >
                <Dna className="h-4 w-4 text-blue-600" /> 3D Genomic Architecture
              </a>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 shadow-xs transition-all hover:bg-slate-50"
              >
                <Play className="h-4 w-4 text-blue-600" /> Book Consultation
              </a>
            </div>

            {/* Stats / Metric highlights */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-4">
              <div>
                <p className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">10M+</p>
                <p className="mt-1 text-xs font-medium text-slate-500">Cells Analyzed</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">99.8%</p>
                <p className="mt-1 text-xs font-medium text-slate-500">QC Accuracy</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">120+</p>
                <p className="mt-1 text-xs font-medium text-slate-500">Pipelines Built</p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-slate-900 sm:text-3xl">48h</p>
                <p className="mt-1 text-xs font-medium text-slate-500">Fast Turnaround</p>
              </div>
            </div>
          </div>

          {/* Right Column (Hero Visual) */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* 3D Genomics & Molecular Architecture Showcase */}
      <GenomicsShowcase />

      {/* About / Multidisciplinary Research Domains */}
      <section id="about" className="relative overflow-hidden bg-white/70 py-24 text-slate-900">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <OmicsDomainsShowcase />
        </div>
      </section>

      {/* Services Section */}
      <div id="services">
        <ServicesContent />
      </div>

      {/* Molecular Dynamics & Complex Networks Showcase */}
      <MolecularNetworkShowcase />

      {/* Workflow + Why */}
      <section id="trainings" className="relative bg-slate-50/70 py-24 text-slate-900 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl text-slate-900">
            From Data to Decisions: <span className="text-blue-600">Your Workflow</span>
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map(({ icon: I, t, d }, i) => (
              <div key={t} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm text-left transition-all hover:border-blue-400 hover:shadow-md">
                <span className="absolute right-4 top-4 font-mono text-xs font-bold text-blue-600">0{i + 1}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-600">
                  <I className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{t}</h3>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-24 font-display text-4xl font-extrabold sm:text-5xl text-slate-900">
            Why Choose <span className="text-blue-600">Omics Nexus?</span>
          </h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 text-left md:grid-cols-2">
            {[
              "Multidisciplinary Expertise", 
              "Tailored Solutions", 
              "Free Consultation", 
              "Proven Results & Trust", 
              "Always-On Support", 
              "Publication-Ready Output"
            ].map((w) => (
              <div key={w} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-xs transition-all hover:border-slate-300">
                <Check className="h-5 w-5 text-blue-600 shrink-0" /> 
                <span className="font-semibold text-slate-800">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-white/70 py-24 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl text-slate-900">
            Trust of the <span className="text-blue-600">Global Scientific Community</span>
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-left">
            {reviews.map((r) => (
              <div key={r.n} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed italic">"{r.q}"</p>
                <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white text-sm">
                    {r.n.charAt(r.n.lastIndexOf(" ") + 1)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{r.n}</p>
                    <p className="text-xs font-medium text-blue-700">{r.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blogs" className="relative overflow-hidden bg-slate-50/70 py-24 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Eyebrow>Insights</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl text-slate-900">Research & Technology Blog</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.t} className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md">
                <div className="bg-slate-100 h-44 relative flex items-center justify-center border-b border-slate-200">
                  <Dna className="h-12 w-12 text-blue-300" />
                </div>
                <div className="p-6">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{p.tag}</span>
                  <h3 className="mt-4 font-semibold text-lg text-slate-900">{p.t}</h3>
                  <a href="#blogs" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700">
                    Read article <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Call to Action */}
      <section className="relative overflow-hidden bg-blue-50/80 py-24 text-center text-slate-900 border-b border-blue-100">
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <h2 className="font-display text-4xl font-extrabold sm:text-5xl text-slate-900">Ready to turn your data into discoveries?</h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">Partner with our bioinformatics specialists for end-to-end single-cell, spatial omics, and AI model development.</p>
          <a 
            href="#contact" 
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
          >
            <span>Get Started with Consultation</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-200 bg-slate-50 text-slate-600">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 font-display text-xl font-bold text-slate-900">
              <Dna className="h-5 w-5 text-blue-600" /> Omics Nexus
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">Advancing bioinformatics, single-cell analysis, and AI discovery, one dataset at a time.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Quick Links</p>
            {["About", "Services", "Trainings", "Blogs"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="mt-2 block text-sm hover:text-blue-600 transition-colors">
                {l}
              </a>
            ))}
          </div>
          <div>
            <p className="font-semibold text-slate-900">Our Services</p>
            {services.slice(0, 4).map((s) => (
              <p key={s.t} className="mt-2 text-sm hover:text-blue-600 transition-colors cursor-pointer">{s.t}</p>
            ))}
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-slate-900">Contact Us</p>
            <p className="flex gap-2.5 items-center"><Mail className="h-4 w-4 text-blue-600" /> info@omicsnexus.org</p>
            <p className="flex gap-2.5 items-center"><Phone className="h-4 w-4 text-blue-600" /> +1 (000) 000-0000</p>
            <p className="flex gap-2.5 items-center"><MapPin className="h-4 w-4 text-blue-600" /> Cambridge Innovation Hub, MA</p>
          </div>
        </div>
        <p className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">© 2026 Omics Nexus. All rights reserved.</p>
      </footer>
    </div>
  );
}
