
import { motion } from "framer-motion";

export const HeroText = () => {
  return (
    <div className="text-center mb-12">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
      >
        Transform Your API Experience
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl text-gray-400 max-w-2xl mx-auto"
      >
        Customize and enhance your APIs with our next-generation platform. Build faster, scale better.
      </motion.p>
    </div>
  );
};
