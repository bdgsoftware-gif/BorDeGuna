import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Mail,
  Phone,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Bor de Guna products different?",
      answer:
        "Our products are crafted with 100% natural ingredients, following traditional methods while maintaining international quality standards (BSTI, Halal, HACCP, ISO). We never use artificial preservatives, colors, or chemicals. Each product undergoes 7-stage quality checks before reaching you.",
    },
    {
      question: "Where can I buy Bor de Guna products?",
      answer:
        "Our products are available nationwide through chain shops, supermarkets, and our e-commerce platform. We participate in various fairs and exhibitions. You can also order directly through our website or contact our customer care for bulk orders.",
    },
    {
      question: "Are your products certified?",
      answer:
        "Yes! All our products are BSTI certified and Halal certified. We are also HACCP and ISO 22000 compliant. We maintain strict quality control from sourcing to packaging.",
    },
    {
      question: "Do you offer bulk/wholesale pricing?",
      answer:
        "Yes, we offer special pricing for bulk orders, retailers, and distributors. Please contact our business development team at business@bordeguna.com or call +880 1234 567890 for customized quotes.",
    },
    {
      question: "What is your return/refund policy?",
      answer:
        "We offer a 100% satisfaction guarantee. If you're not satisfied with any product, you can return it within 7 days of purchase for a full refund or replacement. The product must be unopened and in original packaging.",
    },
    {
      question: "Do you deliver outside Bangladesh?",
      answer:
        "Currently, we deliver nationwide within Bangladesh. We're working on international shipping options and plan to expand to other countries soon. Follow our social media for updates on international availability.",
    },
    {
      question: "How do you ensure product quality?",
      answer:
        "We implement the HELPS framework: Happiness in every interaction, Empathy in understanding needs, Limitless innovation, Passion for excellence, and Speed with Sustainability. Every batch undergoes laboratory testing and quality assurance checks.",
    },
    {
      question: "What are your future plans?",
      answer:
        "We're expanding with Bionic Restaurants, Bionic Homes, and Wellness Centres. We aim to introduce 20+ new products in the next year and establish 50+ experience centers nationwide by 2026.",
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+880 1234 567890",
      subtitle: "10 AM - 8 PM, 7 days a week",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@bordeguna.com",
      subtitle: "Response within 24 hours",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      details: "Available on website",
      subtitle: "9 AM - 11 PM daily",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products, services, and
            policies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* FAQ List - Takes 2/3 */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary font-bold">
                          {index + 1}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-2 border-t border-gray-100">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Contact Sidebar - Takes 1/3 */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div
                className="bg-gradient-to-br from-primary to-green-600 rounded-2xl p-8 text-white mb-8"
                data-aos="fade-left"
              >
                <h3 className="text-2xl font-bold mb-6">
                  Still Have Questions?
                </h3>
                <p className="mb-8 opacity-90">
                  Our customer support team is here to help you with any
                  questions about our products or services.
                </p>

                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div
                      key={method.title}
                      className="flex items-center"
                      data-aos="fade-left"
                      data-aos-delay={index * 100}
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <method.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-semibold">{method.title}</div>
                        <div className="text-lg font-bold">
                          {method.details}
                        </div>
                        <div className="text-sm opacity-80">
                          {method.subtitle}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 bg-white text-primary font-semibold py-3 rounded-lg hover:shadow-lg transition-shadow"
                >
                  Contact Support
                </motion.button>
              </div>

              {/* Quick Links */}
              <div
                className="bg-white rounded-2xl p-6 shadow-lg"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    "Product Catalog",
                    "Certificates",
                    "Distributor Network",
                    "Careers",
                    "Privacy Policy",
                    "Terms of Service",
                  ].map((link, index) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="flex items-center text-gray-600 hover:text-primary transition-colors group"
                        data-aos="fade-left"
                        data-aos-delay={400 + index * 50}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Newsletter Signup */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-3">Stay Updated</h4>
                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <button className="bg-primary text-white px-4 py-2 rounded-r-lg font-medium hover:bg-green-700 transition-colors">
                      Join
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Get updates on new products and offers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mt-16 max-w-3xl mx-auto" data-aos="fade-up">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Business Hours
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { day: "Sunday - Thursday", time: "9:00 AM - 8:00 PM" },
                { day: "Friday", time: "3:00 PM - 8:00 PM" },
                { day: "Saturday", time: "10:00 AM - 6:00 PM" },
                { day: "Emergency Support", time: "24/7 Available" },
              ].map((schedule, index) => (
                <div
                  key={schedule.day}
                  className="flex justify-between items-center p-4 bg-white rounded-lg border border-gray-200"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <span className="font-medium text-gray-800">
                    {schedule.day}
                  </span>
                  <span className="font-semibold text-primary">
                    {schedule.time}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              During national holidays, our hours may vary. Follow our social
              media for updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
