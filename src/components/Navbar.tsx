import { Link } from "react-router-dom";
import { Waves } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 rounded-full mt-2 ml-10 mr-10 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <Waves className="h-8 w-8 text-primary group-hover:animate-wave" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              OceanExplorer
            </span>
          </Link>

          <div className="flex items-center justify-center gap-6 flex-1">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/ai-bot"
              className="text-foreground hover:text-primary transition-colors"
            >
              AI-Bot
            </Link>
            <Link
              to="/team"
              className="text-foreground hover:text-primary transition-colors"
            >
              Team
            </Link>
            <Link to="/auth">
              <Button variant="ocean" size="sm">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
