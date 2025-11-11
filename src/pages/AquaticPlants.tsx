import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import kelpImg from "@/assets/plants/kelp.jpg";
import coralImg from "@/assets/plants/coral.jpg";
import anemoneImg from "@/assets/plants/anemone.jpg";
import seagrassImg from "@/assets/plants/seagrass.jpg";

const AquaticPlants = () => {
  const plants = [
    {
      name: "Kelp Forest",
      image: kelpImg,
      description: "Giant brown seaweed forming underwater forests. These provide critical habitat for thousands of marine species.",
      facts: ["Height: Up to 175 feet", "Growth: 2 feet per day", "Habitat: Coastal waters"]
    },
    {
      name: "Coral Reef",
      image: coralImg,
      description: "Living colonies of tiny polyps creating massive reef structures. Home to 25% of all marine species.",
      facts: ["Age: Up to 4,000 years", "Species: 800+ types", "Coverage: 285,000 km²"]
    },
    {
      name: "Sea Anemone",
      image: anemoneImg,
      description: "Colorful predatory animals resembling flowers. They form symbiotic relationships with clownfish.",
      facts: ["Size: 0.5-6 feet", "Lifespan: 50-100 years", "Species: 1,000+"]
    },
    {
      name: "Seagrass Meadow",
      image: seagrassImg,
      description: "Flowering plants that grow underwater in shallow coastal areas. Critical for carbon sequestration.",
      facts: ["Depth: 0-30 feet", "Species: 72 types", "Oxygen: 10L per m² daily"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Aquatic Plants
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the vibrant underwater gardens that produce most of Earth's oxygen
            </p>
          </div>

          {/* Plants Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {plants.map((plant) => (
              <Card key={plant.name} className="overflow-hidden group hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{plant.name}</CardTitle>
                  <CardDescription className="text-base">{plant.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {plant.facts.map((fact, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm text-foreground/80">{fact}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AquaticPlants;
