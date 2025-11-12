import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import seaCreaturesImg from "@/assets/sea-creatures.jpg";
import aquaticPlantsImg from "@/assets/aquatic-plants.jpg";
import preciousStonesImg from "@/assets/precious-stones.jpg";
import aquaticFishesImg from "@/assets/aquatic-fishes.jpg";

const Home = () => {
  const categories = [
    {
      id: "sea-creatures",
      title: "Sea Creatures",
      image: seaCreaturesImg,
      description: "Discover the wonders of marine life",
      details: "From the graceful jellyfish that drift through ocean currents to the intelligent octopus with its problem-solving abilities, sea creatures represent some of nature's most fascinating designs. Explore dolphins' complex social structures, sea turtles' epic migrations, and the mysterious behaviors of deep-sea dwellers. Each species plays a vital role in maintaining the delicate balance of marine ecosystems.",
      stats: ["10,000+ Species", "Ocean Depths: 0-11,000m", "Lifespan: Days to Centuries"],
      link: "/sea-creatures"
    },
    {
      id: "aquatic-plants",
      title: "Aquatic Plants",
      image: aquaticPlantsImg,
      description: "The foundation of ocean ecosystems",
      details: "Aquatic plants and algae form the backbone of marine life, producing over 70% of Earth's oxygen. Colorful coral reefs provide homes for countless species, while towering kelp forests create underwater cities. Sea anemones engage in fascinating symbiotic relationships, and microscopic phytoplankton support entire food chains. These organisms are essential for planetary health.",
      stats: ["50,000+ Plant Species", "Oxygen Production: 70%", "Coral Age: Up to 4,000 years"],
      link: "/aquatic-plants"
    },
    {
      id: "precious-stones",
      title: "Precious Stones",
      image: preciousStonesImg,
      description: "Treasures formed beneath the waves",
      details: "The ocean harbors some of Earth's most valuable treasures. Lustrous pearls form inside oysters over years, aquamarine crystals capture the sea's essence, and rare blue sapphires hide in coastal deposits. These precious stones have captivated humanity for millennia, each with unique properties and fascinating formation stories spanning millions of years.",
      stats: ["Pearls: 2-7 years to form", "Aquamarine: Mohs 7.5-8", "Value: $100-$1M+"],
      link: "/precious-stones"
    },
    {
      id: "aquatic-fishes",
      title: "Aquatic Fishes",
      image: aquaticFishesImg,
      description: "Diverse inhabitants of the blue planet",
      details: "With over 34,000 known species, fish represent the most diverse group of vertebrates. From tiny neon tetras to massive whale sharks, from colorful clownfish to electric eels, each species has evolved remarkable adaptations. Some fish migrate thousands of miles, others change gender, and many display intelligence that rivals land animals.",
      stats: ["34,000+ Species", "Sizes: 8mm to 18m", "Speeds: Up to 110 km/h"],
      link: "/aquatic-fishes"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />

      {/* Category Sections */}
      {categories.map((category, index) => (
        <section 
          key={category.id}
          className={`py-20 relative ${index % 2 === 0 ? 'bg-background' : 'bg-card/30 backdrop-blur'}`}
        >
          <div className="container mx-auto px-4">
            <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={`relative group ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 shadow-[0_0_50px_hsl(var(--primary)/0.3)] group-hover:shadow-[0_0_80px_hsl(var(--primary)/0.5)] transition-all duration-500">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 blur-2xl animate-float" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 blur-3xl animate-pulse" />
              </div>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <span className="text-primary font-semibold">Category {index + 1}</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground font-medium">
                  {category.description}
                </p>
                
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {category.details}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {category.stats.map((stat, i) => (
                    <div 
                      key={i}
                      className="bg-card/50 backdrop-blur border border-primary/20 rounded-lg p-4 hover:border-primary/50 transition-colors"
                    >
                      <p className="text-sm text-muted-foreground mb-1">Fact {i + 1}</p>
                      <p className="text-foreground font-semibold">{stat}</p>
                    </div>
                  ))}
                </div>

                <Link to={category.link}>
                  <Button variant="ocean" size="lg" className="mt-5 group">
                    Explore {category.title}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA Section */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwZmZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-shimmer">
                Begin Your Ocean Journey
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              From the sunlit surface to the mysterious abyss, every corner of the ocean holds incredible discoveries. Dive deeper into each category and unlock the secrets of the blue planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
