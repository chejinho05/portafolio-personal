interface ProjectPlaceholderProps {
  initials: string;
  title: string;
  category: string;
  accent?: string;
}

export default function ProjectPlaceholder({
  initials,
  title,
  category,
  accent = "#6aa6ff",
}: ProjectPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${title} placeholder cover`}
      className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#090b13]"
      style={{
        backgroundImage: `radial-gradient(circle at 72% 22%, ${accent}40, transparent 34%), linear-gradient(135deg, #0b0e19 0%, #11152a 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative flex items-center gap-4 rounded-2xl border border-white/10 bg-black/25 px-6 py-5 shadow-2xl backdrop-blur-sm">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-xl font-bold text-white shadow-lg"
          style={{ background: `linear-gradient(135deg, ${accent}, #8b5cf6)` }}
        >
          {initials}
        </div>
        <div className="min-w-0">
          <div className="max-w-[260px] truncate text-lg font-semibold text-white">{title}</div>
          <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-white/55">
            {category}
          </div>
        </div>
      </div>
    </div>
  );
}
