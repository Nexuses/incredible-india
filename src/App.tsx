import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin, Music, Utensils, Palette, Users, Star, Mail, Phone, Menu, X, ArrowRight, Play, Globe, Sparkles, Crown, Zap, QrCode, Gamepad2 } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AnimatedSection({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group h-full"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function InfoBadge({ icon: Icon, text, highlight = false }: { icon: any, text: string, highlight?: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
        highlight 
          ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white border-transparent shadow-xl shadow-orange-500/25' 
          : 'bg-white/95 text-gray-800 border-white/70 hover:bg-white shadow-xl'
      }`}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="font-semibold whitespace-nowrap text-sm">{text}</span>
    </motion.div>
  );
}

function FloatingElement({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function LotusIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C12 2 8 6 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 6 12 2 12 2Z" />
      <path d="M12 14C12 14 16 10 20 10C22.21 10 24 11.79 24 14C24 16.21 22.21 18 20 18C16 18 12 14 12 14Z" />
      <path d="M12 14C12 14 8 18 4 18C1.79 18 0 16.21 0 14C0 11.79 1.79 10 4 10C8 10 12 14 12 14Z" />
      <path d="M12 14C12 14 6 16 6 20C6 22.21 7.79 24 10 24C12.21 24 14 22.21 14 20C14 16 12 14 12 14Z" />
      <path d="M12 14C12 14 18 16 18 20C18 22.21 16.21 24 14 24C11.79 24 10 22.21 10 20C10 16 12 14 12 14Z" />
      <path d="M12 14C12 14 16 18 20 18C22.21 18 24 16.21 24 14C24 11.79 22.21 10 20 10C16 10 12 14 12 14Z" />
      <path d="M12 14C12 14 8 10 4 10C1.79 10 0 11.79 0 14C0 16.21 1.79 18 4 18C8 18 12 14 12 14Z" />
      <circle cx="12" cy="14" r="2" />
    </svg>
  );
}

function QRCodeModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full mx-4 shadow-2xl relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Scan to Buy Tickets
                </h3>
                <p className="text-gray-600 text-lg">
                  Quick and secure payment
                </p>
              </div>

              {/* QR Code */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 mb-6"
              >
                <img 
                  src="/image (17).png" 
                  alt="QR Code for Ticket Purchase" 
                  className="w-full h-auto max-w-xs mx-auto rounded-xl shadow-lg"
                />
              </motion.div>

              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center space-y-3"
              >
                <p className="text-gray-700 font-semibold">
                  Early Bird Special: $10 per person
                </p>
                <p className="text-sm text-gray-500">
                  Use your phone's camera to scan the QR code above
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-200">
                  <p className="text-sm text-orange-700 font-medium">
                    💡 Tip: Point your camera at the QR code and tap the notification that appears
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'tickets', 'info', 'about'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'tickets', label: 'Tickets' },
    { id: 'info', label: 'Info' },
    { id: 'about', label: 'About Sanskriti' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu first
      setIsNavOpen(false);
      // Add a small delay before scrolling to ensure smooth transition
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const openQRModal = () => {
    setIsQRModalOpen(true);
  };

  const closeQRModal = () => {
    setIsQRModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* QR Code Modal */}
      <QRCodeModal isOpen={isQRModalOpen} onClose={closeQRModal} />

      {/* Cursor follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <img src="https://4536150.fs1.hubspotusercontent-na1.net/hubfs/4536150/Canva%20images/incredible_india_transparent%20(1).png" alt="Incredible India Fest" className="h-16 w-auto" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-gray-900">Incredible India Fest</h1>
                <p className="text-sm text-gray-600">July 12, 2025 • Milwaukee</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-orange-500'
                      : 'text-gray-700 hover:text-orange-500'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openQRModal}
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get Tickets
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="lg:hidden p-2 text-gray-700"
            >
              {isNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isNavOpen && (
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden mt-4 pb-4 border-t border-gray-200"
              >
                <div className="flex flex-col gap-4 pt-4">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  <button 
                    onClick={openQRModal}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold text-center"
                  >
                    Get Tickets
                  </button>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32"
        style={{ backgroundImage: "url('https://4536150.fs1.hubspotusercontent-na1.net/hubfs/4536150/Canva%20images/dl.beatsnoop.com-3000-vE2rhFRz71.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Enhanced dark overlay for readability */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Floating decorative elements */}
        <div className="absolute inset-0 overflow-hidden z-15">
          <FloatingElement delay={0} className="absolute top-20 left-10">
            <Crown className="w-8 h-8 text-yellow-400 opacity-30" />
          </FloatingElement>
          <FloatingElement delay={1} className="absolute top-32 right-20">
            <Star className="w-6 h-6 text-pink-400 opacity-40" />
          </FloatingElement>
          <FloatingElement delay={2} className="absolute bottom-32 left-20">
            <Sparkles className="w-10 h-10 text-orange-400 opacity-25" />
          </FloatingElement>
          <FloatingElement delay={3} className="absolute top-1/2 right-10">
            <LotusIcon className="w-8 h-8 text-red-400 opacity-30" />
          </FloatingElement>
          <FloatingElement delay={4} className="absolute bottom-20 right-32">
            <Globe className="w-10 h-10 text-blue-400 opacity-25" />
          </FloatingElement>
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-20 text-center px-4 pr-8 max-w-6xl mx-auto"
        >
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 165, 0, 0.5)" }}
              className="inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-1 rounded-full shadow-2xl"
            >
              <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-bold text-xs md:text-sm tracking-wide">
                  ✨ SANSKRITI PRESENTS ✨
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Incredible India Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <motion.img 
              src="https://4536150.fs1.hubspotusercontent-na1.net/hubfs/4536150/Canva%20images/incredible_india_transparent%20(1).png" 
              alt="Incredible India Festival Logo" 
              className="h-24 md:h-32 lg:h-36 w-auto mx-auto drop-shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight drop-shadow-2xl" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)' }}
          >
            <motion.span
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255, 165, 0, 0.5)",
                  "0 0 40px rgba(255, 105, 180, 0.5)",
                  "0 0 20px rgba(255, 165, 0, 0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="block"
            >
              INCREDIBLE
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              INDIA FEST
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-4"
          >
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-lg md:text-2xl lg:text-3xl text-white font-bold mb-3 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            >
              
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-base md:text-xl lg:text-2xl text-orange-200 font-semibold max-w-3xl mx-auto leading-relaxed"
            >
              First time ever at the iconic Summerfest Grounds
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-sm md:text-lg text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed italic font-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          >
            "Come join us to make history • Where culture meets rhythm and flavors tell stories"
          </motion.p>

          {/* Enhanced Event Flyer */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mb-12 flex flex-col items-center"
          >
            {/* Download Button with Flyer Thumbnail */}
            <a
              href="/image (16).png"
              download="Incredible_India_Fest_Flyer.png"
              className="group inline-flex items-center gap-3 px-7 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
            >
              <div className="relative flex items-center">
                <img 
                  src="/image (16).png" 
                  alt="Flyer thumbnail" 
                  className="w-10 h-10 rounded-lg shadow-md border-2 border-white/60 bg-white object-cover" 
                  style={{ background: 'white' }}
                />
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: -8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -right-4"
                >
                  <ArrowRight className="w-5 h-5 text-white/90 group-hover:text-white rotate-180" />
                </motion.div>
              </div>
              <span className="ml-2">Tap here to download flyer</span>
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(255, 165, 0, 0.6)",
                rotate: [0, -1, 1, 0]
              }}
              whileTap={{ scale: 0.95 }}
              onClick={openQRModal}
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg md:text-xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center gap-3 justify-center border-2 border-white/20"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
            >
              <Zap className="w-5 h-5" />
              Get Early Bird Tickets - $10
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-black/40 backdrop-blur-md text-white border-2 border-white/50 px-8 py-4 rounded-full font-bold text-lg md:text-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3 justify-center"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
            >
              <Play className="w-5 h-5" />
              Experience the Magic
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Positioned at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white flex flex-col items-center gap-3 drop-shadow-xl"
          >
            <span className="text-sm font-medium tracking-wide" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}>Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2" 
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden z-15">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full opacity-30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <AnimatedSection>
        <section id="experience" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
              >
                Festival Highlights
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              >
                A journey through India's culture - experience the music, flavors, and traditions that unite us. 
                Celebrating the richness of diverse traditions through music, cuisine and cultural experiences.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <FeatureCard
                  icon={Music}
                  title="Live Performances & Fashion Show"
                  description="Experience traditional dances, live music performances, and a stunning fashion showcase celebrating India's diverse cultural heritage."
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <FeatureCard
                  icon={Utensils}
                  title="Authentic Indian Food trucks and Stalls"
                  description="Savor authentic Indian cuisine from various regions, featuring traditional dishes and modern fusion flavors from local vendors."
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <FeatureCard
                  icon={Palette}
                  title="Art Exhibits & Cultural Activities"
                  description="Discover beautiful jewelry, intricate henna art, cultural exhibits, and family-friendly activities showcasing Indian artistic traditions."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <FeatureCard
                  icon={Gamepad2}
                  title="Games"
                  description="Enjoy traditional Indian games and fun activities for all ages. From classic board games to interactive cultural experiences that bring families together."
                />
              </motion.div>
            </div>

            {/* Logo Section - Centered below Festival Highlights */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <motion.img 
                src="https://4536150.fs1.hubspotusercontent-na1.net/hubfs/4536150/Canva%20images/incredible_india_transparent%20(1).png" 
                alt="Incredible India Fest Logo" 
                className="h-40 md:h-56 lg:h-72 w-auto mx-auto drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tickets Section */}
      <AnimatedSection>
        <section id="tickets" className="py-24 bg-gradient-to-br from-orange-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
                >
                  Get Your Tickets
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-600"
                >
                  Secure your spot at this historic celebration
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-3xl p-12 md:p-16 shadow-2xl border border-gray-100"
              >
                <div className="text-center">
                  <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-bold mb-8 shadow-lg">
                    EARLY BIRD SPECIAL
                  </div>
                  
                  <div className="mb-8">
                    <span className="text-6xl md:text-8xl font-black text-gray-900">$10</span>
                    <span className="text-2xl md:text-3xl text-gray-600 ml-4">per person</span>
                  </div>

                  <p className="text-xl md:text-2xl text-gray-600 mb-12 font-semibold">
                    Price increases to $12 after June 30th, 2025
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openQRModal}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-6 px-12 rounded-2xl font-bold text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mb-4"
                  >
                    Buy Tickets Now
                  </motion.button>
                  
                  <p className="text-gray-600 text-lg font-medium mb-8">
                    Tap to scan QR code and purchase tickets
                  </p>

                  <div className="border-t border-gray-200 pt-12">
                    <h4 className="text-2xl font-bold text-gray-900 mb-8">Contact for Group Discount</h4>
                    <p className="text-lg text-gray-600 font-medium mb-6">Contact: Shefali Vallecha</p>
                    <div className="space-y-6">
                      <div className="flex items-center justify-center gap-4">
                        <Phone className="w-6 h-6 text-orange-500" />
                        <a href="tel:414-559-0848" className="text-2xl font-bold text-gray-800 hover:text-orange-500 transition-colors">
                          414-559-0848
                        </a>
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <Mail className="w-6 h-6 text-orange-500" />
                        <a href="mailto:admin@sanskritiusa.org" className="text-xl font-semibold text-gray-800 hover:text-orange-500 transition-colors break-all">
                          admin@sanskritiusa.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Info Section */}
      <AnimatedSection>
        <section id="info" className="py-24 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold mb-8"
                >
                  Sponsorship & Vendor Opportunities
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
                >
                  Sponsorship, advertising and exhibit opportunities available. 
                  Sell cultural items, offer services like henna, jewelry, and more!
                </motion.p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=admin@sanskritiusa.org&su=Sponsorship Inquiry - Incredible India Fest&body=Hello,%0A%0AI am interested in sponsoring the Incredible India Fest. Please provide more information about sponsorship opportunities.%0A%0ABest regards,', '_blank');
                    }}
                    className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg transition-all duration-300 flex items-center gap-3 justify-center"
                  >
                    <Mail className="w-6 h-6" />
                    Contact for Sponsorship
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-white/50 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-3 justify-center"
                  >
                    <Users className="w-6 h-6" />
                    Apply Now
                  </motion.button>
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-3xl p-12 backdrop-blur-sm border border-white/20 shadow-2xl"
              >
                <h3 className="text-3xl font-bold mb-10 text-center">Event Details</h3>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <Calendar className="w-8 h-8 text-orange-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-xl">Date</p>
                      <p className="text-gray-300 text-lg">Saturday, July 12th, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <Clock className="w-8 h-8 text-orange-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-xl">Time</p>
                      <p className="text-gray-300 text-lg">12:00 PM - 7:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <MapPin className="w-8 h-8 text-orange-400 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-xl">Venue</p>
                      <p className="text-gray-300 text-lg">Summerfest Grounds<br />Milwaukee, Wisconsin</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection>
        <section id="about" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
              >
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Sanskriti</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8"
              >
                Sanskriti, a non-profit organization with a mission to preserve, celebrate, and share India's cultural heritage. 
                A non-profit social and cultural organization based in Wisconsin, aims to connect communities by fostering 
                friendship, understanding, and cultural exchange through engaging social and cultural events that celebrate 
                diversity and bring people together.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center justify-center gap-4 text-xl font-bold text-gray-800"
              >
                <LotusIcon className="w-8 h-8 text-pink-500" />
                <span>Come curious, leave inspired</span>
                <Globe className="w-8 h-8 text-orange-500" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl"
            >
              <Sparkles className="w-16 h-16 mx-auto mb-8 opacity-90" />
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                Let's celebrate Incredible India in all of us!
              </h3>
              <p className="text-xl md:text-2xl opacity-95 max-w-4xl mx-auto leading-relaxed">
                The festival will feature live performances, authentic Indian food trucks and stalls, art exhibits, 
                and family-friendly activities, inviting the entire Wisconsin and beyond to experience 
                the colors and flavors of India.
              </p>
              <p className="text-2xl md:text-3xl font-bold mt-8 italic">
                "Where culture meets rhythm and flavors tell stories"
              </p>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-6 mb-8 md:mb-0">
              <img src="https://4536150.fs1.hubspotusercontent-na1.net/hubfs/4536150/Canva%20images/incredible_india_transparent%20(1).png" alt="Incredible India Fest" className="h-20 w-auto" />
              <div>
                <h3 className="font-bold text-2xl">Incredible India Fest</h3>
                <p className="text-gray-400 text-lg">Presented by Sanskriti</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-lg">
                © 2025 Sanskriti, Inc. All rights reserved.
              </p>
              <p className="text-gray-500 mt-2">
                Incredible India Festival - Milwaukee, Wisconsin
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;