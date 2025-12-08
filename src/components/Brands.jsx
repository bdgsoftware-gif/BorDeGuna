import React from "react";
import { motion } from "framer-motion";
import { Award, Leaf, Heart, Shield, ArrowRight } from "lucide-react";

const Brands = () => {
  const brands = [
    {
      name: "La La Dia",
      description:
        "Luxury artisanal foods including honey, ghee, pickles, and dry fish",
      logo: "/logos/laladia.png",
      color: "from-yellow-400 to-yellow-600",
      products: ["Honey", "Ghee", "Pickles", "Dry Fish"],
    },
    {
      name: "Bionic",
      description: "Accessible premium wellness brand - Victory of Wellness",
      logo: "/logos/bionic.png",
      color: "from-primary to-green-600",
      products: ["Wellness Supplements", "Organic Foods", "Health Products"],
    },
    {
      name: "Azmion",
      description:
        "Modern software house delivering cloud-ready, scalable solutions",
      logo: "/logos/azmion.png",
      color: "from-indigo-500 to-blue-700",
      products: [
        "Software Development",
        "Cloud & DevOps Solutions",
        "Enterprise Applications",
        "AI-Driven Tools",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section id="brands" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Purpose-Driven Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A house of brands dedicated to purity, wellness, and sustainability
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div
                className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${brand.color} mb-6`}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-10 object-contain drop-shadow-md"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {brand.name}
              </h3>

              <p className="text-gray-600 mb-6">{brand.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-700 mb-3">Products:</h4>
                <div className="flex flex-wrap gap-2">
                  {brand.products.map((product) => (
                    <span
                      key={product}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {product}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-primary font-semibold cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Core Values */}
        <div className="mt-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our HELPS Framework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              "Happier Mode",
              "Empathy",
              "Limitless",
              "Passion",
              "Speed with Sustainability",
            ].map((value, index) => (
              <div
                key={value}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
                className="bg-gradient-to-b from-white to-green-50 p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">
                    {value[0]}
                  </span>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{value}</h4>
                <p className="text-sm text-gray-600">
                  {index === 0 && "Joy & Positivity in every interaction"}
                  {index === 1 && "Compassion for all"}
                  {index === 2 && "Boundless innovation"}
                  {index === 3 && "Excellence through passion"}
                  {index === 4 && "Fast yet sustainable growth"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
