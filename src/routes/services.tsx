import { createFileRoute } from "@tanstack/react-router";
import { Dna, Mail, Phone, MapPin } from "lucide-react";
import { ServicesContent, solutionsData } from "@/components/ServicesContent";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Bioinformatics & AI Research Services | Omics Nexus" },
      {
        name: "description",
        content:
          "Explore Omics Nexus services including NGS data analysis, RNA-seq, metagenomics, multi-omics integration, AI/ML modeling, molecular docking, pipeline development, and scientific writing.",
      },
      { property: "og:title", content: "Bioinformatics & AI Research Services | Omics Nexus" },
      {
        property: "og:description",
        content:
          "Explore Omics Nexus services including NGS data analysis, RNA-seq, metagenomics, multi-omics integration, AI/ML modeling, molecular docking, pipeline development, and scientific writing.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="font-sans min-h-screen bg-white text-slate-900">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 font-display text-xl font-bold text-slate-900">
            <Dna className="h-6 w-6 text-blue-600" /> Omics Nexus
          </a>
          <nav className="hidden gap-7 text-sm text-slate-600 md:flex">
            {[
              { name: "Home", href: "/" },
              { name: "3D Genomics", href: "/#genomics-architecture" },
              { name: "About", href: "/#about" },
              { name: "Services", href: "/services" },
              { name: "Trainings", href: "/#trainings" },
              { name: "Blogs", href: "/#blogs" },
              { name: "Contact", href: "/#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition ${item.name === "Services" ? "text-blue-600 font-semibold" : "hover:text-blue-600 font-medium"}`}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <a
            href="/#contact"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Book Consultation
          </a>
        </div>
      </header>

      {/* Main Services Content */}
      <main>
        <ServicesContent />
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-slate-200 bg-slate-50 text-slate-600">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 font-display text-xl font-bold text-slate-900">
              <Dna className="h-5 w-5 text-blue-600" /> Omics Nexus
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Advancing bioinformatics, single-cell analysis, and AI discovery, one dataset at a time.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Quick Links</p>
            {["About", "Services", "Trainings", "Blogs"].map((l) => (
              <a key={l} href={`/${l.toLowerCase()}`} className="mt-2 block text-sm hover:text-blue-600 transition-colors">
                {l}
              </a>
            ))}
          </div>
          <div>
            <p className="font-semibold text-slate-900">Our Solutions</p>
            {solutionsData.slice(0, 4).map((s) => (
              <a key={s.id} href={`/services#${s.id}`} className="mt-2 block text-sm hover:text-blue-600 transition-colors">
                {s.title}
              </a>
            ))}
          </div>
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-slate-900">Contact Us</p>
            <p className="flex gap-2.5 items-center">
              <Mail className="h-4 w-4 text-blue-600" /> info@omicsnexus.org
            </p>
            <p className="flex gap-2.5 items-center">
              <Phone className="h-4 w-4 text-blue-600" /> +1 (000) 000-0000
            </p>
            <p className="flex gap-2.5 items-center">
              <MapPin className="h-4 w-4 text-blue-600" /> Cambridge Innovation Hub, MA
            </p>
          </div>
        </div>
        <p className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          © 2026 Omics Nexus. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
