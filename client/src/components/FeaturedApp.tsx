import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import galiniaLogo from "@assets/Galinia Colour Logo Transparent_1760324894520.png";

export default function FeaturedApp() {
  return (
    <section id="featured-app" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2" data-testid="text-featured-title">
            In Development
          </h2>
          <p className="text-sm text-muted-foreground" data-testid="text-featured-subtitle">
            Our first AI-powered application
          </p>
        </div>

        <Card className="overflow-hidden border-card-border bg-card/50 backdrop-blur-xl">
          <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
            <div className="flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-chart-1/20 to-chart-2/20 blur-3xl" />
              <img 
                src={galiniaLogo} 
                alt="Galinia Logo" 
                className="relative z-10 w-full max-w-xs drop-shadow-2xl"
                data-testid="img-galinia-logo"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-serif font-bold" data-testid="text-galinia-title">
                    Galinia
                  </h3>
                  <Badge variant="default" className="bg-gradient-to-r from-chart-1 to-chart-2 border-0" data-testid="badge-status">
                    Launching Soon
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4" data-testid="text-galinia-description">
                  Your AI-powered meditation companion. Galinia creates short, personalized meditation 
                  sessions tailored to your mood, schedule, and wellness goals. Experience mindfulness 
                  designed just for you.
                </p>
              </div>

              <div className="pt-3 border-t border-border">
                <p className="text-xs font-medium text-foreground mb-2">Key Features</p>
                <p className="text-xs text-muted-foreground">
                  AI-Powered Sessions • Personalized Content • Quick & Effective
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
