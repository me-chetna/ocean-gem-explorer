import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const CategoryCard = ({ icon: Icon, title, description, delay = 0 }: CategoryCardProps) => {
  return (
    <Card 
      className="group relative overflow-hidden bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 space-y-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Card>
  );
};

export default CategoryCard;
