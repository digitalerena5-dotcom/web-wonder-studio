import { useEffect, useRef } from "react";

interface Cell {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  nucleusColor: string;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  organelles: { ox: number; oy: number; r: number }[];
  morphPhase: number;
  morphSpeed: number;
}

interface Chromosome {
  x: number;
  y: number;
  vx: number;
  vy: number;
  scale: number;
  rotation: number;
  rotationSpeed: number;
  colorFill: string;
  colorStroke: string;
  centromereColor: string;
  bandColor: string;
  telomereColor: string;
  alpha: number;
  baseAlpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  pLength: number; // short arms (p-arms)
  qLength: number; // long arms (q-arms)
  armWidth: number;
}

export function GlobalBioMotionBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // High DPI Retina Support
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resizeCanvas();

    // Cohesive, High-End Bioinformatics Palettes for Chromosomes
    // 100% professional genomic aesthetics (DAPI Blue, Bio-Cyan, Spectral Indigo, Cobalt Navy)
    const chromosomeThemes = [
      {
        // 1. DAPI Royal Sapphire (The Classic UV Fluorescence DNA Stain)
        name: "DAPI Sapphire",
        fill: "rgba(224, 242, 254, 0.85)", // Clean, luminous ice-blue crystalline chromatid body
        stroke: "rgba(2, 132, 199, 0.95)", // Deep crisp sapphire vector border
        centromere: "rgba(30, 58, 138, 0.98)", // Dense navy centromere core
        band: "rgba(30, 58, 138, 0.92)", // Sharp dark Giemsa heterochromatin G-bands
        telomere: "rgba(56, 189, 248, 1.0)", // Bioluminescent sky-blue tip caps
      },
      {
        // 2. High-Tech Fluorescent Cyan (Next-Gen Sequencing Laser Probe)
        name: "Bio Cyan",
        fill: "rgba(207, 250, 254, 0.85)", // Luminous aqua crystalline chromatid body
        stroke: "rgba(8, 145, 178, 0.95)", // Rich vivid cyan outline
        centromere: "rgba(14, 116, 144, 0.98)", // Deep cyan core
        band: "rgba(19, 78, 74, 0.92)", // Deep teal-marine G-bands
        telomere: "rgba(6, 182, 212, 1.0)", // Electric cyan tip caps
      },
      {
        // 3. Precision Molecular Indigo (FISH Spectral Karyotyping)
        name: "Spectral Indigo",
        fill: "rgba(238, 242, 255, 0.85)", // Soft crystalline periwinkle chromatid body
        stroke: "rgba(79, 70, 229, 0.95)", // Deep royal indigo outline
        centromere: "rgba(49, 46, 129, 0.98)", // Deep midnight iris core
        band: "rgba(49, 46, 129, 0.92)", // Sharp dark indigo G-bands
        telomere: "rgba(129, 140, 248, 1.0)", // Electric iris tip caps
      },
      {
        // 4. Clinical Cobalt Navy (Precision Micrograph)
        name: "Cobalt Navy",
        fill: "rgba(239, 246, 255, 0.88)", // Crystalline cobalt-white body
        stroke: "rgba(30, 64, 175, 0.95)", // Deep midnight cobalt outline
        centromere: "rgba(23, 37, 84, 0.98)", // Deep navy centromere
        band: "rgba(30, 58, 138, 0.92)", // Deep navy G-bands
        telomere: "rgba(96, 165, 250, 1.0)", // Electric blue tip caps
      },
    ];

    const cellThemes = [
      {
        membrane: "rgba(2, 132, 199,", // Sapphire Cyan
        nucleus: "rgba(30, 58, 138,",
      },
      {
        membrane: "rgba(8, 145, 178,", // Precision Aqua Cyan
        nucleus: "rgba(14, 116, 144,",
      },
      {
        membrane: "rgba(79, 70, 229,", // Royal Indigo
        nucleus: "rgba(49, 46, 129,",
      },
      {
        membrane: "rgba(37, 99, 235,", // Deep Cobalt
        nucleus: "rgba(23, 37, 84,",
      },
    ];

    const area = width * height;

    // 1. Initialize Biological Cells: Small & Appropriate Size (~10-22px diameter)
    const cellCount = Math.max(20, Math.min(Math.floor(area / 45000), 38));
    const cells: Cell[] = [];
    for (let i = 0; i < cellCount; i++) {
      const palette = cellThemes[Math.floor(Math.random() * cellThemes.length)];
      // Small appropriate radius: 5px to 10px (diameter 10px to 20px)
      const radius = 5 + Math.random() * 5.5;
      const baseAlpha = 0.40 + Math.random() * 0.20;

      const organelles = [];
      const numOrganelles = 1 + Math.floor(Math.random() * 2);
      for (let o = 0; o < numOrganelles; o++) {
        const dist = (0.2 + Math.random() * 0.35) * radius;
        const angle = Math.random() * Math.PI * 2;
        organelles.push({
          ox: Math.cos(angle) * dist,
          oy: Math.sin(angle) * dist,
          r: 0.8 + Math.random() * 0.6,
        });
      }

      cells.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        radius,
        color: palette.membrane,
        nucleusColor: palette.nucleus,
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: 0.02 + Math.random() * 0.025,
        pulseOffset: Math.random() * Math.PI * 2,
        organelles,
        morphPhase: Math.random() * Math.PI * 2,
        morphSpeed: 0.025 + Math.random() * 0.02,
      });
    }

    // 2. Initialize Chromosomes: Small & Appropriate Size (~20-30px length) in Attractive Colours
    const chromosomeCount = Math.max(16, Math.min(Math.floor(area / 52000), 28));
    const chromosomes: Chromosome[] = [];

    for (let i = 0; i < chromosomeCount; i++) {
      const theme = chromosomeThemes[Math.floor(Math.random() * chromosomeThemes.length)];
      // Small appropriate scale
      const scale = 0.85 + Math.random() * 0.35;
      const baseAlpha = 0.45 + Math.random() * 0.25;

      chromosomes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.36,
        vy: (Math.random() - 0.5) * 0.36,
        scale,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.006,
        colorFill: theme.fill,
        colorStroke: theme.stroke,
        centromereColor: theme.centromere,
        bandColor: theme.band,
        telomereColor: theme.telomere,
        alpha: baseAlpha,
        baseAlpha,
        pulseSpeed: 0.02 + Math.random() * 0.025,
        pulseOffset: Math.random() * Math.PI * 2,
        // Small, dainty cytogenetic arm dimensions
        pLength: (7.5 + Math.random() * 2.5) * scale,  // ~7-11px
        qLength: (12.5 + Math.random() * 4.0) * scale, // ~11-18px
        armWidth: (3.2 + Math.random() * 1.0) * scale, // ~3-5px
      });
    }

    // Interactive mouse fluid deflection
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", resizeCanvas, { passive: true });

    let time = 0;

    /**
     * Draw a Single Chromatid Arm with Exact Normal Vectors & Transverse Giemsa Bands
     */
    const drawChromatidArm = (
      originX: number,
      originY: number,
      angle: number,
      length: number,
      width: number,
      fillColor: string,
      strokeColor: string,
      bandColor: string,
      telomereColor: string
    ) => {
      const r = width * 0.5;
      const ux = Math.cos(angle);
      const uy = Math.sin(angle);
      const nx = -uy;
      const ny = ux;

      const tipX = originX + ux * length;
      const tipY = originY + uy * length;

      // Draw rounded capsule arm path
      ctx.beginPath();
      // Start from base left
      ctx.moveTo(originX - nx * r, originY - ny * r);
      // Line to cap left
      ctx.lineTo(tipX - nx * r, tipY - ny * r);
      // Rounded telomere cap (from angle - PI/2 to angle + PI/2)
      ctx.arc(tipX, tipY, r, angle - Math.PI / 2, angle + Math.PI / 2, false);
      // Line back to base right
      ctx.lineTo(originX + nx * r, originY + ny * r);
      ctx.closePath();

      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 1.1;
      ctx.stroke();

      // Transverse Giemsa G-Bands across arm (strictly perpendicular to arm axis)
      ctx.strokeStyle = bandColor;
      ctx.lineWidth = 1.3;

      const bandPositions = [0.38, 0.72];
      for (const pos of bandPositions) {
        const bx = originX + ux * (length * pos);
        const by = originY + uy * (length * pos);
        ctx.beginPath();
        ctx.moveTo(bx - nx * (r - 0.4), by - ny * (r - 0.4));
        ctx.lineTo(bx + nx * (r - 0.4), by + ny * (r - 0.4));
        ctx.stroke();
      }

      // Bioluminescent Telomere Cap dot
      ctx.fillStyle = telomereColor;
      ctx.beginPath();
      ctx.arc(tipX, tipY, r * 0.65, 0, Math.PI * 2);
      ctx.fill();
    };

    /**
     * Draw an Authentic, Dainty Micro-Chromosome
     */
    const drawChromosome = (c: Chromosome, currentAlpha: number) => {
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.rotate(c.rotation);

      const pLen = c.pLength;
      const qLen = c.qLength;
      const armW = c.armWidth;
      const waistSep = armW * 0.38;
      const spreadAngle = 0.22; // slight natural cytogenetic X-spread

      ctx.globalAlpha = Math.min(Math.max(currentAlpha, 0.30), 0.85);

      // --- 1. Left Sister Chromatid ---
      // Left p-arm (short arm pointing up-left)
      drawChromatidArm(
        -waistSep,
        0,
        -Math.PI / 2 - spreadAngle,
        pLen,
        armW,
        c.colorFill,
        c.colorStroke,
        c.bandColor,
        c.telomereColor
      );
      // Left q-arm (long arm pointing down-left)
      drawChromatidArm(
        -waistSep,
        0,
        Math.PI / 2 - spreadAngle,
        qLen,
        armW,
        c.colorFill,
        c.colorStroke,
        c.bandColor,
        c.telomereColor
      );

      // --- 2. Right Sister Chromatid ---
      // Right p-arm (short arm pointing up-right)
      drawChromatidArm(
        waistSep,
        0,
        -Math.PI / 2 + spreadAngle,
        pLen,
        armW,
        c.colorFill,
        c.colorStroke,
        c.bandColor,
        c.telomereColor
      );
      // Right q-arm (long arm pointing down-right)
      drawChromatidArm(
        waistSep,
        0,
        Math.PI / 2 + spreadAngle,
        qLen,
        armW,
        c.colorFill,
        c.colorStroke,
        c.bandColor,
        c.telomereColor
      );

      // --- 3. Primary Centromere Constriction Core ---
      ctx.fillStyle = c.centromereColor;
      ctx.beginPath();
      ctx.arc(0, 0, armW * 0.75, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = c.colorStroke;
      ctx.lineWidth = 1.1;
      ctx.stroke();

      // Centromere micro-highlight
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.beginPath();
      ctx.arc(-armW * 0.2, -armW * 0.2, armW * 0.25, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    /**
     * Draw a Dainty Living Cell with Organic Membrane & Nucleus
     */
    const drawCell = (cell: Cell, currentAlpha: number) => {
      ctx.save();
      ctx.translate(cell.x, cell.y);
      ctx.globalAlpha = Math.min(Math.max(currentAlpha, 0.28), 0.72);

      // Deformable organic cell membrane perimeter
      const points = 12;
      ctx.beginPath();
      for (let p = 0; p < points; p++) {
        const theta = (p / points) * Math.PI * 2;
        const wave = Math.sin(theta * 3 + cell.morphPhase) * 1.0;
        const r = cell.radius + wave;
        const px = Math.cos(theta) * r;
        const py = Math.sin(theta) * r;
        if (p === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();

      // Cytoplasm fill
      ctx.fillStyle = `${cell.color}0.20)`;
      ctx.fill();

      // Cell membrane outline
      ctx.strokeStyle = `${cell.color}0.90)`;
      ctx.lineWidth = 1.1;
      ctx.stroke();

      // Internal Micro Organelles
      ctx.fillStyle = `${cell.color}0.75)`;
      for (let o = 0; o < cell.organelles.length; o++) {
        const organelle = cell.organelles[o];
        ctx.beginPath();
        ctx.arc(organelle.ox, organelle.oy, organelle.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Cell Nucleus
      const nucleusRadius = cell.radius * 0.4;
      ctx.fillStyle = `${cell.nucleusColor}0.80)`;
      ctx.beginPath();
      ctx.arc(0, 0, nucleusRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = `${cell.nucleusColor}0.95)`;
      ctx.lineWidth = 1.0;
      ctx.stroke();

      // Tiny Nucleolus highlight
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";
      ctx.beginPath();
      ctx.arc(nucleusRadius * 0.2, -nucleusRadius * 0.15, nucleusRadius * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // Render continuous biological animation loop
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Delicate Spindle Fiber Connections between close elements
      const maxConnectDist = 100;
      for (let i = 0; i < cells.length; i += 2) {
        for (let j = 0; j < chromosomes.length; j += 2) {
          const dx = cells[i].x - chromosomes[j].x;
          const dy = cells[i].y - chromosomes[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxConnectDist * maxConnectDist) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxConnectDist) * 0.20;
            ctx.beginPath();
            ctx.moveTo(cells[i].x, cells[i].y);
            ctx.lineTo(chromosomes[j].x, chromosomes[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // 2. Update and Draw Moving Cells
      for (let i = 0; i < cells.length; i++) {
        const c = cells[i];

        c.x += c.vx;
        c.y += c.vy + Math.sin(time * 0.8 + c.pulseOffset) * 0.25;
        c.morphPhase += c.morphSpeed;

        if (mouseX > 0 && mouseY > 0) {
          const dx = c.x - mouseX;
          const dy = c.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelDist = 120;
          if (dist < repelDist && dist > 1) {
            const force = (1 - dist / repelDist) * 1.0;
            c.x += (dx / dist) * force;
            c.y += (dy / dist) * force;
          }
        }

        const pad = c.radius * 3;
        if (c.x < -pad) c.x = width + pad;
        if (c.x > width + pad) c.x = -pad;
        if (c.y < -pad) c.y = height + pad;
        if (c.y > height + pad) c.y = -pad;

        const currentAlpha = c.baseAlpha + Math.sin(time * c.pulseSpeed * 8 + c.pulseOffset) * 0.08;
        drawCell(c, currentAlpha);
      }

      // 3. Update and Draw Moving Chromosomes
      for (let i = 0; i < chromosomes.length; i++) {
        const chr = chromosomes[i];

        chr.x += chr.vx;
        chr.y += chr.vy + Math.cos(time * 0.7 + chr.pulseOffset) * 0.3;
        chr.rotation += chr.rotationSpeed;

        if (mouseX > 0 && mouseY > 0) {
          const dx = chr.x - mouseX;
          const dy = chr.y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const repelDist = 130;
          if (dist < repelDist && dist > 1) {
            const force = (1 - dist / repelDist) * 1.1;
            chr.x += (dx / dist) * force;
            chr.y += (dy / dist) * force;
          }
        }

        const pad = 60;
        if (chr.x < -pad) chr.x = width + pad;
        if (chr.x > width + pad) chr.x = -pad;
        if (chr.y < -pad) chr.y = height + pad;
        if (chr.y > height + pad) chr.y = -pad;

        const currentAlpha = chr.baseAlpha + Math.sin(time * chr.pulseSpeed * 8 + chr.pulseOffset) * 0.08;
        drawChromosome(chr, currentAlpha);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
