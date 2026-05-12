import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Video, Share2, Info } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      id: "dQw4w9WgXcQ", // Placeholder ID, user will change
      title: "Our Pure Honey Journey",
      description: "Discover how we source the purest honey from the heart of nature.",
      category: "Process",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Artisanal Ghee Making",
      description: "Traditional methods meeting modern safety standards.",
      category: "Product",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Sustainable Farming",
      description: "How we support our local farmers and the environment.",
      category: "Mission",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Customer Testimonials",
      description: "Real stories from people whose lives were transformed.",
      category: "Trust",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-emerald-50 to-white py-16 mb-12">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <Video className="w-4 h-4" />
                <span className="font-medium text-sm tracking-wide uppercase">Video Gallery</span>
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Story in <span className="text-primary">Motion</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our collection of videos showcasing our commitment to purity, sustainability, and the stories behind Bor de Guna.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Video Card */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                  {/* YouTube Embed Container */}
                  <div className="relative aspect-video bg-gray-900">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {video.category}
                      </span>
                      <div className="flex space-x-3 text-gray-400">
                        <button className="hover:text-primary transition-colors">
                          <Share2 className="w-5 h-5" />
                        </button>
                        <button className="hover:text-primary transition-colors">
                          <Info className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto px-4 mt-24">
          <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to see more?</h2>
              <p className="text-emerald-50 text-lg mb-8 max-w-xl mx-auto">
                Subscribe to our YouTube channel for weekly updates, recipes, and wellness tips.
              </p>
              <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg flex items-center space-x-3 mx-auto">
                <Play className="w-5 h-5 fill-current" />
                <span>Visit Channel</span>
              </button>
            </div>
            {/* Background Ornaments */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full -ml-24 -mb-24"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
