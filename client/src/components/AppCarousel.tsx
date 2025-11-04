import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

const futureApps = [
  {
    id: 1,
    name: "Coming Soon",
    description: "Next-generation AI application",
    gradient: "from-chart-1 to-chart-4"
  },
  {
    id: 2,
    name: "Coming Soon",
    description: "Innovative AI solution",
    gradient: "from-chart-2 to-chart-5"
  },
  {
    id: 3,
    name: "Coming Soon",
    description: "Revolutionary app experience",
    gradient: "from-chart-3 to-chart-1"
  },
  {
    id: 4,
    name: "Coming Soon",
    description: "Future technology",
    gradient: "from-chart-4 to-chart-2"
  }
];

export default function AppCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2" data-testid="text-carousel-title">
            More Apps Coming Soon
          </h2>
          <p className="text-sm text-muted-foreground" data-testid="text-carousel-subtitle">
            Building the future, one innovation at a time
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {futureApps.map((app) => (
              <Card 
                key={app.id}
                className="flex-[0_0_280px] p-6 bg-card/50 backdrop-blur-xl border-card-border hover-elevate transition-transform duration-300"
                data-testid={`card-app-${app.id}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${app.gradient} flex items-center justify-center mb-4`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2" data-testid={`text-app-name-${app.id}`}>
                  {app.name}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`text-app-description-${app.id}`}>
                  {app.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button 
            onClick={scrollPrev}
            className="w-9 h-9 rounded-md bg-card hover-elevate border border-border flex items-center justify-center text-sm"
            data-testid="button-carousel-prev"
          >
            ←
          </button>
          <button 
            onClick={scrollNext}
            className="w-9 h-9 rounded-md bg-card hover-elevate border border-border flex items-center justify-center text-sm"
            data-testid="button-carousel-next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
