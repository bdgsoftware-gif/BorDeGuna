import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Star } from "lucide-react";

const Products = () => {
  const [activeBrand, setActiveBrand] = useState("all");

  const products = [
    {
      id: 1,
      name: "Pure Forest Honey",
      brand: "La La Dia",
      category: "Food",
      image: "/products/BeefPickle.jpg",
      description: "Raw honey harvested from wild forest hives.",
    },
    {
      id: 2,
      name: "Ghee",
      brand: "La La Dia",
      category: "Food",
      image: "/products/Ghee.jpg",
      description: "Rich, aromatic clarified butter.",
    },
    {
      id: 3,
      name: "Beef Pickles",
      brand: "La La Dia",
      category: "Food",
      image: "/products/ModhuFaisaSutki.jpg",
      description: "Spicy, homemade beef pickle.",
    },
    {
      id: 4,
      name: "Brain Booster",
      brand: "Bionic",
      category: "Wellness",
      image: "/products/BrainBooster.jpg",
      description: "Daily support for focus and memory.",
    },
    {
      id: 5,
      name: "Vital MiX",
      brand: "Bionic",
      category: "Wellness",
      image: "/products/VitalMix.jpg",
      description: "Essential blend for energy and vitality.",
    },
    {
      id: 6,
      name: "Edible Virgin Coconut Oil",
      brand: "Bionic",
      category: "Beverage",
      image: "/products/CoconatOil.jpg",
      description: "Cold-pressed, pure coconut oil.",
    },
  ];

  const brands = ["all", "La La Dia", "Bionic"];
  const filteredProducts =
    activeBrand === "all"
      ? products
      : products.filter((product) => product.brand === activeBrand);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600">
            Premium, toxin-free, nature-powered solutions
          </p>
        </div>

        {/* Filter */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
        >
          <div className="flex items-center bg-white rounded-full px-4 py-2 shadow">
            <Filter className="w-5 h-5 text-primary mr-2" />
            <span className="font-medium text-gray-700">Filter by Brand:</span>
          </div>
          {brands.map((brand) => (
            <motion.button
              key={brand}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveBrand(brand)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeBrand === brand
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {brand === "all" ? "All Products" : brand}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeBrand}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      {product.brand}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">5.0</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">
                      {product.category}
                    </span>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary font-bold">✓</span>
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        BSTI Certified
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Products;
