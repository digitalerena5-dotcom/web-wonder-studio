import { createFileRoute } from "@tanstack/react-router";
import {
  Dna, Brain, Workflow, BarChart3, PenTool, FlaskConical, Users, GraduationCap,
  Upload, ShieldCheck, Microscope, FileText, ArrowRight, Star, Mail, Phone, MapPin, Check,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

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
  { icon: Upload, t: "Upload Data", d: "Secure transfer" },
  { icon: ShieldCheck, t: "Data QC", d: "Quality control" },
  { icon: Microscope, t: "Analysis", d: "Expert workflows" },
  { icon: FileText, t: "Report & Support", d: "Publication-ready" },
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
  return <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{children}</p>;
}

function Index() {
  return (
    <div className="font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-deep-foreground/10 bg-deep/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 font-display text-xl font-bold text-deep-foreground">
            <Dna className="h-6 w-6 text-primary" /> Omics Nexus
          </a>
          <nav className="hidden gap-7 text-sm text-deep-muted md:flex">
            {["Home", "About", "Services", "Trainings", "Blogs", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="transition hover:text-primary">{l}</a>
            ))}
          </nav>
          <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground">Book Consultation</a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="bg-deep-gradient text-deep-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div>
            <Eyebrow>Bioinformatics for the genomic era</Eyebrow>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight md:text-6xl">
              Mastering <span className="text-primary">Single Cell RNA-Seq</span> Data Analysis
            </h1>
            <p className="mt-6 max-w-lg text-deep-muted">
              Experience the next generation of scientific insights with world-class analysis workflows — clustering, cell-type annotation and trajectory inference.
            </p>
            <a href="#services" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Explore Services <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <img src={hero} alt="Hexagon bioinformatics illustration" width={1024} height={1024} className="mx-auto w-full max-w-md rounded-3xl" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <img src={about} alt="Scientists analysing genomic data" loading="lazy" width={1024} height={1024} className="hex mx-auto w-full max-w-md object-cover" />
        <div>
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-bold">We are redefining what it means to be a scientific solutions partner.</h2>
          <p className="mt-5 text-muted-foreground">
            Our team combines deep expertise in <b className="text-accent-foreground">bioinformatics, NGS data analysis</b> and AI to deliver translational insights for healthcare and life-science research.
          </p>
          <p className="mt-4 text-muted-foreground">From AI-based biomarker discovery to pipeline development and scientific writing — we support you end to end.</p>
          <div className="mt-8 flex items-center gap-4">
            <span className="font-display text-6xl font-bold text-primary">4+</span>
            <span className="text-muted-foreground">years of experience in the field</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <Eyebrow>What we offer</Eyebrow>
            <h2 className="mt-3 font-display text-4xl font-bold">
              Advanced <span className="text-primary">Bioinformatics & AI</span> Solutions<br />Driving Smarter <span className="text-primary">Healthcare</span> Decisions
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: I, t, d }) => (
              <div key={t} className="group rounded-2xl border bg-card p-6 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground"><I className="h-6 w-6" /></div>
                <h3 className="mt-5 font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
                <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read More <ArrowRight className="h-3 w-3" /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow + Why */}
      <section id="trainings" className="bg-deep-gradient py-24 text-deep-foreground">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-bold">From Data to Decisions: <span className="text-primary">Your Workflow</span></h2>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map(({ icon: I, t, d }, i) => (
              <div key={t} className="relative rounded-2xl border border-deep-foreground/10 bg-deep-2 p-6">
                <span className="absolute right-4 top-4 text-xs text-deep-muted">0{i + 1}</span>
                <I className="mx-auto h-8 w-8 text-primary" />
                <h3 className="mt-4 font-semibold">{t}</h3>
                <p className="text-sm text-deep-muted">{d}</p>
              </div>
            ))}
          </div>

          <h2 className="mt-28 font-display text-4xl font-bold">Why Choose <span className="text-primary">Omics Nexus?</span></h2>
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 text-left md:grid-cols-2">
            {["Multidisciplinary Expertise", "Tailored Solutions", "Free Consultation", "Proven Results & Trust", "Always-On Support", "Publication-Ready Output"].map((w) => (
              <div key={w} className="flex items-center gap-3 rounded-xl border border-deep-foreground/10 bg-deep-2 p-5">
                <Check className="h-5 w-5 text-primary" /> <span className="font-medium">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-bold">Trust of the <span className="text-primary">Global Community</span></h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r) => (
              <div key={r.n} className="rounded-2xl border bg-card p-6">
                <div className="flex justify-center gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-4 text-sm text-muted-foreground">"{r.q}"</p>
                <div className="mx-auto mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-accent font-bold text-accent-foreground">{r.n.split(" ").slice(-1)[0][0]}</div>
                <p className="mt-2 font-semibold">{r.n}</p>
                <p className="text-xs text-primary">{r.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blogs" className="bg-secondary py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Eyebrow>Insights</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-bold">Research & Technology Blog</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.t} className="overflow-hidden rounded-2xl border bg-card">
                <div className="bg-deep-gradient h-40" />
                <div className="p-6">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">{p.tag}</span>
                  <h3 className="mt-4 font-semibold">{p.t}</h3>
                  <a href="#blogs" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">Read article <ArrowRight className="h-3 w-3" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep-gradient py-24 text-center text-deep-foreground">
        <h2 className="font-display text-4xl font-bold">Ready to turn your data into discoveries?</h2>
        <a href="#contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground">Get Started</a>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-deep text-deep-muted">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 font-display text-xl font-bold text-deep-foreground"><Dna className="h-5 w-5 text-primary" /> Omics Nexus</p>
            <p className="mt-3 text-sm">Advancing bioinformatics, one dataset at a time.</p>
          </div>
          <div><p className="font-semibold text-primary">Quick Links</p>{["About", "Services", "Trainings", "Blogs"].map((l) => <p key={l} className="mt-2 text-sm">{l}</p>)}</div>
          <div><p className="font-semibold text-primary">Our Services</p>{services.slice(0, 4).map((s) => <p key={s.t} className="mt-2 text-sm">{s.t}</p>)}</div>
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-primary">Contact Us</p>
            <p className="flex gap-2"><Mail className="h-4 w-4" /> info@omicsnexus.org</p>
            <p className="flex gap-2"><Phone className="h-4 w-4" /> +1 (000) 000-0000</p>
            <p className="flex gap-2"><MapPin className="h-4 w-4" /> Your address here</p>
          </div>
        </div>
        <p className="border-t border-deep-foreground/10 py-6 text-center text-xs">© 2026 Omics Nexus. All rights reserved.</p>
      </footer>
    </div>
  );
}
