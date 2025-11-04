import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Brain, Heart, Clock } from "lucide-react";
import galiniaLogo from "@assets/Galinia Colour Logo Transparent_1760324894520.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GaliniaShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} id="galinia" className="py-20 px-6 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        <motion.div 
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-chart-1/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-chart-2/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="default" className="bg-gradient-to-r from-chart-1 to-chart-2 border-0 mb-4" data-testid="badge-featured">
            Featured Product
          </Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4" data-testid="showcase-title">
            Introducing
            <span className="bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent"> Galinia</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="showcase-subtitle">
            Your AI-powered meditation companion, launching soon
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-chart-1/20 to-chart-2/20 blur-3xl" />
            <motion.div 
              className="relative p-8 rounded-2xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={galiniaLogo} 
                alt="Galinia Logo" 
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                style={{ filter: "drop-shadow(0 0 40px rgba(168, 85, 247, 0.4))" }}
                data-testid="img-galinia-logo"
                animate={{
                  filter: [
                    "drop-shadow(0 0 40px rgba(168, 85, 247, 0.4))",
                    "drop-shadow(0 0 50px rgba(168, 85, 247, 0.6))",
                    "drop-shadow(0 0 40px rgba(168, 85, 247, 0.4))"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3" data-testid="text-problem">
                <span className="text-chart-1">The Problem</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Modern life is overwhelming. People struggle to find time for mindfulness, and generic meditation apps don't address individual needs, moods, or schedules.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3" data-testid="text-solution">
                <Sparkles className="w-6 h-6 text-chart-2" />
                <span className="text-chart-2">The Solution</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Galinia uses advanced AI to create personalized, short meditation sessions tailored to your unique state of mind, available time, and wellness goals.
              </p>

              <div className="space-y-3">
                <motion.div 
                  className="flex items-start gap-3" 
                  data-testid="feature-personalized"
                  variants={itemVariants}
                >
                  <div className="w-5 h-5 rounded-full bg-chart-1/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-chart-1" />
                  </div>
                  <div>
                    <p className="font-medium">Personalized AI Sessions</p>
                    <p className="text-sm text-muted-foreground">Each meditation is uniquely generated based on your current mood and needs</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3" 
                  data-testid="feature-quick"
                  variants={itemVariants}
                >
                  <div className="w-5 h-5 rounded-full bg-chart-2/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-chart-2" />
                  </div>
                  <div>
                    <p className="font-medium">Quick & Effective</p>
                    <p className="text-sm text-muted-foreground">Short sessions designed to fit into your busy schedule</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start gap-3" 
                  data-testid="feature-adaptive"
                  variants={itemVariants}
                >
                  <div className="w-5 h-5 rounded-full bg-chart-4/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-chart-4" />
                  </div>
                  <div>
                    <p className="font-medium">Adaptive Learning</p>
                    <p className="text-sm text-muted-foreground">Gets better over time as it learns what works best for you</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div 
            className="p-6 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 text-center" 
            data-testid="card-ai-tech"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Brain className="w-10 h-10 text-chart-1 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Advanced AI</h4>
            <p className="text-sm text-muted-foreground">Natural language processing and AI create truly personalized content</p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 text-center" 
            data-testid="card-wellness"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Heart className="w-10 h-10 text-chart-2 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">Wellness Focus</h4>
            <p className="text-sm text-muted-foreground">Evidence-based techniques adapted to your mental and emotional state</p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10 text-center" 
            data-testid="card-on-demand"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <Clock className="w-10 h-10 text-chart-4 mx-auto mb-4" />
            <h4 className="font-semibold mb-2">On-Demand</h4>
            <p className="text-sm text-muted-foreground">Access whenever you need it, wherever you are, in just minutes</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center p-8 rounded-xl bg-gradient-to-r from-chart-1/10 via-chart-4/10 to-chart-2/10 md:backdrop-blur-xl border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4" data-testid="badge-status">
            Coming Soon
          </Badge>
          <h3 className="text-2xl font-semibold mb-3">Be the First to Experience Galinia</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We're putting the finishing touches on Galinia. Join our waitlist to be notified when we launch.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90 transition-opacity border-0"
            onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-join-waitlist"
          >
            Join the Waitlist
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
