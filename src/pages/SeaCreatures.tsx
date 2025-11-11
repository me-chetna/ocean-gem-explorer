import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import clownfishImg from "@/assets/creatures/clownfish.jpg";
import seaTurtleImg from "@/assets/creatures/sea-turtle.jpg";
import jellyfishImg from "@/assets/creatures/jellyfish.jpg";
import octopusImg from "@/assets/creatures/octopus.jpg";

const SeaCreatures = () => {
  const creatures = [
    {
      name: "Clownfish",
      image: clownfishImg,
      description: "Vibrant orange and white striped fish that live in sea anemones. Famous for their symbiotic relationship with their host.",
      facts: ["Size: 4-5 inches", "Lifespan: 6-10 years", "Diet: Omnivore"]
    },
    {
      name: "Sea Turtle",
      image: seaTurtleImg,
      description: "Ancient mariners that have roamed the oceans for over 100 million years. Known for their incredible navigation abilities.",
      facts: ["Size: 2-7 feet", "Lifespan: 50-100 years", "Diet: Herbivore/Omnivore"]
    },
    {
      name: "Jellyfish",
      image: jellyfishImg,
      description: "Graceful drifters with bioluminescent capabilities. These ancient creatures have no brain, heart, or bones.",
      facts: ["Size: 1 inch to 7 feet", "Lifespan: Few hours to years", "Diet: Carnivore"]
    },
    {
      name: "Octopus",
      image: octopusImg,
      description: "Highly intelligent cephalopods with remarkable problem-solving abilities and the power to change color instantly.",
      facts: ["Size: 12 inches to 30 feet", "Lifespan: 1-5 years", "Diet: Carnivore"]
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
                Sea Creatures
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the fascinating world of marine animals, from intelligent octopuses to graceful jellyfish
            </p>
          </div>

          {/* Creatures Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {creatures.map((creature) => (
              <Card key={creature.name} className="overflow-hidden group hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={creature.image} 
                    alt={creature.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{creature.name}</CardTitle>
                  <CardDescription className="text-base">{creature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {creature.facts.map((fact, index) => (
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

export default SeaCreatures;
