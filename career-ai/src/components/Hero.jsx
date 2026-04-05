import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="text-center py-16">
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
        className="text-4xl font-bold"
      >
        AI Career Guidance
      </motion.h1>
      <p className="text-gray-400 mt-4">
        Discover your perfect career path 🚀
      </p>
    </div>
  );
}