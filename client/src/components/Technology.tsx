import { Cloud, Cpu, Database, Code, Shield, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} id="technology" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4" data-testid="tech-title">
            Built on
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent"> Cutting-Edge Tech</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="tech-description">
            We leverage the latest in cloud infrastructure, AI frameworks, and modern development practices to build robust, scalable applications.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="group p-6 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 hover:border-chart-1/50 transition-all duration-300" 
            data-testid="tech-card-cloud"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-2/20 to-chart-2/10 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="text-lg font-semibold">Cloud Infrastructure</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise-grade cloud services for scalable, reliable infrastructure that grows with our users.
            </p>
          </motion.div>

          <motion.div 
            className="group p-6 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 hover:border-chart-1/50 transition-all duration-300" 
            data-testid="tech-card-ai"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-1/20 to-chart-1/10 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-chart-1" />
              </div>
              <h3 className="text-lg font-semibold">Advanced AI</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cutting-edge AI models and custom fine-tuned systems for personalized content generation.
            </p>
          </motion.div>

          <motion.div 
            className="group p-6 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 hover:border-chart-4/50 transition-all duration-300" 
            data-testid="tech-card-database"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-2/20 to-chart-2/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-chart-2" />
              </div>
              <h3 className="text-lg font-semibold">Modern Databases</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              PostgreSQL for structured data, Redis for caching, and vector databases for AI embeddings.
            </p>
          </motion.div>

          <motion.div 
            className="group p-6 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 hover:border-chart-1/50 transition-all duration-300" 
            data-testid="tech-card-mobile"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-4/20 to-chart-4/10 flex items-center justify-center">
                <Code className="w-6 h-6 text-chart-4" />
              </div>
              <h3 className="text-lg font-semibold">React Native</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cross-platform mobile development with TypeScript for fast, reliable iOS and Android apps.
            </p>
          </motion.div>

          <motion.div 
            className="group p-6 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 hover:border-chart-2/50 transition-all duration-300" 
            data-testid="tech-card-security"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-3/20 to-chart-3/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-chart-3" />
              </div>
              <h3 className="text-lg font-semibold">Security First</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              End-to-end encryption, secure authentication, and compliance-ready architecture from day one.
            </p>
          </motion.div>

          <motion.div 
            className="group p-6 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 hover:border-chart-4/50 transition-all duration-300" 
            data-testid="tech-card-performance"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-1/20 to-chart-2/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-chart-1" />
              </div>
              <h3 className="text-lg font-semibold">Optimized Performance</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              CDN distribution, edge computing, and progressive web app technologies for lightning-fast experiences.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
