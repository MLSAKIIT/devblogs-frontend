import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const ParticleBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute bg-purple-400 rounded-full"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          transition: {
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
        style={{
          width: Math.random() * 4 + 1 + "px",
          height: Math.random() * 4 + 1 + "px",
          opacity: Math.random() * 0.3 + 0.1,
        }}
      />
    ))}
  </div>
);

const CircuitLines = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
        <path d="M10 10 H90 V90 H10 Z" fill="none" stroke="#9d5ae320" strokeWidth="0.5"/>
        <circle cx="10" cy="10" r="2" fill="#9d5ae340"/>
        <circle cx="90" cy="90" r="2" fill="#9d5ae340"/>
        <path d="M10 10 Q50 50 90 90" fill="none" stroke="#9d5ae320" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#circuit-pattern)"/>
  </svg>
);

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Create Blogs', path: '/create' },
    { name: 'Our Team', path: 'https://mlsakiit.com/members' },
    { name: 'Official Website', path: 'https://mlsakiit.com', external: true }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-white py-16 relative overflow-hidden">
      <ParticleBackground />
      <CircuitLines />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.h2 
              className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              MLSA KIIT
            </motion.h2>
            <p className="mb-6 text-gray-300">Empowering students through cutting-edge technology and innovation.</p>
            <motion.a 
              href="/Login"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(157, 90, 227, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg inline-block"
            >
              Join the Future
            </motion.a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  onHoverStart={() => setHoveredLink(link.name)}
                  onHoverEnd={() => setHoveredLink(null)}
                >
                  <a 
                    href={link.path}
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                    className="hover:text-pink-400 transition-colors duration-300 flex items-center"
                  >
                    <motion.span
                      className="mr-2 text-purple-400"
                      animate={{ rotate: hoveredLink === link.name ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ›
                    </motion.span>
                    {link.name}
                    <AnimatePresence>
                      {hoveredLink === link.name && (
                        <motion.span
                          className="ml-2 text-pink-400"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          →
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-semibold mb-4 text-purple-300">Connect with Us</h3>
            <div className="space-y-3">
              {[
                { icon: MapPin, text: "KIIT University, Bhubaneswar, Odisha" },
                { icon: Mail, text: "MlSAKIIT@OUTLOOK.COM" }
              ].map((item, index) => (
                <motion.p 
                  key={index} 
                  className="flex items-center justify-center md:justify-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <item.icon className="mr-3 text-pink-400" size={18} />
                  <span className="text-gray-300">{item.text}</span>
                </motion.p>
              ))}
            </div>
            <div className="flex justify-center md:justify-start space-x-6 mt-4">
              {[
                { icon: Github, href: "https://github.com/MLSAKIIT" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/msckiit" },
                { icon: Instagram, href: "https://www.instagram.com/mlsakiit/" }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-pink-400 transition-colors duration-300"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          // className="border-t border-purple-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm mb-4 md:mb-0 text-gray-400">&copy; {new Date().getFullYear()} MLSA KIIT. Shaping the future of technology.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;