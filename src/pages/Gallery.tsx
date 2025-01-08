import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("grid");

  // Sample image data - replace with your actual images
  const images = [
    { id: 1, src: "/placeholder.svg", alt: "Workshop 1", category: "workshops" },
    { id: 2, src: "/placeholder.svg", alt: "Workshop 2", category: "workshops" },
    { id: 3, src: "/placeholder.svg", alt: "Event 1", category: "events" },
    { id: 4, src: "/placeholder.svg", alt: "Event 2", category: "events" },
    { id: 5, src: "/placeholder.svg", alt: "Team 1", category: "team" },
    { id: 6, src: "/placeholder.svg", alt: "Team 2", category: "team" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Our Gallery
        </h1>

        <Tabs defaultValue="grid" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="grid">Grid View</TabsTrigger>
            <TabsTrigger value="masonry">Masonry View</TabsTrigger>
            <TabsTrigger value="carousel">Carousel View</TabsTrigger>
          </TabsList>

          {/* Grid View */}
          <TabsContent value="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Masonry View */}
          <TabsContent value="masonry">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="relative group break-inside-avoid rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-semibold">
                      {image.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Carousel View */}
          <TabsContent value="carousel">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {images.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="relative aspect-video">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <p className="text-white text-xl font-semibold">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Gallery;