import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Leaf, Star, Award } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    );

    tl.fromTo(
      ".hero-subtitle",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.5",
    );

    tl.fromTo(
      ".hero-button",
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1 },
      "-=0.3",
    );

    tl.fromTo(
      ".hero-badge",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
      "-=0.2",
    );

    // Clean floating animation without blur
    gsap.to(".floating-element", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen pt-16 bg-gradient-to-b from-white to-emerald-50 flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8"
              >
                <Shield className="w-4 h-4" />
                <span className="font-medium text-sm">
                  BSTI & Halal Certified
                </span>
              </motion.div>

              {/* Main Title */}
              <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Lives with{" "}
                <span className="text-primary lg:block mt-2">
                  Nature's Purity
                </span>
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Since 2019, Bôr dé Güna has been creating premium, toxin-free
                solutions that nurture health, inspire wellness, and uplift
                lifestyles through purpose-driven brands that embody purity and
                sustainability.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="hero-button bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="hero-button border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/5 transition-all duration-300"
                >
                  Watch Our Story
                </motion.button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Leaf, label: "100% Natural", value: "Ingredients" },
                  { icon: Star, label: "Premium", value: "Quality" },
                  { icon: Award, label: "Certified", value: "Products" },
                  { icon: Shield, label: "Since", value: "2019" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="hero-badge bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg ${
                          index === 0
                            ? "bg-emerald-100 text-emerald-600"
                            : index === 1
                              ? "bg-amber-100 text-amber-600"
                              : index === 2
                                ? "bg-blue-100 text-blue-600"
                                : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">
                          {item.label}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative">
              {/* Main Image/Visual */}
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-primary to-emerald-600 rounded-3xl p-8 shadow-2xl">
                  <div className="bg-white rounded-2xl p-6">
                    {/* Product Display */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: "Pure Honey", color: "bg-amber-100" },
                        { name: "Artisanal Ghee", color: "bg-yellow-100" },
                        { name: "Organic Pickles", color: "bg-red-100" },
                        { name: "Wellness Tea", color: "bg-green-100" },
                      ].map((product, index) => (
                        <motion.div
                          key={product.name}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.8 }}
                          className={`${product.color} p-4 rounded-xl text-center`}
                        >
                          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-3 flex items-center justify-center">
                            <Leaf className="w-8 h-8 text-primary" />
                          </div>
                          <div className="font-medium text-gray-800">
                            {product.name}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <div className="flex justify-around text-center">
                        {[
                          { value: "15K+", label: "Happy Customers" },
                          { value: "50+", label: "Products" },
                          { value: "6", label: "Years" },
                        ].map((stat) => (
                          <div key={stat.label} className="floating-element">
                            <div className="text-2xl font-bold text-gray-900">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400/20 rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full"></div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 right-12 w-8 h-8 bg-primary/20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-8 -left-4 w-6 h-6 bg-emerald-400/30 rounded-full"
              />
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-16 text-center hidden md:block"
          >
            <div className="inline-flex flex-col items-center text-gray-400">
              <span className="text-sm mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
