import { Sparkles, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-card/50 md:backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-chart-1 to-chart-2 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-bold text-lg">Eunoia Labs</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pioneering AI-powered wellness solutions from Sydney, Australia.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hello@eunoialabs.io" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                data-testid="link-email"
              >
                <Mail className="w-4 h-4" />
                hello@eunoialabs.io
              </a>
              <div className="text-sm text-muted-foreground flex items-center gap-2" data-testid="text-location">
                <MapPin className="w-4 h-4" />
                Sydney, NSW, Australia
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground" data-testid="text-copyright">
              © {new Date().getFullYear()} Eunoia Labs. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with cutting-edge AI technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
