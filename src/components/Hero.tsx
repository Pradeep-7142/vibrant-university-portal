import { GraduationCap, Users, BookOpen, Award, Globe, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/90 to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
          alt="University Background"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <GraduationCap className="h-16 w-16 animate-fade-in" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to ACM Sitare University
          </h1>
          <p className="text-xl md:text-2xl mb-12 animate-fade-in opacity-90">
            Empowering students through technology and innovation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 animate-fade-in">
              <Award size={40} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-sm opacity-80">Fostering academic achievement</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 animate-fade-in">
              <Globe size={40} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Community</h3>
              <p className="text-sm opacity-80">Connect with tech enthusiasts worldwide</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/15 transition-all duration-300 animate-fade-in">
              <Calendar size={40} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-sm opacity-80">Regular workshops and seminars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;