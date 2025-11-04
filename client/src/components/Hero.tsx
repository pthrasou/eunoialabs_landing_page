import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const scrollToGalinia = () => {
    document.getElementById('galinia')?.scrollIntoView({ behavior: 'smooth' });
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-chart-1/20 rounded-full blur-[60px] md:blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-chart-2/20 rounded-full blur-[60px] md:blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-chart-4/10 rounded-full blur-[80px] md:blur-[150px]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <motion.div 
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center"
      >
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight" 
          data-testid="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="block mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to
          </motion.span>
          <span className="relative inline-block">
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-chart-1 via-chart-4 to-chart-2 opacity-30 blur-xl md:blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.span 
              className="relative bg-gradient-to-r from-chart-1 via-chart-4 to-chart-2 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Eunoia Labs
            </motion.span>
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed" 
          data-testid="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Redefining what's possible through cutting-edge AI technology.
        </motion.p>
        
        <motion.p 
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed" 
          data-testid="hero-subdescription"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          We're building the future of AI-powered applications that transform how people live, work, and experience the world.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button 
            size="lg"
            className="bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90 transition-opacity border-0 text-base font-medium"
            onClick={scrollToGalinia}
            data-testid="button-discover-galinia"
          >
            Discover Galinia
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button 
            size="lg"
            variant="outline" 
            className="backdrop-blur-xl bg-white/[0.03] border-white/10 text-base font-medium"
            onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-our-tech"
          >
            <Sparkles className="mr-2 w-4 h-4" />
            Our Technology
          </Button>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="p-6 rounded-lg bg-white/[0.03] md:backdrop-blur-xl border border-white/10" 
            data-testid="card-innovation"
            whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-1/20 to-chart-1/10 flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-chart-1" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI-Powered</h3>
            <p className="text-sm text-muted-foreground">Leveraging state-of-the-art AI for personalized experiences</p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg bg-white/[0.03] md:backdrop-blur-xl border border-white/10" 
            data-testid="card-innovation-2"
            whileHover={{ scale: 1.05, borderColor: "rgba(80, 227, 194, 0.5)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-2/20 to-chart-2/10 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-chart-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Built for Scale</h3>
            <p className="text-sm text-muted-foreground">Cloud-native architecture ready to serve millions of users</p>
          </motion.div>

          <motion.div 
            className="p-6 rounded-lg bg-white/[0.03] md:backdrop-blur-xl border border-white/10" 
            data-testid="card-innovation-3"
            whileHover={{ scale: 1.05, borderColor: "rgba(168, 85, 247, 0.5)" }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-4/20 to-chart-4/10 flex items-center justify-center mb-4 mx-auto">
              <svg className="w-6 h-6 text-chart-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">User-Centric</h3>
            <p className="text-sm text-muted-foreground">Designed with accessibility and user experience at the forefront</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
