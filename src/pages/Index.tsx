import { motion } from "framer-motion";
import { ParticleBackground } from "@/components/ParticleBackground";
import { HeroText } from "@/components/HeroText";
import { FeatureCard } from "@/components/FeatureCard";
import { Code, Terminal, Zap, Link } from "lucide-react";
import { Button } from "@/components/ui/button";
const Index = () => {
  const features = [{
    title: "Custom Endpoints",
    description: "Create and customize API endpoints with our intuitive interface",
    icon: <Code className="w-6 h-6" />
  }, {
    title: "Real-time Testing",
    description: "Test your APIs in real-time with our advanced testing suite",
    icon: <Terminal className="w-6 h-6" />
  }, {
    title: "Instant Deployment",
    description: "Deploy your APIs instantly with zero configuration",
    icon: <Zap className="w-6 h-6" />
  }, {
    title: "Seamless Integration",
    description: "Connect your APIs with any platform or service",
    icon: <Link className="w-6 h-6" />
  }];
  return <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-gray-900 text-white overflow-hidden">
      <ParticleBackground />
      
      <main className="container mx-auto px-4 py-20 relative">
        <HeroText />

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="flex justify-center gap-4 mb-20">
          <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 bg-transparent">
            View Documentation
          </Button>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />)}
        </motion.div>
      </main>
    </div>;
};
export default Index;