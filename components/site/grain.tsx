export function Grain({ opacity = 0.4 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-paper-grain mix-blend-multiply"
      style={{ opacity }}
    />
  );
}
