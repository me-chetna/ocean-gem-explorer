import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";

const AIBot = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
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

          <Card className="bg-card/50 backdrop-blur border-primary/30 p-6 min-h-[400px] flex flex-col">
            <div className="flex-1 space-y-4 mb-4">
              <div className="text-center text-muted-foreground py-20">
                Start a conversation about the ocean...
              </div>
            </div>

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
  );
};

export default AIBot;
