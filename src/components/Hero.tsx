import { GraduationCap, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-light to-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Welcome to ACM Sitare University
          </h1>
          <p className="text-xl md:text-2xl mb-12 animate-fade-in opacity-90">
            Empowering students through technology and innovation
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm animate-fade-in">
              <GraduationCap size={40} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Learning</h3>
              <p className="text-sm opacity-80">Expert-led workshops and training sessions</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm animate-fade-in">
              <Users size={40} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-sm opacity-80">Connect with like-minded tech enthusiasts</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm animate-fade-in">
              <BookOpen size={40} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Resources</h3>
              <p className="text-sm opacity-80">Access to premium learning materials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;