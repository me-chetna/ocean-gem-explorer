import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import pearlImg from "@/assets/stones/pearl.jpg";
import aquamarineImg from "@/assets/stones/aquamarine.jpg";
import blueCoralImg from "@/assets/stones/blue-coral.jpg";
import amberImg from "@/assets/stones/amber.jpg";

const PreciousStones = () => {
  const stones = [
    {
      name: "Pearl",
      image: pearlImg,
      description: "Lustrous gems created by oysters and mollusks as a defense mechanism. Valued for their natural beauty and rarity.",
      facts: ["Formation: 2-7 years", "Value: $50-$100,000", "Types: Natural & Cultured"]
    },
    {
      name: "Aquamarine",
      image: aquamarineImg,
      description: "Transparent blue-green beryl crystals named after seawater. Prized for their calming color and clarity.",
      facts: ["Hardness: 7.5-8 Mohs", "Color: Blue to blue-green", "Origin: Brazil, Nigeria"]
    },
    {
      name: "Blue Coral",
      image: blueCoralImg,
      description: "Rare organic gemstone harvested from coral reefs. Its deep blue color is highly sought after in jewelry.",
      facts: ["Rarity: Extremely rare", "Protection: CITES listed", "Value: $20-$200/gram"]
    },
    {
      name: "Amber",
      image: amberImg,
      description: "Fossilized tree resin often containing ancient marine insects. Each piece is a window into prehistoric times.",
      facts: ["Age: 30-90 million years", "Origin: Baltic region", "Inclusions: Prehistoric life"]
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
                Precious Stones
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uncover the treasures hidden beneath the waves, formed over millions of years
            </p>
          </div>

          {/* Stones Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {stones.map((stone) => (
              <Card key={stone.name} className="overflow-hidden group hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={stone.image} 
                    alt={stone.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{stone.name}</CardTitle>
                  <CardDescription className="text-base">{stone.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {stone.facts.map((fact, index) => (
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

export default PreciousStones;
