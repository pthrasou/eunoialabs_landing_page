import { Target, Zap, Globe } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4" data-testid="about-title">
            Pioneering
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent"> AI Innovation</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="about-description">
            We're a startup on a mission to redefine what people can do using AI—empowering individuals and transforming industries through intelligent technology.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="group p-8 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 hover:border-chart-1/50 transition-all duration-300" 
            data-testid="card-mission"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-chart-1/20 to-chart-1/10 flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-chart-1" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              To redefine what people can do using AI—creating intelligent applications that unlock human potential and transform everyday experiences.
            </p>
          </motion.div>

          <motion.div 
            className="group p-8 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 hover:border-chart-2/50 transition-all duration-300" 
            data-testid="card-technology"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-chart-2/20 to-chart-2/10 flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-chart-2" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cutting-Edge Tech</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Leveraging advanced AI, cloud infrastructure, and modern frameworks to build scalable solutions.
            </p>
          </motion.div>

          <motion.div 
            className="group p-8 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 hover:border-chart-4/50 transition-all duration-300" 
            data-testid="card-vision"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-chart-4/20 to-chart-4/10 flex items-center justify-center mb-6">
              <Globe className="w-7 h-7 text-chart-4" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building products that empower people worldwide—transforming industries and enhancing lives through AI innovation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
