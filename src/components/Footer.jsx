import React, { useEffect } from "react";
import { gsap } from "gsap";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
  Leaf,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  useEffect(() => {
    // Footer animation
    gsap.from(".footer-item", {
      scrollTrigger: {
        trigger: "footer",
        start: "top 50%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out",
    });
  }, []);

  const footerLinks = {
    "Our Brands": [
      { name: "La La Dia", href: "https://laladia.com" },
      { name: "Bionic", href: "https://bionic.garden" },
      { name: "Azmion", href: "https://theazmion.com" },
      { name: "Wellness Centres", href: "#" },
    ],
    Products: [
      { name: "Natural Foods", href: "#" },
      { name: "Artisanal Products", href: "#" },
      { name: "Wellness Kits", href: "#" },
      { name: "New Arrivals", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Our Vision", href: "#" },
      { name: "Core Values", href: "#" },
      { name: "Careers", href: "#" },
    ],
    Support: [
      { name: "FAQ", href: "#faq" },
      { name: "Contact Us", href: "#" },
      { name: "Shipping Policy", href: "#" },
      { name: "Return Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+880 1733-358158", href: "tel:+8801733358158" },
    {
      icon: Mail,
      text: "info@bordeguna.com",
      href: "mailto:info@bordeguna.com",
    },
    {
      icon: MapPin,
      text: "65, Feroza Garden, Shahid Smriti Sarak, Barguna-8700, Bangladesh",
      href: "https://www.google.com/maps/search/?api=1&query=65,+Feroza+Garden,+Shahid+Smriti+Sarak,+Barguna-8700,+Bangladesh",
    },
  ];

  const certifications = ["BSTI", "Halal", "HACCP", "ISO 22000", "ISO 9001"];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
  const logoUrl = "/wh-logo.png";
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Brand Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-4"
            >
              <div className="bg-primary p-3 rounded-full">
                <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={logoUrl}
                    alt="Logo"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold">Bôr dé Güna</h2>
                <p className="text-gray-300">Since 2019</p>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg leading-relaxed max-w-xl"
            >
              A house of purpose-driven brands dedicated to creating a better,
              healthier, and more harmonious world through purity, wellness, and
              sustainability.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              id="footer-contact"
              variants={itemVariants}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center text-gray-300 hover:text-white transition-colors group"
                >
                  <info.icon className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform" />
                  <span>{info.text}</span>
                </a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex space-x-4 pt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  className="footer-item w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl p-8"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold mb-4">
              Join Our Wellness Community
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to get updates on new products, wellness tips, and
              exclusive offers.
            </p>

            <form className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-primary text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Subscribe
                </motion.button>
              </div>
              <p className="text-sm text-gray-400">
                By subscribing, you agree to our Privacy Policy
              </p>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="font-bold mb-4">Certifications</h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <span
                    key={cert}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors cursor-pointer"
                    data-aos="zoom-in"
                    data-aos-delay={index * 50}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Middle Section - Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pt-8 border-t border-gray-700"
        >
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="space-y-3"
            >
              <h4 className="text-lg font-bold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 hover:pl-2 block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center md:text-left mb-6 md:mb-0"
              data-aos="fade-up"
            >
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Bôr dé Güna. All rights
                reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Founded in 2019 with a vision to create a better world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6 text-sm"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
              <div className="flex items-center text-primary">
                <Heart className="w-4 h-4 mr-1" />
                <span>Made with love</span>
              </div>
            </motion.div>
          </div>

          {/* Final Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
            data-aos="fade-up"
          >
            <p className="text-gray-500 text-sm italic max-w-2xl mx-auto">
              "We will never engage in any action that harms humanity. We will
              never engage in any action that displeases the Creator. We will
              never engage in any action that harms any living being or
              creation."
            </p>
            <p className="text-gray-400 mt-4">
              Bôr dé Güna — Friends of Nature
            </p>
          </motion.div>
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow z-40"
          aria-label="Back to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
