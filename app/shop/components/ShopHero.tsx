export default function ShopHero() {
    return (
      <section className="relative overflow-hidden bg-[#163020] py-36">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#163020]/95 to-[#304D30]/80"></div>
  
        {/* Decorative Circle */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-green-500/10 blur-3xl"></div>
  
        <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-10 text-center">
          <span className="uppercase tracking-[6px] text-sm font-semibold text-green-400">
            Premium Agricultural Products
          </span>
  
          <h1 className="mt-6 text-5xl md:text-7xl font-bold text-white leading-tight">
            Grow Smarter
            <br />
            With Alnada Agriculture
          </h1>
  
          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-300">
            Discover premium seeds, fertilizers, irrigation systems,
            and sustainable agricultural solutions designed to maximize
            productivity and support a greener future.
          </p>
  
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full text-white font-medium transition duration-300">
              Explore Products
            </button>
  
            <button className="border border-white/20 hover:border-white px-8 py-4 rounded-full text-white transition duration-300">
              Contact Us
            </button>
          </div>
  
          {/* Stats */}
          <div className="mt-20 flex flex-wrap justify-center gap-12">
            <div>
              <h2 className="text-4xl font-bold text-green-400">
                1000+
              </h2>
              <p className="mt-2 text-gray-300">
                Products Sold
              </p>
            </div>
  
            <div>
              <h2 className="text-4xl font-bold text-green-400">
                500+
              </h2>
              <p className="mt-2 text-gray-300">
                Happy Clients
              </p>
            </div>
  
            <div>
              <h2 className="text-4xl font-bold text-green-400">
                10+
              </h2>
              <p className="mt-2 text-gray-300">
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }