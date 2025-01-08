import { Calendar, Clock, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Events = () => {
  const currentEvents = [
    {
      id: 1,
      title: "AI Workshop 2024",
      date: "March 15, 2024",
      time: "2:00 PM",
      location: "Main Auditorium",
      image: "/placeholder.svg",
      description: "Join us for an intensive workshop on Artificial Intelligence and Machine Learning.",
    },
    {
      id: 2,
      title: "Hackathon Spring",
      date: "April 1, 2024",
      time: "9:00 AM",
      location: "Tech Hub",
      image: "/placeholder.svg",
      description: "24-hour coding challenge with amazing prizes and learning opportunities.",
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Web Development Bootcamp",
      date: "January 20, 2024",
      time: "10:00 AM",
      location: "Virtual",
      image: "/placeholder.svg",
      description: "Intensive bootcamp covering modern web development technologies.",
    },
    {
      id: 4,
      title: "Tech Talk Series",
      date: "February 5, 2024",
      time: "3:00 PM",
      location: "Conference Hall",
      image: "/placeholder.svg",
      description: "Industry experts sharing insights on emerging technologies.",
    },
  ];

  const EventCard = ({ event }: { event: typeof currentEvents[0] }) => (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
        <CardDescription className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{event.description}</p>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Events</h1>
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="current">Current Events</TabsTrigger>
            <TabsTrigger value="past">Past Events</TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            <div className="grid md:grid-cols-2 gap-6">
              {currentEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="past">
            <div className="grid md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Events;