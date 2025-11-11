import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AIBot from "./pages/AIBot";
import Team from "./pages/Team";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import SeaCreatures from "./pages/SeaCreatures";
import AquaticPlants from "./pages/AquaticPlants";
import PreciousStones from "./pages/PreciousStones";
import AquaticFishes from "./pages/AquaticFishes";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-bot" element={<AIBot />} />
          <Route path="/team" element={<Team />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/sea-creatures" element={<SeaCreatures />} />
          <Route path="/aquatic-plants" element={<AquaticPlants />} />
          <Route path="/precious-stones" element={<PreciousStones />} />
          <Route path="/aquatic-fishes" element={<AquaticFishes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
