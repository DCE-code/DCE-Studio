import { motion } from "framer-motion";

export default function AmbientScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(16,185,129,0.12),transparent_42%)]" />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[min(70vw,44rem)] w-[min(70vw,44rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/10"
      />
      <div className="absolute inset-x-0 top-1/2 h-px bg-linear-to-r from-transparent via-emerald-400/10 to-transparent" />
    </div>
  );
}
