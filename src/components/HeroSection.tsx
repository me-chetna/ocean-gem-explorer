import { Button } from "@/components/ui/button";
import { ArrowRight, Waves } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-60">
        <img src="https://media.rnztools.nz/rnz/image/upload/s--cLtG8pvy--/ar_16:10,c_fill,f_auto,g_auto,q_auto,w_1050/v1735679798/4KE9M1T_algae_blue_avif?_a=BACCd2AD" alt="Waves Background" className="w-full h-full object-cover animate-slow-spin" />
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
            <Link to="/ai-bot">
              <Button variant="ocean" size="lg">
                Start Exploring
              </Button>
            </Link>
            <Link to="/ai-bot">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
          </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto pt-12">
            <div className="space-y-2">
              <div className="text-3xl md:text-7xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Sea Species</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-7xl font-bold text-accent">200+</div>
              <div className="text-sm text-muted-foreground">Marine Plants</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-7xl font-bold text-coral">100+</div>
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
