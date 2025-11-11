import { Fish, Leaf, Gem, Anchor } from "lucide-react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";

const Home = () => {
  const categories = [
    {
      icon: Fish,
      title: "Sea Fishes",
      description: "Explore diverse species from tropical reefs to deep ocean dwellers",
    },
    {
      icon: Leaf,
      title: "Marine Plants",
      description: "Discover the vital flora that sustains ocean ecosystems",
    },
    {
      icon: Gem,
      title: "Precious Stones",
      description: "Uncover rare gems and minerals formed beneath the waves",
    },
    {
      icon: Anchor,
      title: "Sea Animals",
      description: "Learn about fascinating creatures of all shapes and sizes",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <HeroSection />

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Dive Into Knowledge
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive database of marine life and oceanic treasures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                description={category.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                The Ocean Awaits
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From the sunlit surface to the mysterious abyss, every corner of the ocean holds incredible discoveries. Join us on a journey through the blue frontier.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
