import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, MapPin, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@eunoialabs.io", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: formData.get('email'),
          _subject: "New Galinia Waitlist Signup",
          _template: "table",
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="newsletter" className="py-20 px-6 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        <motion.div 
          className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-chart-1/10 rounded-full blur-[100px]"
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-chart-2/10 rounded-full blur-[100px]"
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div 
          className="p-8 md:p-12 rounded-2xl bg-white/[0.03] md:backdrop-blur-xl border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-chart-1 to-chart-2 mb-6"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                  "0 0 30px rgba(168, 85, 247, 0.5)",
                  "0 0 20px rgba(168, 85, 247, 0.3)"
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" data-testid="text-newsletter-title">
              Join the Waitlist
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-2" data-testid="text-newsletter-subtitle">
              Be the first to experience Galinia when we launch. Get exclusive early access and updates on our AI-powered meditation app.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2" data-testid="text-location">
              <MapPin className="w-4 h-4 text-chart-2" />
              Launching from Sydney, Australia
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 bg-white/[0.05] border-white/10"
                data-testid="input-email"
              />
              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-chart-1 to-chart-2 hover:opacity-90 transition-opacity border-0"
                data-testid="button-subscribe"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </div>
            
            {submitted && (
              <motion.p 
                className="text-sm text-center text-chart-3" 
                data-testid="text-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                ✓ Thanks for joining! We'll notify you when Galinia launches.
              </motion.p>
            )}
          </motion.form>

          <motion.div 
            className="mt-8 pt-8 border-t border-white/10 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-xs text-muted-foreground">
              No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
