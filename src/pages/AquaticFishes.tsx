import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import marlinImg from "@/assets/fishes/marlin.jpg";
import mantaRayImg from "@/assets/fishes/manta-ray.jpg";
import angelfishImg from "@/assets/fishes/angelfish.jpg";
import whaleSharkImg from "@/assets/fishes/whale-shark.jpg";

const AquaticFishes = () => {
  const fishes = [
    {
      name: "Blue Marlin",
      image: marlinImg,
      description: "Powerful apex predator known for its incredible speed and acrobatic leaps. One of the ocean's fastest swimmers.",
      facts: ["Speed: 80 km/h", "Weight: Up to 800 kg", "Habitat: Open ocean"]
    },
    {
      name: "Manta Ray",
      image: mantaRayImg,
      description: "Gentle giants that glide through the water with grace. Known for their intelligence and playful behavior.",
      facts: ["Wingspan: Up to 7 meters", "Weight: 3,000 kg", "Diet: Plankton filter feeder"]
    },
    {
      name: "Angelfish",
      image: angelfishImg,
      description: "Colorful tropical fish admired for their vibrant patterns. Popular in aquariums for their stunning beauty.",
      facts: ["Size: 15-30 cm", "Lifespan: 10-12 years", "Habitat: Coral reefs"]
    },
    {
      name: "Whale Shark",
      image: whaleSharkImg,
      description: "The largest fish in the ocean, yet completely harmless to humans. A gentle giant that feeds on tiny plankton.",
      facts: ["Length: Up to 18 meters", "Weight: 21,000 kg", "Speed: 5 km/h"]
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
                Aquatic Fishes
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the diverse inhabitants of the ocean, from the fastest predators to gentle giants
            </p>
          </div>

          {/* Fishes Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {fishes.map((fish) => (
              <Card key={fish.name} className="overflow-hidden group hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={fish.image} 
                    alt={fish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{fish.name}</CardTitle>
                  <CardDescription className="text-base">{fish.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {fish.facts.map((fact, index) => (
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

export default AquaticFishes;
