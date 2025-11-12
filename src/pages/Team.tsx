import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Linkedin } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Kanishka",
      role: "2024UCS1633",
      initials: "K",
      email: "kanishka.ug24@gmail.com",
    },
    {
      name: "Chetna Jain",
      role: "2024UCS1640",
      initials: "C",
      email: "chetna.jain.ug24@gmail.com",
    },
    {
      name: "Mrinal Chauhan",
      role: "2024UCS1629",
      initials: "MC",
      email: "mrinal.chauhan.ug24@gmail.com",
    },
    {
      name: "Harsh Verma",
      role: "2024UCS1628",
      initials: "HV",
      email: "harsh.verma.ug24@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Expert Team
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the passionate oceanographers and scientists dedicated to bringing you the wonders of the deep blue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="group bg-card/50 backdrop-blur border-primary/30 hover:border-primary transition-all duration-500 hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)] hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 space-y-4">
                  <div className="flex justify-center">
                    <Avatar className="h-24 w-24 border-4 border-primary/30 group-hover:border-primary transition-colors shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                      <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>

                  <div className="flex justify-center gap-3 pt-2">
                    <a 
                      href={`mailto:${member.email}`}
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-primary" />
                    </a>
                    <a 
                      href="#"
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-primary" />
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="bg-card/30 backdrop-blur border-primary/20 p-8 mt-12">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Join Our Mission</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're always looking for passionate individuals to help us explore and protect our oceans. 
                If you share our vision, we'd love to hear from you.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Team;
