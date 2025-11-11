import { Button } from "@/components/ui/button";
import { ArrowRight, Waves } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <Waves className="absolute top-20 left-10 w-32 h-32 text-primary animate-float" />
          <Waves className="absolute bottom-40 right-20 w-24 h-24 text-accent animate-float" style={{ animationDelay: '1s' }} />
          <Waves className="absolute top-1/2 left-1/4 w-20 h-20 text-primary animate-wave" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-float">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                Explore the Deep Blue
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Discover the wonders of marine life, precious stones, and the mysteries of the ocean depths
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="ocean" 
              size="lg"
              className="group"
            >
              Start Exploring
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto pt-12">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Sea Species</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-accent">200+</div>
              <div className="text-sm text-muted-foreground">Marine Plants</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-coral">100+</div>
              <div className="text-sm text-muted-foreground">Precious Stones</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  );
};

export default HeroSection;
