const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
            <p className="text-gray-600 mb-6">
              ACM Sitare University Chapter is dedicated to advancing computing as a science and profession.
              Our mission is to provide students with opportunities to learn, grow, and excel in the field
              of computer science and technology.
            </p>
            <p className="text-gray-600 mb-6">
              Through workshops, hackathons, and industry connections, we help students develop practical
              skills and build a strong foundation for their future careers in technology.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-primary mb-2">500+</h4>
                <p className="text-sm text-gray-600">Active Members</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-primary mb-2">50+</h4>
                <p className="text-sm text-gray-600">Events Conducted</p>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="About ACM Sitare"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-light opacity-20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;