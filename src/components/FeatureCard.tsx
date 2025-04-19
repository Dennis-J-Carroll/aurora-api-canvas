
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="relative p-6 rounded-xl overflow-hidden backdrop-blur-lg border border-white/10 bg-white/5"
      style={{
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 z-0" />
      <div className="relative z-10">
        <div className="w-12 h-12 mb-4 text-cyan-400 flex items-center justify-center rounded-lg bg-white/5">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </motion.div>
  );
};
