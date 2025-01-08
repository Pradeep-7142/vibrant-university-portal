import { Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      position: "Chapter President",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/sarah-johnson",
      bio: "Ph.D. in Computer Science with expertise in AI and Machine Learning.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Vice President",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/michael-chen",
      bio: "Research focus on Distributed Systems and Cloud Computing.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Technical Lead",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/emily-rodriguez",
      bio: "Full-stack developer with expertise in React and Node.js.",
    },
    {
      id: 4,
      name: "David Kim",
      position: "Events Coordinator",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/david-kim",
      bio: "Organizing technical workshops and hackathons.",
    },
    {
      id: 5,
      name: "Priya Patel",
      position: "Research Head",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/priya-patel",
      bio: "Leading research initiatives in Computer Vision.",
    },
    {
      id: 6,
      name: "James Wilson",
      position: "Community Manager",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/james-wilson",
      bio: "Building and nurturing the tech community.",
    },
    {
      id: 7,
      name: "Lisa Zhang",
      position: "Technical Writer",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/lisa-zhang",
      bio: "Documentation and technical content creation.",
    },
    {
      id: 8,
      name: "Alex Thompson",
      position: "Workshop Lead",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/alex-thompson",
      bio: "Conducting hands-on technical workshops.",
    },
    {
      id: 9,
      name: "Maria Garcia",
      position: "Outreach Coordinator",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/maria-garcia",
      bio: "Managing external partnerships and collaborations.",
    },
    {
      id: 10,
      name: "Robert Lee",
      position: "Technical Advisor",
      image: "/placeholder.svg",
      linkedin: "https://linkedin.com/in/robert-lee",
      bio: "Providing technical guidance and mentorship.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <HoverCard key={member.id}>
              <HoverCardTrigger asChild>
                <Card className="overflow-hidden transition-all hover:shadow-lg cursor-pointer">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-muted-foreground">{member.position}</p>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn Profile
                    </a>
                  </CardContent>
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">{member.name}</h4>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;