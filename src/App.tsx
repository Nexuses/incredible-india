import React, { useEffect, useState } from "react";
import {
  Music,
  Utensils,
  Palette,
  Star,
  ArrowRight,
  Globe,
  Sparkles,
  Crown,
  Gamepad2,
  X,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
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

function FloatingElement({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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
        ease: "easeInOut",
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
      <path d="M12 14C12 14 16 18 20 18C22.21 18 24 16.21 24 14C24 11.79 22.21 10 20 10C16 10 12 14 12 14Z" />
      <path d="M12 14C12 14 18 16 18 20C18 22.21 16.21 24 14 24C11.79 24 10 22.21 10 20C10 16 12 14 12 14Z" />
      <path d="M12 14C12 14 16 18 20 18C22.21 18 24 16.21 24 14C24 11.79 22.21 10 20 10C16 10 12 14 12 14Z" />
      <path d="M12 14C12 14 8 10 4 10C1.79 10 0 11.79 0 14C0 16.21 1.79 18 4 18C8 18 12 14 12 14Z" />
      <circle cx="12" cy="14" r="2" />
    </svg>
  );
}

function QRCodeModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/fa2224b2-8b84-4d3a-8c37-b9328a3a9088.jpg"
                  alt="QR Code for Ticket Purchase"
                  className="w-full h-auto max-w-xs mx-auto rounded-xl shadow-lg mb-4"
                />
                <div className="text-center">
                  <a
                    href="https://www.scan2scan.com/show/incredible-india-festival#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 hover:text-pink-500 font-medium underline transition-colors"
                  >
                    https://www.scan2scan.com/show/incredible-india-festival#/
                  </a>
                </div>
              </motion.div>

              {/* Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center space-y-3"
              >
                <p className="text-gray-700 font-semibold">
                  Early Bird Special: $8 per person
                </p>
                <p className="text-sm text-gray-500">
                  Use your phone's camera to scan the QR code above
                </p>
                <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4 border border-orange-200">
                  <p className="text-sm text-orange-700 font-medium">
                    💡 Tip: Point your camera at the QR code and tap the
                    notification that appears
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

function SupportingPartners() {
  return (
    <AnimatedSection className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">
              Supporting Partners
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Proudly supported by industry leaders who share our vision
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="aspect-[3/2] relative flex items-center justify-center p-4">
                <img
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/image%20(19)-2.png"
                  alt="Partner Logo 1"
                  className="w-full h-full object-contain filter group-hover:brightness-105 transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="aspect-[3/2] relative flex items-center justify-center p-4">
                <img
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/WhatsApp%20Image%202025-06-10%20at%2020.25.07_c354347d.jpg"
                  alt="Partner Logo 2"
                  className="w-full h-full object-contain filter group-hover:brightness-105 transition-all duration-300"
                />
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="aspect-[3/2] relative flex items-center justify-center p-4">
                <img
                  src="/sponsors/big/aapi.png"
                  alt="AAPI"
                  className="w-full h-full object-contain filter group-hover:brightness-105 transition-all duration-300"
                />
              </div>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 mb-8">
              <span className="text-sm font-medium text-gray-600">
                Trusted by Industry Leaders
              </span>
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            </div>
            
            <div className="mt-8">
              <Link to="/sponsors">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
                >
                  View All Sponsors
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function App() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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

      {/* Header */}
      <Header openQRModal={openQRModal} />

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40"
        style={{
          backgroundImage:
            "url('https://4536150.fs1.hubspotusercontent-na1.net/hubfs/4536150/Canva%20images/dl.beatsnoop.com-3000-vE2rhFRz71.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
          className="relative z-20 text-center px-6 md:px-8 max-w-5xl mx-auto"
        >
          {/* Announcement Badge - at the very top, with extra margin for visibility */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 mt-0"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(255, 165, 0, 0.5)",
              }}
              className="inline-block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 p-1 rounded-full shadow-2xl"
            >
              <div className="bg-black/80 backdrop-blur-sm px-6 py-3 rounded-full">
                <span className="text-white font-bold text-base md:text-xl tracking-wide">
                  ✨ <span className="text-xl md:text-2xl">SANSKRITI</span>{" "}
                  <span className="text-sm md:text-lg">PRESENTS</span> ✨
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Incredible India Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 -mt-8"
          >
            <motion.img
              src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/incredible_india_logo-removebg-preview.png"
              alt="Incredible India Festival Logo"
              className="h-[28rem] md:h-[36rem] lg:h-[44rem] w-auto mx-auto drop-shadow-2xl mb-0"
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight drop-shadow-2xl -mt-8"
            style={{
              textShadow:
                "0 2px 16px rgba(0,0,0,0.7), 0 1px 2px rgba(0,0,0,0.5)",
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 165, 0, 0.5)",
                  "0 0 40px rgba(255, 105, 180, 0.5)",
                  "0 0 20px rgba(255, 165, 0, 0.5)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="block"
            >
              INCREDIBLE
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              style={{
                backgroundSize: "200% 200%",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                fontSize: "1.2em",
              }}
            >
              INDIA FESTIVAL
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
            ></motion.p>
            <motion.p
              whileHover={{ scale: 1.02 }}
              className="text-base md:text-xl lg:text-2xl text-orange-200 font-semibold max-w-3xl mx-auto leading-relaxed"
            >
              First time ever at the iconic <br />
              Henry Maier Festival Park, Milwaukee
            </motion.p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-sm md:text-lg text-pink-100 mb-8 max-w-3xl mx-auto leading-relaxed italic font-medium"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
          >
            "Come join us to make history • Where culture meets rhythm and
            flavors tell stories"
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
              href="/real-flyer.png"
              download="real-flyer.png"
              className="group inline-flex items-center gap-3 px-7 py-3 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:scale-105 hover:shadow-pink-400/40 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
            >
              <div className="relative flex items-center">
                <img
                  src="/real-flyer.png"
                  alt="Flyer thumbnail"
                  className="w-10 h-10 rounded-lg shadow-md border-2 border-white/60 bg-white object-cover"
                  style={{ background: "white" }}
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
            className="flex justify-center mt-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 0 30px rgba(255, 165, 0, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(255, 165, 0, 0.3)",
                  "0 0 30px rgba(255, 165, 0, 0.5)",
                  "0 0 20px rgba(255, 165, 0, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              onClick={openQRModal}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-6 px-12 rounded-2xl font-bold text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 mb-4"
            >
              Buy Tickets Now
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
            <span
              className="text-sm font-medium tracking-wide"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
            >
              Scroll to explore
            </span>
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
        <section id="experience" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-6 md:px-8">
            <div className="text-center mb-16 md:mb-24">
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
                A journey through India's culture - experience the music,
                flavors, and traditions that unite us. Celebrating the richness
                of diverse traditions through music, cuisine and cultural
                experiences.
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
                  description="Experience folk & classical dances, live music performances by talented local singers, awesome percussionists, and a stunning fashion showcase celebrating India's diverse cultural heritage."
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
                  description="Discover beautiful jewelry, indian outfits, intricate henna art, cultural exhibits, cricket booth, and family-friendly activities showcasing Indian artistic traditions."
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
                  description="Enjoy traditional Indian games and fun activities for all ages. From interactive cultural experiences that bring families together to water-balloon fights for kids and Indian games for seniors as well."
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
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/incredible_india_logo-removebg-preview.png"
                alt="Incredible India Festival Logo"
                className="h-40 md:h-56 lg:h-72 w-auto mx-auto drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Tickets Section */}
      <section id="tickets" className="py-20 md:py-32 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Get Your Tickets
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Secure your spot at the Incredible India Festival. Early bird tickets available now!
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Early Bird Special</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700">$8 per person</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700">Access to all performances</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700">Food and merchandise available for purchase</span>
                    </li>
                  </ul>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(255, 165, 0, 0.3)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={openQRModal}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Buy Tickets Now
                  </motion.button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <img
                    src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/fa2224b2-8b84-4d3a-8c37-b9328a3a9088.jpg"
                    alt="QR Code for Ticket Purchase"
                    className="w-48 h-48 object-contain rounded-xl shadow-lg cursor-pointer"
                    onClick={openQRModal}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Event Information
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Everything you need to know about the Incredible India Festival
            </motion.p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Location & Time</h3>
              <p className="text-gray-700 mb-4">
                <strong>Date:</strong> July 12, 2025<br />
                <strong>Time:</strong> 12:00 PM - 7:00 PM<br />
                <strong>Venue:</strong> Henry Maier Festival Park, Milwaukee
              </p>
              <div className="rounded-xl overflow-hidden h-48 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.6554863691597!2d-87.89990252392953!3d43.02904777112881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8805173a9b9e0241%3A0xb5c667de2f729dd8!2sHenry%20Maier%20Festival%20Park!5e0!3m2!1sen!2sus!4v1686677321029!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex-shrink-0 mt-1"></span>
                  <span className="text-gray-700">Live music and dance performances throughout the day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex-shrink-0 mt-1"></span>
                  <span className="text-gray-700">Authentic Indian cuisine from various regions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex-shrink-0 mt-1"></span>
                  <span className="text-gray-700">Cultural exhibits and art installations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex-shrink-0 mt-1"></span>
                  <span className="text-gray-700">Fashion show featuring traditional and modern Indian attire</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-5 h-5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex-shrink-0 mt-1"></span>
                  <span className="text-gray-700">Family-friendly activities and games</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Sanskriti Section */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="container mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              About Sanskriti
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Promoting Indian culture and heritage in our community
            </motion.p>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img
                    src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/WhatsApp%20Image%202025-06-10%20at%2020.25.07_c354347d.jpg"
                    alt="Sanskriti Logo"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Sanskriti is a non-profit organization dedicated to promoting and preserving Indian culture, 
                    traditions, and heritage in the Milwaukee area. Through events, educational programs, and 
                    community initiatives, we aim to create awareness and appreciation for the rich cultural 
                    diversity of India.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The Incredible India Festival is our flagship annual event that brings together the community 
                    to celebrate Indian arts, music, dance, cuisine, and traditions. We invite everyone to join us 
                    in this cultural celebration and experience the vibrant spirit of India.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add SupportingPartners before the footer */}
      <SupportingPartners />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
