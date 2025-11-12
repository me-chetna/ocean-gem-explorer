import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";

const AIBot = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
  {/* Background image layer */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-50"
    style={{ backgroundImage: "url('https://t3.ftcdn.net/jpg/05/61/16/08/360_F_561160862_K43gyJD0fa5NjjrEsIb954vUXl6js2U1.jpg')" }}
  ></div>

  {/* Content layer */}
  <div className="relative z-10">
    <Navbar />

    <div className="container mt-10 mx-auto px-4 pt-28 pb-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_40px_hsl(var(--primary)/0.4)] animate-float">
            <Bot className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ocean AI Assistant
          </h1>
          <p className="text-muted-foreground text-lg">
            Ask me anything about marine life, ocean ecosystems, and sea treasures
          </p>
        </div>

        <Card className="bg-card/50 p-6 flex flex-col">
          <div className="flex gap-2">
            <Input
              placeholder="Type your question about the ocean..."
              className="bg-background/50 border-primary/30 focus:border-primary"
            />
            <Button variant="ocean" size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card/30 backdrop-blur border-primary/20 p-4 hover:border-primary/50 transition-colors cursor-pointer">
            <p className="text-sm text-muted-foreground">What are bioluminescent fish?</p>
          </Card>
          <Card className="bg-card/30 backdrop-blur border-primary/20 p-4 hover:border-primary/50 transition-colors cursor-pointer">
            <p className="text-sm text-muted-foreground">Tell me about coral reefs</p>
          </Card>
          <Card className="bg-card/30 backdrop-blur border-primary/20 p-4 hover:border-primary/50 transition-colors cursor-pointer">
            <p className="text-sm text-muted-foreground">How are pearls formed?</p>
          </Card>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default AIBot;
