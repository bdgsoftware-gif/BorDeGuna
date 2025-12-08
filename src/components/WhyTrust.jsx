import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Users,
  Leaf,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WhyTrust = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Animate counter numbers
    if (statsRef.current) {
      const counters = statsRef.current.querySelectorAll(".counter");

      counters.forEach((counter) => {
        const target = +counter.getAttribute("data-target");
        const increment = target / 200;
        let current = 0;

        const updateCounter = () => {
          if (current < target) {
            current += increment;
            counter.textContent = Math.ceil(current);
            setTimeout(updateCounter, 10);
          } else {
            counter.textContent = target;
          }
        };

        ScrollTrigger.create({
          trigger: counter,
          start: "top 80%",
          onEnter: updateCounter,
          once: true,
        });
      });
    }
  }, []);

  const trustPoints = [
    {
      icon: Shield,
      title: "BSTI & Halal Certified",
      description:
        "All our products are certified by BSTI and Halal authorities ensuring quality and compliance.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Award,
      title: "HACCP & ISO Compliant",
      description:
        "Following international standards for food safety and quality management systems.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: Users,
      title: "15,000+ Happy Customers",
      description:
        "Trusted by thousands of customers across Bangladesh for quality and purity.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Leaf,
      title: "100% Natural Ingredients",
      description:
        "No artificial preservatives, colors, or chemicals in any of our products.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Clock,
      title: "Traditional Methods",
      description:
        "Using time-tested traditional methods combined with modern quality control.",
      color: "bg-amber-100 text-amber-600",
    },
    {
      icon: CheckCircle,
      title: "Quality Guarantee",
      description:
        "100% satisfaction guarantee with strict quality checks at every stage.",
      color: "bg-red-100 text-red-600",
    },
  ];

  const testimonials = [
    {
      name: "Dr. Fatima Rahman",
      role: "Nutrition Specialist",
      content:
        "Bor de Guna products have transformed my approach to holistic wellness. Their commitment to purity is unmatched.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    },
    {
      name: "Md. Shahidul Islam",
      role: "Regular Customer",
      content:
        "The quality of La La Dia honey is exceptional. I've been using it for 2 years and the difference is noticeable.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w-400",
    },
    {
      name: "Priya Sharma",
      role: "Health Blogger",
      content:
        "As someone who reviews wellness products, I can confidently say Bor de Guna sets the standard for quality.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="trust" ref={containerRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Trust Bor de Guna?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to quality, purity, and sustainability sets us apart
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          data-aos="fade-up"
        >
          {[
            {
              value: "6",
              label: "Years of Excellence",
              suffix: "+",
              icon: Clock,
            },
            {
              value: "15000",
              label: "Happy Customers",
              suffix: "+",
              icon: Users,
            },
            { value: "50", label: "Products", suffix: "+", icon: Award },
            { value: "100", label: "Quality Score", suffix: "%", icon: Star },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center p-6 bg-gradient-to-b from-green-50 to-white rounded-2xl shadow-md"
            >
              <div className="inline-flex p-3 bg-primary/10 rounded-full mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <span className="counter" data-target={stat.value}>
                  0
                </span>
                {stat.suffix}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Trust Points */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div
                className={`inline-flex p-3 rounded-full ${point.color} mb-4`}
              >
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <div className="mb-20" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Certifications & Compliance
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {["BSTI", "Halal", "HACCP", "ISO 22000", "ISO 9001"].map(
              (cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-primary font-bold text-lg">
                        {cert.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <span className="font-semibold text-gray-700">{cert}</span>
                  <span className="text-sm text-gray-500">Certified</span>
                </motion.div>
              )
            )}
          </div>
        </div>

        {/* Testimonials */}
        <div data-aos="fade-up">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-b from-white to-gray-50 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic">"{testimonial.content}"</p>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                    <span>Verified Purchase</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values Reminder */}
        <div
          className="mt-20 p-8 bg-gradient-to-r from-primary/10 to-green-100 rounded-3xl"
          data-aos="fade-up"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Fundamental Promise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                "Never harm humanity",
                "Never displease the Creator",
                "Never harm any living being",
              ].map((promise, index) => (
                <div key={promise} className="flex items-center justify-center">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                    ✓
                  </div>
                  <span className="font-medium text-gray-800">{promise}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-gray-700">
              We are friends of nature—always protecting, nurturing, and living
              in harmony with the environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrust;
